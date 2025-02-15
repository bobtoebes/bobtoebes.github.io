document.addEventListener('DOMContentLoaded', function() {
    const select = document.querySelector('.language-select');
    
    function switchLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang]').forEach(element => {
            element.classList.toggle('active', element.dataset.lang === lang);
        });
    }

    select.addEventListener('change', (e) => switchLanguage(e.target.value));
});