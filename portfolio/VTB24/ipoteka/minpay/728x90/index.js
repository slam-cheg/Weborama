const banner = document.querySelector(".banner");
const background = banner.querySelector(".background");
const minPayment = banner.querySelector(".description__minpay");
const plate = banner.querySelector(".plate");
const percent = banner.querySelector(".percent");
const titleOne = banner.querySelector(".title__first-stroke");
const titleTwo = banner.querySelector(".title__second-stroke");
const descriptionOne = banner.querySelector(".description-one");
const minpay = banner.querySelector(".minpay");
const descriptionTwo = banner.querySelector(".description-two");
const descriptionThree = banner.querySelector(".description-three");
const slash = banner.querySelector(".slash");
const button = banner.querySelector(".button");
const disclamer = banner.querySelector(".disclamer");
const disclamerText = banner.querySelector(".disclamer__text");
const disclamerChange = banner.querySelector(".disclamer__change");
const icoOne = banner.querySelector("#documents");
const icoTwo = banner.querySelector("#family");

banner.addEventListener("click", function () {
    screenad.click();
});

const firstSlide = () => {
    percent.style.opacity = "1";
    setTimeout(() => {
        background.classList.add("background_first-slide");
        plate.style.transform = "translateX(0px) skewX(20deg)";
        setTimeout(() => {
            titleOne.style.opacity = "1";
            setTimeout(() => {
                titleOne.style.opacity = null;
                secondSlide();
            }, 4000);
        }, 500);
    }, 500);
};

firstSlide();

const secondSlide = () => {
    titleTwo.classList.add("title_second-slide");
    setTimeout(() => {
        plate.style.transform = "translateX(-60px) skewX(20deg)";
        titleTwo.style.opacity = "1";
        background.classList.add("background_second-slide");
        percent.style.opacity = "1";
        percent.style.transform = "scale(1)";
        setTimeout(() => {
            titleTwo.style.opacity = null;
            percent.style.opacity = "0";
            percent.style.transform = null;
            thirdSlide();
        }, 4000);
    }, 500);
};

const thirdSlide = () => {
    plate.style.transform = "translateX(-40px) skewX(20deg)";
    setTimeout(() => {
        descriptionOne.style.opacity = "1";
        icoOne.style.opacity = "1";
        background.classList.add("background_third-slide");
        setTimeout(() => {
            descriptionOne.style.opacity = null;
            icoOne.style.opacity = null;
            fourthSlide();
        }, 4000);
    }, 500);
};

const fourthSlide = () => {
    percent.classList.add("percent_modif");
    plate.style.transform = "translateX(0px) skewX(20deg)";
    setTimeout(() => {
        percent.style.opacity = "1";
        descriptionThree.style.opacity = "1";
        button.style.transform = "translateY(0)";
        background.classList.add("background_fourth-slide");
        percent.style.transform = "scale(1)";
        setTimeout(() => {
            button.style.transform = null;
            disclamerSlide();
        }, 4000);
    }, 500);
};

const disclamerSlide = () => {
    plate.style.transform = null;
    descriptionThree.style.opacity = null;
    percent.style.opacity = "0";
    percent.style.transform = null;
    setTimeout(() => {
        disclamer.style.opacity = "1";
        disclamerText.style.opacity = "1";
        setTimeout(() => {
            disclamerText.style.opacity = null;
            disclamer.style.opacity = null;
            percent.classList.remove("percent_modif");
            background.classList.remove("background_fourth-slide");
            background.classList.remove("background_third-slide");
            background.classList.remove("background_second-slide");
            background.classList.remove("background_first-slide");
            setTimeout(() => {
                firstSlide();
            }, 1000);
        }, 4000);
    }, 500);
};
