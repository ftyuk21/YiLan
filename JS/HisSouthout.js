$(document).ready(function(){
    var boatAnim = {
        container: document.getElementById('boat'), // Required
        path: '/JSON/HisSouthout/第一層.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "boat"
    };

    var fishAnim = {
        container: document.getElementById('fish'), // Required
        path: '/JSON/HisSouthout/第2層.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: false, // Optional
        name: "fish"
    };

    var peopleAnim = {
        container: document.getElementById('people'), // Required
        path: '/JSON/HisSouthout/第3層.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "people"
    };

    var cityAnim = {
        container: document.getElementById('city'), // Required
        path: '/JSON/HisSouthout/第4層.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: false, // Optional
        name: "city"
    };

    var boat = lottie.loadAnimation(boatAnim);
    var fish = lottie.loadAnimation(fishAnim);
    var people = lottie.loadAnimation(peopleAnim);
    var city = lottie.loadAnimation(cityAnim);

    $('#fish').hover(function() {
        fish.play();
        fish.onLoopComplete = () => {
            fish.playSegments([[60, 150]], true);
        }
    });

    $('#people').hover(function(){
        people.play();
    });
    $('#city').hover(function(){
        city.play();
    });
});