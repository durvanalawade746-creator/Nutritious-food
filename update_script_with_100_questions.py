import json
import re

with open("questions_db.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

json_questions_str = json.dumps(questions, indent=4)

with open("script.js", "r", encoding="utf-8") as f:
    script_content = f.read()

# Replace QUIZ_QUESTIONS array in script.js
pattern = r"const QUIZ_QUESTIONS = \[[\s\S]*?\];"
replacement = f"const QUIZ_QUESTIONS = {json_questions_str};"

updated_script = re.sub(pattern, replacement, script_content)

# Add weekly cycle logic in quiz section
weekly_logic = """
  /* ==========================================================================
     10. NUTRITION QUIZ MODULE 🧠 (100 Questions + 7-Day Weekly Cycle Rotation)
     ========================================================================== */
  const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

  function getWeeklyQuizState() {
    let cycleStart = parseInt(localStorage.getItem('hfh_quiz_cycle_start'));
    const now = Date.now();

    if (!cycleStart || (now - cycleStart) >= ONE_WEEK_MS) {
      cycleStart = now;
      localStorage.setItem('hfh_quiz_cycle_start', cycleStart);
      localStorage.setItem('hfh_quiz_round_index', '0');
    }

    const elapsedMs = now - cycleStart;
    const daysRemaining = Math.ceil((ONE_WEEK_MS - elapsedMs) / (1000 * 60 * 60 * 24));
    return { cycleStart, daysRemaining };
  }

  let currentQIndex = 0;
  let quizScore = 0;
  let answerSelected = false;
  let activeQuestionsRound = [];

  function prepareActiveQuizSet() {
    const { daysRemaining } = getWeeklyQuizState();
    let roundIdx = parseInt(localStorage.getItem('hfh_quiz_round_index')) || 0;
    
    // Pick 15 questions per set from the 100 questions pool
    const startIndex = (roundIdx * 15) % QUIZ_QUESTIONS.length;
    activeQuestionsRound = QUIZ_QUESTIONS.slice(startIndex, startIndex + 15);
    
    if (activeQuestionsRound.length < 15) {
      activeQuestionsRound = activeQuestionsRound.concat(QUIZ_QUESTIONS.slice(0, 15 - activeQuestionsRound.length));
    }
  }
"""

# Replace quiz module start with weekly logic
quiz_module_start_pattern = r"/\* =+\s*10\. NUTRITION QUIZ MODULE[\s\S]*?const QUIZ_QUESTIONS = "
updated_script = re.sub(quiz_module_start_pattern, f"/* ==========================================================================\n     10. NUTRITION QUIZ MODULE 🧠 (100 Questions + 7-Day Weekly Cycle Rotation)\n     ========================================================================== */\n  const QUIZ_QUESTIONS = ", updated_script)

with open("script.js", "w", encoding="utf-8") as f:
    f.write(updated_script)

print("Successfully replaced QUIZ_QUESTIONS in script.js!")
