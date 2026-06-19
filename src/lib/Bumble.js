const canvas = document.getElementById('fizz-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let maxParticles = 70;
let fizzSpeedMultiplier = 1;
let mouseX = -1000;
let mouseY = -1000;

// Handle Responsive Canvas Sizing
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class FizzBubble {
    constructor(isExplosion = false, clickX = 0, clickY = 0) {
        this.reset(isExplosion, clickX, clickY);
    }

    reset(isExplosion = false, clickX = 0, clickY = 0) {
        this.isExplosion = isExplosion;

        if (isExplosion) {
            this.x = clickX;
            this.y = clickY;
            // Radial velocity
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 8 + 4;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.radius = Math.random() * 3 + 1.5;
            this.alpha = 1;
            this.decay = Math.random() * 0.02 + 0.015;
        } else {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = -(Math.random() * 1.5 + 0.5);
            this.radius = Math.random() * 4 + 1;
            this.alpha = Math.random() * 0.5 + 0.15;
            this.decay = 0;
        }

        // Wobble properties
        this.wobblePhase = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.05 + 0.02;
        this.wobbleAmount = Math.random() * 0.8 + 0.2;
    }

    update() {
        if (this.isExplosion) {
            // Explosion particles have velocity decays and drift up
            this.x += this.vx;
            this.y += this.vy;

            // Friction and gravity-like vertical drift
            this.vx *= 0.94;
            this.vy = (this.vy * 0.94) - 0.15; // drift upward

            this.alpha -= this.decay;
        } else {
            // Standard background bubbles floating up
            this.wobblePhase += this.wobbleSpeed;
            this.x += this.vx + Math.sin(this.wobblePhase) * this.wobbleAmount;
            this.y += this.vy * fizzSpeedMultiplier;

            // React to mouse proximity (push away slightly)
            const dx = this.x - mouseX;
            const dy = this.y - mouseY;
            const distance = Math.hypot(dx, dy);
            if (distance < 150) {
                const force = (150 - distance) / 150;
                this.x += (dx / distance) * force * 3;
                this.y += (dy / distance) * force * 3;
            }

            // Loop back to bottom when leaving screen
            if (this.y < -50 || this.x < -50 || this.x > canvas.width + 50) {
                this.reset(false);
            }
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        // Determine fill based on active theme color
        const themeAccent = getComputedStyle(document.body).getPropertyValue('--accent-color').trim();
        ctx.fillStyle = this.isExplosion
            ? `rgba(255, 255, 255, ${this.alpha})`
            : `${themeAccent}${Math.floor(this.alpha * 255).toString(16).padStart(2, '0')}`;

        ctx.fill();
    }
}
