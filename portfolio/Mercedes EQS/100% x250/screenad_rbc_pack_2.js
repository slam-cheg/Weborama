(function (window) {
    //console.log("Weborama rbc billboard 2019.11.11");

    screenad.executeScript("if (!!document.querySelector('.banner__container__link')) { document.querySelector('.banner__container__link').style.display = 'none'}");

    var bannerWidth;
    var bannerHeight;
    var intervalDiv;

    function getQueryVariable(variable) {
        if (screenad.vars.hasOwnProperty(variable) && screenad.vars[variable] !== undefined) return screenad.vars[variable];
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (decodeURIComponent(pair[0]) == variable) return decodeURIComponent(pair[1]);
        }
        return undefined;
    }
    var randDiv = getQueryVariable("randID");

    // CHECK RBC STICKY

    var scripa =
        "" +
        "var interv, tries = 0;" +
        "function checkBanner() {" +
        "tries++;" +
        "if (document.querySelector('.js-funny-banner')) checkSticky();" +
        "else if (tries < 15) setTimeout(checkBanner, 250);" +
        "}" +
        "checkBanner();" +
        "function checkSticky() {" +
        "interv = setInterval(function() {" +
        "if (document.querySelector('.js-funny-banner').classList.contains('l-sticky')) {" +
        //"console.log(true);" +
        "window.funnySticky = true;" +
        "} else {" +
        "setTimeout(function() { clearInterval(interv); }, 10e3);" +
        //"console.log(false);" +
        "window.funnySticky = false;" +
        "}" +
        "}, 250);" +
        "}";
    screenad.executeScript(scripa);

    var scripan = "(function() { return window.funnySticky; })()";
    var inter = setInterval(executeSticky, 200);
    setTimeout(function () {
        clearInterval(inter);
    }, 30e3);

    function executeSticky() {
        screenad.executeScript(scripan, setMeSticky);
    }

    var canShow = false;

    function setMeSticky(bool) {
        if (bool == "true") {
            screenad.setZIndex(20);
            screenad.setSticky(true);
            screenad.setAlignment("#" + randDiv, "top");
            screenad.setOffset(0, 45);
            var goTop = 'document.querySelector("div[id^=scr_][id*=banner_html]").style.setProperty("top", "45px", "important")';
            screenad.executeScript(goTop);
        } else {
            screenad.setZIndex(9);
            screenad.setSticky(false);
            screenad.setAlignment("#" + randDiv, "banner");
            screenad.setOffset(0, 0);
        }
        screenad.position();
        canShow = true;
    }

    function setBillPosition(wi, he) {
        bannerWidth = wi;
        bannerHeight = he;

        screenad.addEventListener(screenad.VISIBILITY_CHANGE, function (e) {
            if (screenad.hasVisibility) getSizes();
        });

        screenad.onResize = getSizes;
        console.log(getSizes);

        getSizes();

        intervalDiv = setInterval(getSizes, 250);
        setTimeout(function () {
            clearInterval(intervalDiv);
            intervalDiv = setInterval(getSizes, 500);
        }, 2.5e3);
        setTimeout(function () {
            clearInterval(intervalDiv);
            intervalDiv = setInterval(getSizes, 1000);
        }, 10e3);
        setTimeout(function () {
            clearInterval(intervalDiv);
        }, 30e3);
    }

    var setPosition = function (w) {
        //console.info("random ID:" + randDiv + ", width = " + w + " pixels");
        if (w > 100) {
            screenad.setSize(w, bannerHeight); //resize layer to adslot size
            screenad.resize(w, bannerHeight); //resize layer to adslot size
            //screenad.setClip(0, 0, w, bannerHeight);

            //screenad.setAlignment("left", "banner");
            screenad.position();
            if (!screenad.isShowing && canShow) screenad.show();
        }
    };

    function getSizes() {
        var getBannerWidthString = "(function () { var el = $('#" + randDiv + "'); el.css({'overflow' : 'hidden'}); return el.css('width'); })()";
        screenad.executeScript(getBannerWidthString, function (wi) {
            setPosition(parseInt(wi));
        });
    }

    function checkThirdPartyFullscreenEnabled() {
        var scriptFS1 = "(function(){ return document.querySelector(";
        var scriptFS2 = "div[id^='full_']";
        var scriptFS3 = ") ? true : false; })()";
        var scriptFS = scriptFS1 + '"' + scriptFS2 + '"' + scriptFS3;
        screenad.executeScript(scriptFS, callbackFS);
    }
    function callbackFS(bool) {
        var booleanAnswer = bool == "true";
        if (!!booleanAnswer) {
            // FS ENABLED
            setTimeout(checkThirdPartyFullscreenEnabled, 250);
        } else {
            // FS DISABLED
            getSizes();
        }
    }
    setTimeout(checkThirdPartyFullscreenEnabled, 500);

    window.getQueryVariable = getQueryVariable;
    window.setBillPosition = setBillPosition;
})(window);
