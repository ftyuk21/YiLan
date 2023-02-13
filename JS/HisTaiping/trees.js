$(document).ready(function () {

    var anim = document.getElementById("tree1");
    var anim = document.getElementById("tree2");
    var anim = document.getElementById("tree3");
    var anim = document.getElementById("tree4");

    var tree1 = {
        container: document.getElementById('tree1'), // Required
        path: '/JSON/HisTaiping/巒大杉介紹.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "Tree1_dev"
    }
    var tree2 = {
        container: document.getElementById('tree2'), // Required
        path: '/JSON/HisTaiping/扁柏介紹.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "Tree2_dev"
    }
    var tree3 = {
        container: document.getElementById('tree3'), // Required
        path: '/JSON/HisTaiping/鐵杉介紹.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "Tree3_dev"
    }
    var tree4 = {
        container: document.getElementById('tree4'), // Required
        path: '/JSON/HisTaiping/檜木介紹.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "Tree4_dev"
    }

    var Tree1 = lottie.loadAnimation(tree1);
    var Tree2 = lottie.loadAnimation(tree2);
    var Tree3 = lottie.loadAnimation(tree3);
    var Tree4 = lottie.loadAnimation(tree4);


    $('#tree1').hover(function () {
        Tree1.play();
    }, function () {
        Tree1.stop();
    })

    $('#tree2').hover(function () {
        Tree2.play();
    }, function () {
        Tree2.stop();
    })

    $('#tree3').hover(function () {
        Tree3.play();
    }, function () {
        Tree3.stop();
    })

    $('#tree4').hover(function () {
        Tree4.play();
    }, function () {
        Tree4.stop();
    })

})