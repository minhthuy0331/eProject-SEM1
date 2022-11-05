window.addEventListener("load", function () {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItem = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    let postionX = 0;
    let index = 0;
    nextBtn.addEventListener("click", function() {
        handleChangeSlide(1);
    });

    prevBtn.addEventListener("click", function() {
        handleChangeSlide(-1)
    });

    function handleChangeSlide(direction) {
        if (direction === 1) {
            if(index >= sliderLength - 1) {
                index = sliderLength -1;
                return;
            }
            postionX = postionX - sliderItemWidth; 
            // console.log("handleChangeSlide ~ postionX", postionX);
            sliderMain.style = `transform: translateX(${postionX}px)`;
            index++;
            
        } else if(direction === -1) {
            if(index <= 0) {
                index = 0;
                return;
            }
            postionX = postionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${postionX}px)`;
            index--;
        }
    }
});