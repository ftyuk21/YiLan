let btn = document.querySelector("#nav-toggle");
let menu = document.querySelector(".menu");
btn.addEventListener('click', () => {
  menu.classList.toggle("active");
});

if( $("#nav-toggle").prop("checked") ){ // 回傳布林值
  console.log("y");
} else {
  console.log("n");
}