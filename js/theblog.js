document.addEventListener("DOMContentLoaded", function () {
    const graph = document.querySelector('.graph');
    const bars = document.querySelectorAll('.bar');
    let animationStarted = false;

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateBars() {
        if (isElementInViewport(graph)) {
            if (!animationStarted) {
                bars.forEach(bar => {
                    const percentage = parseInt(bar.textContent);
                    const originalWidth = parseFloat(getComputedStyle(bar).width);
                    const targetWidth = percentage * 0.8; // Adjust multiplier as needed
                    const animationDuration = Math.abs(targetWidth - originalWidth) * 10; // Adjust multiplier as needed
                    bar.style.animationDuration = animationDuration + 'ms';
                    bar.classList.add('animate');
                    bar.addEventListener('animationend', () => {
                        bar.classList.remove('animate');
                    });
                });
                animationStarted = true;
            }
        } else {
            animationStarted = false;
            bars.forEach(bar => {
                bar.style.animationDuration = '0s';
                bar.classList.remove('animate');
            });
        }
    }

    function handleScroll() {
        animateBars();
    }

    window.addEventListener('scroll', handleScroll);
    animateBars(); // Check visibility on initial load
});
