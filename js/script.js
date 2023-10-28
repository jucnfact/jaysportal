// SOUND ENGINE:

$.fn.play=(sound)=>{
    let x = $("" + sound + "")[0];
    x.play();
}
$.fn.reset=(sound)=>{
    let y = $("" + sound + "")[0];
    y.pause();
    y.currentTime = 0;
}

// SPLASH SCREEN:

document.onreadystatechange =()=>{
    if (document.readyState !== "complete") {
        $('loader').css('visibility', 'visible');
    } else {
        setTimeout(() => {
            $('loader').fadeOut(2000)
        }, 2000);
    }
    $('input').attr({'autocomplete': 'off', 'autocapitalized': 'false', 'spellcheck': 'false'});
}

// LOGIN SYSTEM:

$('#log-submit').click(()=>{
    if($('#pCode').val() == "142167" && $('#stuID').val() == "ekastu") {
        $('logged-out').css('display', 'none');
        $('#portal').show();
        $.fn.play("#success");
    } else {
        $("#login-error").animate({"height":"80px"})
        setInterval(() => {
            $("#login-error").animate({"height":"-40px"})
        }, 10000);
        $('#pCode').val('');
        $('#stuID').val('');
        $.fn.play("#error");
    }
});

// 2 PORTAL UPDATE ENGINES:

/* NOTE: Running the wrong Portal Update Engine or two engines at a time will result in both functional and display irregularities. */

/*              ENGINE 1:
    * Allows tests
    * Leaves portal open from 5pm to 10pm
    * Closes portal from 10pm to 5pm
    * Suitable for test period */

/* updatePortal=()=>{
    let now = new Date(),
    min = now.getMinutes(),
    hr = now.getHours() + 1
    // Natural Time Display
    smartTime=()=>{
        if (hrLeft == 1) { // singular hr if = 1
            hrLeft = `${hrLeft} hour`;
        } else if (hrLeft == 0) { // hide hr if < 1
            hrLeft = '';
        } else {
            hrLeft = `${hrLeft} hours`;
        }
        if (minLeft == 60) { // if min = 60
            hrLeft = `${(parseInt(hrLeft) + 1)} hours`;
            minLeft = '';
        } else if (minLeft == 1) { // singular min if = 1
            minLeft = `${minLeft} minute`;
        } else {
            minLeft = `${minLeft} minutes`;
        }
    }
    // Tab and Page Navigation
    activeTab=(pg_title, tab_numb)=>{
        $('#titlebar').html(pg_title);
        $('#page div.page:not(:nth-child(' + tab_numb + '))').hide();
        $('#page div.page:nth-child(' + tab_numb + ')').show();
        $('#tabbar div:not(:nth-child(' + tab_numb + '))').removeClass('active-tab');
        $('#tabbar div:nth-child(' + tab_numb + ')').addClass('active-tab');
    }
    // If Time is Greater Than or Equal to 5pm
    if (hr > 18 || hr < 23) {
        console.log('Time is greater than 5pm or, less than 10pm -> ' + hr)
        // Time and Announcement
        let hrStr = '' + (22 - hr) + ''
        hrLeft = hrStr,
        minLeft = 60 - min
        smartTime()
        $('#portal').html(`
        <div  class="openStatus">
        <i class="fa fa-lock-open successIcon stackIcon"></i>
            <div id="msgTitle">OPEN!</div>
            <div>The portal is currently open.</div>
            <div class="card smartTime">Closing in the next <b>${hrLeft} ${minLeft}</b></div>
            <div class="card news">${announcement}</div>
            <div class="card instructor"><div id="instCard">
                <div><img src="img/pic.jpg"></div>
                <div id="instName">J. U. Ngwuoke
                <div id="ln-2">SSCE,&nbsp;ASIC&nbsp;UK,&nbsp;B.Sc</div>
                </div>
                <i class="fa fa-wifi-3" id="live"></i>
            </div></div>
        </div>`)
        // When Tab is Clicked
        $("#showPortal").click(()=>{
            activeTab('Portal', 1);
        })
        $("#showCourses").click(()=>{
            activeTab('Courses', 2);
        })
        $("#showProjects").click(()=>{
            activeTab('Projects', 3);
        })
        $("#showTests").click(()=>{
            activeTab('Tests', 4);
        })
    }
    // If Time is Less Than 5pm, or Greater Than or Equal to 10pm
    if (hr < 18 || hr >= 23) {
        console.log('Time is less than 5pm or, greater than or equal to 10pm -> ' + hr)
        $('#portal').show();
        //time
        let hrStr = '' + (17 - hr) + ''
        if (hrStr.search('-') == 0) { // If hr difference is negative
            hrLeft = hr - 5 // Current hr - open duration
        } else {
            hrLeft = hrStr;
        }
        minLeft = 60 - min
        smartTime();
        $('#portal').html(`
        <div  class="closedStatus">
        <i class="fa fa-lock noActivityIcon stackIcon"></i>
            <div id="msgTitle">CLOSED!</div>
            <div>The portal is currently closed.</div>
            <div class="card smartTime">Opening in the next <b>${hrLeft} ${minLeft}</b></div>
        </div>`)
        $('#openedStatus').html('')
        $('#courses').html('')
        $('#projects').html('')
        $('#tests').html('')
    }
}
setInterval(updatePortal, 1000) */

/*              ENGINE 2:
    * Allows copying note
    * Leaves portal open
    * Never closes portal
    * Suitable for non-test period */

updatePortal=()=>{
    // Tab and Page Navigation
    activeTab=(pg_title, tab_numb)=>{
        $('#titlebar').html(pg_title);
        $('#page div.page:not(:nth-child(' + tab_numb + '))').hide();
        $('#page div.page:nth-child(' + tab_numb + ')').show();
        $('#tabbar div:not(:nth-child(' + tab_numb + '))').removeClass('active-tab');
        $('#tabbar div:nth-child(' + tab_numb + ')').addClass('active-tab');
    }
    // Time and Announcement
    $('#portal').html(`
    <div  class="openStatus">
    <i class="fa fa-lock-open successIcon stackIcon"></i>
        <div id="msgTitle">OPEN!</div>
        <div>The portal is currently open.</div>
        <div class="card smartTime">Now always <b>open</b></div>
        <div class="card news">${announcement}</div>
        <div class="card instructor"><div id="instCard">
            <div><img src="img/pic.jpg"></div>
            <div id="instName">J. U. Ngwuoke
            <div id="ln-2">SSCE,&nbsp;ASIC&nbsp;UK,&nbsp;B.Sc</div>
            </div>
            <i class="fa fa-wifi-3" id="live"></i>
        </div></div>
    </div>`)
    // When Tab is Clicked
    $("#showPortal").click(()=>{
        activeTab('Portal', 1);
    })
    $("#showCourses").click(()=>{
        activeTab('Courses', 2);
    })
    $("#showProjects").click(()=>{
        activeTab('Projects', 3);
    })
    $("#showTests").click(()=>{
        activeTab('Tests', 4);
    })
}
setInterval(updatePortal, 1000)

// CONTENT ENGINE:

// Page Bottom Margin Fix
$(".page").append("<br><br><br><br>");
// "No Activity" Page
$("noActivity").html(`
<i class="fa fa-bell-slash noActivityIcon stackIcon"></i>
<div id="msgTitle">No Activity!</div>
<div>There are no activities at this time.</div>`);
// "Courses" Page
$("#courses").prepend(`
<div id="courseListing">
<div class="course">
    <img class="intro-img" src="img/com.jpg">
    <div class="course-label">Computer Science</div>
    <div id="classes">JSS1 to SS2</div>
    <div id="students">50+ Students</div>
    <div id="description">Computer Science is the study of computers and their architechture, languages, and applications, in all aspects, as well as the mathematical structures that relate to computers and computation.</div>
</div>
<div class="course">
    <img class="intro-img" src="img/bsc.jpg">
    <div class="course-label">Basic Science</div>
    <div id="classes">JSS1 to JSS3</div>
    <div id="students">30+ Students</div>
    <div id="description">Basic Science is the foundation of scientific knowledge. It is comprised of the fundamental principles of natural sciences, such as physics, chemistry and biology.</div>
    <JSS2bsc></JSS2bsc>
    <JSS3bsc></JSS3bsc>
</div>
<div class="course">
    <img class="intro-img" src="img/phy.jpg">
    <div class="course-label">Physics</div>
    <div id="classes">SS1 & SS2</div>
    <div id="students">10+ Students</div>
    <div id="description">Physics is the branch of science concerned with the study of properties and interactions of space, time, matter and energy.</div>
</div>
<div class="course">
    <img class="intro-img" src="img/ah.jpg">
    <div class="course-label">Animal Husbandry</div>
    <div id="classes">SS1 & SS2</div>
    <div id="students">10+ Students</div>
    <div id="description">Animal Husbandry is the management and care of farm animals by humans for profit, in which genetic qualities and behaviour, considered to be advantegeous to humans, are further developed.</div>
    <SS1ah></SS1ah>
    <SS2ah></SS2ah>
</div>
</div>
<div id="note">
    <div class="card" id="board"></div>
    <img id="chalk" src="img/chalk.png">
    <button id="cancelNote"></button>
</div>
`);
// "Tests" Page
$.fn.loadTest=(quiz)=>{
    let q = quiz[0].code, t =quiz[0].title
    $(q).html(`
    <div class="quizCourse">
        <div class="ass-img"></div>
        <div class="ass-box">
            <div class="title-label">${t}</div>
            <div class="title-icons">
                <div id="questions">15 Questions</div>
                <div id="time">Limited Time</div>
                <div id="trials">1 Trial</div>
            </div>
            <button class="enterBtn" onclick="$.fn.quiz(${q})"></button>
        </div>
    </div>`);
    img=(tag, img)=>{
        $('' + tag + ' .ass-img').css('background-image', 'url(img/' + img + '.jpg)');
    }
    tst_imgs=(file)=>{
        for (let i = 0; i < tests.length; i++) {
            img(tests[i], file);
        }
    }
    crs_imgs=(img)=>{
        let courses = ['com', 'bsc', 'ah', 'phy']
        for (let i = 0; i < courses.length; i++) {
            if (q.indexOf(courses[i])) {
                tst_imgs(img)
            }
        }
    }
    let tests = ['JSS1comTst', 'JSS2comTst', 'JSS3comTst', 'SS1comTst', 'SS2comTst'];
    crs_imgs('com');
    tests = ['JSS1bscTst', 'JSS2bscTst', 'JSS3bscTst'];
    crs_imgs('bsc');
    tests = ['SS1ahTst', 'SS2ahTst', 'SS3ahTst'];
    crs_imgs('ah');
    tests = ['SS1phyTst', 'SS2phyTst', 'SS3phyTst'];
    crs_imgs('phy');
}
$("#showTests").click(()=>{
    let tests = [JSS1comTst, JSS1bscTst, JSS2comTst, JSS2bscTst, JSS3comTst, JSS3bscTst, SS1comTst, SS1ahTst, SS1phyTst, SS2comTst, SS2ahTst, SS2phyTst, SS3comTst, SS3ahTst, SS3phyTst]
    for (let i = 0; i < tests.length; i++) {
        $.fn.loadTest(tests[i]);
    }
})
// Note Card and "Notes" Page
$.fn.loadNote=(note)=>{
    let n = note[0].code, t =note[0].title;
    $(n).html(`
    <div class="noteCrd">
        <div class="ass-img"><i class="icon-notebook"></i></div>
        <div class="ass-box">
            <div class="title-label">${t}</div>
            <button class="copyBtn" onclick="$.fn.copy(${n})"></button>
        </div>
    </div>`);
}
$("#showCourses").click(()=>{
    let notes = [JSS1com, JSS1bsc, JSS2com, JSS2bsc, JSS3com, JSS3bsc, SS1com, SS1ah, SS1phy, SS2com, SS2ah, SS2phy, SS3com, SS3ah, SS3phy]
    for (let i = 0; i < notes.length; i++) {
        $.fn.loadNote(notes[i]);
    }
})

// NOTE ENGINE:

$.fn.copy=(note)=>{
    $('#courseListing').hide();
    $('#courses br').hide();
    $('#note').show();
    $('#titlebar').html(note[0].title);
    const typed = new Typewriter('#board', {
        loop: false,
    });
    typed.typeString("" + note[0].note + "").start();
    $('#cancelNote').show();
    $.fn.play("#hello");
    $('#cancelNote').click(()=>{
        $("#titlebar").html('Courses');
        $('#cancelNote').hide();
        $('#note').hide();
        $('#courseListing').show();
        $('#courses br').show();
        $.fn.reset("#hello");
    })
    $('#note').hover(()=>{
        $("#board").html(note[0].title);
    })
}

// QUIZ ENGINE:

let que_count = 0;
let que_numb = 1;
let userScore = 0;
// Getting Questions and Options From Array
showQuestions=(index, quiz)=>{
    const option_list = document.querySelector("#optionList"),
    que_text = document.querySelector("#question"),
    quizTitle = document.querySelector('#titlebar'),
    next_btn = document.querySelector("#nxtQuest"),
    quesCounter = document.querySelector("#questLeft");
    // When Next Que button is clicked
    next_btn.onclick = ()=>{
        // If question count is less than total question length
        if (que_count < quiz.length - 1) {
            que_count++; // Increment the que_count value
            que_numb++; // Increment the que_numb value
            showQuestions(que_count, quiz); // Calling showQestions function
            queCounter(que_numb); // Passing que_numb value to queCounter
        } else {
            showResult(); // Calling showResult function
            $.fn.play("#success");
            exitQuiz=()=>{
                que_count = 0;
                que_numb = 1;
                userScore = 0;
                $('#quizResults').hide();
                $('.proceedBtn').hide();
                $('#stuInfo input').val('')
                $('#stuInfo').show();
                $('#quiz').hide();
                $('#quizListing').show();
                $('#quiz').removeClass('resQuizCrd');
                $("#nxtQuest").html('NEXT QUESTION');
            }
        }
    }
    // If question count is equal to total question length
    if(que_count == quiz.length - 1){
        $("#nxtQuest").html('Submit');
        $("#nxtQuest").addClass('submit');
        $("#quizActive").append(`
        <form action="https://formsubmit.co/placiidjay@gmail.com" method="POST" target="_blank" id="submit">
            <input type="text" name="_honey">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_next" value="https://jucnfact.github.io/jaysportal/success.html">
            <input type="text" value="${quiz[0].title}" name="Assessment&nbsp;Title"/>
            <input type="text" name="name" value="${$('#fName').val()}" required/>
            <input type="text" value="${$('#lName').val()}" name="Last&nbsp;Name"/>
            <input type="email" name="email" value="student@student.com" required>
            <input type="text" value="${userScore} / ${quiz.length}" name="Score"/>
            <button type="submit" id="subQuest">Submit</button>
        </form>`);
    }
    // Click form submission button with next question button
    $('.submit').click(()=>{
        $('#subQuest').click();
    })
    // Creating div tag for question and option and passing the value using array index
    let title_tag = quiz[0].title,
    que_tag = quiz[index].q,
    option_tag = '<div class="option">'+ quiz[index].opt[0] +'</div>'
    + '<div class="option">'+ quiz[index].opt[1] +'</div>'
    + '<div class="option">'+ quiz[index].opt[2] +'</div>'
    + '<div class="option">'+ quiz[index].opt[3] +'</div>';
    quizTitle.innerHTML = title_tag; // Adding new span tag inside que_tag
    que_text.innerHTML = que_tag; // Adding new span tag inside que_tag
    option_list.innerHTML = option_tag; // Adding new div tag inside option_tag
    const opt = option_list.querySelectorAll(".option");
    opt[0].onclick = () => {
        optionSelected(opt[0]);
        opt[0].classList.add("activeOpt");
    };
    opt[1].onclick = () => {
        optionSelected(opt[1]);
        opt[1].classList.add("activeOpt");
    };
    opt[2].onclick = () => {
        optionSelected(opt[2]);
        opt[2].classList.add("activeOpt");
    };
    opt[3].onclick = () => {
        optionSelected(opt[3]);
        opt[3].classList.add("activeOpt");
    };
    function optionSelected(answer) {
        let userAns = answer.textContent; // Getting user selected option
        let correcAns = quiz[que_count].a; // Getting correct answer from array
        const allOptions = option_list.children.length; //getting all option items
        console.log(userAns);
        if(userAns == correcAns){ // If user selected option is equal to array's correct answer
            userScore += 1; // Upgrading score value with 1
            console.log("Correct Answer");
            console.log("Your correct answers = " + userScore);
        }else{
            console.log("Wrong Answer");
        }
        for(i=0; i < allOptions; i++){
            option_list.children[i].classList.add("disabled"); // Once user select an option then disabled all options
        }
    }
    function showResult(){
        title_tag = quiz[0].title + ' Result ';
        quizTitle.innerHTML = title_tag; // Adding new span tag inside que_tag
        let quizCrd = document.querySelector('#quiz');
        quizCrd.classList.add('resQuizCrd');
        $('#quizActive').hide();
        $('#quizResults').show();
        let quizResults = $('#quizResults');
        let eResult = `<div id="eResult"><p>GRADE: <b>A+</b></p><h3><i class="fa fa-handshake"></i> Very Impressive, ${$('#fName').val()}!</h3><p>You scored <b>${userScore}</b> out of <b>${quiz.length}</b> questions―it's a <b>perfect score</b>. You are making outstanding progress in your assessments.</p></div>`;
        let aResult = `<div id="aResult"><p>GRADE: <b>A</b></p><h3><i class="fa fa-thumbs-up"></i> Great Job, ${$('#fName').val()}!</h3><p>You scored <b>${userScore}</b> out of <b>${quiz.length}</b> questions―it's an <b>excellent score</b>. You are making good progress in your assessments.</p></div>`;
        let bResult = `<div id="bResult"><p>GRADE: <b>B</b></p><h3><i class="fa fa-battery-three-quarters"></i> Almost There, ${$('#fName').val()}!</h3><p>You scored <b>${userScore}</b> out of <b>${quiz.length}</b> questions―it's a <b>good score</b>. Don't relent, you are almost at the top.</p></div>`;
        let cResult = `<div id="cResult"><p>GRADE: <b>C</b></p><h3><i class="fa fa-check-circle"></i> Not Bad, ${$('#fName').val()}!</h3><p>You scored <b>${userScore}</b> out of <b>${quiz.length}</b> questions―it's an <b>average score</b>. I believe you will do better.</p></div>`;
        let dResult = `<div id="dResult"><p>GRADE: <b>D</b></p><h3><i class="fa fa-book-reader"></i> Please Study, ${$('#fName').val()}!</h3><p>You scored <b>${userScore}</b> out of <b>${quiz.length}</b> questions―it's a <b>low score</b>. Kindly revise what you've learnt more often.</p></div>`;
        let fResult = `<div id="fResult"><p>GRADE: <b>F</b></p><h3><i class="fa fa-book"></i> Study Hard, ${$('#fName').val()}!</h3><p>You scored <b>${userScore}</b> out of <b>${quiz.length}</b> questions―it's a <b>poor score</b>. Please go back to your notes.</p></div>`;
        if (userScore >= 15){ quizResults.html(eResult)}
        else if(userScore >= 12){ quizResults.html(aResult)}
        else if(userScore >= 10){ quizResults.html(bResult)}
        else if(userScore >= 8){ quizResults.html(cResult)}
        else if(userScore >= 6){ quizResults.html(dResult)}
        else{ quizResults.html(fResult)}
        localStorage.setItem('userScore', userScore);
        $('#quizResults').append("<div class='card instruction'><b>*</b> Please <b>do not retake</b> this assessment. It may block all your scores from submitting properly.</div><button onclick='exitQuiz()'>Exit</button>");
    }
    queCounter=(index)=>{
        // Creating a new span tag and passing the question number and total question
        totalQueCounTag = '<b>'+ index +'</b> of <b>' + quiz.length + '</b> Questions';
        quesCounter.innerHTML = totalQueCounTag;  // Adding new span tag inside quesCounter
    }
}
// Require Student Information
$('#stuInfo input').on('input', ()=>{
    if ($('#fName').val() !== '' && $('#lName').val() !== '') {
        $('.proceedBtn').show();
    } else {
        $('.proceedBtn').hide();
    }
})
// No Spaces in Login Form Inputs
$('#stuInfo input').keypress((e)=>{
    if (e.keyCode == 32) {
        e.returnValue = false;
        return false;
    }
})
// Quiz Function
$.fn.quiz=(quiz)=>{
    $('#quizListing').hide();
    $('#quiz').show();
    $("#nxtQuest").removeAttr('class');
    $("#submit").remove();
    $('#titlebar').html('Student Information');
    $('.startQuiz').click(() => {
        $('#quizRules').hide();
        $('#quizActive').show();
        showQuestions(0, quiz);
        $('#questLeft').html('<b>'+ 1 +'</b> of <b>' + quiz.length + '</b> Questions');
        $.fn.play("#success");
    });
    $('.proceedBtn').click(()=>{
        $('#stuInfo').hide();
        $('#titlebar').html('Rules');
        $('#quizRules').show();
    });
    $('.cancelQuiz').click(()=>{
        $('.proceedBtn').hide();
        $('#quizRules').hide();
        $('#stuInfo input').val('')
        $('#stuInfo').show();
        $('#quiz').hide();
        $('#quizListing').show();
        $("#titlebar").html(quiz[0].category);
    })
}