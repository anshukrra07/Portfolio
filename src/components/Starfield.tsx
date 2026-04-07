import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
  twinkle: number;
  depth: number;
};

function createStars(width: number, height: number, count: number) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5 + 0.2,
    opacity: Math.random() * 0.7 + 0.1,
    velocityX: (Math.random() - 0.5) * 0.08,
    velocityY: (Math.random() - 0.5) * 0.08,
    twinkle: Math.random() * Math.PI * 2,
    depth: Math.random() * 1.8 + 0.4,
  }));
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stars: Star[] = [];
    let animationFrame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let smoothX = pointerX;
    let smoothY = pointerY;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = createStars(canvas.width, canvas.height, motionQuery.matches ? 120 : 240);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      smoothX += (pointerX - smoothX) * 0.06;
      smoothY += (pointerY - smoothY) * 0.06;

      const offsetX = (smoothX / canvas.width - 0.5) * 36;
      const offsetY = (smoothY / canvas.height - 0.5) * 28;

      const pointerGlow = context.createRadialGradient(
        smoothX,
        smoothY,
        0,
        smoothX,
        smoothY,
        Math.min(canvas.width, canvas.height) * 0.28,
      );
      pointerGlow.addColorStop(0, "rgba(56, 189, 248, 0.12)");
      pointerGlow.addColorStop(0.45, "rgba(37, 99, 235, 0.06)");
      pointerGlow.addColorStop(1, "rgba(2, 6, 23, 0)");
      context.fillStyle = pointerGlow;
      context.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, index) => {
        star.twinkle += 0.02;
        star.x += star.velocityX;
        star.y += star.velocityY;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        const drawX = star.x + offsetX * star.depth;
        const drawY = star.y + offsetY * star.depth;
        const distance = Math.hypot(drawX - smoothX, drawY - smoothY);
        const influence = Math.max(0, 1 - distance / 220);

        const hues = [190, 205, 220, 270, 315];
        const hue = hues[index % hues.length];
        const opacity = star.opacity * (0.58 + 0.42 * Math.sin(star.twinkle)) + influence * 0.2;

        context.beginPath();
        context.arc(drawX, drawY, star.radius + influence * 0.55, 0, Math.PI * 2);
        context.fillStyle = `hsla(${hue}, 85%, 82%, ${opacity})`;
        context.fill();
      });

      if (!motionQuery.matches) {
        context.beginPath();
        context.arc(smoothX, smoothY, 2.5, 0, Math.PI * 2);
        context.fillStyle = "rgba(125, 211, 252, 0.55)";
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    const onMotionChange = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      resize();
      draw();
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
