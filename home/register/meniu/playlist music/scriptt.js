const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const shuffleBtn = document.getElementById('shuffle');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const stopBtn = document.getElementById('stop');


// Music
const songs = [
    {
        name: 'God is a woman',
        displayName: 'God is a woman',
        artist: 'Ariana Grande',
        albumArt: 'Ariana1',
    },
    {
        name: 'Bohemian Rhapsody',
        displayName: 'Bohemian Rhapsody',
        artist: 'Queen',
        albumArt: 'Queen1',
    },

    {
        name: 'Streets',
        displayName: 'Streets',
        artist: 'Doja Cat',
        albumArt: 'Doja1',
    },
    {
        name: 'Shape of you',
        displayName: 'Shape of you',
        artist: 'Ed Sheeran',
        albumArt: 'Ed1',
    },
    {
        name: 'Self Esteem',
        displayName: 'Self Esteem',
        artist: 'The Offspring',
        albumArt: 'off',
    },
    {
        name: 'The Kids Aren\'t Alright',
        displayName: 'The Kids Aren\'t Alright',
        artist: 'The Offspring',
        albumArt: 'off2',
    },
    {
        name: 'Want You Bad',
        displayName: 'Want You Bad',
        artist: 'The Offspring',
        albumArt: 'off3',
    },
    {
        name: 'Somewhere I Belong',
        displayName: 'Somewhere I Belong',
        artist: 'Linkin Park',
        albumArt: 'Linkin',
    },
    {
        name: 'Numb',
        displayName: 'Numb',
        artist: 'Linkin Park',
        albumArt: 'Linkin2',
    },
    {
        name: 'Crawling',
        displayName: 'Crawling',
        artist: 'Linkin Park',
        albumArt: 'Linkin3',
    },
    {
        name: 'Pushing Me Away',
        displayName: 'Pushing Me Away',
        artist: 'Linkin Park',
        albumArt: 'Linkin4',
    },

];


// Check if playing
let isPlaying = false;

// Shuffle Songs
function shuffleSongs() {
    isPlaying = true;
    loadSong(songs[Math.floor(Math.random() * songs.length)]);
    playBtn.classList.replace('fa-play', 'fa-pause');
    music.play();
    console.log();
};

// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Play or pause event listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));


// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.albumArt}.jpg`;
}

// Current Song
let songIndex = 0;

//Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}


//Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Stop Song
function stopSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Stop');
    loadSong(songs[songIndex]);
}

// On load - Select first song
loadSong(songs[songIndex]);

// Update Progress Bar And Time
function updateProgressBar(e) {
    if (isPlaying) {
        const { duration, currentTime } = e.srcElement;
        // Update Progress Bar Width
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        // Calculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }
        // Delay switching duration Element to avoid NaN
        if (durationSeconds) {
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        }
        // Calculate display for current
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }
}

// Set progress bar
function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const { duration } = music;
    music.currentTime = (clickX / width) * duration;
}

//Event Listeners
shuffleBtn.addEventListener('click', shuffleSongs);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
stopBtn.addEventListener('click', stopSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);



const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const nav6 = document.getElementById('nav-6');

const navItems = [nav1, nav2, nav3, nav4, nav5, nav6];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
}

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate In - Nav Items
        navAnimation('out', 'in');
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate Out - Nav Items
        navAnimation('in', 'out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});
