$(document).ready(function () {

    var anim = document.getElementById("Tree_tree");
    var tree = {
        container: document.getElementById('Tree_tree'), // Required
        path: '/JSON/HisTaiping/第一層.json', // Required
        renderer: 'svg', // Required
        loop: false, // Optional
        autoplay: true, // Optional
        name: "Tree_dev"
    }
    
    var Tree= lottie.loadAnimation(tree);
   

    // $('#Tree').hover(function(){        
    //     Tree.play();
    // },function(){
    //        Tree.stop();})
    

    
})
