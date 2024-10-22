const episode_id = localStorage.getItem("episode_id");
const baseUrl = "https://anime-api-steel.vercel.app/meta/anilist/watch";

let hls = new Hls();
const video = document.getElementById('video');


async function loadVideo() {
    const response = await fetch(`${baseUrl}/${episode_id}`);
    const json = await response.json();
    console.log(json);
    
    let source720p = json.sources.find(source => source.quality === "1080p");
    hls.loadSource(source720p.url);
    hls.attachMedia(video);
}

loadVideo();




