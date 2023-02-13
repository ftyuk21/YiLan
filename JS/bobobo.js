$(document).ready(function () {
    for(var i=1;i<=5;i++){
        $('body').append('<audio id="egg'+i+'" src="/Music/Southout/egg'+i+'.mp3" ></audio>');
        // $('body').append('<audio id="egg'+i+'" src="/Music/Southout/南方澳.mp3" ></audio>');
    }
    var anim = document.getElementsByClassName('bobobo');
    var animContainer = [];
    for (var i = 0; i < anim.length; i++) {
        console.log(anim[i]);
        var bo = {
            container: anim[i], // Required
            path: '/JSON/Southout/fish1.json', // Required
            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: false, // Optional
            name: "bobobo_fish"
        }
        animContainer[i] = bo;
    }
    console.log(animContainer[0]);
    var bobobo1 = lottie.loadAnimation(animContainer[0]);
    var bobobo2 = lottie.loadAnimation(animContainer[1]);
    var bobobo3 = lottie.loadAnimation(animContainer[2]);
    var bobobo4 = lottie.loadAnimation(animContainer[3]);
    var bobobo5 = lottie.loadAnimation(animContainer[4]);

    $('.bobobo').hover(function () {
        switch (this.id) {
            case 'bobobo1':
                bobobo1.play();
                break;
            case 'bobobo2':
                bobobo2.play();
                break;
            case 'bobobo3':
                bobobo3.play();
                break;
            case 'bobobo4':
                bobobo4.play();
                break;
            case 'bobobo5':
                bobobo5.play();
                break;
            default:
                break;
        }
    }, function () {
        bobobo1.stop();
        bobobo2.stop();
        bobobo3.stop();
        bobobo4.stop();
        bobobo5.stop();
    })

    $('.bobobo').click(function () {
        console.log("click");
        switch (this.id) {
            case 'bobobo1':
                var music = document.getElementById('egg1');
                music.volume = 0.2;
                music.play();
                break;
            case 'bobobo2':
                var music = document.getElementById('egg2');
                music.volume = 0.5;
                music.play();
                break;
            case 'bobobo3':
                var music = document.getElementById('egg3');
                music.volume = 0.9;
                music.play();
                break;
            case 'bobobo4':
                var music = document.getElementById('egg4');
                music.volume = 0.9;
                music.play();
                break;
            case 'bobobo5':
                var music = document.getElementById('egg5');
                music.volume = 0.2;
                music.play();
                break;
            default:
                break;
        }
    })




})


//audio.currentTime -> 音檔時間軸