/* ==========================================================================
   HEALTHY FOOD HABITS - MAIN JAVASCRIPT
   Engineering Community Engagement Project (CEP)
   Vanilla JS • LocalStorage Persistence • 100 Questions & 7-Day Cycle
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. RECIPE DATABASE (20+ Nutritious Indian Recipes)
     ========================================================================== */
  const RECIPE_DB = [
    {
      id: 'poha',
      title: 'Vegetable Poha',
      category: 'Breakfast',
      prepTime: '20 min',
      calories: '220 kcal',
      image: 'images/poha.jpg',
      shortDesc: 'Flattened rice tossed with roasted peanuts, curry leaves, green peas, and turmeric.',
      ingredients: [
        '1.5 cups Flattened Rice (Poha)',
        '1 small Onion (finely chopped)',
        '1/4 cup Green Peas',
        '2 tbsp Peanuts (roasted)',
        '1/2 tsp Mustard seeds & Turmeric',
        'Curry leaves, Green chillies, Lemon juice'
      ],
      steps: [
        'Rinse poha gently in a sieve and drain completely.',
        'Heat 1 tsp oil in a pan, temper mustard seeds, curry leaves, and green chillies.',
        'Add peanuts, onions, and green peas; saute until tender.',
        'Add turmeric, salt, and drained poha. Mix gently on low flame for 3 minutes.',
        'Finish with fresh lemon juice and coriander leaves.'
      ],
      nutrition: { protein: '5g', carbs: '42g', fat: '4g', fiber: '4g' }
    },
    {
      id: 'upma',
      title: 'Vegetable Upma',
      category: 'Breakfast',
      prepTime: '15 min',
      calories: '200 kcal',
      image: 'upma.jpg',
      shortDesc: 'Roasted semolina cooked with colorful diced veggies, ginger, and mustard seeds.',
      ingredients: [
        '1 cup Semolina (Rava)',
        '1 small Carrot & 1/4 cup Beans (diced)',
        '1/2 tsp Mustard seeds & Urad dal',
        '1 green chilli & ginger (chopped)',
        '2.5 cups Water & Salt'
      ],
      steps: [
        'Dry roast semolina on medium heat until fragrant, set aside.',
        'Temper mustard seeds, urad dal, curry leaves, chillies, and ginger in a pot.',
        'Saute carrots and green beans until soft.',
        'Pour water, add salt, and bring to a rolling boil.',
        'Slowly add roasted semolina while stirring constantly to prevent lumps. Cover and cook 3 mins.'
      ],
      nutrition: { protein: '6g', carbs: '38g', fat: '3g', fiber: '5g' }
    },
    {
      id: 'moong-dal-chilla',
      title: 'Moong Dal Chilla',
      category: 'Breakfast',
      prepTime: '25 min',
      calories: '180 kcal',
      image: 'moong-dal-chilla.jpg',
      shortDesc: 'Savory protein-packed green gram crepes stuffed with grated paneer and herbs.',
      ingredients: [
        '1 cup Split Yellow Moong Dal (soaked)',
        '1/4 cup Grated Paneer',
        '1 green chilli & ginger piece',
        'Pinch of Hing & Cumin seeds',
        'Salt, coriander leaves'
      ],
      steps: [
        'Blend soaked moong dal with green chilli, ginger, and little water into a smooth batter.',
        'Add cumin, hing, salt, and finely chopped coriander to batter.',
        'Pour a ladle of batter onto a hot tawa and spread in circles like a dosa.',
        'Cook both sides with minimal oil until golden.',
        'Optionally top with grated paneer before folding.'
      ],
      nutrition: { protein: '12g', carbs: '26g', fat: '4g', fiber: '6g' }
    },
    {
      id: 'ragi-dosa',
      title: 'Ragi Dosa',
      category: 'Breakfast',
      prepTime: '20 min',
      calories: '170 kcal',
      image: 'ragi-dosa.jpg',
      shortDesc: 'Calcium and iron rich finger millet crepes served with coconut chutney.',
      ingredients: [
        '1 cup Ragi (Finger Millet) Flour',
        '1/4 cup Rice flour & Curd',
        '1 onion (chopped) & green chillies',
        'Cumin seeds & curry leaves',
        'Water for batter'
      ],
      steps: [
        'Whisk ragi flour, rice flour, curd, water, and salt into a thin batter.',
        'Fold in onions, chillies, cumin seeds, and curry leaves.',
        'Pour batter from height onto a blazing hot skillet to form crispy lacey holes.',
        'Drizzle oil along edges and cook until crisp. Serve hot.'
      ],
      nutrition: { protein: '5g', carbs: '32g', fat: '2g', fiber: '7g' }
    },
    {
      id: 'oats-idli',
      title: 'Oats Idli',
      category: 'Breakfast',
      prepTime: '20 min',
      calories: '160 kcal',
      image: 'oats-idli.jpg',
      shortDesc: 'Steamed fluffy oatcakes enriched with grated carrots and mustard seasoning.',
      ingredients: [
        '1 cup Rolled Oats (ground)',
        '1/2 cup Semolina (Rava)',
        '1/2 cup Curd (Yogurt)',
        'Grated Carrots & Peas',
        'Mustard seeds & fruit salt/Eno'
      ],
      steps: [
        'Dry roast oats powder and semolina in a pan.',
        'Mix with curd, water, tempered mustard seeds, and carrots to form thick batter.',
        'Add a pinch of fruit salt just before steaming.',
        'Pour into oiled idli molds and steam for 10-12 minutes.'
      ],
      nutrition: { protein: '7g', carbs: '28g', fat: '3g', fiber: '5g' }
    },
    {
      id: 'uttapam',
      title: 'Vegetable Uttapam',
      category: 'Breakfast',
      prepTime: '15 min',
      calories: '210 kcal',
      image: 'uttapam.jpg',
      shortDesc: 'Thick fermented rice pancake topped with fresh tomatoes, onions, and capsicum.',
      ingredients: [
        '2 cups Dosa batter',
        '1/2 cup Chopped Onions & Tomatoes',
        '1/4 cup Chopped Capsicum',
        'Green chillies & coriander',
        '1 tsp Oil'
      ],
      steps: [
        'Pour thick ladle of dosa batter onto hot skillet without spreading too thin.',
        'Generously sprinkle onions, tomatoes, capsicum, and chillies on top.',
        'Press veggies gently with spatula.',
        'Flip over and cook both sides until golden brown.'
      ],
      nutrition: { protein: '6g', carbs: '36g', fat: '4g', fiber: '4g' }
    },
    {
      id: 'idli-sambar',
      title: 'Idli + Sambar',
      category: 'Breakfast',
      prepTime: '25 min',
      calories: '230 kcal',
      image: 'idli-sambar.jpg',
      shortDesc: 'Traditional steamed rice cakes served with fiber-rich vegetable lentil stew.',
      ingredients: [
        '4 Steamed Idlis',
        '1 cup Toor Dal cooked with veggies (Drumstick, Pumpkin, Carrots)',
        '1 tbsp Sambar Powder & Tamarind pulse',
        'Mustard seeds & curry leaves'
      ],
      steps: [
        'Boil toor dal with mixed vegetables until soft.',
        'Add sambar powder, tamarind extract, and salt; simmer for 8 minutes.',
        'Temper mustard seeds, hing, and curry leaves in ghee and pour into sambar.',
        'Serve boiling hot over warm fluffy idlis.'
      ],
      nutrition: { protein: '9g', carbs: '44g', fat: '2g', fiber: '6g' }
    },
    {
      id: 'besan-chilla',
      title: 'Besan Chilla',
      category: 'Breakfast',
      prepTime: '15 min',
      calories: '190 kcal',
      image: 'besan-chilla.jpg',
      shortDesc: 'Quick spiced gram flour pancake packed with ajwain, onions, and herbs.',
      ingredients: [
        '1 cup Besan (Gram flour)',
        '1/2 tsp Ajwain (Carom seeds)',
        '1 small Onion & Tomato (chopped)',
        'Turmeric, Chilli powder, Salt'
      ],
      steps: [
        'Mix besan, ajwain, turmeric, salt, and water to make medium batter.',
        'Stir in onions, tomatoes, and coriander.',
        'Spread on hot pan and cook with minimal oil until crisp on both sides.'
      ],
      nutrition: { protein: '10g', carbs: '28g', fat: '4g', fiber: '5g' }
    },
    {
      id: 'veg-dalia',
      title: 'Vegetable Dalia',
      category: 'Breakfast',
      prepTime: '20 min',
      calories: '180 kcal',
      image: 'veg-dalia.jpg',
      shortDesc: 'Wholesome broken wheat porridge pressure-cooked with seasonal vegetables.',
      ingredients: [
        '1 cup Broken Wheat (Dalia)',
        'Mixed Veggies (Peas, Carrots, Beans)',
        'Cumin seeds, ginger, ghee',
        '3 cups Water'
      ],
      steps: [
        'Roast dalia in 1 tsp ghee until aromatic.',
        'Sauté cumin, ginger, and veggies in pressure cooker.',
        'Add roasted dalia, water, and salt. Pressure cook for 3 whistles.'
      ],
      nutrition: { protein: '7g', carbs: '35g', fat: '2g', fiber: '8g' }
    },
    {
      id: 'dal-rice',
      title: 'Dal Rice',
      category: 'Lunch',
      prepTime: '30 min',
      calories: '340 kcal',
      image: 'dal-rice.jpg',
      shortDesc: 'Classic comfort thali meal of yellow lentils with aromatic cumin steamed rice.',
      ingredients: [
        '1 cup Yellow Arhar Dal',
        '1 cup Steamed Brown or White Rice',
        'Cumin, garlic, tomatoes, ghee',
        'Salad greens'
      ],
      steps: [
        'Pressure cook dal with turmeric and salt.',
        'Temper cumin seeds, garlic, and tomatoes in ghee.',
        'Pour tempering over dal and serve alongside warm steamed rice and fresh cucumber salad.'
      ],
      nutrition: { protein: '14g', carbs: '58g', fat: '5g', fiber: '7g' }
    },
    {
      id: 'rajma-rice',
      title: 'Rajma Rice',
      category: 'Lunch',
      prepTime: '40 min',
      calories: '380 kcal',
      image: 'rajma-rice.jpg',
      shortDesc: 'Protein-loaded red kidney bean curry slow-simmered in tomato onion gravy with rice.',
      ingredients: [
        '1 cup Red Rajma (soaked overnight)',
        '2 Tomatoes & 1 Onion (pureed)',
        'Garam masala, Ginger-garlic paste',
        'Steamed Rice'
      ],
      steps: [
        'Pressure cook rajma until tender soft.',
        'Saute onion tomato gravy with spices until oil separates.',
        'Add cooked rajma along with its broth and simmer 15 mins till gravy thickens.'
      ],
      nutrition: { protein: '16g', carbs: '64g', fat: '6g', fiber: '10g' }
    },
    {
      id: 'palak-paneer',
      title: 'Palak Paneer + Roti',
      category: 'Lunch',
      prepTime: '30 min',
      calories: '360 kcal',
      image: 'palak-paneer.jpg',
      shortDesc: 'Fresh spinach puree infused with cottage cheese cubes served with multigrain roti.',
      ingredients: [
        '2 bunches Fresh Spinach (blanched)',
        '150g Low-fat Paneer cubes',
        'Garlic, ginger, green chillies',
        '2 Whole Wheat Rotis'
      ],
      steps: [
        'Puree blanched spinach with green chillies.',
        'Saute minced garlic and ginger in 1 tsp oil, add spinach puree.',
        'Simmer with spices and toss paneer cubes gently. Serve with rotis.'
      ],
      nutrition: { protein: '18g', carbs: '38g', fat: '12g', fiber: '8g' }
    },
    {
      id: 'veg-pulao',
      title: 'Vegetable Pulao',
      category: 'Lunch',
      prepTime: '25 min',
      calories: '310 kcal',
      image: 'veg-pulao.jpg',
      shortDesc: 'Fragrant basmati rice cooked with whole spices, carrots, beans, and green peas.',
      ingredients: [
        '1 cup Basmati Rice',
        'Mixed Vegetables (Carrot, Peas, Beans)',
        'Bay leaf, cloves, cinnamon, cardamom',
        'Mint & coriander'
      ],
      steps: [
        'Sauté whole spices in 1 tsp ghee until aromatic.',
        'Add sliced onions and mixed veggies; sauté for 3 mins.',
        'Add soaked rice, water, and cook until fluffy.'
      ],
      nutrition: { protein: '8g', carbs: '54g', fat: '4g', fiber: '6g' }
    },
    {
      id: 'dal-tadka',
      title: 'Dal Tadka + Rice',
      category: 'Lunch',
      prepTime: '25 min',
      calories: '330 kcal',
      image: 'dal-tadka.jpg',
      shortDesc: 'Creamy cooked lentils finished with a smoking garlic cumin tempering.',
      ingredients: [
        '1 cup Toor & Moong Dal mix',
        'Garlic cloves, cumin, dry red chilli',
        'Desi Ghee',
        'Steamed Rice'
      ],
      steps: [
        'Cook dal with turmeric till smooth.',
        'Prepare tadka with ghee, garlic, cumin, and Kashmiri chilli powder.',
        'Pour crackling tadka over cooked dal.'
      ],
      nutrition: { protein: '13g', carbs: '56g', fat: '5g', fiber: '6g' }
    },
    {
      id: 'millet-khichdi',
      title: 'Millet Khichdi',
      category: 'Lunch',
      prepTime: '25 min',
      calories: '290 kcal',
      image: 'millet-khichdi.jpg',
      shortDesc: 'Foxtail millet and moong dal simmered with vegetables and digestive spices.',
      ingredients: [
        '1/2 cup Foxtail Millet',
        '1/2 cup Yellow Moong Dal',
        'Vegetables & Cumin, Turmeric',
        '1 tsp Ghee'
      ],
      steps: [
        'Wash millet and dal together.',
        'Sauté veggies and spices in ghee inside pressure cooker.',
        'Cook for 4 whistles with 4 cups water. Serve warm with fresh curd.'
      ],
      nutrition: { protein: '12g', carbs: '48g', fat: '4g', fiber: '9g' }
    },
    {
      id: 'chole-roti',
      title: 'Chole + Roti',
      category: 'Lunch',
      prepTime: '35 min',
      calories: '370 kcal',
      image: 'chole-roti.jpg',
      shortDesc: 'Spiced chickpeas curry cooked in tea-infused onion tomato gravy with roti.',
      ingredients: [
        '1 cup White Chickpeas (Kabuli Chana soaked)',
        'Onion, tomato, tea bag for color',
        'Chole masala spice blend',
        '2 Whole Wheat Rotis'
      ],
      steps: [
        'Boil chickpeas with tea bag and salt until soft.',
        'Prepare spicy tomato onion gravy.',
        'Simmer chickpeas in gravy for 15 mins. Serve hot with rotis.'
      ],
      nutrition: { protein: '15g', carbs: '56g', fat: '6g', fiber: '11g' }
    },
    {
      id: 'fruit-chaat',
      title: 'Fruit Chaat',
      category: 'Snacks',
      prepTime: '10 min',
      calories: '120 kcal',
      image: 'fruit-chaat.jpg',
      shortDesc: 'Assorted seasonal fruits tossed with chaat masala, mint, and lemon juice.',
      ingredients: [
        '1 Apple & 1 Banana (cubed)',
        '1/2 cup Pomegranate seeds & Papaya',
        '1/2 tsp Chaat Masala & Roasted Cumin',
        'Lemon juice'
      ],
      steps: [
        'Combine all freshly chopped fruits in a large bowl.',
        'Sprinkle chaat masala, cumin powder, and lemon juice.',
        'Toss gently and serve immediately.'
      ],
      nutrition: { protein: '2g', carbs: '28g', fat: '0.5g', fiber: '5g' }
    },
    {
      id: 'roasted-makhana',
      title: 'Roasted Makhana',
      category: 'Snacks',
      prepTime: '10 min',
      calories: '140 kcal',
      image: 'roasted-makhana.jpg',
      shortDesc: 'Crispy lotus seeds lightly roasted in 1/2 tsp ghee with black salt and pepper.',
      ingredients: [
        '2 cups Lotus Seeds (Makhana)',
        '1/2 tsp Ghee',
        'Black salt, black pepper, mint powder'
      ],
      steps: [
        'Heat ghee in a heavy bottom pan on low flame.',
        'Add makhana and roast for 8-10 mins until crunchy.',
        'Sprinkle black salt and pepper; store in airtight jar.'
      ],
      nutrition: { protein: '4g', carbs: '22g', fat: '2g', fiber: '3g' }
    },
    {
      id: 'sprouts-chaat',
      title: 'Sprouts Chaat',
      category: 'Snacks',
      prepTime: '10 min',
      calories: '150 kcal',
      image: 'sprouts-chaat.jpg',
      shortDesc: 'Steamed sprouted mung beans tossed with onions, cucumber, and pomegranate.',
      ingredients: [
        '1.5 cups Sprouted Moong',
        '1/4 cup Cucumber & Tomato (chopped)',
        'Lemon juice, coriander, chaat masala'
      ],
      steps: [
        'Steam sprouts lightly for 3 minutes.',
        'Toss with chopped cucumber, tomato, onion, and spices.'
      ],
      nutrition: { protein: '9g', carbs: '24g', fat: '1g', fiber: '7g' }
    },
    {
      id: 'roasted-chickpeas',
      title: 'Roasted Chickpeas',
      category: 'Snacks',
      prepTime: '20 min',
      calories: '160 kcal',
      image: 'roasted-chickpeas.jpg',
      shortDesc: 'Crunchy oven or pan-roasted chickpeas spiced with red chilli and cumin.',
      ingredients: [
        '1 cup Boiled Chickpeas (dried)',
        '1/2 tsp Olive oil',
        'Chilli powder, cumin, salt'
      ],
      steps: [
        'Pat boiled chickpeas completely dry with towel.',
        'Toss with oil and spices.',
        'Roast in pan or oven until crispy brown.'
      ],
      nutrition: { protein: '8g', carbs: '26g', fat: '3g', fiber: '6g' }
    },
    {
      id: 'dal-khichdi',
      title: 'Dal Khichdi',
      category: 'Dinner',
      prepTime: '25 min',
      calories: '280 kcal',
      image: 'dal-khichdi.jpg',
      shortDesc: 'Gentle, gut-friendly moong dal and rice porridge tempered with ghee and cumin.',
      ingredients: [
        '1/2 cup Rice & 1/2 cup Yellow Moong Dal',
        'Turmeric, cumin, hing, ghee',
        '4 cups Water'
      ],
      steps: [
        'Wash dal and rice together.',
        'Pressure cook with turmeric, salt, and water for 4 whistles.',
        'Finish with a hot ghee cumin tempering.'
      ],
      nutrition: { protein: '11g', carbs: '46g', fat: '4g', fiber: '5g' }
    },
    {
      id: 'veg-daliya-dinner',
      title: 'Vegetable Daliya',
      category: 'Dinner',
      prepTime: '20 min',
      calories: '210 kcal',
      image: 'veg-dalia.jpg',
      shortDesc: 'Light savory broken wheat soup stewed with green vegetables for easy night digestion.',
      ingredients: [
        '1 cup Broken Wheat',
        'Carrots, peas, beans, spinach',
        'Cumin, ginger'
      ],
      steps: [
        'Roast broken wheat and cook with veggies in pressure cooker for a light wholesome dinner.'
      ],
      nutrition: { protein: '8g', carbs: '38g', fat: '2g', fiber: '7g' }
    },
    {
      id: 'paneer-bhurji',
      title: 'Paneer Bhurji + Roti',
      category: 'Dinner',
      prepTime: '20 min',
      calories: '340 kcal',
      image: 'paneer-bhurji.jpg',
      shortDesc: 'Scrambled paneer sautéed with onions, capsicum, tomatoes, and Indian spices.',
      ingredients: [
        '150g Crumbled Paneer',
        '1 Onion & 1 Tomato & Capsicum',
        '2 Whole Wheat Rotis'
      ],
      steps: [
        'Sauté onions, tomatoes, and capsicum.',
        'Add spices and scrambled paneer; toss for 3 minutes. Serve with rotis.'
      ],
      nutrition: { protein: '17g', carbs: '30g', fat: '14g', fiber: '5g' }
    },
    {
      id: 'veg-soup',
      title: 'Vegetable Soup + Roti',
      category: 'Dinner',
      prepTime: '20 min',
      calories: '220 kcal',
      image: 'veg-soup.jpg',
      shortDesc: 'Warm clear vegetable soup loaded with broccoli, carrots, and sweetcorn with 1 roti.',
      ingredients: [
        'Assorted Vegetables (Carrot, Corn, Broccoli, Beans)',
        'Black pepper, garlic, ginger',
        '1 Whole Wheat Roti'
      ],
      steps: [
        'Sauté minced garlic and ginger.',
        'Add veggies and water; simmer for 12 mins. Season with crushed black pepper.'
      ],
      nutrition: { protein: '6g', carbs: '32g', fat: '2g', fiber: '6g' }
    },
    {
      id: 'multigrain-roti',
      title: 'Multigrain Roti + Sabzi',
      category: 'Dinner',
      prepTime: '25 min',
      calories: '310 kcal',
      image: 'multigrain-roti.jpg',
      shortDesc: 'High-fiber multigrain flatbreads served with mixed vegetable dry sabzi.',
      ingredients: [
        '2 Multigrain Rotis (Wheat, Oats, Ragi, Chana mix)',
        '1 cup Mixed Veggie Sabzi (Gobi, Peas, Potatoes)'
      ],
      steps: [
        'Prepare sabzi with minimal oil and spices.',
        'Serve hot alongside freshly puffed multigrain rotis.'
      ],
      nutrition: { protein: '10g', carbs: '48g', fat: '5g', fiber: '9g' }
    }
  ];

  /* ==========================================================================
     2. LOCAL STORAGE KEYS
     ========================================================================== */
  const KEYS = {
    USER_NAME: 'hfh_user_name',
    LOGGED_IN: 'hfh_logged_in',
    THEME: 'hfh_theme',
    WATER_TARGET: 'hfh_water_target',
    WATER_PROGRESS: 'hfh_water_progress',
    MEAL_PLAN: 'hfh_custom_meal_plan',
    FAVORITES: 'hfh_favorites',
    CHALLENGES: 'hfh_challenge_progress',
    CHECKLIST: 'hfh_healthy_day_checklist',
    QUIZ_CYCLE_START: 'hfh_quiz_cycle_start',
    QUIZ_SET_INDEX: 'hfh_quiz_set_index'
  };

  /* ==========================================================================
     3. HEALTHY DAY SCORE HELPER FUNCTIONS
     ========================================================================== */
  function getChecklistState() {
    return JSON.parse(localStorage.getItem(KEYS.CHECKLIST)) || [false, false, false, false, false, false];
  }

  function calculateScore() {
    const checklistState = getChecklistState();
    const scorePercentText = document.getElementById('score-percent-text');
    const scoreRingProgress = document.getElementById('score-ring-progress');
    const scoreStatusMsg = document.getElementById('score-status-msg');

    if (!scorePercentText || !scoreRingProgress || !scoreStatusMsg) return;

    const total = checklistState.length;
    const completed = checklistState.filter(Boolean).length;
    const percent = Math.round((completed / total) * 100);

    scorePercentText.textContent = `${percent}%`;

    const circumference = 502;
    const offset = circumference - (percent / 100) * circumference;
    scoreRingProgress.style.strokeDashoffset = offset;

    if (percent === 100) {
      scoreStatusMsg.textContent = 'Healthy Day Score: 100%! 🎉 Perfect Wellness!';
    } else if (percent >= 80) {
      scoreStatusMsg.textContent = `Healthy Day Score: ${percent}%! 🌟 Outstanding!`;
    } else if (percent >= 50) {
      scoreStatusMsg.textContent = `Healthy Day Score: ${percent}%! 👏 Great momentum!`;
    } else if (percent > 0) {
      scoreStatusMsg.textContent = `Healthy Day Score: ${percent}%! 💪 Keep building habits!`;
    } else {
      scoreStatusMsg.textContent = 'Start logging your daily habits! 🌱';
    }
  }

  function saveDailyChecklistState() {
    const dailyChecklistContainer = document.getElementById('daily-checklist-container');
    if (!dailyChecklistContainer) return;
    const checkboxes = dailyChecklistContainer.querySelectorAll('input[type="checkbox"]');
    const newState = [];

    checkboxes.forEach((chk) => {
      newState.push(chk.checked);
      const parentLabel = chk.closest('.checklist-item');
      if (parentLabel) {
        if (chk.checked) parentLabel.classList.add('checked');
        else parentLabel.classList.remove('checked');
      }
    });

    localStorage.setItem(KEYS.CHECKLIST, JSON.stringify(newState));
    calculateScore();
  }

  function updateChecklistItemIfTargetMet(met) {
    const dailyChecklistContainer = document.getElementById('daily-checklist-container');
    if (!dailyChecklistContainer) return;
    const checklistItems = dailyChecklistContainer.querySelectorAll('.checklist-item input');
    if (checklistItems[0]) {
      checklistItems[0].checked = met;
      saveDailyChecklistState();
    }
  }

  /* ==========================================================================
     4. AUTHENTICATION & SESSION MANAGEMENT
     ========================================================================== */
  const authOverlay = document.getElementById('auth-overlay');
  const authForm = document.getElementById('auth-form');
  const guestBtn = document.getElementById('guest-login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const userAvatar = document.getElementById('user-avatar');
  const userDisplayName = document.getElementById('user-display-name');
  const dropdownName = document.getElementById('dropdown-name');
  const profileBtn = document.getElementById('profile-btn');
  const profileDropdown = document.getElementById('profile-dropdown');

  function initAuth() {
    const isLoggedIn = localStorage.getItem(KEYS.LOGGED_IN) === 'true';
    const savedName = localStorage.getItem(KEYS.USER_NAME) || 'Guest';

    if (isLoggedIn || savedName !== 'Guest') {
      updateUserUI(savedName);
      if (authOverlay) authOverlay.classList.add('hidden');
    } else {
      if (authOverlay) authOverlay.classList.remove('hidden');
    }
  }

  function updateUserUI(name) {
    if (userDisplayName) userDisplayName.textContent = name;
    if (dropdownName) dropdownName.textContent = `Welcome, ${name}! 👋`;
    if (userAvatar) userAvatar.textContent = name.charAt(0).toUpperCase();
  }

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('user-name-input').value.trim();
      const rememberMe = document.getElementById('remember-me-checkbox').checked;

      if (nameInput) {
        localStorage.setItem(KEYS.USER_NAME, nameInput);
        if (rememberMe) {
          localStorage.setItem(KEYS.LOGGED_IN, 'true');
        }
        updateUserUI(nameInput);
        authOverlay.classList.add('hidden');
      }
    });
  }

  if (guestBtn) {
    guestBtn.addEventListener('click', () => {
      localStorage.setItem(KEYS.USER_NAME, 'Guest');
      localStorage.removeItem(KEYS.LOGGED_IN);
      updateUserUI('Guest');
      authOverlay.classList.add('hidden');
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem(KEYS.LOGGED_IN);
      localStorage.removeItem(KEYS.USER_NAME);
      authOverlay.classList.remove('hidden');
      profileDropdown.classList.remove('show');
    });
  }

  if (profileBtn) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('show');
    });
  }

  document.addEventListener('click', (e) => {
    if (profileBtn && !profileBtn.contains(e.target) && profileDropdown) {
      profileDropdown.classList.remove('show');
    }
  });

  /* ==========================================================================
     5. DARK MODE & NAVIGATION
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  function initTheme() {
    const savedTheme = localStorage.getItem(KEYS.THEME) || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.textContent = '☀️';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '🌙';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem(KEYS.THEME, 'light');
        if (themeIcon) themeIcon.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem(KEYS.THEME, 'dark');
        if (themeIcon) themeIcon.textContent = '☀️';
      }
    });
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (navMenu) navMenu.classList.toggle('show');
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('show');
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  /* ==========================================================================
     6. WATER REMINDER MODULE 💧
     ========================================================================== */
  const waterTargetSelect = document.getElementById('water-target-select');
  const waterGlassesContainer = document.getElementById('water-glasses-container');
  const waterCountText = document.getElementById('water-count-text');
  const waterPercentText = document.getElementById('water-percent-text');
  const waterProgressFill = document.getElementById('water-progress-fill');
  const waterMotivationMsg = document.getElementById('water-motivation-msg');
  const resetWaterBtn = document.getElementById('reset-water-btn');

  let waterTarget = parseInt(localStorage.getItem(KEYS.WATER_TARGET)) || 8;
  let waterProgress = JSON.parse(localStorage.getItem(KEYS.WATER_PROGRESS)) || Array(waterTarget).fill(false);

  function renderWaterTracker() {
    if (!waterGlassesContainer) return;
    if (waterTargetSelect) waterTargetSelect.value = waterTarget;
    waterGlassesContainer.innerHTML = '';

    if (waterProgress.length !== waterTarget) {
      waterProgress = Array(waterTarget).fill(false);
    }

    let completedCount = 0;

    for (let i = 0; i < waterTarget; i++) {
      const isDone = waterProgress[i] || false;
      if (isDone) completedCount++;

      const glass = document.createElement('div');
      glass.className = `water-glass ${isDone ? 'completed' : ''}`;
      glass.innerHTML = `
        <div class="glass-water"></div>
        <span class="glass-number">${i + 1}</span>
      `;

      glass.addEventListener('click', () => {
        waterProgress[i] = !waterProgress[i];
        localStorage.setItem(KEYS.WATER_PROGRESS, JSON.stringify(waterProgress));
        renderWaterTracker();
      });

      waterGlassesContainer.appendChild(glass);
    }

    const percent = Math.round((completedCount / waterTarget) * 100);
    if (waterCountText) waterCountText.textContent = `${completedCount} / ${waterTarget} glasses completed`;
    if (waterPercentText) waterPercentText.textContent = `${percent}%`;
    if (waterProgressFill) waterProgressFill.style.width = `${percent}%`;

    if (waterMotivationMsg) {
      if (completedCount === waterTarget) {
        waterMotivationMsg.textContent = 'Hydration goal completed! 🎉 Amazing job keeping your body refreshed!';
      } else if (completedCount > 0) {
        waterMotivationMsg.textContent = `Great progress! ${waterTarget - completedCount} more glasses to hit today's target. 💧`;
      } else {
        waterMotivationMsg.textContent = 'Click on a glass whenever you drink water to log your progress! 💧';
      }
    }

    updateChecklistItemIfTargetMet(completedCount === waterTarget);
  }

  if (waterTargetSelect) {
    waterTargetSelect.addEventListener('change', (e) => {
      waterTarget = parseInt(e.target.value);
      waterProgress = Array(waterTarget).fill(false);
      localStorage.setItem(KEYS.WATER_TARGET, waterTarget);
      localStorage.setItem(KEYS.WATER_PROGRESS, JSON.stringify(waterProgress));
      renderWaterTracker();
    });
  }

  if (resetWaterBtn) {
    resetWaterBtn.addEventListener('click', () => {
      waterProgress = Array(waterTarget).fill(false);
      localStorage.setItem(KEYS.WATER_PROGRESS, JSON.stringify(waterProgress));
      renderWaterTracker();
    });
  }

  /* ==========================================================================
     7. WEEKLY MEAL PLANNER & RECIPE CONNECT 🍱
     ========================================================================== */
  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const MEAL_OPTIONS = {
    Breakfast: ['Vegetable Poha', 'Vegetable Upma', 'Moong Dal Chilla', 'Ragi Dosa', 'Oats Idli', 'Vegetable Uttapam', 'Idli + Sambar', 'Besan Chilla', 'Vegetable Dalia'],
    Lunch: ['Dal Rice', 'Rajma Rice', 'Palak Paneer + Roti', 'Vegetable Pulao', 'Dal Tadka + Rice', 'Millet Khichdi', 'Chole + Roti'],
    Snack: ['Fruit Chaat', 'Roasted Makhana', 'Sprouts Chaat', 'Roasted Chickpeas'],
    Dinner: ['Dal Khichdi', 'Vegetable Daliya', 'Paneer Bhurji + Roti', 'Vegetable Soup + Roti', 'Multigrain Roti + Sabzi']
  };

  const DEFAULT_MEAL_PLAN = {
    Monday: { Breakfast: 'Vegetable Poha', Lunch: 'Dal Rice', Snack: 'Fruit Chaat', Dinner: 'Multigrain Roti + Sabzi' },
    Tuesday: { Breakfast: 'Vegetable Upma', Lunch: 'Rajma Rice', Snack: 'Roasted Makhana', Dinner: 'Dal Khichdi' },
    Wednesday: { Breakfast: 'Moong Dal Chilla', Lunch: 'Palak Paneer + Roti', Snack: 'Fruit Chaat', Dinner: 'Vegetable Daliya' },
    Thursday: { Breakfast: 'Ragi Dosa', Lunch: 'Dal Tadka + Rice', Snack: 'Roasted Chickpeas', Dinner: 'Paneer Bhurji + Roti' },
    Friday: { Breakfast: 'Oats Idli', Lunch: 'Vegetable Pulao', Snack: 'Sprouts Chaat', Dinner: 'Dal Khichdi' },
    Saturday: { Breakfast: 'Vegetable Uttapam', Lunch: 'Millet Khichdi', Snack: 'Fruit Chaat', Dinner: 'Multigrain Roti + Sabzi' },
    Sunday: { Breakfast: 'Idli + Sambar', Lunch: 'Rajma Rice', Snack: 'Roasted Makhana', Dinner: 'Vegetable Soup + Roti' }
  };

  const daysMatrixContainer = document.getElementById('days-matrix-container');
  let currentMealPlan = JSON.parse(localStorage.getItem(KEYS.MEAL_PLAN)) || DEFAULT_MEAL_PLAN;

  function findRecipeByName(name) {
    const match = RECIPE_DB.find(r => r.title.toLowerCase() === name.toLowerCase());
    return match || RECIPE_DB[0];
  }

  function renderMealPlanner() {
    if (!daysMatrixContainer) return;
    daysMatrixContainer.innerHTML = '';

    DAYS.forEach(day => {
      const dayCard = document.createElement('div');
      dayCard.className = 'day-card';

      const dayMeals = currentMealPlan[day] || DEFAULT_MEAL_PLAN[day];

      let slotsHTML = '';
      ['Breakfast', 'Lunch', 'Snack', 'Dinner'].forEach(slot => {
        const selectedMealName = dayMeals[slot] || MEAL_OPTIONS[slot][0];
        const recipeObj = findRecipeByName(selectedMealName);

        const optionsHTML = MEAL_OPTIONS[slot].map(opt => `
          <option value="${opt}" ${opt === selectedMealName ? 'selected' : ''}>${opt}</option>
        `).join('');

        slotsHTML += `
          <div class="meal-slot" data-day="${day}" data-slot="${slot}">
            <div class="slot-type-label">
              <span>${slot === 'Breakfast' ? '🍳' : slot === 'Lunch' ? '🍲' : slot === 'Snack' ? '🥗' : '🍛'}</span>
              <span>${slot}</span>
            </div>

            <select class="meal-select" data-day="${day}" data-slot="${slot}">
              ${optionsHTML}
            </select>

            <div class="meal-preview-card">
              <img src="${recipeObj.image}" alt="${recipeObj.title}" class="meal-thumb-img">
              <div class="meal-title-text">${recipeObj.title}</div>
              <div class="meal-prep-time">⏱ Prep: ${recipeObj.prepTime}</div>
              <button class="btn btn-primary btn-sm btn-view-recipe" data-recipe-id="${recipeObj.id}">
                <span>View Recipe</span>
              </button>
            </div>
          </div>
        `;
      });

      dayCard.innerHTML = `
        <div class="day-header">
          <span>${day}</span>
          <span style="font-size: 0.9rem; font-weight: 500; opacity: 0.9;">Healthy Day Plan</span>
        </div>
        <div class="day-meals-grid">
          ${slotsHTML}
        </div>
      `;

      daysMatrixContainer.appendChild(dayCard);
    });

    document.querySelectorAll('.meal-select').forEach(select => {
      select.addEventListener('change', (e) => {
        const d = e.target.getAttribute('data-day');
        const s = e.target.getAttribute('data-slot');
        currentMealPlan[d][s] = e.target.value;
        renderMealPlanner();
      });
    });

    document.querySelectorAll('.btn-view-recipe').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const recipeId = e.currentTarget.getAttribute('data-recipe-id');
        openRecipeModal(recipeId);
      });
    });
  }

  const saveMealBtn = document.getElementById('save-meal-plan-btn');
  if (saveMealBtn) {
    saveMealBtn.addEventListener('click', () => {
      localStorage.setItem(KEYS.MEAL_PLAN, JSON.stringify(currentMealPlan));
      alert('🎉 Your customized 7-day meal plan has been saved successfully!');
    });
  }

  const resetMealBtn = document.getElementById('reset-meal-plan-btn');
  if (resetMealBtn) {
    resetMealBtn.addEventListener('click', () => {
      currentMealPlan = JSON.parse(JSON.stringify(DEFAULT_MEAL_PLAN));
      localStorage.setItem(KEYS.MEAL_PLAN, JSON.stringify(currentMealPlan));
      renderMealPlanner();
      alert('🔄 Meal plan reset to default recommended Indian nutrition plan.');
    });
  }

  const printMealBtn = document.getElementById('print-meal-plan-btn');
  if (printMealBtn) {
    printMealBtn.addEventListener('click', () => {
      window.print();
    });
  }

  /* ==========================================================================
     8. RECIPE DETAILS MODAL MODULE
     ========================================================================== */
  const recipeModalOverlay = document.getElementById('recipe-modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openRecipeModal(recipeId) {
    const recipe = RECIPE_DB.find(r => r.id === recipeId) || RECIPE_DB[0];

    const img = document.getElementById('modal-recipe-img');
    if (img) img.src = recipe.image;
    const cat = document.getElementById('modal-category');
    if (cat) cat.textContent = recipe.category;
    const title = document.getElementById('modal-title');
    if (title) title.textContent = recipe.title;
    const prep = document.getElementById('modal-prep-time');
    if (prep) prep.textContent = recipe.prepTime;
    const cal = document.getElementById('modal-calories');
    if (cal) cal.textContent = recipe.calories;

    const p = document.getElementById('nutr-protein');
    if (p) p.textContent = recipe.nutrition.protein;
    const c = document.getElementById('nutr-carbs');
    if (c) c.textContent = recipe.nutrition.carbs;
    const f = document.getElementById('nutr-fat');
    if (f) f.textContent = recipe.nutrition.fat;
    const fb = document.getElementById('nutr-fiber');
    if (fb) fb.textContent = recipe.nutrition.fiber;

    const ingrList = document.getElementById('modal-ingredients-list');
    if (ingrList) ingrList.innerHTML = recipe.ingredients.map(ing => `<li>• ${ing}</li>`).join('');

    const stepsList = document.getElementById('modal-steps-list');
    if (stepsList) stepsList.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join('');

    if (recipeModalOverlay) recipeModalOverlay.classList.add('show');
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      if (recipeModalOverlay) recipeModalOverlay.classList.remove('show');
    });
  }

  if (recipeModalOverlay) {
    recipeModalOverlay.addEventListener('click', (e) => {
      if (e.target === recipeModalOverlay) {
        recipeModalOverlay.classList.remove('show');
      }
    });
  }

  /* ==========================================================================
     9. HEALTHY INDIAN RECIPES SEARCH & FILTER 🇮🇳
     ========================================================================== */
  const recipesGrid = document.getElementById('recipes-grid');
  const recipeSearchInput = document.getElementById('recipe-search-input');
  const categoryPillsContainer = document.getElementById('category-pills');

  let activeCategory = 'All';
  let favoriteRecipeIds = JSON.parse(localStorage.getItem(KEYS.FAVORITES)) || [];

  function renderRecipes() {
    if (!recipesGrid) return;
    recipesGrid.innerHTML = '';
    const searchTerm = recipeSearchInput ? recipeSearchInput.value.toLowerCase().trim() : '';

    const filtered = RECIPE_DB.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) ||
                            recipe.shortDesc.toLowerCase().includes(searchTerm) ||
                            recipe.ingredients.some(i => i.toLowerCase().includes(searchTerm));

      let matchesCat = true;
      if (activeCategory === 'Favorites') {
        matchesCat = favoriteRecipeIds.includes(recipe.id);
      } else if (activeCategory !== 'All') {
        matchesCat = recipe.category === activeCategory;
      }

      return matchesSearch && matchesCat;
    });

    if (filtered.length === 0) {
      recipesGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-muted);">
          <h3>No recipes found 🔍</h3>
          <p>Try searching for a different item or category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(recipe => {
      const isFav = favoriteRecipeIds.includes(recipe.id);

      const card = document.createElement('div');
      card.className = 'recipe-card';
      card.innerHTML = `
        <div class="recipe-card-img-wrapper">
          <img src="${recipe.image}" alt="${recipe.title}">
          <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${recipe.id}" title="Toggle Favorite">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>

        <div class="recipe-card-content">
          <div class="recipe-card-meta">
            <span class="recipe-category-tag">${recipe.category}</span>
            <span class="recipe-time-tag">⏱ ${recipe.prepTime}</span>
          </div>

          <h3 class="recipe-card-title">${recipe.title}</h3>
          <p class="recipe-card-desc">${recipe.shortDesc}</p>

          <button class="btn btn-primary btn-sm btn-modal-trigger" data-id="${recipe.id}" style="margin-top:auto;">
            <span>View Recipe ➔</span>
          </button>
        </div>
      `;

      recipesGrid.appendChild(card);
    });

    document.querySelectorAll('.fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        if (favoriteRecipeIds.includes(id)) {
          favoriteRecipeIds = favoriteRecipeIds.filter(i => i !== id);
        } else {
          favoriteRecipeIds.push(id);
        }
        localStorage.setItem(KEYS.FAVORITES, JSON.stringify(favoriteRecipeIds));
        renderRecipes();
      });
    });

    document.querySelectorAll('.btn-modal-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openRecipeModal(id);
      });
    });
  }

  if (recipeSearchInput) {
    recipeSearchInput.addEventListener('input', renderRecipes);
  }

  if (categoryPillsContainer) {
    categoryPillsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('pill-btn')) {
        document.querySelectorAll('.pill-btn').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        activeCategory = e.target.getAttribute('data-category');
        renderRecipes();
      }
    });
  }

  /* ==========================================================================
     10. NUTRITION QUIZ MODULE 🧠 (100 Questions + 7-Day Weekly Cycle Rotation)
     ========================================================================== */
  const QUIZ_QUESTIONS = [
  {
    "q": "What is the primary function of protein in our daily diet?",
    "options": [
      "Providing fast sugar energy",
      "Muscle repair and cell building",
      "Lubricating body joints",
      "Storing body fat"
    ],
    "answer": 1,
    "explanation": "Protein provides amino acids essential for muscle tissue repair, enzyme synthesis, and immune system health."
  },
  {
    "q": "Which macronutrient serves as the body's primary and preferred energy source?",
    "options": [
      "Proteins",
      "Carbohydrates",
      "Vitamins",
      "Minerals"
    ],
    "answer": 1,
    "explanation": "Carbohydrates break down into glucose, which fuels brain function and muscular contraction."
  },
  {
    "q": "What percentage of a balanced Indian Thali plate should ideally consist of vegetables and salads?",
    "options": [
      "10%",
      "25%",
      "50%",
      "75%"
    ],
    "answer": 2,
    "explanation": "Filling half your plate with colorful vegetables and raw salads ensures adequate fiber, vitamins, and minerals."
  },
  {
    "q": "What is the main role of dietary fiber in human nutrition?",
    "options": [
      "Building bone density",
      "Supporting digestive health and regular bowel movements",
      "Providing Vitamin C",
      "Dissolving kidney stones"
    ],
    "answer": 1,
    "explanation": "Fiber adds bulk to food waste, prevents constipation, and feeds healthy probiotic bacteria in the colon."
  },
  {
    "q": "Which of the following is considered a healthy fat essential for hormone production?",
    "options": [
      "Trans fats in hydrogenated vegetable oil",
      "Omega-3 fatty acids in nuts and seeds",
      "Synthetic artificial oils",
      "Reheated deep frying oil"
    ],
    "answer": 1,
    "explanation": "Omega-3 fatty acids found in walnuts, flaxseeds, and almonds support cell membranes and reduce systemic inflammation."
  },
  {
    "q": "What happens when you consume significantly more calories than your body burns daily?",
    "options": [
      "Immediate muscle breakdown",
      "Excess energy is stored as body fat",
      "Immediate hair growth",
      "Loss of bone density"
    ],
    "answer": 1,
    "explanation": "Unused metabolic energy from excess caloric intake is converted into triglycerides and stored in adipose tissue."
  },
  {
    "q": "Why are complex carbohydrates superior to simple sugars?",
    "options": [
      "They contain zero calories",
      "They digest slowly and provide sustained energy without blood sugar spikes",
      "They taste sweeter",
      "They digest in 5 minutes"
    ],
    "answer": 1,
    "explanation": "Complex carbs like whole wheat, oats, and millets release glucose gradually, maintaining stable energy levels."
  },
  {
    "q": "What is a 'complete protein' source?",
    "options": [
      "A food containing all 9 essential amino acids",
      "A dish with high sugar content",
      "Any food cooked in ghee",
      "A vitamin supplement"
    ],
    "answer": 0,
    "explanation": "Complete proteins supply all 9 essential amino acids that the human body cannot produce on its own."
  },
  {
    "q": "Combining Rice and Dal together forms a complete protein because:",
    "options": [
      "Rice provides methionine and Dal provides lysine, complementing each other",
      "They both lack all amino acids",
      "Cooking them doubles the calories",
      "It creates artificial vitamins"
    ],
    "answer": 0,
    "explanation": "Grains (rice) are low in lysine but rich in methionine, while legumes (dal) are rich in lysine, making Khichdi or Dal Rice a complete protein meal."
  },
  {
    "q": "What is the primary danger of consuming trans fats found in bakery products?",
    "options": [
      "Raises bad cholesterol (LDL) while lowering good cholesterol (HDL)",
      "Improves liver health",
      "Strengthens enamel",
      "Provides iron"
    ],
    "answer": 0,
    "explanation": "Trans fats increase LDL cholesterol and arterial plaque risk while decreasing protective HDL cholesterol."
  },
  {
    "q": "Which vitamin is abundant in citrus fruits like Amla, Oranges, and Lemons?",
    "options": [
      "Vitamin A",
      "Vitamin B12",
      "Vitamin C",
      "Vitamin D"
    ],
    "answer": 2,
    "explanation": "Vitamin C (ascorbic acid) is a powerful antioxidant that bolsters white blood cell defense and collagen formation."
  },
  {
    "q": "Which mineral is crucial for blood hemoglobin production and oxygen transport?",
    "options": [
      "Calcium",
      "Iron",
      "Zinc",
      "Sodium"
    ],
    "answer": 1,
    "explanation": "Iron forms the core heme molecule in red blood cells that carries oxygen from lungs to body tissues."
  },
  {
    "q": "Sunlight exposure helps our skin synthesize which key nutrient?",
    "options": [
      "Vitamin C",
      "Vitamin D",
      "Vitamin K",
      "Iron"
    ],
    "answer": 1,
    "explanation": "UVB rays trigger synthesis of Vitamin D3 in skin cells, vital for calcium absorption and bone mineralization."
  },
  {
    "q": "Deficiency of Vitamin A can lead to which health issue?",
    "options": [
      "Night blindness and dry eyes",
      "Scurvy",
      "Rickets",
      "Goiter"
    ],
    "answer": 0,
    "explanation": "Vitamin A is essential for retinal rhodopsin synthesis; deficiency causes impaired night vision."
  },
  {
    "q": "Which mineral found in dairy products and leafy greens keeps bones and teeth strong?",
    "options": [
      "Calcium",
      "Sodium",
      "Iron",
      "Iodine"
    ],
    "answer": 0,
    "explanation": "Calcium supplies the mineral matrix required for skeletal strength and neuromuscular signaling."
  },
  {
    "q": "Which vitamin is synthesized by gut bacteria and plays a key role in blood clotting?",
    "options": [
      "Vitamin K",
      "Vitamin C",
      "Vitamin E",
      "Vitamin B6"
    ],
    "answer": 0,
    "explanation": "Vitamin K is needed by the liver to produce prothrombin and clotting factors."
  },
  {
    "q": "Iodized salt helps prevent which glandular deficiency disorder?",
    "options": [
      "Goiter (Thyroid enlargement)",
      "Diabetes",
      "Asthma",
      "Anemia"
    ],
    "answer": 0,
    "explanation": "Iodine is required for thyroid hormone production (T3 and T4), preventing goiter."
  },
  {
    "q": "Which electrolyte found in bananas and coconut water helps regulate muscle contractions and heart rhythm?",
    "options": [
      "Potassium",
      "Chlorine",
      "Iron",
      "Calcium"
    ],
    "answer": 0,
    "explanation": "Potassium balances cellular fluids and prevents muscle cramping."
  },
  {
    "q": "Deficiency of Vitamin C leads to which classic nutritional disease?",
    "options": [
      "Scurvy (bleeding gums & poor wound healing)",
      "Beriberi",
      "Pellagra",
      "Rickets"
    ],
    "answer": 0,
    "explanation": "Scurvy results from severe Vitamin C deficiency affecting connective tissue collagen synthesis."
  },
  {
    "q": "Why is Vitamin B12 important, especially for strict vegetarians?",
    "options": [
      "Supports nerve function & red blood cell formation",
      "Improves eyesight in dark",
      "Controls skin tan",
      "Builds tooth enamel"
    ],
    "answer": 0,
    "explanation": "Vitamin B12 is essential for myelin sheath integrity and RBC maturation; strict vegans may need fortified foods or supplements."
  },
  {
    "q": "How many glasses of water (approx 2 Liters) are recommended daily for average adults?",
    "options": [
      "2-3 glasses",
      "4-5 glasses",
      "8-10 glasses",
      "15-20 glasses"
    ],
    "answer": 2,
    "explanation": "Drinking 8-10 glasses of clean water daily maintains fluid balance, cognitive focus, and renal flushing."
  },
  {
    "q": "What is an early physiological sign of mild dehydration?",
    "options": [
      "Dark yellow urine and dry mouth",
      "Excessive sweating",
      "Clear watery urine",
      "Extreme energy burst"
    ],
    "answer": 0,
    "explanation": "Concentrated dark yellow urine indicates kidneys are conserving water due to inadequate fluid intake."
  },
  {
    "q": "Which natural beverage is a fantastic low-calorie electrolyte restorer after sports?",
    "options": [
      "Tender Coconut Water",
      "Carbonated Cola",
      "Packaged fruit punch syrup",
      "Sweetened condensed milk"
    ],
    "answer": 0,
    "explanation": "Tender coconut water contains natural potassium, sodium, magnesium, and bio-available sugars."
  },
  {
    "q": "Drinking enough water before and during long study sessions helps prevent:",
    "options": [
      "Headaches, brain fatigue, and loss of concentration",
      "Memory gain",
      "Excess saliva",
      "Weight loss"
    ],
    "answer": 0,
    "explanation": "Dehydration reduces blood volume and cerebral perfusion, leading to headaches and mental lethargy."
  },
  {
    "q": "Why should you avoid drinking large volumes of ice-cold water immediately after a heavy meal?",
    "options": [
      "It may constrict blood vessels and slow down digestive enzyme activity",
      "It burns extra calories",
      "It kills stomach acid permanently",
      "It turns food into ice"
    ],
    "answer": 0,
    "explanation": "Extremely cold water can solidy dietary fats and temporarily reduce digestive enzyme temperature."
  },
  {
    "q": "What is the primary constituent of human blood plasma?",
    "options": [
      "Water (approx 90%)",
      "Protein powder",
      "Pure glucose",
      "Calcium carbonate"
    ],
    "answer": 0,
    "explanation": "Blood plasma is over 90% water, enabling transport of red cells, nutrients, and hormones."
  },
  {
    "q": "Which Indian summer beverage made from curd supplies hydration alongside gut probiotics?",
    "options": [
      "Masala Buttermilk (Taas/Chaach)",
      "Tea with 4 spoons sugar",
      "Fizzy soda",
      "Black coffee"
    ],
    "answer": 0,
    "explanation": "Chaach contains water, electrolytes, digestive spices (cumin, hing), and live lactobacillus cultures."
  },
  {
    "q": "Does drinking coffee or energy drinks count as pure hydration?",
    "options": [
      "No, caffeine acts as a mild diuretic and excess sugar dehydrates tissues",
      "Yes, they are 100% water",
      "Yes, coffee replaces water completely",
      "They cure dehydration faster"
    ],
    "answer": 0,
    "explanation": "Caffeinated beverages encourage urine output and high sugar pulls water out of intestinal cells."
  },
  {
    "q": "How does water assist in weight management and metabolic regulation?",
    "options": [
      "Promotes satiety and supports cellular thermogenesis",
      "Destroys muscle tissue",
      "Locks fat in body",
      "Stops digestion"
    ],
    "answer": 0,
    "explanation": "Drinking water before meals prevents overeating by expanding stomach volume and supporting liver metabolic pathways."
  },
  {
    "q": "What is the best habit when waking up in the morning?",
    "options": [
      "Drink 1-2 glasses of plain room temperature water",
      "Gulp 2 cans of soda",
      "Skip water until lunch",
      "Eat fried chips"
    ],
    "answer": 0,
    "explanation": "Drinking water upon waking rehydrates organs after 7-8 hours of sleep fasting and stimulates bowel motility."
  },
  {
    "q": "Which of the following is a high-protein legume popular in Indian curries?",
    "options": [
      "Rajma (Red Kidney Beans)",
      "White Potato",
      "Cucumber",
      "Tapioca"
    ],
    "answer": 0,
    "explanation": "Rajma delivers approximately 15g of protein per cooked cup along with abundant dietary fiber."
  },
  {
    "q": "Which soy product provides a rich source of plant protein for vegetarians?",
    "options": [
      "Tofu / Soya Chunks",
      "White Flour",
      "Cornstarch",
      "Potato starch"
    ],
    "answer": 0,
    "explanation": "Soya chunks contain over 50% protein by weight, making them a potent protein source."
  },
  {
    "q": "Paneer (Indian Cottage Cheese) provides high quality protein along with which mineral?",
    "options": [
      "Calcium",
      "Iron",
      "Vitamin C",
      "Iodine"
    ],
    "answer": 0,
    "explanation": "Paneer is rich in dairy casein protein and bioavailable calcium."
  },
  {
    "q": "Which sprouted seed chaat is considered a superfood snack for energy?",
    "options": [
      "Sprouted Green Moong Chaat",
      "Fried potato wafers",
      "Refined biscuit",
      "Maida mathri"
    ],
    "answer": 0,
    "explanation": "Sprouting moong increases enzyme activity, Vitamin C content, and protein bioavailability."
  },
  {
    "q": "What is the average recommended protein intake for a healthy inactive adult?",
    "options": [
      "0.8g to 1.0g per kg of body weight",
      "5g per kg",
      "100g per kg",
      "0.1g total"
    ],
    "answer": 0,
    "explanation": "Standard dietary guidelines recommend ~0.8g to 1.0g protein per kilogram of body weight for sedentary adults."
  },
  {
    "q": "Which lentil is easiest to digest and recommended during recovery from illness?",
    "options": [
      "Yellow Moong Dal",
      "Whole Black Urad",
      "Kabuli Chana",
      "Rajma"
    ],
    "answer": 0,
    "explanation": "Yellow split moong dal is gentle on the stomach and quick to assimilate."
  },
  {
    "q": "What happens if a diet is severely deficient in protein over time?",
    "options": [
      "Muscle wasting, weak immunity, and slow wound healing",
      "Increased height",
      "Clearer eyesight",
      "Lower heart rate"
    ],
    "answer": 0,
    "explanation": "Inadequate protein forces the body to catabolize its own muscle tissue and impairs immune antibody production."
  },
  {
    "q": "Which seed is known as an Indian protein & fiber power pack?",
    "options": [
      "Chia / Flaxseeds / Pumpkin seeds",
      "Plum seeds",
      "Apple seeds",
      "Mango kernel"
    ],
    "answer": 0,
    "explanation": "Flaxseeds and pumpkin seeds are rich in plant proteins, ALA omega-3, and soluble fiber."
  },
  {
    "q": "Sattu (roasted gram flour) is popular in Indian nutrition because:",
    "options": [
      "It is rich in protein, cooling for digestion, and provides sustained stamina",
      "It contains high trans fat",
      "It has artificial colors",
      "It burns tongue"
    ],
    "answer": 0,
    "explanation": "Sattu drink is a traditional Indian protein shake loaded with iron, manganese, and complex carbs."
  },
  {
    "q": "Does eating protein alone build muscle without physical exercise?",
    "options": [
      "No, muscle synthesis requires progressive resistance exercise alongside adequate protein intake",
      "Yes, protein builds muscle while sitting still",
      "Yes, in 1 day",
      "No, protein turns into water"
    ],
    "answer": 0,
    "explanation": "Muscle hypertrophy requires mechanical tension (exercise) to trigger muscle protein synthesis."
  },
  {
    "q": "Which ancient Indian millet is exceptionally rich in calcium and gluten-free?",
    "options": [
      "Ragi (Finger Millet)",
      "Maida",
      "White Sugar",
      "Cornflour"
    ],
    "answer": 0,
    "explanation": "Ragi contains over 340mg calcium per 100g, higher than most other cereal grains."
  },
  {
    "q": "Why is Brown Rice nutritionally superior to Polished White Rice?",
    "options": [
      "It retains the fiber-rich bran and nutrient-dense germ layers",
      "It cooks in 1 minute",
      "It has no carbs",
      "It contains artificial dye"
    ],
    "answer": 0,
    "explanation": "White rice milling removes the outer bran (fiber & B vitamins) and germ, leaving refined endosperm."
  },
  {
    "q": "What glycemic index (GI) rating signifies a food that raises blood sugar slowly?",
    "options": [
      "Low Glycemic Index (< 55)",
      "High Glycemic Index (> 70)",
      "Ultra High GI",
      "Zero GI"
    ],
    "answer": 0,
    "explanation": "Low GI foods release glucose slowly into the bloodstream, preventing glycemic spikes and insulin crashes."
  },
  {
    "q": "Which coarse wheat derivative is great for making wholesome porridge (Dalia)?",
    "options": [
      "Broken Wheat (Dalia)",
      "Refined Maida",
      "White starch",
      "Baking powder"
    ],
    "answer": 0,
    "explanation": "Broken wheat dalia preserves the whole grain kernel, offering abundant dietary fiber."
  },
  {
    "q": "Rolled Oats contain a specific soluble fiber proven to lower LDL cholesterol called:",
    "options": [
      "Beta-Glucan",
      "Pectin",
      "Cellulose",
      "Lignin"
    ],
    "answer": 0,
    "explanation": "Beta-glucan forms a gel in the digestive tract that binds bile acids and removes cholesterol."
  },
  {
    "q": "Why does consuming white bread or maida pastries cause rapid hunger shortly after eating?",
    "options": [
      "High GI causes rapid spike and steep crash in blood glucose levels",
      "Maida expands in stomach",
      "It destroys stomach volume",
      "It has negative calories"
    ],
    "answer": 0,
    "explanation": "Refined carbs digest rapidly, causing an insulin spike followed by a glucose dip that triggers appetite signals."
  },
  {
    "q": "Which millet variety is known as Jowar in Hindi?",
    "options": [
      "Sorghum",
      "Pearl Millet",
      "Foxtail Millet",
      "Finger Millet"
    ],
    "answer": 0,
    "explanation": "Jowar (Sorghum) is a traditional drought-resistant millet rich in dietary fiber and iron."
  },
  {
    "q": "What happens to dietary fiber during normal human digestion?",
    "options": [
      "It passes mostly undigested through stomach and small intestine, nourishing colon microflora",
      "It converts into glucose",
      "It turns into fat",
      "It dissolves into blood"
    ],
    "answer": 0,
    "explanation": "Humans lack enzymes to break down cellulose fiber; it moves into the large intestine intact."
  },
  {
    "q": "Which dish made from flattened rice is a popular light Indian breakfast?",
    "options": [
      "Poha",
      "Pizza",
      "Burger",
      "Samosa"
    ],
    "answer": 0,
    "explanation": "Poha is easy to digest, low in fat, and iron-rich when prepared with vegetables and peanuts."
  },
  {
    "q": "How much daily dietary fiber is recommended for healthy young adults?",
    "options": [
      "25g to 35g daily",
      "5g daily",
      "100g daily",
      "0g daily"
    ],
    "answer": 0,
    "explanation": "Nutrition guidelines recommend 25-30g of daily fiber from vegetables, fruits, pulses, and whole grains."
  },
  {
    "q": "Pure Desi Ghee in moderate quantities (1-2 tsp daily) provides which gut-nourishing fatty acid?",
    "options": [
      "Butyric Acid",
      "Trans Fat",
      "Sulfuric Acid",
      "Hydrochloric Acid"
    ],
    "answer": 0,
    "explanation": "Butyric acid (butyrate) in ghee fuels colonocytes and maintains intestinal mucosal wall integrity."
  },
  {
    "q": "Which cold-pressed cooking oil traditional in North & East India is rich in natural antioxidants?",
    "options": [
      "Mustard Oil",
      "Hydrogenated Dalda",
      "Reheated Palm Oil",
      "Mineral Oil"
    ],
    "answer": 0,
    "explanation": "Kachi ghani mustard oil has a favorable omega-3 to omega-6 ratio and glucosinolates."
  },
  {
    "q": "Why is re-using deep frying oil multiple times dangerous for health?",
    "options": [
      "Creates toxic carcinogenic compounds like acrylamide and trans fats",
      "Makes oil taste sweeter",
      "Adds Vitamin C",
      "Lowers calories"
    ],
    "answer": 0,
    "explanation": "Repeated heating breaks down triglycerides into free fatty acids, aldehydes, and harmful trans fats."
  },
  {
    "q": "Which nut is shaped like a human brain and provides high plant Omega-3 (ALA)?",
    "options": [
      "Walnut",
      "Cashew",
      "Betel nut",
      "Chestnut"
    ],
    "answer": 0,
    "explanation": "Walnuts have the highest concentration of Alpha-Linolenic Acid (ALA) among all tree nuts."
  },
  {
    "q": "What is the key difference between saturated and unsaturated fats?",
    "options": [
      "Unsaturated fats have double bonds and remain liquid at room temperature",
      "Saturated fats are green",
      "Unsaturated fats have zero calories",
      "They are identical"
    ],
    "answer": 0,
    "explanation": "Unsaturated fats (found in olive oil, nuts, seeds) contain double chemical bonds making them heart-friendly."
  },
  {
    "q": "Which seed oil commonly used in South India contains sesamol antioxidants?",
    "options": [
      "Sesame (Til) Oil",
      "Kerosene",
      "Castor Oil",
      "Diesel"
    ],
    "answer": 0,
    "explanation": "Sesame oil contains sesamol and sesamolin, potent antioxidants that resist oxidative rancidity."
  },
  {
    "q": "Cholesterol in the human body is produced mainly by which organ?",
    "options": [
      "Liver",
      "Kidneys",
      "Lungs",
      "Spleen"
    ],
    "answer": 0,
    "explanation": "The liver synthesizes approximately 75-80% of the body's daily required cholesterol."
  },
  {
    "q": "Are all dietary fats bad for your heart?",
    "options": [
      "No, monounsaturated and polyunsaturated fats support cardiovascular health",
      "Yes, all fats cause heart attack",
      "Yes, fat should be 0%",
      "Only ghee is bad"
    ],
    "answer": 0,
    "explanation": "Healthy fats improve blood lipid profiles and facilitate absorption of fat-soluble vitamins (A, D, E, K)."
  },
  {
    "q": "Which fruit is uniquely famous for containing high amounts of healthy monounsaturated fats?",
    "options": [
      "Avocado",
      "Apple",
      "Watermelon",
      "Orange"
    ],
    "answer": 0,
    "explanation": "Avocados are rich in heart-healthy oleic acid, potassium, and dietary fiber."
  },
  {
    "q": "How many calories are provided by 1 gram of dietary fat?",
    "options": [
      "9 calories per gram",
      "4 calories per gram",
      "2 calories per gram",
      "20 calories per gram"
    ],
    "answer": 0,
    "explanation": "Fats are energy-dense, yielding 9 kcal/g compared to 4 kcal/g for carbs and proteins."
  },
  {
    "q": "What traditional fermenting process makes South Indian Idli & Dosa batter so nutritious?",
    "options": [
      "Lactic acid bacterial fermentation increases B-vitamins and bio-availability",
      "Boiling in sugar syrup",
      "Adding artificial vinegar",
      "Deep frying"
    ],
    "answer": 0,
    "explanation": "Fermentation by wild lactobacilli and yeast synthesizes B-complex vitamins and breaks down anti-nutrients."
  },
  {
    "q": "Which spice widely used in Indian curries contains the active anti-inflammatory compound Curcumin?",
    "options": [
      "Turmeric (Haldi)",
      "Red Chilli",
      "Cumin",
      "Coriander"
    ],
    "answer": 0,
    "explanation": "Curcumin in turmeric has potent antioxidant, anti-inflammatory, and antimicrobial properties."
  },
  {
    "q": "Adding black pepper to turmeric dishes enhances curcumin absorption by up to:",
    "options": [
      "2000%",
      "10%",
      "50%",
      "0%"
    ],
    "answer": 0,
    "explanation": "Piperine in black pepper inhibits hepatic glucuronidation, increasing curcumin bioavailability by 2000%."
  },
  {
    "q": "Which cooling beverage prepared with raw green mangoes prevents heatstroke in Indian summers?",
    "options": [
      "Aam Panna",
      "Hot Chai",
      "Fizzy Cola",
      "Espresso"
    ],
    "answer": 0,
    "explanation": "Aam Panna restores sodium chloride and vitamin C lost through excessive summer sweating."
  },
  {
    "q": "Moong Dal Chilla is an excellent breakfast option because:",
    "options": [
      "It is rich in vegetarian protein, low in oil, and quick to digest",
      "It is fried in maida",
      "It contains high sugar",
      "It has zero nutrients"
    ],
    "answer": 0,
    "explanation": "Moong dal crepes provide lean protein, complex carbs, and key micronutrients."
  },
  {
    "q": "What digestive spice temper (Tadka) ingredient helps reduce gas and bloating from lentils?",
    "options": [
      "Hing (Asafoetida) & Cumin (Jeera)",
      "Red food dye",
      "Vanilla essence",
      "White sugar"
    ],
    "answer": 0,
    "explanation": "Hing contains compounds that reduce intestinal gas formation from complex oligosaccharides in lentils."
  },
  {
    "q": "Which leaf used in Indian tempering (tadka) is rich in iron, calcium, and hair-nourishing antioxidants?",
    "options": [
      "Curry Leaves (Kadi Patta)",
      "Eucalyptus leaves",
      "Tea leaves",
      "Neem bark"
    ],
    "answer": 0,
    "explanation": "Curry leaves are packed with iron, folic acid, and antioxidant beta-carotene."
  },
  {
    "q": "Why is Khichdi considered the ultimate Indian healing comfort meal?",
    "options": [
      "Offers a perfectly balanced ratio of carbs, protein, and easy-to-digest fiber",
      "It takes 2 hours to digest",
      "It has high fat",
      "It has no salt"
    ],
    "answer": 0,
    "explanation": "Rice and moong dal cooked with turmeric and ghee provide complete protein that is gentle on inflamed stomach lining."
  },
  {
    "q": "Which traditional Indian condiment made from sesame seeds and jaggery provides warmth and iron in winter?",
    "options": [
      "Til-Gur (Til Ladoo / Chikki)",
      "White chocolate",
      "Ice cream",
      "Potato wafer"
    ],
    "answer": 0,
    "explanation": "Sesame seeds supply calcium while jaggery provides natural unrefined iron and minerals."
  },
  {
    "q": "What nutritional advantage does traditional Jaggery (Gur) have over refined white sugar?",
    "options": [
      "Contains trace minerals like iron, magnesium, and potassium",
      "It has zero calories",
      "It cures eyesight",
      "It digests in 1 second"
    ],
    "answer": 0,
    "explanation": "Unlike bleached white sugar, unrefined jaggery retains molasses containing plant minerals."
  },
  {
    "q": "Instead of eating deep-fried potato chips during study breaks, a smarter choice is:",
    "options": [
      "Roasted Makhana or Roasted Chickpeas",
      "Sugar candies",
      "Chocolate pastry",
      "Deep fried samosa"
    ],
    "answer": 0,
    "explanation": "Roasted makhana/chickpeas deliver crunchy texture with low sodium, fiber, and clean protein."
  },
  {
    "q": "Swapping carbonated cola for fresh Masala Buttermilk benefits your body by:",
    "options": [
      "Eliminating 40g of empty sugar while gaining probiotics & calcium",
      "Adding caffeine",
      "Causing tooth decay",
      "Reducing stomach acid"
    ],
    "answer": 0,
    "explanation": "Masala buttermilk hydrates with zero added sugar and supplies friendly gut bacteria."
  },
  {
    "q": "What is a healthy alternative to store-bought packaged fruit juices?",
    "options": [
      "Eating the whole fruit with its natural fiber",
      "Drinking 3 energy drinks",
      "Drinking syrup",
      "Flavored soda"
    ],
    "answer": 0,
    "explanation": "Whole fruits retain intact dietary fiber that slows sugar absorption, whereas juice spikes blood glucose."
  },
  {
    "q": "Why are un-salted almonds and walnuts great evening brain snacks?",
    "options": [
      "They contain vitamin E, healthy fats, and protein that improve cognitive stamina",
      "They contain high sugar",
      "They freeze brain",
      "They cause sleepiness"
    ],
    "answer": 0,
    "explanation": "Nuts deliver sustained energy from monounsaturated fats, protein, and brain-supporting Vitamin E."
  },
  {
    "q": "What is a smart replacement for white flour (Maida) noodles?",
    "options": [
      "Vegetable Millets / Whole Wheat / Oats Noodles",
      "Instant fried ramen",
      "Deep fried puri",
      "White bread"
    ],
    "answer": 0,
    "explanation": "Millet and whole wheat noodles supply complex carbs and fiber without deep-frying processing."
  },
  {
    "q": "Instead of sweet chocolate bars, what sweet treat provides natural fiber and iron?",
    "options": [
      "Dates (Khajoor) or Figs (Anjeer)",
      "Synthetic hard candy",
      "Sugar cubes",
      "Marshmallows"
    ],
    "answer": 0,
    "explanation": "Dates and dried figs provide natural sweetness along with potassium, iron, and fiber."
  },
  {
    "q": "What makes Sprouts Chaat a high-grade snack for students?",
    "options": [
      "High protein, digestive enzymes, Vitamin C, and low calories",
      "Deep fried batter",
      "High trans fat",
      "Excess sodium"
    ],
    "answer": 0,
    "explanation": "Sprouting increases nutrient density, vitamin content, and protein digestibility."
  },
  {
    "q": "Why should you read the Nutrition Facts label on packaged snacks?",
    "options": [
      "To check hidden sugars, trans fats, sodium levels, and serving sizes",
      "To look at colorful pictures",
      "To check printer brand",
      "To check paper thickness"
    ],
    "answer": 0,
    "explanation": "Food labels expose added sugars disguised under names like high-fructose corn syrup or maltodextrin."
  },
  {
    "q": "What is 'mindless eating'?",
    "options": [
      "Eating snacks while watching screens without paying attention to fullness cues",
      "Eating slowly with family",
      "Chewing 32 times",
      "Drinking water before meal"
    ],
    "answer": 0,
    "explanation": "Screen distraction suppresses satiety signals, often leading to overeating high-calorie junk foods."
  },
  {
    "q": "What is the best way to handle late-night study hunger pangs?",
    "options": [
      "Eat a small bowl of warm milk with turmeric or roasted makhana",
      "Order a large cheese pizza",
      "Drink 2 cans of cola",
      "Eat 5 chocolate bars"
    ],
    "answer": 0,
    "explanation": "Light snacks like warm milk or makhana satisfy hunger without overloading digestion before sleep."
  },
  {
    "q": "What are Probiotics?",
    "options": [
      "Live beneficial bacteria that support gut microflora health",
      "Harmful toxins",
      "Synthetic food colors",
      "Antibiotic chemicals"
    ],
    "answer": 0,
    "explanation": "Probiotics like Lactobacillus in curd and buttermilk reinforce the gut mucosal barrier and immune defense."
  },
  {
    "q": "What are Prebiotics?",
    "options": [
      "Non-digestible fibers that serve as food for beneficial gut bacteria",
      "Stomach acids",
      "Fatty deposits",
      "Protein shakes"
    ],
    "answer": 0,
    "explanation": "Prebiotic fibers found in garlic, onions, oats, and bananas nourish probiotic gut colonies."
  },
  {
    "q": "Chewing food thoroughly (around 20-30 times per bite) aids digestion by:",
    "options": [
      "Mixing food with salivary amylase and reducing mechanical strain on stomach",
      "Destroying vitamins",
      "Making stomach smaller",
      "Causing gas"
    ],
    "answer": 0,
    "explanation": "Mastication breaks food into smaller particles and initiates carbohydrate digestion in the mouth."
  },
  {
    "q": "What causes Acid Reflux / Heartburn after eating?",
    "options": [
      "Stomach acid flowing back into esophagus due to heavy fried meals or lying down immediately",
      "Drinking too much water",
      "Eating spinach",
      "Sleeping 8 hours"
    ],
    "answer": 0,
    "explanation": "High-fat meals delay gastric emptying and weaken lower esophageal sphincter pressure."
  },
  {
    "q": "Where does the majority of nutrient absorption take place in the human digestive system?",
    "options": [
      "Small Intestine",
      "Stomach",
      "Esophagus",
      "Mouth"
    ],
    "answer": 0,
    "explanation": "Villi and microvilli lining the small intestine absorb amino acids, glucose, fatty acids, and vitamins into bloodstream."
  },
  {
    "q": "What is the primary acid secreted by the stomach to break down proteins and kill pathogens?",
    "options": [
      "Hydrochloric Acid (HCl)",
      "Sulfuric Acid",
      "Acetic Acid",
      "Citric Acid"
    ],
    "answer": 0,
    "explanation": "Stomach parietal cells produce HCl (pH ~1.5 to 2.0) to activate pepsinogen and sanitize food."
  },
  {
    "q": "How does chronic psychological stress impact digestion?",
    "options": [
      "Triggers fight-or-flight response, reducing digestive blood flow and gut motility",
      "Improves digestion speed",
      "Cures ulcers",
      "Doubles enzyme production"
    ],
    "answer": 0,
    "explanation": "Sympathetic nervous activation diverts blood away from gastrointestinal organs toward skeletal muscles."
  },
  {
    "q": "What role does the Liver play in lipid digestion?",
    "options": [
      "Produces Bile juice that emulsifies large fat globules into small droplets",
      "Produces insulin",
      "Stores saliva",
      "Filters air"
    ],
    "answer": 0,
    "explanation": "Bile salts synthesized by the liver emulsify dietary fats so pancreatic lipase enzymes can digest them."
  },
  {
    "q": "What is Basal Metabolic Rate (BMR)?",
    "options": [
      "The baseline calories your body burns at complete rest to maintain vital life functions",
      "Calories burned while running",
      "Weight of stomach",
      "Amount of water drunk"
    ],
    "answer": 0,
    "explanation": "BMR represents energy required for breathing, heart circulation, cell repair, and organ operation at rest."
  },
  {
    "q": "Why is late night dinner (eating right before sleeping) discouraged?",
    "options": [
      "Disrupts sleep architecture and increases risk of acid reflux and fat storage",
      "Improves memory",
      "Burns extra calories",
      "Cures insomnia"
    ],
    "answer": 0,
    "explanation": "Metabolic rate slows during sleep, so un-metabolized nutrients eaten right before bed tend to store as fat."
  },
  {
    "q": "How does 7-8 hours of quality sleep influence your appetite hormones?",
    "options": [
      "Balances Leptin (satiety hormone) and Ghrelin (hunger hormone)",
      "Eliminates hunger forever",
      "Destroys digestion",
      "Triples fat storage"
    ],
    "answer": 0,
    "explanation": "Sleep deprivation spikes Ghrelin (stimulates hunger) and suppresses Leptin (signals fullness), driving sugar cravings."
  },
  {
    "q": "Which warm bedtime drink is a traditional Indian remedy for restful sleep and immunity?",
    "options": [
      "Warm Turmeric Milk (Golden Milk)",
      "Chilled espresso",
      "Fizzy soda",
      "Black tea"
    ],
    "answer": 0,
    "explanation": "Warm milk contains tryptophan amino acid that converts to melatonin, enhanced by anti-inflammatory turmeric."
  },
  {
    "q": "What is the danger of high sodium (excess salt) intake from processed foods?",
    "options": [
      "Elevates arterial blood pressure and causes fluid retention",
      "Causes low blood pressure",
      "Builds muscle",
      "Strengthens bones"
    ],
    "answer": 0,
    "explanation": "Excess sodium draws water into blood vessels, increasing intravascular pressure and straining kidneys."
  },
  {
    "q": "Why is regular physical exercise vital alongside healthy food habits?",
    "options": [
      "Enhances insulin sensitivity, cardiovascular health, and muscle mass",
      "Replaces need for food",
      "Makes bones soft",
      "Stops metabolism"
    ],
    "answer": 0,
    "explanation": "Exercise stimulates GLUT4 glucose transporters in muscle cells and strengthens cardiac output."
  },
  {
    "q": "Which antioxidant compound in green tea supports cell protection and metabolic health?",
    "options": [
      "EGCG (Epigallocatechin gallate)",
      "Alcohol",
      "Sodium nitrate",
      "Maida starch"
    ],
    "answer": 0,
    "explanation": "EGCG in green tea neutralizes free radicals and supports lipid oxidation."
  },
  {
    "q": "What is the term for unstable molecules that cause cellular oxidative damage, combated by antioxidants?",
    "options": [
      "Free Radicals",
      "Probiotics",
      "Enzymes",
      "Amino acids"
    ],
    "answer": 0,
    "explanation": "Free radicals have unpaired electrons that damage cell walls and DNA unless neutralized by fruit/veg antioxidants."
  },
  {
    "q": "Why is it important to wash fresh fruits and vegetables thoroughly before consumption?",
    "options": [
      "Removes surface dirt, pesticide residues, and harmful bacterial pathogens",
      "Adds extra sugar",
      "Removes color",
      "Destroys fiber"
    ],
    "answer": 0,
    "explanation": "Rinsing under running water reduces chemical pesticide residues and microbes like E. coli."
  },
  {
    "q": "What is 'Ultra-Processed Food' (UPF)?",
    "options": [
      "Industrial formulations with added hydrogenated oils, emulsifiers, and synthetic additives",
      "Fresh garden salad",
      "Steamed rice",
      "Boiled eggs"
    ],
    "answer": 0,
    "explanation": "UPFs undergo heavy industrial processing, removing whole food matrix structure and adding chemical preservatives."
  },
  {
    "q": "What is the benefit of eating seasonal and locally grown produce?",
    "options": [
      "Higher nutrient freshness, better flavor, and minimal transport chemical preservation",
      "It is expensive",
      "It has zero vitamins",
      "It spoils in 1 second"
    ],
    "answer": 0,
    "explanation": "Locally harvested seasonal produce ripens naturally on plant, retaining peak vitamin levels."
  },
  {
    "q": "What is the ultimate goal of adopting Healthy Food Habits?",
    "options": [
      "Sustainable lifelong vitality, mental clarity, disease prevention, and active living",
      "Extreme starvation dieting",
      "Avoiding all food",
      "Body shaming"
    ],
    "answer": 0,
    "explanation": "Nourishing your body with smart food choices builds long-term wellness, academic focus, and energetic living."
  }
];

  const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

  function getWeeklyQuizState() {
    let cycleStart = parseInt(localStorage.getItem(KEYS.QUIZ_CYCLE_START));
    const now = Date.now();

    if (!cycleStart || (now - cycleStart) >= ONE_WEEK_MS) {
      cycleStart = now;
      localStorage.setItem(KEYS.QUIZ_CYCLE_START, cycleStart);
      localStorage.setItem(KEYS.QUIZ_SET_INDEX, '0');
    }

    const elapsedMs = now - cycleStart;
    const daysRemaining = Math.ceil((ONE_WEEK_MS - elapsedMs) / (1000 * 60 * 60 * 24));
    return { cycleStart, daysRemaining };
  }

  let currentSetIndex = parseInt(localStorage.getItem(KEYS.QUIZ_SET_INDEX)) || 0;
  let currentQIndexInSet = 0;
  let quizScore = 0;
  let answerSelected = false;
  let activeQuestionsRound = [];

  const quizQNum = document.getElementById('quiz-q-num');
  const quizScoreLive = document.getElementById('quiz-score-live');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const quizQuestionText = document.getElementById('quiz-question-text');
  const quizOptionsContainer = document.getElementById('quiz-options-container');
  const quizExplanation = document.getElementById('quiz-explanation');
  const quizNextBtn = document.getElementById('quiz-next-btn');
  const quizWeeklyBanner = document.getElementById('quiz-weekly-banner');

  const quizPlayingView = document.getElementById('quiz-playing-view');
  const quizScoreScreen = document.getElementById('quiz-score-screen');
  const finalScoreNum = document.getElementById('final-score-num');
  const finalScoreTotal = document.getElementById('final-score-total');
  const finalRatingTitle = document.getElementById('final-rating-title');
  const finalRatingDesc = document.getElementById('final-rating-desc');
  const quizContinueBtn = document.getElementById('quiz-continue-btn');
  const quizRetryBtn = document.getElementById('quiz-retry-btn');

  function prepareActiveSet() {
    const { daysRemaining } = getWeeklyQuizState();
    if (quizWeeklyBanner) {
      quizWeeklyBanner.innerHTML = `🗓️ <strong>Weekly Cycle Active</strong> • 100 Questions Bank • Cycle Resets in <strong>${daysRemaining} Day${daysRemaining > 1 ? 's' : ''}</strong>`;
    }

    const totalSets = Math.ceil(QUIZ_QUESTIONS.length / 15); // 7 sets
    if (currentSetIndex >= totalSets) {
      currentSetIndex = 0;
      localStorage.setItem(KEYS.QUIZ_SET_INDEX, '0');
    }

    const startIdx = currentSetIndex * 15;
    activeQuestionsRound = QUIZ_QUESTIONS.slice(startIdx, startIdx + 15);
  }

  function renderQuizQuestion() {
    if (!quizOptionsContainer) return;
    prepareActiveSet();

    answerSelected = false;
    if (quizExplanation) quizExplanation.classList.remove('show');
    if (quizNextBtn) quizNextBtn.style.display = 'none';

    const globalQNum = (currentSetIndex * 15) + currentQIndexInSet + 1;
    const totalSetQCount = activeQuestionsRound.length;
    const data = activeQuestionsRound[currentQIndexInSet];

    if (quizQNum) quizQNum.textContent = `Question ${currentQIndexInSet + 1} of ${totalSetQCount} (Global Q ${globalQNum} of 100)`;
    if (quizScoreLive) quizScoreLive.textContent = `Score: ${quizScore}`;
    if (quizProgressFill) quizProgressFill.style.width = `${((currentQIndexInSet + 1) / totalSetQCount) * 100}%`;
    if (quizQuestionText) quizQuestionText.textContent = data.q;

    quizOptionsContainer.innerHTML = '';

    data.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.innerHTML = `
        <span>${optText}</span>
        <span class="opt-status-icon"></span>
      `;

      btn.addEventListener('click', () => {
        if (answerSelected) return;
        answerSelected = true;

        const allOpts = quizOptionsContainer.querySelectorAll('.quiz-option');
        allOpts.forEach(o => o.classList.add('disabled'));

        if (idx === data.answer) {
          btn.classList.add('correct');
          btn.querySelector('.opt-status-icon').textContent = '✅';
          quizScore++;
          if (quizScoreLive) quizScoreLive.textContent = `Score: ${quizScore}`;
        } else {
          btn.classList.add('incorrect');
          btn.querySelector('.opt-status-icon').textContent = '❌';

          allOpts[data.answer].classList.add('correct');
          allOpts[data.answer].querySelector('.opt-status-icon').textContent = '✅';
        }

        if (quizExplanation) {
          quizExplanation.innerHTML = `<strong>💡 Explanation:</strong> ${data.explanation}`;
          quizExplanation.classList.add('show');
        }
        if (quizNextBtn) quizNextBtn.style.display = 'inline-flex';
      });

      quizOptionsContainer.appendChild(btn);
    });
  }

  if (quizNextBtn) {
    quizNextBtn.addEventListener('click', () => {
      currentQIndexInSet++;
      if (currentQIndexInSet < activeQuestionsRound.length) {
        renderQuizQuestion();
      } else {
        showQuizResults();
      }
    });
  }

  function showQuizResults() {
    if (quizPlayingView) quizPlayingView.style.display = 'none';
    if (quizScoreScreen) quizScoreScreen.classList.add('show');

    const totalSetCount = activeQuestionsRound.length;
    if (finalScoreNum) finalScoreNum.textContent = quizScore;
    if (finalScoreTotal) finalScoreTotal.textContent = `out of ${totalSetCount}`;

    const totalSets = Math.ceil(QUIZ_QUESTIONS.length / 15);
    const nextSetNumber = currentSetIndex + 2;

    if (quizContinueBtn) {
      if (currentSetIndex + 1 < totalSets) {
        quizContinueBtn.querySelector('span').textContent = `⏩ Next Set (${nextSetNumber} of ${totalSets})`;
        quizContinueBtn.style.display = 'inline-flex';
      } else {
        quizContinueBtn.querySelector('span').textContent = `🏆 Reset & Repeat 100 Questions`;
        quizContinueBtn.style.display = 'inline-flex';
      }
    }

    if (finalRatingTitle && finalRatingDesc) {
      const ratio = quizScore / totalSetCount;
      if (ratio >= 0.9) {
        finalRatingTitle.textContent = 'Excellent! 🌟';
        finalRatingDesc.textContent = 'Outstanding nutrition intelligence! You are an expert on healthy Indian eating habits.';
      } else if (ratio >= 0.7) {
        finalRatingTitle.textContent = 'Great job! 👏';
        finalRatingDesc.textContent = 'Very impressive score! You have a solid grasp of nutrition and hydration fundamentals.';
      } else if (ratio >= 0.5) {
        finalRatingTitle.textContent = 'Good effort! 💪';
        finalRatingDesc.textContent = 'Good attempt! Review the Healthy Habits section to boost your knowledge further.';
      } else {
        finalRatingTitle.textContent = 'Keep learning! 🌱';
        finalRatingDesc.textContent = 'Don’t worry! Explore our recipe guides and educational sections to become a nutrition pro.';
      }
    }
  }

  if (quizContinueBtn) {
    quizContinueBtn.addEventListener('click', () => {
      const totalSets = Math.ceil(QUIZ_QUESTIONS.length / 15);
      currentSetIndex = (currentSetIndex + 1) % totalSets;
      localStorage.setItem(KEYS.QUIZ_SET_INDEX, currentSetIndex.toString());
      currentQIndexInSet = 0;
      quizScore = 0;

      if (quizScoreScreen) quizScoreScreen.classList.remove('show');
      if (quizPlayingView) quizPlayingView.style.display = 'block';
      renderQuizQuestion();
    });
  }

  if (quizRetryBtn) {
    quizRetryBtn.addEventListener('click', () => {
      currentQIndexInSet = 0;
      quizScore = 0;
      if (quizScoreScreen) quizScoreScreen.classList.remove('show');
      if (quizPlayingView) quizPlayingView.style.display = 'block';
      renderQuizQuestion();
    });
  }

  /* ==========================================================================
     11. HEALTHY CHALLENGES MODULE 🏆
     ========================================================================== */
  const CHALLENGES_DATA = [
    { id: 'c1', title: '7-Day Hydration Challenge 💧', desc: 'Drink your full target of 8 glasses (2 Liters) of clean water every single day.', duration: '7 Days', icon: '💧' },
    { id: 'c2', title: '7-Day Healthy Breakfast Challenge 🍳', desc: 'Fuel your morning with a wholesome dish like Poha, Upma, or Moong Dal Chilla.', duration: '7 Days', icon: '🍳' },
    { id: 'c3', title: 'Fruit-a-Day Challenge 🍎', desc: 'Eat at least 1 whole fresh seasonal fruit like apple, papaya, or banana daily.', duration: '7 Days', icon: '🍎' },
    { id: 'c4', title: 'Healthy Snack Challenge 🥗', desc: 'Replace packaged fried chips with roasted makhana, sprouts, or nuts.', duration: '7 Days', icon: '🥗' },
    { id: 'c5', title: 'Smart Drinks Challenge 🥤', desc: 'Avoid all carbonated sugary sodas; drink water or fresh buttermilk instead.', duration: '7 Days', icon: '🥤' },
    { id: 'c6', title: '7-Day Veggie Challenge 🥦', desc: 'Include 2 full portions of green vegetables or fresh salad with your meals.', duration: '7 Days', icon: '🥦' }
  ];

  const challengesGridContainer = document.getElementById('challenges-grid-container');
  let challengesProgress = JSON.parse(localStorage.getItem(KEYS.CHALLENGES)) || {};

  function renderChallenges() {
    if (!challengesGridContainer) return;
    challengesGridContainer.innerHTML = '';

    CHALLENGES_DATA.forEach(ch => {
      const daysState = challengesProgress[ch.id] || Array(7).fill(false);
      const completedDays = daysState.filter(Boolean).length;
      const percent = Math.round((completedDays / 7) * 100);
      const isComplete = completedDays === 7;

      const card = document.createElement('div');
      card.className = 'challenge-card';

      let dayBoxesHTML = '';
      for (let d = 0; d < 7; d++) {
        const checked = daysState[d];
        dayBoxesHTML += `
          <label class="day-box ${checked ? 'checked' : ''}">
            <span>D${d + 1}</span>
            <input type="checkbox" data-cid="${ch.id}" data-day="${d}" ${checked ? 'checked' : ''}>
          </label>
        `;
      }

      card.innerHTML = `
        <div class="challenge-header">
          <div class="challenge-icon">${ch.icon}</div>
          <div class="challenge-title-group">
            <h3>${ch.title}</h3>
            <span class="challenge-duration">🎯 ${ch.duration}</span>
          </div>
        </div>

        <p class="challenge-desc">${ch.desc}</p>

        <div class="challenge-checklist">
          ${dayBoxesHTML}
        </div>

        <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:700; margin-bottom:0.4rem;">
          <span>Progress (${completedDays}/7 Days)</span>
          <span>${percent}%</span>
        </div>

        <div class="challenge-progress-bar">
          <div class="challenge-progress-fill" style="width: ${percent}%;"></div>
        </div>

        ${isComplete ? `
          <div style="background:#DCFCE7; color:#15803D; font-weight:800; text-align:center; padding:0.6rem; border-radius:var(--radius-sm); margin-bottom:1rem;">
            Challenge Completed! 🎉
          </div>
        ` : ''}

        <div class="challenge-actions">
          <button class="btn btn-primary btn-sm mark-today-btn" data-cid="${ch.id}">
            <span>Mark Today Complete</span>
          </button>
          <button class="btn btn-outline btn-sm reset-challenge-btn" data-cid="${ch.id}">
            <span>Reset</span>
          </button>
        </div>
      `;

      challengesGridContainer.appendChild(card);
    });

    document.querySelectorAll('.day-box input').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const cid = e.target.getAttribute('data-cid');
        const dayIdx = parseInt(e.target.getAttribute('data-day'));
        if (!challengesProgress[cid]) challengesProgress[cid] = Array(7).fill(false);
        challengesProgress[cid][dayIdx] = e.target.checked;
        localStorage.setItem(KEYS.CHALLENGES, JSON.stringify(challengesProgress));
        renderChallenges();
        checkAndUpdateChallengeChecklist();
      });
    });

    document.querySelectorAll('.mark-today-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cid = btn.getAttribute('data-cid');
        if (!challengesProgress[cid]) challengesProgress[cid] = Array(7).fill(false);
        const firstUnchecked = challengesProgress[cid].indexOf(false);
        if (firstUnchecked !== -1) {
          challengesProgress[cid][firstUnchecked] = true;
          localStorage.setItem(KEYS.CHALLENGES, JSON.stringify(challengesProgress));
          renderChallenges();
          checkAndUpdateChallengeChecklist();
        } else {
          alert('🎉 Challenge is already fully completed!');
        }
      });
    });

    document.querySelectorAll('.reset-challenge-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cid = btn.getAttribute('data-cid');
        challengesProgress[cid] = Array(7).fill(false);
        localStorage.setItem(KEYS.CHALLENGES, JSON.stringify(challengesProgress));
        renderChallenges();
        checkAndUpdateChallengeChecklist();
      });
    });
  }

  function checkAndUpdateChallengeChecklist() {
    const hasAnyChallengeProgress = Object.values(challengesProgress).some(arr => arr.includes(true));
    const dailyChecklistContainer = document.getElementById('daily-checklist-container');
    if (!dailyChecklistContainer) return;
    const checklistItems = dailyChecklistContainer.querySelectorAll('.checklist-item input');
    if (checklistItems[5]) {
      checklistItems[5].checked = hasAnyChallengeProgress;
      saveDailyChecklistState();
    }
  }

  /* ==========================================================================
     12. HEALTHY DAY SCORE MODULE
     ========================================================================== */
  const dailyChecklistContainer = document.getElementById('daily-checklist-container');

  function initDailyChecklist() {
    if (!dailyChecklistContainer) return;
    const checklistState = getChecklistState();
    const checkboxes = dailyChecklistContainer.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((chk, idx) => {
      chk.checked = checklistState[idx] || false;
      const parentLabel = chk.closest('.checklist-item');
      if (parentLabel) {
        if (chk.checked) parentLabel.classList.add('checked');
        else parentLabel.classList.remove('checked');
      }

      chk.addEventListener('change', () => {
        saveDailyChecklistState();
      });
    });

    calculateScore();
  }

  /* ==========================================================================
     13. MASTER INITIALIZATION ON DOM LOAD
     ========================================================================== */
  initAuth();
  initTheme();
  renderWaterTracker();
  renderMealPlanner();
  renderRecipes();
  renderQuizQuestion();
  renderChallenges();
  initDailyChecklist();

});
