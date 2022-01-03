import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from './plugins/AutoPlay.js';

    const video= document.querySelector("video");

    const button= document.querySelector("button");

    const button2= document.querySelector("#MuteOnmute");

    const player = new MediaPlayer({ el: video
      //, plugins: [ new AutoPlay() ]
    });  

    button.onclick = () => player.togglePlay(); 

    button2.onclick =() => player.mudeonmute(); 