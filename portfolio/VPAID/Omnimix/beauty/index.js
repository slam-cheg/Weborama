var showButtonFromSecond = 2;

var app = new Interface();

app.stateChange(function (state, data) {
    switch (state) {
        case "SetConfig":
            if (data.customParams["st"] !== 1) {
                // hide timer
                document.querySelector("#timer").style.display = "none";
            }
            if (data.customParams["ss"] !== 1) {
                // hide sound
                document.querySelector("#sound").style.display = "none";
            }
            if (data.customParams["ct"] !== 1) {
                // click denied
                document.querySelector("#click").style.cursor = "default";
            }
            if (data.customParams["co"] > 0) {
                // time for close button
                document.querySelector("#close").style.display = "none";
            }
            app.cssStyle("background:#000;");
            app.resizeVideo(0, 0, "100%", "100%");
            break;
        case "AdVolumeChange":
            document.querySelector("#sound").setAttribute("data-event", data > 0 ? "ad-mute" : "ad-unmute");
            break;
        case "AdSkippableStateChange":
            document.querySelector("#close").addEventListener("click", app.close.bind(app));
            document.querySelector("#close").style.display = "block";
            break;
        case "AdPaused":
            document.querySelector("#click").setAttribute("data-event", "ad-resume");
            break;
        case "AdPlaying":
        case "forcedResumeAd":
            document.querySelector("#click").setAttribute("data-event", "ad-click");
            break;
    }
});

app.cuePoint([showButtonFromSecond], function (sec, data) {
    document.querySelector("#more_btn").classList.add("showme");
});
app.cuePoint([54], function (sec, data) {
    document.querySelector("#more_btn").classList.remove("showme");
});
app.cuePoint([59], function (sec, data) {
    document.querySelector("#more_btn").classList.add("showme");
});
app.timeChange(function (data) {
    document.querySelector("#timer").innerText = "?????????????? | " + Math.round(data.totalTime - data.currentTime) + " ??????.";
});
app.init();

document.querySelector("#click").addEventListener("click", function (event) {
    if (document.querySelector("#click").getAttribute("data-event") === "ad-resume") {
        app.resume();
    } else if (app.customParams["ct"] !== 0) {
        // ???????? ???????? ???? ????????????????
        app.pause();
        app.click();
    }
});
document.querySelector("#more_btn").addEventListener("click", function (event) {
    app.click();
    app.pause();
});
document.querySelector("#sound").addEventListener("click", function () {
    var dataEvent = document.querySelector("#sound").getAttribute("data-event");
    app.setAdVolume(dataEvent == "ad-mute" ? 0 : 1);
});
