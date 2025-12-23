const tree = document.getElementById('tree');
const partyBtn = document.getElementById('partyBtn');
const snowBtn = document.getElementById('snowBtn');
const audio = document.getElementById('xmasSound');

let isParty = false;
let isSnow = false;

partyBtn.addEventListener('click', async () => {
  isParty = !isParty;

  if (isParty) {
    tree.classList.add('party');
    partyBtn.textContent = '🎵 演出停止';
    try {
      audio.currentTime = 0;
      await audio.play();
    } catch (e) {
      console.warn(e);
    }
  } else {
    tree.classList.remove('party');
    partyBtn.textContent = '✨ クリック演出';
    audio.pause();
    audio.currentTime = 0;
  }
});

snowBtn.addEventListener('click', () => {
  isSnow = !isSnow;
  document.body.classList.toggle('snowing', isSnow);
});