import { useEffect, useRef } from "react";

// A canvas-rendered version of the dotted background that pushes dots away
// from the cursor. Plain CSS background-image dots can't do this — there's
// no way to grab "one dot" out of a single repeating pattern — so this
// replaces that pattern with individually-drawn, individually-movable dots.
const SPACING = 26;
const DOT_RADIUS = 1.5;
const DOT_COLOR = [217, 217, 222]; // #d9d9de
const PRESSED_COLOR = [127, 227, 247]; // #7fe3f7
const REPEL_RADIUS = 100;
const REPEL_STRENGTH = 24;
const PRESSED_SCALE = 1.2; // multiplies radius/strength while the mouse is held down
const EASE = 0.15;

// When true, clicking ripples every dot outward from the click point in a
// cascading wave (near dots move first, far dots follow with a delay), with
// the pressed color traveling along the wavefront before fading back out.
const CLICK_CASCADE_ENABLED = true;
const CASCADE_STRENGTH = 34;
const CASCADE_WAVE_SPEED = 1.4; // px/ms the ripple travels outward
const CASCADE_DECAY = 0.94; // per-frame falloff once a dot's been hit by the wave

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function DotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let dots = [];
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    let frameId = null;
    let isPressed = false;
    let pressAmount = 0; // eases toward 1 while pressed, back to 0 on release
    let cascade = null; // { x, y, startTime } for the current click's ripple, if any

    function buildGrid() {
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      dots = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * SPACING;
          const y = row * SPACING;
          dots.push({
            baseX: x,
            baseY: y,
            x,
            y,
            colorT: 0,
            cascadeT: 0,
            cascadeTriggered: false,
            cascadeDirX: 0,
            cascadeDirY: 0,
          });
        }
      }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    }

    function draw() {
      pressAmount += ((isPressed ? 1 : 0) - pressAmount) * EASE;

      const scale = lerp(1, PRESSED_SCALE, pressAmount);
      const repelRadius = REPEL_RADIUS * scale;
      const repelStrength = REPEL_STRENGTH * scale;
      const now = performance.now();

      ctx.clearRect(0, 0, width, height);
      for (const dot of dots) {
        const dx = dot.baseX - mouse.x;
        const dy = dot.baseY - mouse.y;
        const dist = Math.hypot(dx, dy);

        let targetX = dot.baseX;
        let targetY = dot.baseY;
        let pushIntensity = 0;

        if (dist < repelRadius) {
          pushIntensity = 1 - dist / repelRadius;
          const force = pushIntensity * repelStrength;
          const angle = Math.atan2(dy, dx);
          targetX = dot.baseX + Math.cos(angle) * force;
          targetY = dot.baseY + Math.sin(angle) * force;
        }

        // Click cascade: a ripple expanding outward from the click point.
        // Each dot waits until the wavefront reaches it (based on distance),
        // then gets a one-shot outward kick that decays over the following
        // frames — the dominant visual "cascade" is that delay-by-distance.
        if (cascade) {
          const cdx = dot.baseX - cascade.x;
          const cdy = dot.baseY - cascade.y;
          const cdist = Math.hypot(cdx, cdy);
          const delay = cdist / CASCADE_WAVE_SPEED;

          if (!dot.cascadeTriggered && now - cascade.startTime >= delay) {
            dot.cascadeTriggered = true;
            dot.cascadeT = 1;
            const cascadeAngle = Math.atan2(cdy, cdx);
            dot.cascadeDirX = Math.cos(cascadeAngle);
            dot.cascadeDirY = Math.sin(cascadeAngle);
          }

          if (dot.cascadeT > 0.001) {
            targetX += dot.cascadeDirX * CASCADE_STRENGTH * dot.cascadeT;
            targetY += dot.cascadeDirY * CASCADE_STRENGTH * dot.cascadeT;
            dot.cascadeT *= CASCADE_DECAY;
          }
        }

        dot.x += (targetX - dot.x) * EASE;
        dot.y += (targetY - dot.y) * EASE;

        // Only dots actually being pushed shift color, and only while
        // pressed — dots elsewhere on the grid stay the resting grey.
        // The cascade's pressed-color travels with its wavefront the same way.
        const targetColorT = Math.max(pushIntensity * pressAmount, dot.cascadeT);
        dot.colorT += (targetColorT - dot.colorT) * EASE;

        const r = Math.round(lerp(DOT_COLOR[0], PRESSED_COLOR[0], dot.colorT));
        const g = Math.round(lerp(DOT_COLOR[1], PRESSED_COLOR[1], dot.colorT));
        const b = Math.round(lerp(DOT_COLOR[2], PRESSED_COLOR[2], dot.colorT));

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      draw();
      frameId = requestAnimationFrame(loop);
    }

    function handlePointerMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handlePointerLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function handlePointerDown(e) {
      isPressed = true;
      if (CLICK_CASCADE_ENABLED) {
        cascade = { x: e.clientX, y: e.clientY, startTime: performance.now() };
        for (const dot of dots) {
          dot.cascadeTriggered = false;
        }
      }
    }

    function handlePointerUp() {
      isPressed = false;
    }

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      draw();
    } else {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerleave", handlePointerLeave);
      window.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("pointercancel", handlePointerUp);
      window.addEventListener("blur", handlePointerUp);
      loop();
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("blur", handlePointerUp);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="dot-grid-canvas" aria-hidden="true" />
  );
}
