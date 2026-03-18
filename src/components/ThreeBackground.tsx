/**
 * ThreeBackground — raw Three.js full-screen 3D scene.
 * Wireframe floating geometries + ECG heartbeat line + red particles.
 * Health insurance / medical aesthetic: precision, life, data.
 */
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    mount.appendChild(renderer.domElement);

    // ── Scene + Camera ───────────────────────────────────────
    const scene  = new THREE.Scene();
    scene.fog    = new THREE.FogExp2(0x000000, 0.035);
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 0, 28);

    // ── Materials ────────────────────────────────────────────
    const matWhite = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    const matRedWire = new THREE.MeshBasicMaterial({ color: 0xdc2626, wireframe: true });
    const matGrey  = new THREE.MeshBasicMaterial({ color: 0x444444, wireframe: true });

    // ── Floating wireframe geometries ────────────────────────
    const shapes: Array<{ mesh: THREE.Mesh; rx: number; ry: number; rz: number; drift: THREE.Vector3 }> = [];

    const geoData: Array<[THREE.BufferGeometry, THREE.MeshBasicMaterial, [number,number,number], number]> = [
      [new THREE.IcosahedronGeometry(2.2, 0),   matWhite,   [-14,  5, -5],  1.0],
      [new THREE.IcosahedronGeometry(1.4, 0),   matRedWire, [ 12, -3, -8],  0.8],
      [new THREE.IcosahedronGeometry(3.0, 0),   matGrey,    [-6, -8, -15],  0.5],
      [new THREE.OctahedronGeometry(1.8, 0),    matWhite,   [ 16,  7, -10], 0.9],
      [new THREE.OctahedronGeometry(2.5, 0),    matGrey,    [ 0,  10, -12], 0.4],
      [new THREE.TetrahedronGeometry(2.0, 0),   matWhite,   [-18, -5, -8],  0.7],
      [new THREE.TetrahedronGeometry(1.2, 0),   matRedWire, [ 8,  -9, -6],  1.1],
      [new THREE.IcosahedronGeometry(1.6, 1),   matGrey,    [-10, 12, -18], 0.3],
      [new THREE.OctahedronGeometry(1.0, 0),    matWhite,   [ 20, -8, -12], 0.6],
      [new THREE.IcosahedronGeometry(0.8, 0),   matRedWire, [-4,  -12, -4], 1.3],
      [new THREE.TorusGeometry(1.5, 0.06, 6, 20), matWhite, [-20, 8, -6],  0.5],
      [new THREE.TorusGeometry(2.2, 0.06, 5, 16), matGrey,  [ 6, 14, -20], 0.3],
    ];

    for (const [geo, mat, pos, speed] of geoData) {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      mesh.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
      scene.add(mesh);
      shapes.push({
        mesh,
        rx: (Math.random() - 0.5) * 0.006 * speed,
        ry: (Math.random() - 0.5) * 0.008 * speed,
        rz: (Math.random() - 0.5) * 0.004 * speed,
        drift: new THREE.Vector3(
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.003,
          0,
        ),
      });
    }

    // ── ECG / Heartbeat line ──────────────────────────────────
    function buildECG(): THREE.BufferGeometry {
      const pts: THREE.Vector3[] = [];
      const W = 40; const N = 400;
      for (let i = 0; i < N; i++) {
        const t = (i / N) * W - W / 2;
        let y = 0;
        // ECG pattern: flat → P-wave → PR → QRS → ST → T-wave → repeat
        const cycle = ((t % 5) + 5) % 5;
        if (cycle < 0.2)       y = Math.sin(cycle * Math.PI / 0.2) * 0.3;          // P
        else if (cycle < 0.6)  y = 0;                                                // PR
        else if (cycle < 0.65) y = -0.5;                                             // Q
        else if (cycle < 0.72) y = Math.sin((cycle - 0.65) * Math.PI / 0.07) * 3.5; // R
        else if (cycle < 0.78) y = -0.4;                                             // S
        else if (cycle < 1.5)  y = Math.sin((cycle - 0.78) * Math.PI / 0.72) * 0.6;// T
        else                   y = 0;
        pts.push(new THREE.Vector3(t, y - 8, -2));
      }
      return new THREE.BufferGeometry().setFromPoints(pts);
    }
    const ecgLine = new THREE.Line(buildECG(), new THREE.LineBasicMaterial({ color: 0xdc2626, linewidth: 1 }));
    scene.add(ecgLine);

    // ── Second subtle ECG (white, lower) ─────────────────────
    function buildECG2(): THREE.BufferGeometry {
      const pts: THREE.Vector3[] = [];
      const W = 40; const N = 300;
      for (let i = 0; i < N; i++) {
        const t = (i / N) * W - W / 2;
        const cycle = ((t % 4) + 4) % 4;
        let y = 0;
        if (cycle < 0.1)       y = Math.sin(cycle * Math.PI / 0.1) * 0.2;
        else if (cycle < 0.4)  y = 0;
        else if (cycle < 0.45) y = -0.3;
        else if (cycle < 0.5)  y = Math.sin((cycle - 0.45) * Math.PI / 0.05) * 2.2;
        else if (cycle < 0.55) y = -0.25;
        else if (cycle < 1.2)  y = Math.sin((cycle - 0.55) * Math.PI / 0.65) * 0.4;
        else y = 0;
        pts.push(new THREE.Vector3(t, y + 9, -8));
      }
      return new THREE.BufferGeometry().setFromPoints(pts);
    }
    const ecgLine2 = new THREE.Line(buildECG2(), new THREE.LineBasicMaterial({ color: 0x222222, linewidth: 1 }));
    scene.add(ecgLine2);

    // ── Red particles ─────────────────────────────────────────
    const pCount = 120;
    const pPositions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPositions[i * 3]     = (Math.random() - 0.5) * 60;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 10;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0xdc2626, size: 0.12, sizeAttenuation: true }));
    scene.add(particles);

    // White particles
    const wpCount = 200;
    const wpPositions = new Float32Array(wpCount * 3);
    for (let i = 0; i < wpCount; i++) {
      wpPositions[i * 3]     = (Math.random() - 0.5) * 70;
      wpPositions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      wpPositions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 15;
    }
    const wpGeo = new THREE.BufferGeometry();
    wpGeo.setAttribute("position", new THREE.BufferAttribute(wpPositions, 3));
    const whiteParticles = new THREE.Points(wpGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.06, sizeAttenuation: true, transparent: true, opacity: 0.5 }));
    scene.add(whiteParticles);

    // ── Mouse parallax ────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const targetRot = { x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    // ── ECG scroll offset ─────────────────────────────────────
    let ecgOffset = 0;

    // ── Resize ────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Animate ───────────────────────────────────────────────
    let raf: number;
    const clock = new THREE.Clock();

    function animate() {
      raf = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Rotate shapes
      for (const s of shapes) {
        s.mesh.rotation.x += s.rx;
        s.mesh.rotation.y += s.ry;
        s.mesh.rotation.z += s.rz;
        s.mesh.position.x += s.drift.x;
        s.mesh.position.y += s.drift.y;
        // Wrap
        if (s.mesh.position.x >  25) s.drift.x *= -1;
        if (s.mesh.position.x < -25) s.drift.x *= -1;
        if (s.mesh.position.y >  18) s.drift.y *= -1;
        if (s.mesh.position.y < -18) s.drift.y *= -1;
      }

      // Scroll ECG
      ecgOffset -= 0.015;
      ecgLine.position.x  = ecgOffset % 5;
      ecgLine2.position.x = (ecgOffset * 0.7) % 4;

      // Particles slow drift
      particles.rotation.y = elapsed * 0.04;
      whiteParticles.rotation.y = -elapsed * 0.025;

      // Scene parallax from mouse (smooth)
      targetRot.x += (mouse.y * 0.04 - targetRot.x) * 0.04;
      targetRot.y += (mouse.x * 0.06 - targetRot.y) * 0.04;
      scene.rotation.x = targetRot.x;
      scene.rotation.y = targetRot.y;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none" }}
    />
  );
}
