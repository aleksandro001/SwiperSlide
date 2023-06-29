let btnExpand = document.querySelector(".slider__btn-expand");
let sliderList = document.querySelector(".slider__icons-list");

btnExpand.addEventListener("click", function(){
    sliderList.classList.toggle("click");
    this.classList.toggle("click");
    
    if (this.classList.contains("click")){
        this.textContent = "Скрыть";
    }else{
        this.textContent = "Показать все";
    }
});
