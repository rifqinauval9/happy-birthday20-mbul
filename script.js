const songs = [
  {
    title: "Sorai",
    artist: "Nadin Amizah",
    src: "Sorai - Nadin Amizah (Lirik) [MEq9iK3QJpY].mp3",
    cover: "Screenshot 2025-06-09 041933.png",
    lyrics: `Kau dan aku saling membantu\nMembasuh hati yang pernah pilu\nMungkin akhirnya tak jadi satu\nNamun, Bersorai pernah bertemu`,
    bg: "anbocing.mp4"
  },
  {
    title: "Membasuh",
    artist: "Hindia, Rara Sekar",
    src: "Hindia - Membasuh ft. Rara Sekar (Official Music Video).mp3",
    cover: "cover.png",
    lyrics: `Kita bergerak dan bersuara\nBerjalan jauh tumbuh bersama\nSempatkan pulang ke beranda\nBisakah kita tetap memberi`,
    bg: "jalan.mp4"
  }, {
    title: "Kekal",
    artist: "Nadin Amizah",
    src: "kekal.mp3",
    cover: "kekalcover.png",
    lyrics: `Yang memeluk raga kecilku\nYang menyayangi kecilku\nYang memeluk jiwa kecilku\nDan semua semua aku`,
    bg: "kekalbg.mp4"
  }, {
    title: "Nina",
    artist: ".Feast",
    src: "ninasong.mp3",
    cover: "ninacover.png",
    lyrics: `Maaf atas perjalanan yang tidak sempurna\nNamun percayalah, untukmu kujual dunia\nSegala hal kuupayakan untuk melindungi (untuk melindungi)`,
    bg: "ninabg.mp4"
  },
  {
    title: "Light",
    artist: "Wave To Earth",
    src: "wave to earth - light.mp3",
    cover: "bglight.png",
    lyrics: `You are my sea\nYou are my sunshine\nThe Star, the moon`,
    bg: "videogemash.mp4"
  },
  {
    title: "Telephones",
    artist: "Vacation",
    src: "Vacations - Telephones Lirik Indonesia [42ZqSUSxc0Y].mp3",
    cover: "covertelephones.png",
    lyrics: `I wish I could\nlive without you\nBut you're part of me\nWherever I go\nYou'll always be next to me `,
    bg: "bgtelephones.mp4"
  },
  {
    title: "Fine Today",
    artist: "Ardhito Pramono",
    src: "finetoday.mp3",
    cover: "coverfinetoday.png",
    lyrics: `Though we'll be fine today\nHave a drink for the ol' time\nPerfect time to say\n"You are my happiness"\nand you always going to be the one for me`,
    bg: "videocakep.mp4"
  },
  {
    title: "The Night We Met",
    artist: "Lord Huron",
    src: "Lord Huron - The Night We Met (Lyrics) [-LuTJ2Dq_i8].mp3",
    cover: "coverwemet.png",
    lyrics: `I had all and then Most Of You\nSome and now none of you\nTake Me Back To The Night We Met\nI don't know what i'm supposed to do\nHaunted by the ghost of you\nOh, Take Me Back To The Night We Met`,
    bg: "nightmet.mp4"
  },


];

const cakeBackground = document.getElementById('cake-background');
const backgroundVideo = document.getElementById("background-video");
const backgroundVideoSource = backgroundVideo.querySelector('source');
const backgroundImageElement = document.getElementById("background-image-element");
const myAudio = document.getElementById('myaudio');

const playlistEl = document.getElementById("playlist");
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById('play-pause');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const coverEl = document.getElementById("cover");
const titleEl = document.getElementById("song-title");
const artistEl = document.getElementById("song-artist");
const lyricsEl = document.getElementById("song-lyrics");
const timeEl = document.getElementById("time");
const playerEl = document.getElementById("player");
const backToPlaylistBtn = document.getElementById("back-to-playlist-btn");


backToPlaylistBtn.style.display = "none";


function updatePlayPauseButton() {
  if (audio.paused) {
    playPauseBtn.innerHTML = '<span>▶</span>';
  } else {
    playPauseBtn.innerHTML = '<span>⏸</span>';
  }
}

songs.forEach((song, index) => {
  const card = document.createElement("div");
  card.className = "song-card";
  card.innerHTML = `
    <img src="${song.cover}" alt="${song.title}">
    <div>
      <h4>${song.title}</h4>
      <p>${song.artist}</p>
    </div>
  `;
  card.onclick = () => showPlayer(index);
  playlistEl.appendChild(card);
});

function showPlayer(index) {

  cakeBackground.style.display = 'none';
  myAudio.pause();
  const song = songs[index];
  audio.src = song.src;
  coverEl.src = song.cover;
  titleEl.textContent = song.title;
  artistEl.textContent = song.artist;
  lyricsEl.innerHTML = song.lyrics.replace(/\n/g, "<br>");


  if (song.bg.endsWith('.mp4') || song.bg.endsWith('.webm') || song.bg.endsWith('.ogg')) {

    backgroundImageElement.style.display = 'none';
    backgroundVideo.style.display = 'block';
    backgroundVideoSource.src = song.bg;
    backgroundVideo.load();
    backgroundVideo.play();
  } else {

    backgroundVideo.pause();
    backgroundVideo.style.display = 'none';
    backgroundImageElement.style.display = 'block';
    backgroundImageElement.style.backgroundImage = `url('${song.bg}')`;
  }

  playlistEl.style.display = "none";
  playerEl.style.display = "flex";
  backToPlaylistBtn.style.display = "block";

  audio.addEventListener("loadedmetadata", () => {
    if (song.title === "Light") {
      audio.currentTime = 113;
    } else if (song.title === "Membasuh") {
      audio.currentTime = 146;
    } else if (song.title === "Telephones") {
      audio.currentTime = 51;
    } else if (song.title === "Sorai") {
      audio.currentTime = 194;
    } else if (song.title === "Fine Today") {
      audio.currentTime = 40;
    } else if (song.title === "The Night We Met") {
      audio.currentTime = 88;
    } else if (song.title === "Kekal") {
      audio.currentTime = 3 * 60 + 24;
    } else if (song.title === "Nina") {
      audio.currentTime = 2 * 60 + 34;
    } else {
      audio.currentTime = 0;
    }
    audio.play();
  }, { once: true });
  myAudio.pause();
}


function backToPlaylist() {
  cakeBackground.style.display = 'block';
  audio.pause();

  myAudio.currentTime = 2 * 60 + 28;
  myAudio.play();

  backgroundVideo.pause();
  backgroundVideo.style.display = 'none';
  backgroundVideoSource.src = "";
  backgroundVideo.load();

  backgroundImageElement.style.display = 'none';
  backgroundImageElement.style.backgroundImage = 'none';

  playlistEl.style.display = "grid";
  playerEl.style.display = "none";
  backToPlaylistBtn.style.display = "none";

  coverEl.src = "";
  titleEl.textContent = "Judul Lagu";
  artistEl.textContent = "Artis";
  lyricsEl.innerHTML = "Lirik akan tampil di sini...";
  progress.style.width = '0%';
  currentTimeEl.textContent = '0:00';
  durationEl.textContent = '0:00';
  updatePlayPauseButton();
}

backToPlaylistBtn.addEventListener('click', backToPlaylist);

audio.ontimeupdate = () => {
  const current = formatTime(audio.currentTime);
  const total = formatTime(audio.duration || 0);
  timeEl.textContent = `${current} / ${total}`;
};

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayPauseButton();
});

audio.addEventListener('play', updatePlayPauseButton);
audio.addEventListener('pause', updatePlayPauseButton);

progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

audio.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  const percent = (currentTime / duration) * 100;
  progress.style.width = percent + '%';

  currentTimeEl.textContent = formatTime(currentTime);
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}