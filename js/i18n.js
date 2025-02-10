// 翻译数据对象
const translations = {
    zh: {
        // 导航栏
        'home': '首页',
        'resume': '简历',
        'projects': '项目',
        'github': 'GitHub',

        // 首页
        'hello': '你好，我是白文斌',
        'role': '全栈开发工程师 | 摄影爱好者',
        'view-github': 'GitHub',
        'view-resume': '我的简历',

        // 简历页面
        'resume-title': '履历書',
        'surname': '白',
        'firstname': '文斌',
        'surname-phonetic': 'ハク',
        'firstname-phonetic': 'ブンヒン',
        'address': '東京都大田区蒲田',
        'education': '学历背景',
        'workExperience': '工作经历',
        'skills': '技术技能',
        'certificates': '资格证书',
        'selfIntro': '自我介绍',
        'present': '现在',
        
        // 学历信息
        'study-period': '2022.10 - 2023.10',
        'school-1': '东京海洋大学大学院',
        'major-1': '应用环境系统（博士）',
        'school-2': '东京海洋大学大学院',
        'major-2': '海运物流（硕士）',
        'school-3': '大连海事大学',
        'major-3': '船舶电子电气工程（学士）',
        
        // 工作经历
        'company-1': '雅马哈株式会社',
        'position-1': '音响系统开发（实习）',
        'company-2': '基恩士株式会社',
        'position-2': '工厂自动化产品研修（实习）',
        'company-3': '南京德基广场有限公司',
        'position-3': '媒体设计师',
        
        // 技能分类
        'backend-skills': '后端开发',
        'frontend-skills': '前端开发',
        'ai-tools': 'AI工具',
        'design-skills': '设计技能',
        'graphic-design': '平面设计',
        'video-editing': '视频编辑',
        'photography': '摄影',
        
        // 证书
        'jlpt-n2': '日本語能力試験N2',
        'jlpt-n1': '日本语能力测试N1',
        'toeic': 'TOEIC L&R 775分',
        
        // 自我介绍
        'intro-p1': '作为全栈开发工程师，我精通从Java/SpringBoot后端开发到HTML/CSS/JavaScript前端开发的全面技术栈。',
        'intro-p2': '对AI技术有浓厚兴趣，积极运用ChatGPT和GitHub Copilot等最新AI工具，提高开发效率和代码质量。',

        // GitHub页面
        'githubName': 'Wenbin BAI',
        'githubBio': '全栈开发工程师 | 开源爱好者',
        'followers': '关注者',
        'following': '关注中',
        'repositories': '仓库数量',
        'stars': '获得星标',
        'mainLanguage': '主要语言',
        'popularRepos': '热门仓库',
        'loading': '加载中...',
        'noDescription': '暂无描述',
        'error': '获取GitHub数据时出错，请稍后再试。',
        'retry': '重试',

        // 项目页面
        'projects-title': '项目履历',
        'all': '全部',
        'webDev': 'Web开发',
        'mobileDev': '移动应用',
        'otherProjects': '其他项目',
        'project1-title': 'e-staffing人才派遣管理系统',
        'project2-title': '通信方式选定工具（电柱）',
        'project3-title': 'Java编程培训项目',
        'environment': '开发环境',
        'technologies': '开发语言',
        'tools': '开发工具',
        'project-overview': '项目概要',
        'project1-overview': '开发一个统一管理多家人才派遣公司业务联系和信息的系统。实现人才派遣业务的效率化和管理简单化。',
        'responsibilities': '负责内容',
        'project1-resp1': '设计和实现客户信息管理功能',
        'project1-resp2': '数据库设计和API开发',
        'project1-resp3': '前端页面实现',
        'project1-resp4': '进行单元测试',
        'awards': '获奖履历',
        'award-1': '创发性海洋研究与产业人才培养支持项目奖学金',
        'award-org-1': '日本科学技术振兴机构',
        'award-2': 'ANC2022优秀论文奖',
        'award-org-2': '亚洲航海学会',
        'award-3': 'KEYENCE编程大赛2023秋季特别奖',
        'award-org-3': '基恩士株式会社'
    },
    
    en: {
        // Navigation
        'home': 'Home',
        'resume': 'Resume',
        'projects': 'Projects',
        'github': 'GitHub',

        // Home page
        'hello': "Hello, I'm BAI",
        'role': 'Full Stack Developer | Photography Enthusiast',
        'view-github': 'GitHub',
        'view-resume': 'My Resume',

        // Resume page
        'resume-title': 'Resume',
        'surname': 'BAI',
        'firstname': 'Wenbin',
        'surname-phonetic': 'BAI',
        'firstname-phonetic': 'Wenbin',
        'address': 'Kamata, Ota City, Tokyo, Japan',
        'education': 'Education',
        'workExperience': 'Work Experience',
        'skills': 'Skills',
        'certificates': 'Certificates',
        'selfIntro': 'About Me',
        'present': 'Present',

        // Education
        'study-period': '2022.10 - 2023.10',
        'school-1': 'Tokyo University of Marine Science and Technology',
        'major-1': 'Applied Environmental Studies (Ph.D.)',
        'school-2': 'Tokyo University of Marine Science and Technology',
        'major-2': 'Maritime Technology and Logistics (Master)',
        'school-3': 'Dalian Maritime University',
        'major-3': 'Marine Electronics and Electrical Engineering (Bachelor)',

        // Work Experience
        'company-1': 'YAMAHA Corporation',
        'position-1': 'Audio System Development (Internship)',
        'company-2': 'KEYENCE Corporation',
        'position-2': 'Factory Automation Product Training (Internship)',
        'company-3': 'Nanjing Deji Plaza Co., Ltd.',
        'position-3': 'Media Designer',

        // Skills
        'backend-skills': 'Backend Development',
        'frontend-skills': 'Frontend Development',
        'ai-tools': 'AI Tools',
        'design-skills': 'Design Skills',
        'graphic-design': 'Graphic Design',
        'video-editing': 'Video Editing',
        'photography': 'Photography',

        // Certificates
        'jlpt-n2': 'JLPT N2 Certificate',
        'jlpt-n1': 'JLPT N1 Certificate',
        'toeic': 'TOEIC L&R Score: 775',

        // Self Introduction
        'intro-p1': 'As a full-stack developer, I am proficient in a comprehensive technology stack from Java/SpringBoot backend development to HTML/CSS/JavaScript frontend development.',
        'intro-p2': 'With a strong interest in AI technology, I actively utilize the latest AI tools such as ChatGPT and GitHub Copilot to improve development efficiency and code quality.',

        // GitHub page
        'githubName': 'Wenbin BAI',
        'githubBio': 'Full Stack Developer | Open Source Enthusiast',
        'followers': 'Followers',
        'following': 'Following',
        'repositories': 'Repositories',
        'stars': 'Stars',
        'mainLanguage': 'Main Language',
        'popularRepos': 'Popular Repositories',
        'loading': 'Loading...',
        'noDescription': 'No description',
        'error': 'Error loading GitHub data. Please try again later.',
        'retry': 'Retry',

        // Projects page
        'projects-title': 'Project Portfolio',
        'all': 'All',
        'webDev': 'Web Development',
        'mobileDev': 'Mobile Development',
        'otherProjects': 'Other Projects',
        'project1-title': 'e-staffing Personnel Management System',
        'project2-title': 'Communication Method Selection Tool',
        'project3-title': 'Java Programming Training',
        'environment': 'Environment',
        'technologies': 'Technologies',
        'tools': 'Tools',
        'project-overview': 'Project Overview',
        'project1-overview': 'Development of a centralized system for managing communications and information with multiple staffing agencies.',
        'responsibilities': 'Responsibilities',
        'project1-resp1': 'Design and implementation of client information management',
        'project1-resp2': 'Database design and API development',
        'project1-resp3': 'Frontend implementation',
        'project1-resp4': 'Unit testing',
        'awards': 'Awards & Honors',
        'award-1': 'Support Project for Emergent Ocean Research and Industrial Human Resource Development Scholarship',
        'award-org-1': 'Japan Science and Technology Agency',
        'award-2': 'Distinguished Paper Award in ANC2022',
        'award-org-2': 'Asia Navigation Conference',
        'award-3': 'KEYENCE Programming Contest 2023 Autumn Special Award',
        'award-org-3': 'KEYENCE Corporation'
    },

    ja: {
        // 导航栏
        'home': 'ホーム',
        'resume': '履歴書',
        'projects': 'プロジェクト',
        'github': 'GitHub',

        // 首页
        'hello': 'はじめまして、BAIです',
        'role': 'フルスタックエンジニア | 写真愛好家',
        'view-github': 'GitHub',
        'view-resume': '履歴書',

        // 简历页面
        'resume-title': '履歴書',
        'surname': '白',
        'firstname': '文斌',
        'surname-phonetic': 'ハク',
        'firstname-phonetic': 'ブンヒン',
        'address': '東京都大田区蒲田',
        'education': '学歴',
        'workExperience': '職歴',
        'skills': 'スキル',
        'certificates': '資格',
        'selfIntro': '自己紹介',
        'present': '現在',

        // 学历信息
        'study-period': '2022.10 - 2023.10',
        'school-1': '東京海洋大学大学院',
        'major-1': '応用環境システム（博士）',
        'school-2': '東京海洋大学大学院',
        'major-2': '海運ロジスティックス（修士）',
        'school-3': '大連海事大学',
        'major-3': '船舶電子電気工学（学士）',

        // 工作经历
        'company-1': 'ヤマハ株式会社',
        'position-1': '音響システム開発（インターン）',
        'company-2': 'キーエンス株式会社',
        'position-2': '工場自動化製品研修（インターン）',

        // 技能分类
        'backend-skills': 'バックエンド開発',
        'frontend-skills': 'フロントエンド開発',
        'ai-tools': 'AIツール',
        'design-skills': 'デザインスキル',
        'graphic-design': 'グラフィックデザイン',
        'video-editing': '動画編集',
        'photography': '写真撮影',

        // 证书
        'jlpt-n2': '日本語能力試験N2',
        'jlpt-n1': '日本語能力試験N1',
        'toeic': 'TOEIC L&R 775点',

        // 自我介绍
        'intro-p1': 'フルスタック開発者として、Java/SpringBootバックエンド開発からHTML/CSS/JavaScriptフロントエンド開発まで、幅広い技術スタックを持っています。',
        'intro-p2': 'AI技術に強い関心を持ち、ChatGPTやGitHub Copilotなどの最新のAIツールを積極的に活用し、開発効率とコード品質の向上に取り組んでいます。',

        // GitHub页面
        'githubName': 'Wenbin BAI',
        'githubBio': 'フルスタックエンジニア | オープンソース愛好家',
        'followers': 'フォロワー',
        'following': 'フォロー中',
        'repositories': 'リポジトリ',
        'stars': 'スター',
        'mainLanguage': '主要言語',
        'popularRepos': '人気のリポジトリ',
        'loading': '読み込み中...',
        'noDescription': '説明なし',
        'error': 'データの取得に失敗しました。後でもう一度お試しください。',
        'retry': '再試行',

        // 项目页面
        'projects-title': 'プロジェクト履歴',
        'all': '全て',
        'webDev': 'Web開発',
        'mobileDev': 'モバイル開発',
        'otherProjects': 'その他',
        'project1-title': 'e-staffing人材派遣管理システム',
        'project2-title': '通信方式選定ツール（電柱）',
        'project3-title': 'Javaプログラミング研修',
        'environment': '開発環境',
        'technologies': '開発言語',
        'tools': '開発ツール',
        'project-overview': 'プロジェクト概要',
        'project1-overview': '複数の人材派遣会社との業務連絡や情報管理を一元化するシステムの開発。',
        'responsibilities': '担当業務',
        'project1-resp1': '顧客情報管理機能の設計・実装',
        'project1-resp2': 'データベース設計とAPI開発',
        'project1-resp3': 'フロントエンド画面の実装',
        'project1-resp4': '単体テストの実施',
        'awards': '受賞歴',
        'award-1': '創発的海洋研究・産業人材育成支援プロジェクト奨学金',
        'award-org-1': '科学技術振興機構',
        'award-2': 'ANC2022優秀論文賞',
        'award-org-2': '2022アジア航海学会',
        'award-3': 'キーエンスプログラミングコンテスト2023秋 特別賞',
        'award-org-3': 'キーエンス株式会社'
    }
};

// 当前语言
let currentLang = 'zh';

// 翻译函数
function translate(lang) {
    currentLang = lang;
    
    // 保存语言选择到本地存储
    localStorage.setItem('preferred-language', lang);
    
    // 更新所有带有 data-i18n 属的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // 如果元素是输入框，更新 placeholder
            if (element.tagName === 'INPUT') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // 更新言选择器的激活状态
    document.querySelectorAll('.language-menu a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-lang') === lang);
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    // 从本地存储获取之前选择的语言，如果没有则使用默认语言
    const savedLang = localStorage.getItem('preferred-language') || 'zh';
    
    // 绑定语言切换事件
    document.querySelectorAll('.language-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            translate(lang);
        });
    });
    
    // 初始化翻译
    translate(savedLang);
}); 