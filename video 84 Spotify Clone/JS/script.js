console.log('Lets write JavaScript');
let currentSong = new Audio();
// console.log(currentSong);
let songs;
let currFolder;

// 127.0.0.1 

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`
}

// function convertSecondsToMinutes(seconds) {
//     // Calculate minutes and remaining seconds
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;

//     // Format with leading zeros
//     const formattedMinutes = minutes.toString().padStart(2, '0');
//     const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

//     // Return the formatted string
//     return `${formattedMinutes}:${formattedSeconds}`;
// }


async function getSongs(ganaFolder) {
    currFolder = ganaFolder;
    // let a = await fetch(`http://127.0.0.1:5501/video%2084%20Spotify%20Clone/songs`);
    // let a = await fetch(`http://127.0.0.1:5500/${ganaFolder}/`);
    let a = await fetch(`/${ganaFolder}/`);
    // let response = await a.json()
    let response = await a.text();
    // console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    // console.log(as)
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            // console.log(element.href.split(`/${ganaFolder}/`));
            songs.push(element.href.split(`/${ganaFolder}/`)[1])
        }
    }
    console.log(songs);

    // Show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUL.innerHTML = " "
    // console.log(songUL);
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML +
            `<li>
            <div class="musicInfo">
                <img class="invert" src="img/music.svg" alt="">
                <div class="Info">
                    <div>${song.replaceAll("%20", " ")}</div>
                    <div>AddyBhai</div>
                </div>
            </div>
            <div class="playNow">
                <img class="invert" src="img/play-music.svg" alt="">
            </div>
        </li>`
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            // console.log(e.querySelector(".Info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".Info").firstElementChild.innerHTML.trim())
        })
    })

    return songs
}

const playMusic = (track, pause = false) => {
    // let audio = new Audio("/songs/" + track)
    currentSong.src = `/${currFolder}/` + track
    // console.log(currFolder);
    if (!pause) {
        currentSong.play()
        play.src = "img/pause-music.svg"
    }
    document.querySelector(".songInfo").innerHTML = decodeURI(track)
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00"
}

async function displayAlbums() {
    console.log("Displaying albums");

    // let a = await fetch(`http://127.0.0.1:5501/video%2084%20Spotify%20Clone/songs`);
    // let a = await fetch(`http://127.0.0.1:5500/songs`);
    let a = await fetch(`/songs/`);
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div")
    div.innerHTML = response
    // console.log(div);
    let anchors = div.getElementsByClassName("icon")
    // console.log(anchors);
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    // console.log(array);
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        // console.log(e);
        if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
            let folder = e.href.split("/").slice(-2)[1]
            // console.log(folder);
            // Get metadata of the folder
            let a = await fetch(`/songs/${folder}/info.json`);
            // console.log(a);
            let response = await a.json();
            // console.log(response);
            cardContainer.innerHTML = cardContainer.innerHTML +
                `<div data-folder="${folder}" class="card">
                    <img src="/songs/${folder}/cover.jpg" alt="">
                    <h3>${response.title}</h3>
                    <p>${response.description}</p>
                    <div class="play">
                        <img src="img/play-icon.svg" alt="">
                    </div>
                </div>`
        }
    }

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        // console.log(e);
        e.addEventListener("click", async item => {
            console.log("Fetching Songs");
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
            // playMusic(songs[0], true)
            playMusic(songs[0])
        })
    })
}


async function main() {
    // Get the list of all the songs
    await getSongs("songs/Angry_(mood)")
    // console.log(songs);
    playMusic(songs[0], true);

    // Display all the albums on the page
    await displayAlbums();


    // Attach an event listener to play, next and previous
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "img/pause-music.svg"
        }
        else {
            currentSong.pause()
            play.src = "img/play-music.svg"
        }
    })

    // Listen for timeupdate event
    currentSong.addEventListener("timeupdate", () => {
        // console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songTime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    // Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    // // Add an event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })

    // Add an event listener to previous song 
    previous.addEventListener("click", () => {
        currentSong.pause()
        console.log("Previous clicked");

        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })

    // Add an event listener to next song
    next.addEventListener("click", () => {
        currentSong.pause()
        console.log("Next clicked");

        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
    })

    // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to", e.target.value, "/100")
        currentSong.volume = parseInt(e.target.value) / 100
        if (currentSong.volume > 0) {
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("img/mute.svg", "img/volume.svg")
        }
    })

    // Add an event to mute the track
    document.querySelector(".volume>img").addEventListener("click", (e) => {
        console.log(e.target);
        // console.log("changing", e.target.scr);
        if (e.target.src.includes("img/volume.svg")) {
            e.target.src = e.target.src.replace("img/volume.svg", "img/mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0

        }
        else {
            e.target.src = e.target.src.replace("img/mute.svg", "img/volume.svg")
            currentSong.volume = .10;
            // document.querySelector(".range").getElementsByTagName("input")[0].value = 0
            document.querySelector(".range").getElementsByTagName("input")[0].value = 30
        }
    })

}




main()


