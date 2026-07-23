(() => {
  const root = document.documentElement;
  const english = {
    'Айзат Гарафутдинов': 'Aizat Garafutdinov',
    'Айзат Гарафутдинов — AI / ML Engineer': 'Aizat Garafutdinov — AI / ML Engineer',
    'Айзат Гарафутдинов — AI / ML Engineer. Machine Learning, Computer Vision, обработка ЭМГ-сигналов, LLM-системы, Python Backend и 30 научных работ.': 'Aizat Garafutdinov — AI / ML Engineer. Machine Learning, Computer Vision, EMG signal processing, LLM systems, Python backend, and 30 research papers.',
    'Machine Learning, Computer Vision, обработка сигналов, LLM-системы, Python Backend и научные работы.': 'Machine Learning, Computer Vision, signal processing, LLM systems, Python backend, and research publications.',
    'Перейти к содержанию': 'Skip to content',
    'На первый экран': 'Back to top',
    'Открыть меню': 'Open menu',
    'Закрыть меню': 'Close menu',
    'Основная навигация': 'Primary navigation',
    'Роботы': 'Robotics',
    'Кейсы': 'Case Studies',
    'Научные работы': 'Research Papers',
    'Опыт': 'Experience',
    'Навыки': 'Skills',
    'Контакты': 'Contact',
    'Открыт к удалённой работе': 'Open to remote work',
    'Разрабатываю LLM-системы, решения компьютерного зрения и backend-сервисы на Python.': 'I build LLM systems, computer vision solutions, and Python backend services.',
    'Работаю с данными на всём пути от разметки и подготовки выборок до обучения, оценки качества и анализа ошибок.': 'I work with data across the full lifecycle, from annotation and dataset preparation to training, evaluation, and error analysis.',
    'Смотреть проекты': 'View projects',
    'Основной стек': 'Core tech stack',
    'ML-пайплайн и связанный опыт': 'ML pipeline and related experience',
    'Работа с изображениями, сигналами и экспериментальными данными': 'Working with images, signals, and experimental data',
    'Данные': 'Data',
    'Датасет из 5 000 000 изображений и квантовые данные в лаборатории': 'A dataset of 5,000,000 images and quantum data collected in the laboratory',
    'Разметка и QC': 'Annotation & QC',
    'PyTorch, TensorFlow/Keras, scikit-learn, YOLO и MediaPipe': 'PyTorch, TensorFlow/Keras, scikit-learn, YOLO, and MediaPipe',
    'Обучение': 'Training',
    'Валидация, сравнение подходов и анализ ошибок модели': 'Validation, approach comparison, and model error analysis',
    'Оценка': 'Evaluation',
    'FastAPI, Django, Flask, PostgreSQL и Docker': 'FastAPI, Django, Flask, PostgreSQL, and Docker',
    'API и сервис': 'API & Service',
    'Ключевые факты': 'Key facts',
    'изображений в датасете': 'images in the dataset',
    ' года': ' years',
    '3 года': '3 years',
    'исследовательского и инженерного опыта': 'of research and engineering experience',
    'научных работ': 'research papers',
    'LLM, RAG и AI Agents': 'LLMs, RAG, and AI Agents',
    'Рабочие Python-системы с API, тестами, Docker-конфигурацией и воспроизводимым офлайн-режимом без платных ключей.': 'Production-ready Python systems with APIs, tests, Docker configuration, and a reproducible offline mode that requires no paid API keys.',
    'Схема поиска релевантных фрагментов документов в RAG-системе': 'Diagram of relevant document passage retrieval in a RAG system',
    'Ingestion, chunking, retrieval, цитаты и оценка качества ответов.': 'Ingestion, chunking, retrieval, citations, and answer quality evaluation.',
    'Схема маршрутов, инструментов и проверок в агентном workflow': 'Diagram of routes, tools, and checks in an agent workflow',
    'Планирование, вызов инструментов, review и трассируемые переходы состояния.': 'Planning, tool calls, review, and traceable state transitions.',
    'Схема маршрутизации запросов между моделями через LLM gateway': 'Diagram of request routing across models through an LLM gateway',
    'Маршрутизация провайдеров, retry, timeout, rate limit, кэш и метрики.': 'Provider routing, retries, timeouts, rate limits, caching, and metrics.',
    'Робототехнические проекты': 'Robotics Projects',
    'От симуляции к реальной конструкции': 'From Simulation to Real Hardware',
    'Моделирование движения, проверка управляющей политики и работа с аппаратной частью робота.': 'Motion modeling, control policy validation, and hands-on work with robot hardware.',
    'Демонстрация движения гуманоидного робота': 'Humanoid robot motion demonstration',
    'Ваш браузер не поддерживает видео.': 'Your browser does not support video.',
    'Открыть файл': 'Open file',
    '01 / Видео': '01 / Video',
    'Демонстрация движения': 'Motion Demonstration',
    'Гуманоидный робот': 'Humanoid Robot',
    'Настраиваю параметры модели и сценарии тестирования, запускаю обучение, проверяю checkpoint-модели и анализирую поведение управляющей политики.': 'I configure model parameters and test scenarios, run training, validate model checkpoints, and analyze control policy behavior.',
    'Проверка устойчивости поведения в симуляции': 'Evaluating behavioral stability in simulation',
    'Подготовка модели к запуску вне симулятора': 'Preparing the model for deployment outside simulation',
    'Учёт ограничений приводов, датчиков и управляющих сигналов': 'Accounting for actuator, sensor, and control signal constraints',
    'Аппаратная часть · Embedded': 'Hardware · Embedded',
    'Двуногий робот': 'Biped Robot',
    'На фотографии показана платформа во время сборки и отладки. В конструкции видны камера, вычислительные платы, силовая электроника, приводы и изготовленные детали корпуса.': 'The photo shows the platform during assembly and debugging. Its camera, computing boards, power electronics, actuators, and custom-made structural parts are visible.',
    '3D-модели деталей и узлов для сборки и тестирования': '3D models of parts and assemblies for prototyping and testing',
    'Программирование, прошивка и отладка микроконтроллеров': 'Microcontroller programming, firmware development, and debugging',
    'Проверка сигналов и работоспособности исполнительных механизмов': 'Signal validation and actuator testing',
    'Двуногий робот во время сборки и отладки, вид спереди': 'Front view of the biped robot during assembly and debugging',
    '02 / Фото': '02 / Photo',
    'Сборка и отладка платформы': 'Platform Assembly and Debugging',
    'Рендер 3D-модели бионической кисти с подвижными пальцами': 'Render of a 3D bionic hand model with articulated fingers',
    '03 / Проект': '03 / Project',
    'Бионическая кисть': 'Bionic Hand',
    'Победитель': 'Winner',
    'программа «Студенческий стартап»': 'Student Startup program',
    'Управление кистью по мышечным сигналам': 'Hand Control Using Muscle Signals',
    'Разработал датчики для регистрации ЭМГ-сигналов и нейросетевую модель на базе Transformer. Модель обрабатывает временные сигналы и классифицирует команды для управления кистью.': 'I developed sensors for capturing EMG signals and a Transformer-based neural network model. The model processes time-series signals and classifies commands for hand control.',
    'Разработка и сборка датчиков для регистрации сигналов': 'Design and assembly of signal acquisition sensors',
    'Подготовка данных, предобработка и обучение модели': 'Data preparation, preprocessing, and model training',
    'Анализ ошибок и интеграция алгоритма с аппаратной частью': 'Error analysis and integration of the algorithm with the hardware',
    'Избранные кейсы': 'Selected Case Studies',
    'Работа с данными и моделями': 'Working with Data and Models',
    'Пайплайн подготовки, разметки и обучения на крупном датасете изображений': 'Pipeline for preparing, annotating, and training on a large image dataset',
    'CV-пайплайн для датасета из 5 млн изображений': 'Computer Vision Pipeline for a Dataset of 5 Million Images',
    'Участие в подготовке и разметке крупного набора изображений, обучении моделей компьютерного зрения и анализе ошибок.': 'Contributed to the preparation and annotation of a large image dataset, computer vision model training, and error analysis.',
    'Мой вклад': 'My Contribution',
    'Подготовка и проверка данных, разметка, обучение моделей, анализ результатов': 'Data preparation and validation, annotation, model training, and result analysis',
    'Инструменты': 'Tools',
    'Python и инструменты компьютерного зрения': 'Python and computer vision tools',
    'Масштаб': 'Scale',
    '5 000 000 изображений': '5,000,000 images',
    'Код и данные проекта не публикуются.': 'The project code and data are not publicly available.',
    'Лабораторный пайплайн разметки и анализа данных фотонного эксперимента': 'Laboratory pipeline for annotating and analyzing photonic experiment data',
    'Разметка квантовых данных': 'Quantum Data Annotation',
    'Готовил и размечал экспериментальные данные в лаборатории, проверял качество выборки перед последующим анализом и обучением моделей.': 'I prepared and annotated experimental laboratory data and validated dataset quality before further analysis and model training.',
    'Лабораторные данные · Annotation · Quality Control': 'Laboratory Data · Annotation · Quality Control',
    'Многоканальные ЭМГ-сигналы проходят обработку и классификацию для управления кистью': 'Multichannel EMG signals are processed and classified for hand control',
    'Классификация многоканальных ЭМГ‑сигналов': 'Multichannel EMG Signal Classification',
    'Разработал ML-пайплайн для мышечных сигналов. В него входят регистрация, фильтрация, сегментация временных рядов, обучение модели на базе Transformer, классификация команд и анализ ошибок.': 'I developed an ML pipeline for muscle signals that covers acquisition, filtering, time-series segmentation, Transformer-based model training, command classification, and error analysis.',
    'Архитектура Python API с базой данных, фоновыми задачами и интеграциями': 'Python API architecture with a database, background tasks, and integrations',
    'API, боты и интеграции': 'APIs, Bots, and Integrations',
    'Разрабатывал REST API, Telegram- и Discord-ботов, парсеры, отдельные backend-сервисы и интеграции с внешними API.': 'I developed REST APIs, Telegram and Discord bots, parsers, standalone backend services, and integrations with external APIs.',
    'Подтверждённый список статей, материалов конференций и научных школ за 2022–2026 годы. Работы сверены с eLIBRARY и официальными сборниками.': 'A verified list of journal articles, conference proceedings, and research school publications from 2022 to 2026. The records were cross-checked against eLIBRARY and official proceedings. Official titles are shown in the original publication language.',
    'Сводка научной деятельности': 'Research activity summary',
    'период публикаций': 'publication period',
    'статьи в журналах': 'journal articles',
    'регистрации программ': 'software registrations',
    'Избранное': 'Selected Papers',
    'ML, биосигналы и анализ данных': 'ML, Biosignals, and Data Analysis',
    'Профиль eLIBRARY': 'eLIBRARY Profile',
    'ЭМГ · Mechatronics': 'EMG · Mechatronics',
    'ЭМГ · Deep Learning': 'EMG · Deep Learning',
    'Полный список': 'Full List',
    '30 научных работ по годам': '30 research papers by year',
    'Раскрыть': 'Expand',
    'Скрыть': 'Collapse',
    '1 работа': '1 paper',
    '8 работ': '8 papers',
    '9 работ': '9 papers',
    '11 работ': '11 papers',
    'Подтверждённые результаты': 'Verified Outcomes',
    'Программы и исследовательские проекты': 'Software and Research Projects',
    'Программа для ЭВМ · 2025': 'Registered Software · 2025',
    'Измерение углов сгибания пальцев по видеопотоку': 'Real-Time Finger Flexion Angle Measurement from Video',
    'Свидетельство № 2025614632. Авторы А. А. Гарафутдинов и Г. В. Никишина.': 'Registration Certificate No. 2025614632. Authors A. A. Garafutdinov and G. V. Nikishina.',
    'Запись': 'Record',
    'Программы для ЭВМ · 2026': 'Registered Software · 2026',
    'Обработка ЭМГ и позиционирование фаланг': 'EMG Processing and Phalanx Positioning',
    'Свидетельства № 2026611013 и № 2026611014, зарегистрированы 16 января 2026 года.': 'Registration Certificates No. 2026611013 and No. 2026611014, registered on January 16, 2026.',
    'ФИПС': 'FIPS',
    'Студенческий стартап · V очередь': 'Student Startup · Cohort V',
    'Система распознавания мышечных сигналов для бионической руки': 'Muscle Signal Recognition System for a Bionic Hand',
    'Проект вошёл в официальный список победителей программы.': 'The project was included in the program’s official list of winners.',
    'Официальный список': 'Official List',
    'Всероссийский инженерный конкурс · 2025/26': 'All-Russian Engineering Competition · 2025/26',
    'Нейросетевая система анализа ЭМГ-сигналов': 'Neural Network System for EMG Signal Analysis',
    'Полуфиналист направления «Машинное обучение и искусственный интеллект».': 'Semifinalist in the Machine Learning and Artificial Intelligence track.',
    'Результаты': 'Results',
    'Второй трек': 'Secondary Track',
    'Backend для ML-систем и самостоятельных Python-сервисов': 'Backend for ML Systems and Standalone Python Services',
    'Backend-компетенции использую для разработки API, хранения данных и интеграций на Python.': 'I use my backend engineering skills to build APIs, data storage, and Python integrations.',
    'Боты, парсеры, внешние API': 'Bots, parsers, external APIs',
    'Опыт и места работы': 'Experience and Roles',
    'Исследования, разработка технических систем и преподавание точных дисциплин.': 'Research, technical systems development, and teaching STEM subjects.',
    '2022 — сейчас': '2022 — Present',
    'КНИТУ-КАИ им. А. Н. Туполева': 'Kazan National Research Technical University named after A. N. Tupolev (KNRTU-KAI)',
    'ML, исследования и инженерная работа': 'ML, Research, and Engineering',
    'Работа с моделями машинного обучения, экспериментальными данными и аппаратной частью исследовательских систем.': 'Working with machine learning models, experimental data, and the hardware components of research systems.',
    'ML и исследовательская работа': 'ML and Research',
    'Подготовка и разметка данных, обучение моделей, оценка качества, анализ ошибок, ЭМГ, computer vision и квантовые данные.': 'Data preparation and annotation, model training and evaluation, error analysis, EMG, computer vision, and quantum data.',
    'Техник': 'Technician',
    'Сборка макетов, распайка, изготовление плат и разработка принципиальных схем.': 'Prototype assembly, soldering, PCB fabrication, and schematic design.',
    '2022 — 2023 · 6 месяцев': '2022 — 2023 · 6 months',
    'Репетитор информатики и математики': 'Computer Science and Mathematics Tutor',
    'Проводил индивидуальные занятия и подбирал материал под уровень ученика.': 'Delivered one-on-one lessons and adapted materials to each student’s level.',
    'Объяснение алгоритмов, основ программирования и методов решения задач': 'Explaining algorithms, programming fundamentals, and problem-solving methods',
    'Подготовка заданий по информатике и математике': 'Preparing computer science and mathematics exercises',
    'Разбор ошибок и закрепление материала на практике': 'Reviewing mistakes and reinforcing concepts through practice',
    'Дополнительное образование': 'Professional Development',
    'Курсы и профессиональная подготовка': 'Courses and Professional Training',
    'Программы по проектированию, информационным системам, embedded-разработке, управлению проектами, английскому языку и Python.': 'Programs in digital design, information systems, embedded development, project management, English, and Python.',
    'Цифровое проектирование электротехнических и электронных устройств': 'Digital Design of Electrical and Electronic Devices',
    'Специалист в области цифрового проектирования электротехнических и электронных устройств': 'Specialist in the Digital Design of Electrical and Electronic Devices',
    '1С: ERP Управление предприятием': '1C: ERP Enterprise Management',
    'Специалист по информационным системам': 'Information Systems Specialist',
    '1С: ERP': '1C: ERP',
    'КНИТУ-КАИ · Университет Иннополис': 'KNRTU-KAI · Innopolis University',
    'Разработка киберфизических систем': 'Cyber-Physical Systems Development',
    'Квалификация «Программист». Проектирование систем, объединяющих программную и аппаратную части': 'Software Developer qualification. Design of systems combining software and hardware components.',
    'Технологическое предпринимательство: от идеи до проекта': 'Technology Entrepreneurship from Idea to Project',
    'Специалист по управлению проектами': 'Project Management Specialist',
    'Английский язык в инженерной и академической среде': 'English for Engineering and Academic Environments',
    'Университет Иннополис': 'Innopolis University',
    'Разработка 2D-игр на Python': '2D Game Development with Python',
    'Практический курс объёмом 144 академических часа: Python, ООП, игровой цикл и интерактивная логика': 'A 144-academic-hour practical course covering Python, object-oriented programming, the game loop, and interactive logic.',
    'Матрица компетенций': 'Competency Matrix',
    'Python, PyTorch, TensorFlow/Keras, Transformers, scikit-learn, NumPy, SciPy, обучение и оценка моделей': 'Python, PyTorch, TensorFlow/Keras, Transformers, scikit-learn, NumPy, SciPy, model training and evaluation',
    'OpenCV, YOLO, MediaPipe, подготовка датасетов, разметка, контроль качества и анализ ошибок': 'OpenCV, YOLO, MediaPipe, dataset preparation, annotation, quality control, and error analysis',
    'NVIDIA Isaac Sim, Isaac Lab, Newton, Reinforcement Learning, checkpoint-модели, sim-to-real, датчики и микроконтроллеры': 'NVIDIA Isaac Sim, Isaac Lab, Newton, reinforcement learning, model checkpoints, sim-to-real, sensors, and microcontrollers',
    'RAG, AI Agents, vector search, routing, evaluation, guardrails и tracing': 'RAG, AI agents, vector search, routing, evaluation, guardrails, and tracing',
    'ЭМГ, временные ряды, классификация сигналов, предобработка, выделение признаков, MATLAB и контроль качества данных': 'EMG, time series, signal classification, preprocessing, feature extraction, MATLAB, and data quality control',
    'FastAPI, Django, Flask, REST API, PostgreSQL, SQLAlchemy, Docker, pytest, Git и Linux': 'FastAPI, Django, Flask, REST APIs, PostgreSQL, SQLAlchemy, Docker, pytest, Git, and Linux',
    'Обсудим ML или Python-задачу': 'Let’s Discuss an ML or Python Project',
    'Рассматриваю удалённую работу в ML Engineering и Computer Vision. Также открыт к Backend-проектам, связанным с API, интеграциями и ML-сервисами.': 'I am open to remote ML Engineering and Computer Vision roles, as well as backend projects involving APIs, integrations, and ML services.',
    'Резюме': 'Resume',
    'ML Engineer на hh.ru': 'ML Engineer Resume on hh.ru',
    'Скопировать email': 'Copy email',
    'Скопировано': 'Copied',
    'Скопируйте ayzatg@yandex.ru': 'Please copy ayzatg@yandex.ru manually',
    '© 2026 Айзат Гарафутдинов': '© 2026 Aizat Garafutdinov',
    'Наверх ↑': 'Back to top ↑'
  };

  const textEntries = [];
  const attributeEntries = [];
  const translatableAttributes = ['alt', 'aria-label', 'content', 'data-detail', 'data-count-suffix'];
  const ignoredParents = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG']);

  const translatedValue = (value, language) => {
    if (language !== 'en') return value;
    if (english[value]) return english[value];
    const trimmed = value.trim();
    if (!english[trimmed]) return value;
    const leading = value.match(/^\s*/)?.[0] || '';
    const trailing = value.match(/\s*$/)?.[0] || '';
    return `${leading}${english[trimmed]}${trailing}`;
  };

  const collectTranslatables = () => {
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      if (!ignoredParents.has(node.parentElement?.tagName) && english[node.nodeValue.trim()]) {
        textEntries.push({ node, original: node.nodeValue });
      }
      node = walker.nextNode();
    }

    document.querySelectorAll('*').forEach((element) => {
      translatableAttributes.forEach((name) => {
        if (!element.hasAttribute(name)) return;
        const original = element.getAttribute(name);
        if (english[original] || english[original.trim()]) attributeEntries.push({ element, name, original });
      });
    });

    document.querySelectorAll('.research-grid h3, .research-grid article > p, .work-list h4, .work-list p')
      .forEach((element) => element.setAttribute('lang', 'ru'));
  };

  const getLanguage = () => root.dataset.language === 'en' ? 'en' : 'ru';
  const getTheme = () => root.dataset.theme === 'dark' ? 'dark' : 'light';
  const t = (value) => translatedValue(value, getLanguage()).trim();

  const updateControlLabels = () => {
    const language = getLanguage();
    const theme = getTheme();
    const languageToggle = document.querySelector('[data-language-toggle]');
    const languageLabel = document.querySelector('[data-language-label]');
    const themeToggle = document.querySelector('[data-theme-toggle]');
    if (languageLabel) languageLabel.textContent = language === 'en' ? 'RU' : 'EN';
    if (languageToggle) languageToggle.setAttribute('aria-label', language === 'en' ? 'Переключить на русский' : 'Switch to English');
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
      themeToggle.setAttribute(
        'aria-label',
        language === 'en'
          ? (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme')
          : (theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему')
      );
    }
  };

  const storePreference = (key, value) => {
    try { localStorage.setItem(key, value); } catch {}
  };

  const updateLanguageUrl = (language) => {
    try {
      const url = new URL(window.location.href);
      if (language === 'en') url.searchParams.set('lang', 'en');
      else url.searchParams.delete('lang');
      history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
    } catch {}
  };

  const applyLanguage = (language, { persist = true, updateUrl = true } = {}) => {
    const nextLanguage = language === 'en' ? 'en' : 'ru';
    root.dataset.language = nextLanguage;
    root.lang = nextLanguage;
    textEntries.forEach(({ node, original }) => { node.nodeValue = translatedValue(original, nextLanguage); });
    attributeEntries.forEach(({ element, name, original }) => { element.setAttribute(name, translatedValue(original, nextLanguage)); });
    if (persist) storePreference('portfolio-language', nextLanguage);
    if (updateUrl) updateLanguageUrl(nextLanguage);
    updateControlLabels();
    window.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { language: nextLanguage } }));
  };

  const applyTheme = (theme, { persist = true } = {}) => {
    const nextTheme = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = nextTheme;
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.content = nextTheme === 'dark' ? '#101519' : '#f3f1ec';
    if (persist) storePreference('portfolio-theme', nextTheme);
    updateControlLabels();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.animate([{ opacity: .88 }, { opacity: 1 }], { duration: 260, easing: 'ease-out' });
    }
  };

  collectTranslatables();
  window.portfolioI18n = { t, applyLanguage, getLanguage };

  let queryLanguage = '';
  try { queryLanguage = new URLSearchParams(window.location.search).get('lang') || ''; } catch {}
  const initialLanguage = queryLanguage === 'en' || queryLanguage === 'ru' ? queryLanguage : getLanguage();
  applyLanguage(initialLanguage, { persist: true, updateUrl: queryLanguage === 'en' || queryLanguage === 'ru' });
  applyTheme(getTheme(), { persist: false });

  document.querySelector('[data-language-toggle]')?.addEventListener('click', () => {
    applyLanguage(getLanguage() === 'en' ? 'ru' : 'en');
  });
  document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
    applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });

  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  systemTheme.addEventListener?.('change', (event) => {
    let hasSavedTheme = false;
    try { hasSavedTheme = Boolean(localStorage.getItem('portfolio-theme')); } catch {}
    if (!hasSavedTheme) applyTheme(event.matches ? 'dark' : 'light', { persist: false });
  });
})();
