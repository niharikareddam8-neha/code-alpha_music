// ── Playlist ──
const playlist = [
  // ── Songs ──
  { title: "Aradhya",                    artist: "Vijay Deverakonda | Khushi",          src: "music/songs/Aradhya.mp3",                                        cover: "music/covers/aradhya.jpg",          type: "song" },
  { title: "Inkem Inkem Inkem Kaavaale", artist: "Vijay Deverakonda | Geetha Govindam", src: "music/songs/Inkem Inkem Inkem Kaavaale - SenSongsMp3.Co.mp3",    cover: "music/covers/inkem.jpg",            type: "song" },
  { title: "Kanureppala Kaalam",         artist: "Vijay Deverakonda | Geetha Govindam", src: "music/songs/Kanureppala Kaalam - SenSongsMp3.Co.mp3",            cover: "music/covers/kanureppala.jpg",      type: "song" },
  { title: "Na Roja Nuvve",              artist: "Vijay Deverakonda | Khushi",          src: "music/songs/Na Roja Nuvve.mp3",                                  cover: "music/covers/naroja.jpg",           type: "song" },
  { title: "Nijame Ne Chebuthunna",      artist: "Nani | Thooru Peru Bhairavakona",     src: "music/songs/Nijame Ne Chebuthunna.mp3",                          cover: "music/covers/nijame.jpg",           type: "song" },
  { title: "Undiporaadhey (Sad)",        artist: "Telugu",                              src: "music/songs/Undiporaadhey Sad Version - SenSongsMp3.Co.mp3",     cover: "music/covers/undiporaadhey.jpg",    type: "song" },
  { title: "Vachindamma",                artist: "Vijay Deverakonda | Geetha Govindam", src: "music/songs/Vachindamma - SenSongsMp3.Co.mp3",                   cover: "music/covers/vachindamma.jpg",      type: "song" },
  { title: "What The F",                 artist: "Husharu",                             src: "music/songs/What The F - SenSongsMp3.Co.mp3",                    cover: "music/covers/whatthef.jpg",         type: "song" },
  { title: "What The Life",              artist: "Vijay Deverakonda | Geetha Govindam", src: "music/songs/What The Life - SenSongsMp3.Co.mp3",                 cover: "music/covers/whatthelife.jpg",      type: "song" },
  { title: "Yenti Yenti",                artist: "Telugu",                              src: "music/songs/Yenti Yenti - SenSongsMp3.Co.mp3",                   cover: "music/covers/yentiyenti.jpg",       type: "song" },
  // ── BGMs ──
  { title: "Aaya Sher",                  artist: "BGM",                                 src: "music/songs/Aaya Sher.mp3",                                      cover: "music/covers/aaya_sher.jpg",        type: "bgm"  },
  { title: "Beast Mode",                 artist: "BGM",                                 src: "music/songs/Beast Mode.mp3",                                     cover: "music/covers/beast_mode.jpg",       type: "bgm"  },
  { title: "Bhairava Anthem",            artist: "BGM",                                 src: "music/songs/Bhairava Anthem.mp3",                                cover: "music/covers/bhairava_anthem.jpg",  type: "bgm"  },
  { title: "Bujji Theme",                artist: "Kalki 2898 AD",                       src: "music/songs/Bujji Theme.mp3",                                    cover: "music/covers/bujji_them.jpg",       type: "bgm"  },
  { title: "Dheera Dheera",              artist: "BGM",                                 src: "music/songs/Dheera Dheera - SenSongsMp3.Co.mp3",                 cover: "music/covers/dheera_dheera.jpg",    type: "bgm"  },
  { title: "Globe Trotter",              artist: "BGM",                                 src: "music/songs/GlobeTrotter.mp3",                                   cover: "music/covers/globe_trotter.jpg",    type: "bgm"  },
  { title: "Hope of Shambala",           artist: "Kalki 2898 AD",                       src: "music/songs/Hope of Shambala.mp3",                               cover: "music/covers/hope_of_shambala.jpg", type: "bgm"  },
  { title: "Hukum",                      artist: "BGM",                                 src: "music/songs/Hukum.mp3",                                          cover: "music/covers/hukum.jpg",            type: "bgm"  },
  { title: "Mehabooba",                  artist: "BGM",                                 src: "music/songs/Mehabooba.mp3",                                      cover: "music/covers/mehabooba.jpg",        type: "bgm"  },
  { title: "Sound of Salaar",            artist: "Salaar",                              src: "music/songs/Sound of Salaar.mp3",                                cover: "music/covers/sound_of_salaar.jpg",  type: "bgm"  },
  { title: "Sulthana",                   artist: "BGM",                                 src: "music/songs/Sulthana.mp3",                                       cover: "music/covers/sulthana.jpg",         type: "bgm"  },
  { title: "The Monster",                artist: "BGM",                                 src: "music/songs/The Monster.mp3",                                    cover: "music/covers/the_monster.jpg",      type: "bgm"  },
  { title: "Theme of Kalki",             artist: "Kalki 2898 AD",                       src: "music/songs/Theme of Kalki.mp3",                                 cover: "music/covers/theme_of_kalki.jpg",   type: "bgm"  },
  { title: "Toofan",                     artist: "BGM",                                 src: "music/songs/Toofan.mp3",                                         cover: "music/covers/toofan.jpg",           type: "bgm"  },
];

// ── State ──
let currentIndex = 0;
let isPlaying    = false;
let isShuffle    = false;
let isRepeat     = false;
let isDragging   = false;

// ── DOM refs ──
const audio         = document.getElementById('audio');
const cover         = document.getElementById('cover');
const songTitle     = document.getElementById('song-title');
const songArtist    = document.getElementById('song-artist');
const currentTime   = document.getElementById('current-time');
const durationEl    = document.getElementById('duration');
const progressBar   = document.getElementById('progress-bar');
const progressFill  = document.getElementById('progress-fill');
const progressThumb = document.getElementById('progress-thumb');
const btnPlay       = document.getElementById('btn-play');
const btnPrev       = document.getElementById('btn-prev');
const btnNext       = document.getElementById('btn-next');
const btnShuffle    = document.getElementById('btn-shuffle');
const btnRepeat     = document.getElementById('btn-repeat');
const volumeSlider  = document.getElementById('volume');
const speedBtns     = document.querySelectorAll('.speed-btn');
const playlistEl    = document.getElementById('playlist-items');
const searchInput   = document.getElementById('search-input');
const searchClear   = document.getElementById('search-clear');

// ── Helpers ──
function formatTime(secs) {
  if (isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// ── Fallback cover ──
function getFallbackCover(index) {
  const gradients = [
    ['#e94560','#f5a623'], ['#7b2ff7','#f107a3'],
    ['#11998e','#38ef7d'], ['#fc4a1a','#f7b733'],
    ['#1a1a2e','#e94560'], ['#0f3460','#533483'],
  ];
  const [c1, c2] = gradients[index % gradients.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
    <defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='${c1}'/>
      <stop offset='100%' stop-color='${c2}'/>
    </linearGradient></defs>
    <rect width='200' height='200' fill='url(#g)'/>
    <text x='100' y='120' font-size='80' text-anchor='middle' fill='rgba(255,255,255,0.5)'>&#9835;</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// ── Load a track ──
function loadTrack(index, autoplay = false) {
  if (!playlist.length) return;
  const track = playlist[index];
  audio.src = track.src || '';
  // Update cover — use track cover if available, else fallback gradient
  if (cover) {
    cover.src = track.cover || getFallbackCover(index);
    cover.onerror = () => { cover.onerror = null; cover.src = getFallbackCover(index); };
  }
  songTitle.textContent  = track.title  || 'Unknown Title';
  songArtist.textContent = track.artist || 'Unknown Artist';
  progressFill.style.width = '0%';
  progressThumb.style.left = '0%';
  currentTime.textContent  = '0:00';
  durationEl.textContent   = '0:00';
  audio.volume = volumeSlider.value;

  document.querySelectorAll('#playlist-items li').forEach((li) => {
    li.classList.toggle('active', parseInt(li.dataset.index) === index);
  });
  updateGridActive(index);

  if (autoplay) {
    audio.play().then(() => setPlayState(true)).catch(() => setPlayState(false));
  } else {
    setPlayState(false);
  }
}

function setPlayState(playing) {
  isPlaying = playing;
  btnPlay.innerHTML = playing ? '&#9646;&#9646;' : '&#9654;';
}


// ── Build Playlist UI (sidebar) ──
function buildPlaylist() {
  playlistEl.innerHTML = '';

  if (!playlist.length) {
    playlistEl.innerHTML = `<li class="empty-msg">No songs yet.</li>`;
    songTitle.textContent  = 'No songs';
    songArtist.textContent = 'Add songs to playlist';
    return;
  }

  playlist.forEach((track, i) => {
    const li = document.createElement('li');
    li.dataset.index = i;
    li.innerHTML = `
      <span class="track-num">${i + 1}</span>
      <img class="track-thumb" src="${track.cover || ''}" alt=""
           onerror="this.src=''" />
      <div class="track-info">
        <div class="track-name">${track.title}</div>
        <div class="track-artist">${track.artist}</div>
      </div>
      <span class="track-dur" id="dur-${i}">--:--</span>
    `;
    li.addEventListener('click', () => {
      currentIndex = i;
      loadTrack(currentIndex, true);
    });
    playlistEl.appendChild(li);
  });
}

// ── Build Songs Grid (below player) ──
function buildSongsGrid() {
  const grid = document.getElementById('songs-grid');
  if (!grid) return;
  grid.innerHTML = '';
  playlist.forEach((track, i) => {
    const card = document.createElement('div');
    card.className = 'song-card';
    card.dataset.index = i;
    card.innerHTML = `
      <img src="${track.cover || ''}" alt="${track.title}"
           onerror="this.style.minHeight='160px'" />
      <div class="song-card-info">
        <div class="song-card-title">${track.title}</div>
        <div class="song-card-artist">${track.artist}</div>
      </div>
    `;
    card.addEventListener('click', () => {
      currentIndex = i;
      loadTrack(currentIndex, true);
    });
    grid.appendChild(card);
  });
}

function updateGridActive(index) {
  document.querySelectorAll('.song-card').forEach(c => {
    c.classList.toggle('active', parseInt(c.dataset.index) === index);
  });
}

function preloadDurations() {
  playlist.forEach((track, i) => {
    const tmp = new Audio();
    tmp.src = track.src;
    tmp.addEventListener('loadedmetadata', () => {
      const el = document.getElementById(`dur-${i}`);
      if (el) el.textContent = formatTime(tmp.duration);
    });
  });
}

// ── Controls ──
btnPlay.addEventListener('click', () => {
  if (!playlist.length) return;
  if (isPlaying) { audio.pause(); setPlayState(false); }
  else { audio.play().then(() => setPlayState(true)).catch(() => {}); }
});

btnPrev.addEventListener('click', () => {
  if (!playlist.length) return;
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
  } else {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentIndex, isPlaying);
  }
});

btnNext.addEventListener('click', () => nextTrack());

function nextTrack(auto = false) {
  if (!playlist.length) return;
  if (isRepeat && auto) { audio.currentTime = 0; audio.play(); return; }
  if (isShuffle) {
    let next;
    do { next = Math.floor(Math.random() * playlist.length); }
    while (next === currentIndex && playlist.length > 1);
    currentIndex = next;
  } else {
    currentIndex = (currentIndex + 1) % playlist.length;
  }
  loadTrack(currentIndex, true);
}

btnShuffle.addEventListener('click', () => {
  isShuffle = !isShuffle;
  btnShuffle.classList.toggle('active', isShuffle);
});


btnRepeat.addEventListener('click', () => {
  isRepeat = !isRepeat;
  btnRepeat.classList.toggle('active', isRepeat);
});

function updateVolumeColor() {
  const value = parseFloat(volumeSlider.value);
  const percent = `${Math.round(value * 100)}%`;
  const hue = 12 - Math.round(value * 12);
  const lightness = 48 + Math.round(value * 18);
  const volumeColor = `hsl(${hue}, 100%, ${lightness}%)`;
  volumeSlider.style.setProperty('--volume-percent', percent);
  volumeSlider.style.setProperty('--volume-color', volumeColor);
}

volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
  updateVolumeColor();
});

updateVolumeColor();

// ── Playback Speed ──
speedBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    audio.playbackRate = parseFloat(btn.dataset.speed);
    speedBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ── Progress Bar ──
audio.addEventListener('timeupdate', () => {
  if (isDragging || !audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = pct + '%';
  progressThumb.style.left = pct + '%';
  currentTime.textContent  = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', () => nextTrack(true));

progressBar.addEventListener('click', seek);
progressBar.addEventListener('mousedown', (e) => { isDragging = true; seek(e); });
document.addEventListener('mousemove', (e) => { if (isDragging) seek(e); });
document.addEventListener('mouseup', () => { isDragging = false; });
progressBar.addEventListener('touchstart', (e) => { isDragging = true; seek(e.touches[0]); }, { passive: true });
document.addEventListener('touchmove', (e) => { if (isDragging) seek(e.touches[0]); }, { passive: true });
document.addEventListener('touchend', () => { isDragging = false; });

function seek(e) {
  const rect = progressBar.getBoundingClientRect();
  const pct  = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
  progressFill.style.width = (pct * 100) + '%';
  progressThumb.style.left = (pct * 100) + '%';
  if (audio.duration) {
    audio.currentTime = pct * audio.duration;
    currentTime.textContent = formatTime(audio.currentTime);
  }
}

// ── Search ──
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  searchClear.classList.toggle('visible', q.length > 0);
  filterPlaylist(q);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.classList.remove('visible');
  filterPlaylist('');
  searchInput.focus();
});

function filterPlaylist(query) {
  const items = playlistEl.querySelectorAll('li:not(.empty-msg)');
  let visibleCount = 0;
  items.forEach((li, i) => {
    const track = playlist[parseInt(li.dataset.index)];
    const match = !query
      || track.title.toLowerCase().includes(query)
      || track.artist.toLowerCase().includes(query);
    li.style.display = match ? '' : 'none';
    if (match) visibleCount++;
  });

  // Show/hide no-results message
  let noRes = playlistEl.querySelector('.no-results');
  if (visibleCount === 0 && query) {
    if (!noRes) {
      noRes = document.createElement('li');
      noRes.className = 'no-results';
      playlistEl.appendChild(noRes);
    }
    noRes.textContent = `No results for "${query}"`;
  } else if (noRes) {
    noRes.remove();
  }
}

// ── Theme Toggle ──
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.body.classList.remove('dark', 'light');
  document.body.classList.add(theme);
  themeToggle.innerHTML = theme === 'dark'
    ? '☀️ <span style="font-size:0.8rem">Light</span>'
    : '🌙 <span style="font-size:0.8rem">Dark</span>';
  localStorage.setItem('mp-theme', theme);
}

themeToggle.addEventListener('click', () => {
  applyTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
});

// ── Init ──
buildPlaylist();
buildSongsGrid();
preloadDurations();
applyTheme(localStorage.getItem('mp-theme') || 'dark');
if (playlist.length) loadTrack(currentIndex);