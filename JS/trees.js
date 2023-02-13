$(document).ready(function () {

    var anim = document.getElementsByClassName('tree');
    var animContainer = [];
    for (var i = 0; i < anim.length; i++) {
        console.log(anim[i]);
        var trees = {
            container: anim[i], // Required
            path: '/JSON/TaiPing/樹'+(i+1)+'.json', // Required
            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: false, // Optional
            name: "trees"
        }
        animContainer[i] = trees;
    }
    var tree1 = lottie.loadAnimation(animContainer[0]);
    var tree2 = lottie.loadAnimation(animContainer[1]);
    var tree3 = lottie.loadAnimation(animContainer[2]);
    var tree4 = lottie.loadAnimation(animContainer[3]);
    var tree5 = lottie.loadAnimation(animContainer[4]);

    $('.tree').hover(function () {
        switch (this.id) {
            case 'tree1':
                tree1.play();
                break;
            case 'tree2':
                tree2.play();
                break;
            case 'tree3':
                tree3.play();
                break;
            case 'tree4':
                tree4.play();
                break;
            case 'tree5':
                tree5.play();
                break;
            default:
                break;
        }
    }, function () {
        tree1.stop();
        tree2.stop();
        tree3.stop();
        tree4.stop();
        tree5.stop();
    })
})