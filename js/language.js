let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    fetch(`assets/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-lang-key]').forEach(element => {
                const key = element.getAttribute('data-lang-key');
                element.textContent = data[key] || element.textContent;
            });
        });
}

// Initialize with English
changeLanguage('en');