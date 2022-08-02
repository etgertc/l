// $(function () {
//     $('.fade').slick({
//         autoplay: true,
//         autoplaySpeed: 2000,
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         adaptiveHeight: true
//     });

// })

// const toper = document.getElementById("cs");
// toper.addEventListener(
//     "click",
//     function () {
//         window.scrollTo(0, 0)
//     }
// )
// window.addEventListener(
//     "scroll",
//     function () {
//         if (window.scrollY > 1000) {
//             document.getElementById("cs").setAttribute("class", "active")
//         }
//         else {
//             document.getElementById("cs").classList.remove("active")
//         }
//     })
$('.fade').slick({
    prevArrow: '<img src="img/right.svg" class="left">',
    nextArrow: '<img src="img/left.svg" class="right">',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: '.dots',
    autoplay: true,
    autoplaySpeed: 3000
});