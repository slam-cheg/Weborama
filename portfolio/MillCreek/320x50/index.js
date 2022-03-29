const titleOne = document.querySelector(".title-one");
const titleTwo = document.querySelector(".title-two");
const titleThree = document.querySelector(".title-three");
const descriptionOne = document.querySelector(".description-one");
const descriptionTwo = document.querySelector(".description-two");
const descriptionThree = document.querySelector(".description-three");
const imageOne = document.querySelector(".image-one");
const imageTwo = document.querySelector(".image-two");
const imageThree = document.querySelector(".image-three");
const imageFour = document.querySelector(".image-four");
const button = document.querySelector(".button");


rotation()
function rotation() {
    setTimeout(function () {
        titleOne.style.opacity = 0;
        titleTwo.style.opacity = 1;
        descriptionOne.style.opacity = 0;
        descriptionTwo.style.opacity = 1;
        imageOne.style.opacity = 0;
        imageTwo.style.opacity = 1;
        setTimeout(function () {
            titleTwo.style.opacity = 0;
            titleThree.style.opacity = 1;
            descriptionTwo.style.opacity = 0;
            descriptionThree.style.opacity = 1;
            imageTwo.style.opacity = 0;
            imageThree.style.opacity = 1;
            setTimeout(function () {
                titleThree.style.opacity = 0;
                descriptionThree.style.opacity = 0;
                imageThree.style.opacity = 0;
                imageFour.style.opacity = 1;
                button.style.opacity = 1
                setTimeout(function () {
                    titleOne.style.opacity = 1;
                    descriptionOne.style.opacity = 1
                    imageFour.style.opacity = 0;
                    imageOne.style.opacity = 1;
                    button.style.opacity = 0
                    rotation();
                }, 4000)
            }, 4000)
        }, 4000)
    }, 4000)
}