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
    console.log(nowTime);
    if (nowTime == "1：31" && one) {
        one=false;
        video.pause();
        btnname = ["內埤海灘按鈕","南寧魚市場按鈕"];
        setBtn();
    }else if(nowTime == "2：42" && one){//內埤海灘線
        one=false;
        video.pause();
        btnname = ["祝大於按鈕","豆腐岬按鈕"];
        setBtn();
    }else if(nowTime == "4：31" && one){//南寧魚市場線
        one=false;
        video.pause();
        btnname = ["祝大於按鈕","豆腐岬按鈕"];
        setBtn();
    }else if(nowTime == "5：33"){//豆腐岬結束
        let minutes = 6; let seconds = 51;
        video.currentTime=minutes * 60 + seconds;
    }
});

function setBtn(){
    document.getElementById("videoBtn").style.display="block";
    for(let i=0; i<Btn.length; i++){
        Btn[i].innerHTML="";
        const btn = {
            container: Btn[i], // Required
            path: '/Video/南方澳影片/'+btnname[i]+'.json', // Required
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
                case "內埤海灘按鈕":
                    minutes = 1;seconds = 36;
                    break;
                case "南寧魚市場按鈕":
                    minutes = 2;seconds = 46;
                    break;
                case "豆腐岬按鈕":
                    minutes = 4;seconds = 46;
                    break;
                case "祝大於按鈕":
                    minutes = 5;seconds = 34;
                    break;
            }
            one=true;
            document.getElementById("videoBtn").style.display="none";
            video.currentTime=minutes * 60 + seconds;
            video.play();
        });
    }
}