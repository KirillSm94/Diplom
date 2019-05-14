'use strict';

let rev = document.getElementsByClassName('reviews-images')[0],
    imgOne = document.querySelector('.review-one'),
    imgTwo = document.querySelector('.review-two'),
    imgThree = document.querySelector('.review-three'),
    imgFour = document.querySelector('.review-four'),
    imgFive = document.querySelector('.review-five'),
    imgSix = document.querySelector('.review-six'),
    imgSeven = document.querySelector('.review-seven'),
    imgEight = document.querySelector('.review-eight'),
    imgNine = document.querySelector('.review-nine'),
    imgTen = document.querySelector('.review-ten'),
    imgEleven = document.querySelector('.review-eleven'),
    imgTwelve = document.querySelector('.review-twelve'),
    imgThirteen = document.querySelector('.review-thirteen'),
    imgFourteen = document.querySelector('.review-fourteen'),
    imgFifteen = document.querySelector('.review-fifteen');


let imgOneCurrTop,
    imgTwoCurrTop,
    imgThreeCurrTop,
    imgFourCurrTop,
    imgFiveCurrTop,
    imgSixCurrTop,
    imgSevenCurrTop,
    imgEightCurrTop,
    imgNineCurrTop,
    imgTenCurrTop,
    imgElevenCurrTop,
    imgTwelveCurrTop,
    imgThirteenCurrTop,
    imgFourteenCurrTop,
    imgFifteenCurrTop;// undefined

imgOne.style.top = "0px";
imgTwo.style.top = "375px";
imgThree.style.top = "750px";
imgFour.style.top = "1125px";
imgFive.style.top = "1500px";
imgSix.style.top = "1875px";
imgSeven.style.top = "2250px";
imgEight.style.top = "2625px";
imgNine.style.top = "3000px";
imgTen.style.top = "3375px";
imgEleven.style.top = "3750px";
imgTwelve.style.top = "4125px";
imgThirteen.style.top = "4500px";
imgFourteen.style.top = "4875px";
imgFifteen.style.top = "5250px";

function one () {

    imgOneCurrTop = parseInt(imgOne.style.top) - 1;//строка в число
    if (imgOneCurrTop <= -375) {
        imgOneCurrTop = imgOneCurrTop + 5250;
    }
    imgOne.style.top = imgOneCurrTop + 'px';

    imgTwoCurrTop = parseInt(imgTwo.style.top) - 1;//строка в число
    if (imgTwoCurrTop <= -375) {
        imgTwoCurrTop = imgTwoCurrTop + 5250;
    }
    imgTwo.style.top = imgTwoCurrTop + 'px';

    imgThreeCurrTop = parseInt(imgThree.style.top) - 1;//строка в число
    if (imgThreeCurrTop <= -375) {
        imgThreeCurrTop = imgThreeCurrTop + 5250;
    }
    imgThree.style.top = imgThreeCurrTop + 'px';

    imgFourCurrTop = parseInt(imgFour.style.top) - 1;//строка в число
    if (imgFourCurrTop <= -375) {
        imgFourCurrTop = imgFourCurrTop + 5250;
    }
    imgFour.style.top = imgFourCurrTop + 'px';

    imgFiveCurrTop = parseInt(imgFive.style.top) - 1;//строка в число
    if (imgFiveCurrTop <= -375) {
        imgFiveCurrTop = imgFiveCurrTop + 5250;
    }
    imgFive.style.top = imgFiveCurrTop + 'px';

    imgSixCurrTop = parseInt(imgSix.style.top) - 1;//строка в число
    if (imgSixCurrTop <= -375) {
        imgSixCurrTop = imgSixCurrTop + 5250;
    }
    imgSix.style.top = imgSixCurrTop + 'px';

    imgSevenCurrTop = parseInt(imgSeven.style.top) - 1;//строка в число
    if (imgSevenCurrTop <= -375) {
        imgSevenCurrTop = imgSevenCurrTop + 5250;
    }
    imgSeven.style.top = imgSevenCurrTop + 'px';

    imgEightCurrTop = parseInt(imgEight.style.top) - 1;//строка в число
    if (imgEightCurrTop <= -375) {
        imgEightCurrTop = imgEightCurrTop + 5250;
    }
    imgEight.style.top = imgEightCurrTop + 'px';

    imgNineCurrTop = parseInt(imgNine.style.top) - 1;//строка в число
    if (imgNineCurrTop <= -375) {
        imgNineCurrTop = imgNineCurrTop + 5250;
    }
    imgNine.style.top = imgNineCurrTop + 'px';

    imgTenCurrTop = parseInt(imgTen.style.top) - 1;//строка в число
    if (imgTenCurrTop <= -375) {
        imgTenCurrTop = imgTenCurrTop + 5250;
    }
    imgTen.style.top = imgTenCurrTop + 'px';

    imgElevenCurrTop = parseInt(imgEleven.style.top) - 1;//строка в число
    if (imgElevenCurrTop <= -375) {
        imgElevenCurrTop = imgElevenCurrTop + 5250;
    }
    imgEleven.style.top = imgElevenCurrTop + 'px';

    imgTwelveCurrTop = parseInt(imgTwelve.style.top) - 1;//строка в число
    if (imgTwelveCurrTop <= -375) {
        imgTwelveCurrTop = imgTwelveCurrTop + 5250;
    }
    imgTwelve.style.top = imgTwelveCurrTop + 'px';

    imgThirteenCurrTop = parseInt(imgThirteen.style.top) - 1;//строка в число
    if (imgThirteenCurrTop <= -375) {
        imgThirteenCurrTop = imgThirteenCurrTop + 5250;
    }
    imgThirteen.style.top = imgThirteenCurrTop + 'px';

    imgFourteenCurrTop = parseInt(imgFourteen.style.top) - 1;//строка в число
    if (imgFourteenCurrTop <= -375) {
        imgFourteenCurrTop = imgFourteenCurrTop + 5250;
    }
    imgFourteen.style.top = imgFourteenCurrTop + 'px';

    imgFifteenCurrTop = parseInt(imgFifteen.style.top) - 1;//строка в число
    if (imgFifteenCurrTop <= -375) {
        imgFifteenCurrTop = imgFifteenCurrTop + 5250;
    }
    imgFifteen.style.top = imgFifteenCurrTop + 'px';
}

let start = setInterval(one, 50);
