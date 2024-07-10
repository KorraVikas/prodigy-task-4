document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('header nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();


        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        alert(`Thank you, ${name}! Your message "${message}" has been sent.`);
        this.reset(); 
    });

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectTitle = card.querySelector('h3').textContent;
            const projectDescription = card.querySelector('p').textContent;

            alert(`Project: ${projectTitle}\nDescription: ${projectDescription}`);
        });
    });
});
