// 存取<video>
const video = document.querySelector('#video_video video');
const audio = document.querySelector('audio');
const Btn = document.getElementsByClassName('vbtn');
let btnname = [];
let one = true;

// 加上監聽器
video.addEventListener('click', togglePlay);

// 切換播放, 暫停
function togglePlay(e) {
	//video[video.paused ? 'play' : 'pause' ]();
    if(video.paused){
        video.play();
        audio.volume=0;
    }
    else{
        video.pause();
        audio.volume=1;
    }
}
video.addEventListener("timeupdate", function() {
    let nowTime = Math.floor(video.currentTime / 60)+"："+Math.floor(video.currentTime % 60);
    if (nowTime == "1：32" && one) {
        one=false;
        video.pause();
        btnname = ["檜木","原太平山"];
        setBtn();
    }else if(nowTime == "3：37" && one){//檜木線
        one=false;
        video.pause();
        btnname = ["蹦蹦車","雲海咖啡"];
        setBtn();
    }else if(nowTime == "5：37" && one){//太平山線
        one=false;
        video.pause();
        btnname = ["蹦蹦車","雲海咖啡"];
        setBtn();
    }else if(nowTime == "1：48"){//太平山過渡部分
        let minutes = 3; let seconds = 51;
        video.currentTime=minutes * 60 + seconds;
    }else if(nowTime == "7：19"){//蹦蹦車結束
        let minutes = 8; let seconds = 33;
        video.currentTime=minutes * 60 + seconds;
    }
});

function setBtn(){
    document.getElementById("videoBtn").style.display="block";
    for(let i=0; i<Btn.length; i++){
        Btn[i].innerHTML="";
        const btn = {
            container: Btn[i], // Required
            path: '/Video/太平山影片/'+btnname[i]+'.json', // Required
            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: false, // Optional
            name: "btn"+(i+1)
        }
        
        let clickBtn = lottie.loadAnimation(btn);

        $(Btn[i]).hover(function (){
            clickBtn.play();
        }, function () { clickBtn.stop(); });

        $(Btn[i]).click(function(){
            let minutes = 0;
            let seconds = 0;
            console.log(btnname[i]);
            switch(btnname[i]){
                case "檜木":
                    minutes = 1;seconds = 39;
                    break;
                case "原太平山":
                    minutes = 1;seconds = 39;
                    break;
                case "蹦蹦車":
                    minutes = 5;seconds = 47;
                    break;
                case "雲海咖啡":
                    minutes = 7;seconds = 21;
                    break;
            }
            one=true;
            document.getElementById("videoBtn").style.display="none";
            video.currentTime=minutes * 60 + seconds;
            video.play();
        });
    }
}