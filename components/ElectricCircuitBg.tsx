"use client";

import { useEffect, useRef } from "react";

export default function ElectricCircuitBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Circuit grid lines & traveling pulse nodes
    const nodeCount = 22;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      energy: number;
      color: string;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1.5,
        energy: Math.random(),
        color: Math.random() > 0.4 ? "#f1ba18" : "#00f0ff",
      });
    }

    let pulseTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pulseTime += 0.015;

      // Draw faint circuit grid background
      ctx.strokeStyle = "rgba(241, 186, 24, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw nodes and connecting electric circuit lines
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Connect nearby nodes with circuit trace lines
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n.x;
          const dy = n2.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.15;
            ctx.strokeStyle =
              n.color === "#00f0ff"
                ? `rgba(0, 240, 255, ${alpha})`
                : `rgba(241, 186, 24, ${alpha})`;
            ctx.lineWidth = 1.2;

            ctx.beginPath();
            // Draw 90-degree tech circuit bend
            const midX = n.x + dx / 2;
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(midX, n.y);
            ctx.lineTo(midX, n2.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();

            // Draw traveling energy spark along line
            if (Math.sin(pulseTime + i) > 0.6) {
              const progress = (Math.sin(pulseTime * 2 + i) + 1) / 2;
              const sparkX = n.x + dx * progress;
              const sparkY = n.y + dy * progress;
              ctx.fillStyle = n.color;
              ctx.beginPath();
              ctx.arc(sparkX, sparkY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        // Draw node junction
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.4 + Math.sin(pulseTime + n.energy) * 0.3;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-60"
      aria-hidden="true"
    />
  );
}
