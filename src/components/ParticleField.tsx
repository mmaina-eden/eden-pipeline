/**
 * ParticleField — Canvas-based neural network particle animation.
 * Renders floating nodes connected by glowing lines, reacting to mouse.
 */
import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  color: string;
  alpha: number;
}

const COLORS = ["#00d4ff","#7c3aed","#a855f7","#00ff9d","#ffffff"];

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse     = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let W = 0, H = 0;
    const particles: Particle[] = [];
    const COUNT = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 18000));

    function resize() {
      W = canvas!.width  = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }

    function spawn(): Particle {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * 0.5 + 0.2,
      };
    }

    resize();
    for (let i = 0; i < COUNT; i++) particles.push(spawn());

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", e => { mouse.current = { x: e.clientX, y: e.clientY }; });

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      // Update + draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = p.alpha;
        ctx!.fill();
      }

      // Draw connections
      const MAX_DIST = 130;
      const MOUSE_DIST = 160;
      ctx!.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        // Mouse connection
        const mx = mouse.current.x, my = mouse.current.y;
        const md = Math.hypot(a.x - mx, a.y - my);
        if (md < MOUSE_DIST) {
          const t = 1 - md / MOUSE_DIST;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(mx, my);
          ctx!.strokeStyle = "#00d4ff";
          ctx!.globalAlpha = t * 0.35;
          ctx!.stroke();
        }

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < MAX_DIST) {
            const t = 1 - d / MAX_DIST;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = a.color;
            ctx!.globalAlpha = t * 0.18;
            ctx!.stroke();
          }
        }
      }

      ctx!.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", inset: 0, zIndex: 0,
        pointerEvents: "none", opacity: 0.65,
      }}
    />
  );
}
