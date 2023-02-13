// $(".testmenu").load("test.html");
//0~9sec(前)  99~11sec(click) 11~25(後) 25~30(最後)

try {

    //first  758偵

    var load = {
        container: document.getElementById('container'),
        path: '/JSON/home/loading.json',
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: false, // Optional
        name: "load",
    }
    var loadAnim = lottie.loadAnimation(load);

    loadAnim.play();

    var params = {
        container: document.getElementById('container2'), // Required
        path: '/JSON/home/all+click.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: false, // Optional
        name: "sun1"
    };
    var anim = lottie.loadAnimation(params);

    console.log(anim);

    //Dom準備就緒
    anim.addEventListener('DOMLoaded', () => {
        console.log('Dom done');
        setTimeout(function () {
            $('#container2').css('display', 'block');
            $('#container').remove();

            anim.playSegments([[0, 270]], true);
            loadAnim.destroy();
            console.log('play');
            anim.onLoopComplete = () => {
                anim.playSegments([[270, 330]], true)
            }
        }, 30000)
    })

    //點擊監聽
    document.getElementById('clickContainer').addEventListener('click', function () {
        console.log("click")
        $(".menuContainer").load("menu.html");
        anim.playSegments([[330, 750]], true);
        anim.onLoopComplete = () => {
            anim.playSegments([[750, 900]], true);
            $('#sout').css('display', 'block');
            $('#tai').css('display', 'block');

            $('#sout').hover(function () {
                console.log('test');
                $('#sout > img').css('display', 'block');
            }, function () {
                $('#sout > img').css('display', 'none');
            });

            $('#tai').hover(function () {
                $('#tai > img').css('display', 'block');
            }, function () {
                $('#tai > img').css('display', 'none');
            });
        }
    })

    //讀取資料出現問題
    anim.addEventListener('data_fail', () => {
        console.log('data is fail');
    })

    //每一偵處發的時候會執行一次 (1秒30偵)
    anim.addEventListener('enterFrame', () => {
        // console.log(anim.currentFrame)
    })


} catch (error) {
    console.log("error loading animate");
    console.log(error);

}



//--------------------------------Lottie API--------------------------------------
//https://www.npmjs.com/package/lottie-web     ->官網
//https://zhuanlan.zhihu.com/p/234703627   -> 參考的範例網址

//每一偵處發的時候會執行一次 (1秒30偵)
anim.addEventListener('enterFrame', () => {
    // console.log(anim.currentFrame)
})
//這個循環結束
// anim.addEventListener('loopComplete',() =>{
//     console.log('loop end');
//     // anim.stop();
//     console.log(anim.currentFrame)
//     anim.playSegments([[331,386]],true);
// })

//資料讀取就緒
// anim.addEventListener('data_ready', () => {
//     console.log('data_read');

//     // document.getElementsByTagName('svg')[0].style.height = 'auto';
//     // document.getElementsByTagName('rec')[0].height = '2000';

//     // anim.play();
// })

//config準備就緒
// anim.addEventListener('config_ready', () => {
//     console.log('config_ready ');
//     // document.getElementsByTagName('svg')[0].style.height = 'auto';
//     // document.getElementsByTagName('rec')[0].height = '2000';

//     // anim.play();
// })

//Dom準備就緒
// anim.addEventListener('DOMLoaded', () => {
//     console.log('Dom done');
//     anim.playSegments([[0, 340]], true);
//     console.log('play')
//     // setTimeout(function(){
//     // },15000)
//     anim.onLoopComplete = () => {
//         anim.playSegments([[340, 387]], true)
//     }
// })