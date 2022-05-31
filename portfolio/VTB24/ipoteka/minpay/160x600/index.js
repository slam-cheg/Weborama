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

let customEvent = "DEFAULT";
let customClick = `DEFAULT_CLICK`;

banner.addEventListener("click", () => {
    screenad.click();
    // screenad.event(`${customClick}`);
    // console.log(`${customClick}`);
});

const firstSlide = () => {
    percent.style.opacity = "1";
    setTimeout(() => {
        background.classList.add("background_first-slide");
        plate.style.transform = "translateX(0) skewX(10deg)";
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
    plate.style.transform = "skewX(10deg) translate(10px, -50px)";
    setTimeout(() => {
        percent.style.opacity = "1";
        descriptionThree.style.opacity = "1";
        button.style.transform = "translateX(0)";
        background.classList.add("background_fourth-slide");
        percent.style.transform = "scale(1)";
        setTimeout(() => {
            button.style.transform = null;
            disclamerSlide();
        }, 4000);
    }, 500);
};

const disclamerSlide = () => {
    descriptionThree.style.opacity = null;
    percent.style.opacity = "0";
    percent.style.transform = null;
    plate.style.transform = null;
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


// function getCsv(latitude, longitude) {
//     return fetch("./cities.json", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//     })
//         .then(checkResponse)
//         .then((res) => {
//             for (let i = 0; i < res.length; i++) {
//                 if (Math.abs(latitude - res[i].latitude) < 0.5 && Math.abs(longitude - res[i].longitude) < 0.5) {
//                     regionPlace.textContent = `${res[i].name_ru} и\u00A0${res[i].region_ru}`;
//                     customEvent = res[i].event;
//                     customClick = `${customEvent}_CLICK`;
//                     screenad.event(customEvent);
//                     break;
//                 }
//             }
//         })
//         .catch((err) => {
//             console.warn(err);
//         });
// }

// const checkResponse = (res) => {
//     if (res.ok) {
//         return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.status}`);
// };