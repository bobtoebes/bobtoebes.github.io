document.addEventListener('DOMContentLoaded', function() {
    const select = document.querySelector('.language-select');

    function switchLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang]').forEach(element => {
            element.classList.toggle('active', element.dataset.lang === lang);
        });
    }

    select.addEventListener('change', (e) => switchLanguage(e.target.value));

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    sections.forEach((section, i) => {
        section.style.transitionDelay = `${i * 0.06}s`;
        observer.observe(section);
    });
});