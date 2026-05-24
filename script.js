const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        }
        updateCount();
    });
}

// Scroll කරනකොට විතරක් count එක පටන් ගන්න
window.addEventListener('scroll', () => {
    const sectionPos = document.getElementById('stats').getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if(sectionPos < screenPos) {
        startCounters();
    }
}, { once: true }); // එක පාරයි වෙන්නේ
