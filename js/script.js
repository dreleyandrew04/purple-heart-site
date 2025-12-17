document.addEventListener('DOMContentLoaded', () => {
    const surpriseBtn = document.getElementById('surprise-btn');
    const trickSection = document.getElementById('trick-section');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const loveMessage = document.getElementById('love-message');

    // Falling snow
    const snowContainer = document.querySelector('.snow-container');
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.textContent = '❄';
        snowflake.style.position = 'absolute';
        snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.opacity = Math.random() * 0.5 + 0.5;
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.animation = 'fall linear infinite';
        snowContainer.appendChild(snowflake);

        setTimeout(() => snowflake.remove(), 10000);
    }

    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh);
            }
        }
    `;
    document.head.appendChild(style);

    setInterval(createSnowflake, 200);

    // Interactions
    surpriseBtn.addEventListener('click', () => {
        surpriseBtn.classList.add('hidden');
        trickSection.classList.remove('hidden');
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#ff69b4', '#ffd700', '#ff0000', '#00ff00'] });
    });

    yesBtn.addEventListener('click', () => {
        trickSection.classList.add('hidden');
        loveMessage.classList.remove('hidden');
        confetti({ particleCount: 300, angle: 90, spread: 100, origin: { y: 0.8 }, colors: ['#ff69b4', '#ffd700', '#ff1493'] });
    });

    // Dodging No button
    noBtn.addEventListener('mouseover', () => {
        noBtn.style.position = 'relative';
        noBtn.style.left = Math.random() * 200 - 100 + 'px';
        noBtn.style.top = Math.random() * 100 - 50 + 'px';
    });
});
