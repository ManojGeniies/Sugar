manifest = [

    { src: 'pages/images/Topic01/T01P60/img2.png', id: '1' },

    { src: 'pages/images/Topic01/T01P60/image_02_small.png', id: '2' },

];


var audioPath = "pages/audio/Topic01/T01P60/T01P60";

var gItemAudioPath = ["pages/audio/Topic01/T01P60/T01P60_1",

    "pages/audio/Topic01/T01P60/T01P60_3",

    "pages/audio/Topic01/T01P60/T01P60_3",

    "pages/audio/Topic01/T01P60/T01P60_3",

    "pages/audio/Topic01/T01P60/T01P60_3"

];

clickViewMoreInfo();
glossaryFuncPageLevel();

var currCue = 0;

var idd = 0;





var __curState = 0;



//mateo maternal thank you

//var popupContentArray5 = [];

/* var popupContentArray2 = [];

var popupContentArray3 = [];

var popupContentArray4 = [];

var popupContentArray5 = [];

var popupContentArray6 = []; 

var popupContentArray7 = [];*/



var clickTabCount = 0;

var clickTabCount1 = 0;



var updateContentArray = [

    { time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "The point-of-care bedside glucose test at 40 minutes of age is 18 milligrams per deciliter. What action(s) should be taken? Select all that apply and click Submit." },

    { time: "7.0", carry: "", event: "", show: "", hide: "", transcript: "The point-of-care bedside glucose test at 40 minutes of age is 18 milligrams per deciliter. What action(s) should be taken? Select all that apply and click Submit." }

];

var updateContentArray0 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "That is correct." }

];

var updateContentArray1 = [{
    time: "0.0",
    carry: "",
    event: "",
    show: "",
    hide: "",
    transcript: "Here is some feedback on your response. See the options highlighted in yellow that are appropriate actions to be taken."
}

];

var updateContentArray2 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. See the options highlighted in yellow that are appropriate actions to be taken." }

];

var updateContentArray3 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. See the options highlighted in yellow that are appropriate actions to be taken." }

];

var updateContentArray4 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. See the options highlighted in yellow that are appropriate actions to be taken." }

];



function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

}

var __dataXml;

var audplayer = document.getElementById('audioplayer');

$(document).ready(function () {

    disableNextBtn();
    clickViewMoreInfo();
    bindClickableHotspot();
    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }

    var n = isInArray("M1L0T1P60", gCompPageArr);

    if (n == true) {

        enableNextBtn();

        //fnGlowNextBtn();

        fnDesiableNext(false);

    }

});



function audioReset() {

    gAudioId = "";

    onTimelineEnd();

}



function isInArray(value, array) {

    return array.indexOf(value) > -1;

}







function fnPlaySectionAudio(gCurrentIndex) {

    indexAudio = (gCurrentIndex);

    audioId = "audio_" + gCurrentIndex;

    gAudioId = audioId;



    fnHideShowAudioPlayer(false);

    updateContentArray = eval("updateContentArray" + (gCurrentIndex));

    initAudioPlayer(gItemAudioPath[gCurrentIndex])

}





function fnCompletion() {

    console.log("end");



    var _getCount1 = clickTabCount + clickTabCount1;

    if (_getCount1 >= 2) {

        console.log("start new");

        enableNextBtn();

        $('.boxInst').show()

        fnAudioFinishItemComp();

    }



}



function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');

        audplayer.pause();

        audplayer.currentTime = 0;

    } else {
        $('.boxInst').show();

        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');

        //fnGlowNextBtn();

        fnAudioFinishItemComp();

        audplayer.pause();

        audplayer.currentTime = 0;



    }

}

var correctOptions = ["1", "2"];



function bindClickableHotspot() {



    $('.option').addClass('aactive'); //.css({ 'cursor': 'pointer' });

    $('.option').off().on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('clicked');

        if ($('.option.clicked').length >= 1) {

            $('.cSubmitBtn').addClass('active');

            $('.cSubmitBtn.active').off().on('click', function () {

                submitClick($(this));



            });

        } else {

            $('.cSubmitBtn').removeClass('active');

        }

    });

}

/* highlight */
__clickedOpt = [];

function correctAnswerNotClicked(aCorrectAnswerVal) {
    for (var i = 0; i < aCorrectAnswerVal.length; i++) {
        //console.log("highlighted "+aCorrectAnswerVal[i]);
        //$(".clsPanel .option[curid='"+aCorrectAnswerVal[i]+"']").addClass("cborder");
        $(".clsPanel .option[curid='" + aCorrectAnswerVal[i] + "']").addClass("cborder");
    }
}

function areDifferentByIds(clickVal, correctVal) {
    var newArr = correctVal.slice();

    for (var i = 0; i < clickVal.length; i++) {


        var index = newArr.indexOf(clickVal[i]);
        if (index !== -1) {
            newArr.splice(index, 1);
        }

    }

    return newArr;
}

function highlightBorderPushVal() {
    __clickedOpt = [];
    $(".option.clicked").each(function () {
        console.log("highlight " + $(this).attr("curid"));
        __clickedOpt.push($(this).attr("curid"));
    });
}
/* highlight */


function submitClick(aCurrent) {

    if (aCurrent.hasClass("active")) {

        tinCanWrapper.sendStatementData("answered", "The-point-of-care-bedside-glucose-test-result-at-40-minutes-of-age-is-18-mg/dL-(1-mmol/L).What-action(s)-should-be-taken?", "The point-of-care bedside glucose test result at 40 minutes of age is 18 mg/dL (1 mmol/L). What action(s) should be taken?");

        $('.cSubmitBtn.active').hide();

        var selected = $('.clicked').length;
        $('.option.clicked').addClass("wrong");


        var incorrectCount = 0,
            correctCount = 0;

        $('.option').each(function () {
            console.log($(this).index());



            if ($(this).hasClass('clicked') && ($.inArray($(this).attr("curid"), correctOptions) == -1)) {

                $(this).addClass('wrong');

                incorrectCount++;

            } else if ($(this).hasClass('clicked') && ($.inArray($(this).attr("curid"), correctOptions) != -1)) {

                correctCount++;

            }



            $(this).off(); //.removeClass('clicked');

        });

        $(".feedback_icon").show();

        //$(this).append('<span class="feedback_icon" id="' + $(this).index() + '"></span>');
        $(".feedback_icon").off("click").on("click", function () {
            fnPauseAudio();
            var _getDesc = '';
            var _getHeading = '';
            __ficon = $(this).attr("id").split("_");
            console.log("current ID" + __ficon);
            if (__ficon == "0") {
                _getDesc = "Infants with this degree of hypoglycemia are at-risk for poor feeding and the fact that he is an IDM means he may have significant problems with hyperinsulinemia which may need to be treated with an IV infusion.";
                _getHeading = "Avoid intravenous dextrose and encourage the mother to breastfeed again";

            } else if (__ficon == "3") {
                _getDesc = "Although confirmatory testing may be helpful, you should not delay treatment for hypoglycemia while awaiting test results.";
                _getHeading = "Send a confirmatory plasma glucose sample to the lab before taking action";
            }

            $("<div class='glossaryPopup'></div>").insertAfter('.gridContainer');
            var __html = '<div class="popupglossasryCnt"><div id="helptopbar"><div id="id_glosTitleText">' + _getHeading + '</div><div class="close_txt"><span id="clsText">Close</span></div><div id="id_glosCloseBtn" class="id_glosCloseBtn" title="Close"></div></div><div class="glossaryCntTxt">' + _getDesc + '</div></div>';
            $('.glossaryPopup').html(__html);
        });

        $(correctOptions).each(function (i, val) {

            $('.option').eq(val).removeClass('wrong').addClass('correct');

        });

        // if (incorrectCount == 0 && correctCount== correctOptions.length) {

        //     fnPlaySectionAudio(1);

        // //    $('.downloadText').show();

        // } else {

        //     fnPlaySectionAudio(0);

        // }


        console.log("correct ", incorrectCount, correctCount, correctOptions.length);
        if (incorrectCount == 0 && correctCount == correctOptions.length) {

            fnPlaySectionAudio(0);

        } else if (incorrectCount != 0 && correctCount == correctOptions.length && correctCount > 0) {

            fnPlaySectionAudio(1);

        } else if (incorrectCount == 0 && correctCount < correctOptions.length && correctCount > 0) {

            fnPlaySectionAudio(2);

        } else if (incorrectCount != 0 && correctCount < correctOptions.length && correctCount > 0) {

            fnPlaySectionAudio(3);

        } else if (incorrectCount != 0 && correctCount == 0) {

            fnPlaySectionAudio(4);

        } else {

            fnPlaySectionAudio(4);

        }

        $('.option').off().removeClass('aactive'); //.css({'cursor':'default'});

        $('.cSubmitBtn').removeClass('active');

        highlightBorderPushVal();
        var _checkN = areDifferentByIds(__clickedOpt, correctOptions);
        //console.log(__clickedOpt,correctOptions);
        //console.log("highlight "+_checkN);
        correctAnswerNotClicked(_checkN);


        fnCompletion();
        enableNextBtn();
        fnDesiableNext(false);
        gCompPageArr.push("M1L0T1P60");
    }

}



$(".small_expand").on("click", function () {

    pauseAudio();

    //audioReset();

    $("#TabPopup5 .modal").show();

    $("#TabPopup5 .sectionTop").addClass("blur");

    $("#TabPopup5 .sectionContent").addClass("blur");
    $('.boxInst').addClass("blur");

    $(".modalTxtImg").attr('id', 'imgPopup' + $(this).attr('click_id'));

    if ($(this).attr('click_id') == 2) {

        $('.modalTextBottom').hide();

        $('.modalTxtImg').css('height', '420px');

        $('.modalContent').css('background', '#fff');

    } else {

        $('.modalTextBottom').show();

        $('.modalTxtImg').css('height', '385px');

        $('.modalContent').css('background', 'rgba(91, 91, 91, 1)');

    }



});

$(".closepopup").on("click", function () {

    playAudio();

    //audioReset();

    $("#TabPopup5 .modal").removeAttr("style");

    $("#TabPopup5 .sectionTop").removeClass("blur");

    $("#TabPopup5 .sectionContent").removeClass("blur");
    $('.boxInst').removeClass("blur");

});



function pauseAudio() {

    if (!fnPauseAudio()) {

        console.log(true);

        fnPauseAudio()

    } else {

        playPauseAudio();

        console.log(false);

    }

}

function playAudio() {

    if (!fnPauseAudio()) {

        console.log(true);

        playPauseAudio();

    }

}