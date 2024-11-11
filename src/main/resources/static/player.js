const episode_id = localStorage.getItem("episode_id");
console.log(episode_id);
const baseUrl = "https://anime-api-steel.vercel.app/meta/anilist/watch";

let hls = new Hls();
const video = document.getElementById('video');


async function loadVideo() {

    try {
        const response = await fetch(`${baseUrl}/${episode_id}`);
        const json = await response.json();
        console.log(json);

        let source = json.sources.find(source => source.quality === "1080p");
        if(!source) {
            console.log("first")
            source = json.sources.find(source => source.quality === "720p");
        } if(!source) {
            console.log("second")
            source = json.sources.find(source => source.quality === "480p");
        } if(!source) {
            source = json.sources.find(source => source.quality === "default");
        }
        console.log(source)
        hls.loadSource(`${source.url}`);
        hls.attachMedia(video);
    } catch (error) {
        console.error(error);
    }

}

loadVideo();




