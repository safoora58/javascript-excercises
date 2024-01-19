const audio = document.querySelector('#audio');
const cover = document.querySelector('.cover');
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist-name');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const progressBar = document.querySelector('#progress-bar');
const progressContainer = document.querySelector('.progress-bar');
const playPauseBtn = document.querySelector('#play-pause');
const repeatBtn = document.querySelector('#repeat');
const shuffleBtn = document.querySelector('#shuffle');
const timeTotal = document.querySelector('.time-total');
const currentTime = document.querySelector('.time-current');
const showMusicList = document.querySelector('#show-music-list');
const hideMusicList = document.querySelector('#close');
const list = document.querySelector('#list');
const musicList = document.querySelector('.music-list');
const skipBackward = document.querySelector('#skip-backward');
const skipForward = document.querySelector('#skip-forward');
const volumeSlider = document.querySelector("#volume-slider");

const musicData = [
    {
        name: "baroon delam khast",
        artist: "shadmehr aghili",
        img: "images/shadmehr.jpg",
        path: "music/music-1.mp3"
    },
    {
        name: "je-taime",
        artist: "Lara Fabian",
        img: "images/lara.jpg",
        path: "music/music-2.mp3"
    },
    {
        name: "deja vu",
        artist: "kaveh yaghmaei",
        img: "images/kaveh.jpg",
        path: "music/music-3.mp3"
    },
    {
        name: "che konom",
        artist: "erfan tahmasbi",
        img: "images/erfan.jpg",
        path: "music/music-4.mp3"
    },
    {
        name: "senorita",
        artist: "shawn mendes-camila",
        img: "images/shawn-camila.jpg",
        path: "music/music-5.mp3"
    },
    {
        name: "hey",
        artist: "sahar",
        img: "images/sahar.jpg",
        path: "music/music-6.mp3"
    },
    {
        name: "koochamoon",
        artist: "ehsan daryadel",
        img: "images/ehsan.jpg",
        path: "music/music-7.mp3"
    },
    {
        name: "emshab barooniye ",
        artist: "amin aminian",
        img: "images/amin.jpg",
        path: "music/music-8.mp3"
    },
    {
        name: "agarche jaye del",
        artist: "ebi",
        img: "images/ebi.jpg",
        path: "music/music-9.mp3",
    },
    {
        name: "golhaye shamdani",
        artist: "ali zandvakili",
        img: "images/ali.jpg",
        path: "https://dl.rozmusic.com/Music/1398/12/29/Ali%20Zand%20Vakili%20-%20Golhaye%20Shamdani%20%28128%29.mp3"
    }
]

let songIndex = 0;

window.addEventListener('load', () => {
    loadMusic(songIndex);
    playingNow();
})

function loadMusic(index) {
    cover.src = musicData[index].img;
    artistName.textContent = musicData[index].artist;
    songName.textContent = musicData[index].name;
    audio.src = musicData[index].path;

    audio.addEventListener('loadedmetadata', () => {
        const totalMin = Math.floor(audio.duration / 60);
        let totalSec = Math.floor(audio.duration % 60);
        totalSec = totalSec < 10 ? `0${totalSec}` : totalSec;
        timeTotal.textContent = `${totalMin}:${totalSec}`;
    });
}

function playMusic() {
    cover.classList.add('rotate');
    playPauseBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');
    audio.play();
    changeBackground();
}

function pauseMusic() {
    cover.classList.remove('rotate');
    playPauseBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
    audio.pause();
    changeBackground();
}

function nextMusic() {
    if (shuffleBtn.querySelector('i').classList.contains('active')) {
        shuffleMusic();
    } else {
        songIndex++;
        if (songIndex > musicData.length - 1) {
            songIndex = 0;
        }
    }
    loadMusic(songIndex);
    playMusic();
    playingNow();
}

function prevMusic() {
    if (shuffleBtn.querySelector('i').classList.contains('active')) {
        shuffleMusic();
    } else {
        songIndex--;
        if (songIndex < 0) {
            songIndex = musicData.length - 1;
        }
    }
    loadMusic(songIndex);
    playMusic();
    playingNow();
}

function updateProgressBar(e) {
    const currentTimee = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTimee / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
    let currentMin = Math.floor(currentTimee / 60);
    let currentSec = Math.floor(currentTimee % 60);
    currentSec = currentSec < 10 ? `0${currentSec}` : currentSec;
    currentTime.textContent = `${currentMin}:${currentSec}`;
}

function setProgressBar(e) {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const songDuration = audio.duration;
    audio.currentTime = (clickX / width) * songDuration;
}

function changeRepeatIcon() {
    if (repeatBtn.querySelector('i').matches('.fa-repeat')) {
        repeatBtn.querySelector('i').classList.replace('fa-repeat', 'fa-rotate-right');
    } else {
        repeatBtn.querySelector('i').classList.replace('fa-rotate-right', 'fa-repeat');
    }
}

function repeatMusic() {
    audio.currentTime = 0;
    playMusic();
}

function changeShuffleIcon() {
    if (!shuffleBtn.querySelector('i').classList.contains('active')) {
        shuffleBtn.querySelector('i').classList.add('active');
    } else {
        shuffleBtn.querySelector('i').classList.remove('active');
    }
}

function shuffleMusic() {
    let random = Math.floor(Math.random() * musicData.length);
    do {
        random = Math.floor(Math.random() * musicData.length);
    } while (random === songIndex);
    songIndex = random;
    loadMusic(songIndex);
    playMusic();
}

function displayMusicDetails() {
    for (let i = 0; i < musicData.length; i++) {
        let liTag = `<li li-index="${i}">
                                <div class="info">
                                    <div class="music-name">${musicData[i].name}</div>
                                    <div class="artist">${musicData[i].artist}</div>
                                </div>
                                <audio src="${musicData[i].path}" class="${musicData[i].path}"></audio>
                                <div class="audio-duration"></div>
                                </li>
                                `;
        list.insertAdjacentHTML('beforeend', liTag);
    }
}
displayMusicDetails();
const allLiTags = list.querySelectorAll('li');
function playingNow() {
    for (let j = 0; j < allLiTags.length; j++) {
        let audioTag = allLiTags[j].querySelector('.audio-duration');
        if (allLiTags[j].classList.contains('playing'));
        allLiTags[j].classList.remove("playing");
        audioTag.innerHTML = "";

        if (allLiTags[j].getAttribute("li-index") == songIndex) {
            allLiTags[j].classList.add("playing");

            audio.oncanplay = function () {
                audioTag.innerHTML = "Playing";
            }
            audio.onwaiting = function () {
                audioTag.innerHTML = "Loading";
            }
        }
        allLiTags[j].setAttribute("onclick", "clicked(this)");
    }
}

function clicked(element) {
    songIndex = element.getAttribute("li-index");
    loadMusic(songIndex);
    playMusic();
    playingNow();
}

function changeBackground() {
    document.body.style.backgroundImage = `url(${musicData[songIndex].img})`;
}

nextBtn.addEventListener('click', nextMusic);
prevBtn.addEventListener('click', prevMusic);
repeatBtn.addEventListener('click', changeRepeatIcon);
shuffleBtn.addEventListener('click', changeShuffleIcon);
progressContainer.addEventListener('click', setProgressBar);
audio.addEventListener('timeupdate', updateProgressBar);
audio.addEventListener('ended', () => {
    const isRepeat = repeatBtn.querySelector('i').classList.contains('fa-rotate-right');
    isRepeat ? repeatMusic() : nextMusic();
});
playPauseBtn.addEventListener('click', () => {
    const isPlaying = playPauseBtn.querySelector('i').classList.contains('fa-pause');
    isPlaying ? pauseMusic() : playMusic();
    playingNow();
});

showMusicList.addEventListener('click', () => {
    musicList.classList.add('show');
    showMusicList.classList.add('hide');
})
hideMusicList.addEventListener('click', () => {
    musicList.classList.remove('show');
    showMusicList.classList.remove('hide');
})

skipBackward.addEventListener('click', () => {
    audio.currentTime -= 10;
})
skipForward.addEventListener('click', () => {
    audio.currentTime += 20;
})

volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value / 100;
    audio.volume = volume;
});
