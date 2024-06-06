document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.getElementById('typewriter');
    const text = "Hello my name is";
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriter.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            document.getElementById('name').classList.add('visible');
            setTimeout(() => {
                document.getElementById('lorem').classList.add('visible');
            }, 1000);
        }
    }
    type();

    // Function to check element visibility and toggle 'visible' class
    function checkVisibility() {
        const aboutMe = document.getElementById('aboutMe');
        const aboutMePosition = aboutMe.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (aboutMePosition < screenPosition) {
            aboutMe.classList.add('visible');
        } else {
            aboutMe.classList.remove('visible');
        }

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            if (cardPosition < window.innerHeight - 50) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });

        const languages = document.querySelectorAll('.language');
        languages.forEach(language => {
            const languagePosition = language.getBoundingClientRect().top;
            if (languagePosition < window.innerHeight - 50) {
                language.classList.add('visible');
            } else {
                language.classList.remove('visible');
            }
        });

        const contacts = document.querySelectorAll('.contact');
        contacts.forEach(contact => {
            const contactPosition = contact.getBoundingClientRect().top;
            if (contactPosition < window.innerHeight - 50) {
                contact.classList.add('visible');
            } else {
                contact.classList.remove('visible');
            }
        });
    }

    // Add event listener for scroll to check visibility on scroll
    window.addEventListener('scroll', checkVisibility);

    // Check visibility on initial load
    checkVisibility();
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.getAttribute('data-url');
            window.location.href = url;
        });
    });
});