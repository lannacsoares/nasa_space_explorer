export function startStarfield() {

  const c = document.getElementById('starfield');

  const ctx = c.getContext('2d');

  let W, H, stars = [];

  function resize() {
    W = c.width = window.innerWidth;
    H = c.height = window.innerHeight;
  }

  function initStars() {

    stars = [];

    const count = Math.floor((W * H) / 3500);

    for(let i = 0; i < count; i++) {

      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random(),
        speed: Math.random() * 0.003 + 0.001,
        phase: Math.random() * Math.PI * 2
      });

    }
  }

  let frame = 0;

  function draw() {

    ctx.clearRect(0, 0, W, H);

    frame += 0.01;

    for(const s of stars){

      const alpha =
        0.3 + 0.5 * Math.abs(Math.sin(frame * s.speed * 60 + s.phase));

      ctx.beginPath();

      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);

      ctx.fillStyle = `rgba(200,220,240,${alpha})`;

      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  resize();
  initStars();
  draw();

  window.addEventListener('resize', () => {
    resize();
    initStars();
  });
}