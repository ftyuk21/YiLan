let bgIMG = $(document).attr('title');

if(bgIMG.includes("太平山")){
    $('body').append('<audio id="mountain_music" muted autoplay loop src="/Music/mountain_music.mp3" ></audio>');
}else if(bgIMG.includes("南方澳")){
    $('body').append('<audio id="mountain_music" muted autoplay loop src="/Music/ocean_music.mp3" ></audio>');
}else if(bgIMG.includes("日出北橫")){
    $('body').append('<audio id="mountain_music" muted autoplay loop src="/Music/sun_music.mp3" ></audio>');
}

let audio_id = document.getElementsByTagName('audio')[0].id;
let playmusic = document.getElementById(audio_id);
let play = false;

playmusic.oncanplaythrough = function() {
    setInterval(function(){
        if(play){
            return;
        }
        playmusic.currentTime = 0;
        playmusic.volume = 0.5;
        playmusic.muted = false;  //是否要靜音
        play = true;
        console.log('Play Music');
        
        setTimeout(function(){
            play = false;
            playmusic.muted = true;
        },playmusic.duration*1000);
    },1000);
};