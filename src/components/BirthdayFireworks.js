import { useRef, useEffect } from "react";

export default function BirthdayFireworks() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        let balloons = [];
        let particles = [];

        function spawnBalloon() {
            balloons.push({
                x: Math.random() * canvas.width,
                y: canvas.height + 50,
                speed: 1 + Math.random() * 2,
                size: 18 + Math.random() * 12,
                color: `hsl(${Math.random() * 360}, 90%, 60%)`,
            });
        }

        function createParticles(x, y, color) {
            for (let i = 0; i < 20; i++) {
                particles.push({
                    x,
                    y,
                    dx: (Math.random() - 0.5) * 4,
                    dy: (Math.random() - 0.5) * 4,
                    life: 40 + Math.random() * 20,
                    color,
                });
            }
        }

        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            /* BALLOONS */
            balloons.forEach((balloon, i) => {
                balloon.y -= balloon.speed;

                ctx.beginPath();
                ctx.fillStyle = balloon.color;
                ctx.arc(balloon.x, balloon.y, balloon.size, 0, Math.PI * 2);
                ctx.fill();

                if (balloon.y < 60) {
                    createParticles(balloon.x, balloon.y, balloon.color);
                    balloons.splice(i, 1);
                }
            });

            /* CONFETTI */
            particles.forEach((p, i) => {
                p.x += p.dx;
                p.y += p.dy;
                p.life--;

                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, 4, 4);

                if (p.life <= 0) particles.splice(i, 1);
            });

            /* SPAWN */
            if (Math.random() < 0.05) spawnBalloon();

            requestAnimationFrame(update);
        }

        update();
    }, []);

    return (
        <div style={{ position: "absolute", right: "10%", top: "15%", zIndex: 20 }}>
            {/* balloon animation */}
            <canvas
                ref={canvasRef}
                width={500}
                height={120}
                style={{ pointerEvents: "none" }}
            />
        </div>
    );
}
