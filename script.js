// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const surpriseBtn = document.getElementById('surprise-btn');
    const trickSection = document.getElementById('trick-section');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const loveMessage = document.getElementById('love-message');

    // Falling hearts animation using canvas
    const canvas = document.getElementById('hearts-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts = [];
    class Heart {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * -canvas.height;
            this.size = Math.random() * 20 + 10;
            this.speed = Math.random() * 2 + 1;
            this.angle = Math.random() * 360;
        }
        update() {
            this.y += this.speed;
            this.x += Math.sin(this.angle) * 0.5; // Wavy motion
            if (this.y > canvas.height) {
                this.y = -this.size;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.fillStyle = '#ff69b4';
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 3, this.x, this.y + this.size);
            ctx.bezierCurveTo(this.x + this.size, this.y + this.size / 3, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
            ctx.fill();
        }
    }

    function animateHearts() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hearts.forEach(heart => {
            heart.update();
            heart.draw();
        });
        requestAnimationFrame(animateHearts);
    }

    // Start with 50 hearts
    for (let i = 0; i < 50; i++) {
        hearts.push(new Heart());
    }
    animateHearts();

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Surprise button: Show trick section and confetti
    surpriseBtn.addEventListener('click', () => {
        surpriseBtn.classList.add('hidden');
        trickSection.classList.remove('hidden');
        // Festive confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff69b4', '#800080', '#ff0000', '#00ff00']
        });
    });

    // Yes button: Show love message and more confetti
    yesBtn.addEventListener('click', () => {
        trickSection.classList.add('hidden');
        loveMessage.classList.remove('hidden');
        confetti({
            particleCount: 200,
            spread: 100,
            colors: ['#ff69b4', '#ffd700']
        });
    });

    // No button trick: Move away on hover
    noBtn.addEventListener('mouseover', () => {
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        setTimeout(() => {
            noBtn.style.transform = 'translate(0, 0)';
        }, 500);
    });
});