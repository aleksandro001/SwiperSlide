let btnExpand = document.querySelector(".slider__btn-expand");
let sliderList = document.querySelector(".slider__icons-list");
let sliderIcons = document.querySelector(".slider__icons");
let pagination = document.querySelector(".pagination");

btnExpand.addEventListener("click", function(){
    sliderList.classList.toggle("click");
    this.classList.toggle("click");
    
    if (this.classList.contains("click")){
        this.textContent = "Скрыть";
    }else{
        this.textContent = "Показать все";
    }
});


// (function() {
//     var throttle = function(type, name, obj) {
//         obj = obj || window;
//         var running = false;
//         var func = function() {
//             if (running) { return; }
//             running = true;
//              requestAnimationFrame(function() {
//                 obj.dispatchEvent(new CustomEvent(name));
//                 running = false;
//             });
//         };
//         obj.addEventListener(type, func);
//     };

//     /* init - you can init any event */
//     throttle("resize", "optimizedResize");
// })();

// // handle event
// window.addEventListener("resize", function() {
//     if (window.matchMedia("(min-width: 768px)").matches && sliderList.classList.contains("swiper-wrapper")){
//             console.log("Resource conscious resize callback!");
//             sliderList.classList.remove("swiper-wrapper")
//             sliderIcons.classList.remove("swiper")
//             pagination.classList.add("displayNone")
//     }
//     if (window.matchMedia("(max-width: 768px)").matches){
//         sliderList.classList.add("swiper-wrapper")
//         console.log("Resource conscious resize callback!");
//         sliderIcons.classList.add("swiper")
//         pagination.classList.remove("displayNone")
//     }
    
// });

 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  
