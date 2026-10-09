const music = document.getElementById('music');
const musicBtn = document.getElementById('musicBtn');
const startBtn = document.getElementById('startBtn');
const surpriseBtn = document.getElementById('surpriseBtn');
const reveal = document.getElementById('reveal');


// 🎵 Sürprizi açınca müzik başlasın
startBtn.addEventListener('click', () => {
  document.getElementById('memories').scrollIntoView({
    behavior: 'smooth'
  });

  music.play()
    .then(() => {
      musicBtn.textContent = '❚❚';
    })
    .catch(() => {});
});


// 🎵 Müzik aç / kapat
musicBtn.addEventListener('click', async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.textContent = '❚❚';
      musicBtn.setAttribute('aria-label', 'Müziği durdur');
    } catch (e) {}
  } else {
    music.pause();
    musicBtn.textContent = '♫';
    musicBtn.setAttribute('aria-label', 'Müziği aç');
  }
});


// 💗 Son sürpriz
surpriseBtn.addEventListener('click', () => {
  reveal.hidden = false;

  surpriseBtn.textContent = 'Sürpriz açıldı 💗';
  surpriseBtn.disabled = true;

  for (let i = 0; i < 24; i++) {
    setTimeout(makeHeart, i * 45);
  }
});


// ❤️ Uçan kalpler
function makeHeart() {
  const heart = document.createElement('span');

  heart.className = 'float-heart';

  heart.textContent = ['♡', '♥', '✦'][
    Math.floor(Math.random() * 3)
  ];

  heart.style.left = Math.random() * 100 + '%';

  heart.style.fontSize =
    (14 + Math.random() * 22) + 'px';

  heart.style.animationDuration =
    (5 + Math.random() * 5) + 's';

  document.querySelector('.hearts').appendChild(heart);

  setTimeout(() => heart.remove(), 11000);
}


// ❤️ Doimiy yurakchalar
setInterval(() => {
  if (Math.random() > 0.45) {
    makeHeart();
  }
}, 900);
