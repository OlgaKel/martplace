
//start gallery
document.querySelectorAll(".img-responsive").forEach(img =>{
   img.onclick = () => {
      document.querySelector(".image-popup-container").style.display = 'block';
      document.querySelector("#popupImage").src = img.getAttribute('src');
   }
});

document.querySelector(".close-button").onclick = () => {
      document.querySelector(".image-popup-container").style.display = 'none';
}
//end gallery

//start range added
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".selection__select-form input[type=number]"),
progress = document.querySelector(".selection__slider-progress");

let priceGap = 1000000;

priceInput.forEach(input =>{
      input.addEventListener("input", e =>{
      let minVal = parseInt(priceInput[0].value),
      maxVal = parseInt(priceInput[1].value);

      if((maxVal - minVal >= priceGap) && maxVal <= 50000000) {
            if(e.target.className === 'input-min'){
                  rangeInput[0].value = minVal;
                  progress.style.left = (minVal/rangeInput[0].max) * 100 + "%";

            }else{
                  rangeInput[1].value = maxVal;
                  progress.style.right = 100 - (maxVal/rangeInput[1].max) * 100 + "%";

            }
      }
});
});

rangeInput.forEach(input =>{
      input.addEventListener("input", e =>{
      let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

      if(maxVal - minVal < priceGap){
            if(e.target.className === 'range-min'){
                  rangeInput[0].value = maxVal - priceGap;
            }else{
                  rangeInput[1].value = maxVal + priceGap;
            }
      }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal/rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal/rangeInput[1].max) * 100 + "%";
      }
});
});

const rangeInputSquare = document.querySelectorAll(".range-input.square input"),
priceInputSquare = document.querySelectorAll(".selection__select-form.square input[type=number]"),
progressSquare = document.querySelector(".selection__slider-progress.square");

let priceGapSquare = 100;

priceInputSquare.forEach(input =>{
      input.addEventListener("input", e =>{
      let minVal = parseInt(priceInputSquare[0].value),
      maxVal = parseInt(priceInputSquare[1].value);

      if((maxVal - minVal >= priceGapSquare) && maxVal <= 2000) {
            if(e.target.className === 'input-min'){
                  rangeInputSquare[0].value = minVal;
                  progressSquare.style.left = (minVal/rangeInputSquare[0].max) * 100 + "%";

            }else{
                  rangeInputSquare[1].value = maxVal;
                  progressSquare.style.right = 100 - (maxVal/rangeInputSquare[1].max) * 100 + "%";

            }
      }
});
});

rangeInputSquare.forEach(input =>{
      input.addEventListener("input", e =>{
      let minVal = parseInt(rangeInputSquare[0].value),
      maxVal = parseInt(rangeInputSquare[1].value);

      if(maxVal - minVal < priceGapSquare){
            if(e.target.className === 'range-min'){
                  rangeInputSquare[0].value = maxVal - priceGapSquare;
            }else{
                  rangeInputSquare[1].value = maxVal + priceGapSquare;
            }
      }else{
            priceInputSquare[0].value = minVal;
            priceInputSquare[1].value = maxVal;
            progressSquare.style.left = (minVal/rangeInputSquare[0].max) * 100 + "%";
            progressSquare.style.right = 100 - (maxVal/rangeInputSquare[1].max) * 100 + "%";
      }
});
});

//end range added
$(function(){

      $('.project__items').slick({
         infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: true,
       });
       $('.review__slider').slick({
             infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       arrows: true,
           });
 });
 
