let courseTxt1 = document.getElementById("courseTxt1"),
    courseTxt2 = document.getElementById("courseTxt2"),
    courseTxt3 = document.getElementById("courseTxt3"),
    courseTxt4 = document.getElementById("courseTxt4"),
    courseTxt5 = document.getElementById("courseTxt5"),
    courseTxt6 = document.getElementById("courseTxt6"),
    firstNameTxt = document.getElementById("firstNameTxt"),
    lastNameTxt = document.getElementById("lastNameTxt"),
    ageTxt = document.getElementById("ageTxt"),
    phoneTxt = document.getElementById("phoneTxt"),
    genderTxt = document.getElementById("genderTxt"),
    schoolNameTxt = document.getElementById("schoolNameTxt"),
    countryTxt = document.getElementById("countryTxt"),
    englishTxt = document.getElementById("englishTxt"),
    mathsTxt = document.getElementById("mathsTxt"),
    score1Txt  = document.getElementById("score1Txt"),
score2Txt = document.getElementById("score2Txt"),
score3Txt = document.getElementById("score3Txt"),
score4Txt = document.getElementById("score4Txt"),
score5Txt = document.getElementById("score5Txt"),
score6Txt = document.getElementById("score6Txt"),
scoreEnglishTxt  = document.getElementById("scoreEnglishTxt"),
scoreMathsTxt  = document.getElementById("scoreMathsTxt"),
popupItem=  document.getElementById("popupItem"),
//validationids

valEnglish= document.getElementById("valEnglish"),
val1= document.getElementById("val1"),
val2= document.getElementById("val2"),
val3= document.getElementById("val3"),
val4= document.getElementById("val4"),
val5= document.getElementById("val5"),
val6= document.getElementById("val6"),
valmaths= document.getElementById("valmaths"),
results=document.getElementById("results"),

    course1,
    course2,
    course3,
    course4,
    course5,
    course6,
    firstName,
    lastName,
    phone,
    gender,
    schoolName,
    country,
    english,
    maths,
    score1,
score2,
score3,
score4,
score5,
score6,
scoreMaths,
scoreEnglish
    submitBtn = document.getElementById("submitBtn");
let points = 0;
let dateNow;
let age;
let ageDiff;
let average;
let agePoints;
let avePts;
let countryPts;

function check() {
    d = document;
    myArray = [];
    for (h = 0; h < 6; h++) {
      myArray[h] = d.getElementById('pl' + (h + 1)).value;
    }
    for (a = 0; a < 6; a++) {
      for (b = 1; b < 7; b++) {
        d.getElementById('pl' + (a + 1)).options[b].style.display = "block";
        for (c = 0; c < 6; c++) {
          if (d.getElementById('pl' + (a + 1)).options[b].value == myArray[c]) {
            d.getElementById('pl' + (a + 1)).options[b].style.display = "none";
          }
        }
      }
    }
  }

  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();

submitBtn.addEventListener("click", function () {
    validateForm()
})






function validateForm() {

    if (firstNameTxt.value == "" || firstNameTxt.value == null) {
        firstNameTxt.nextElementSibling.innerHTML = "*Required";
        console.log("*Required");
    } else {
        firstNameTxt.nextElementSibling.innerHTML = "";
        console.log(firstNameTxt.value);
    }

    if (lastNameTxt.value == "" || lastNameTxt.value == null) {
        lastNameTxt.nextElementSibling.innerHTML = "*Required";
        console.log("*Required");
    } else {
        lastNameTxt.nextElementSibling.innerHTML = "";
        console.log(lastNameTxt.value);
    }

    
    if (genderTxt.value == "" || genderTxt.value == null) {
        genderTxt.nextElementSibling.innerHTML = "*Required";
        console.log("*Required");
    } else {
        genderTxt.nextElementSibling.innerHTML = "";
        console.log(genderTxt.value);
    }
    if (ageTxt.value == "" || ageTxt.value == null) {
        ageTxt.nextElementSibling.innerHTML = "*Required";
        console.log("*Required");
    } else {
        ageTxt.nextElementSibling.innerHTML = "";
        console.log(ageTxt.value);

    }

    if (phoneTxt.value == "" || phoneTxt.value == null) {
        phoneTxt.nextElementSibling.innerHTML = "*Required";
        console.log("*Required");
    } else {
        phoneTxt.nextElementSibling.innerHTML = "";
        console.log(phoneTxt.value);
    }

    if (schoolNameTxt.value == "" || schoolNameTxt.value == null) {
        schoolNameTxt.nextElementSibling.innerHTML = "*Required";
        console.log("*Required");
    } else {
        schoolNameTxt.nextElementSibling.innerHTML = "";
        console.log(schoolNameTxt.value);
    }

    if (countryTxt.value == "" || countryTxt.value == null) {
        countryTxt.nextElementSibling.innerHTML = "*Required";
        console.log("*Required");
    } else {
        countryTxt.nextElementSibling.innerHTML = "";
        console.log(countryTxt.value);
    }

    







    if (englishTxt.value == "" || englishTxt.value == null||scoreEnglishTxt.value==""||scoreEnglishTxt.value==null) {
        valEnglish.innerHTML = "*Required";
        console.log("*Required");
    } else {
        valEnglish.innerHTML = "";
        console.log(englishTxt.value);
    }

    if (mathsTxt.value == "" || mathsTxt.value == null || scoreMathsTxt.value==""||scoreMathsTxt.value=="") {
        valmaths.innerHTML = "*Required";
        console.log("*Required");
    } else {
        valmaths.innerHTML = "";
        console.log(scoreMathsTxt.value);
    }

    if (score1Txt.value==""||score1Txt.value==null) {
        val1.innerHTML = "*Required";
        console.log("*Required");
    } else {
        val1.innerHTML = "";
        console.log( score1Txt.value );

    }

    if (score2Txt.value==""||score2Txt.value==null) {
        val2.innerHTML = "*Required";
        console.log("*Required");
    } else {
        val2.innerHTML = "";
        console.log( score3Txt.value );
    }

    if (score3Txt.value==""||score3Txt.value==null) {
        val3.innerHTML = "*Required";
        console.log("*Required");
    } else {
        val3.innerHTML = "";
        console.log( score3Txt.value );

    }

    if (score4Txt.value==""||score4Txt.value==null) {
        val4.innerHTML = "*Required";
        console.log("*Required");
    } else {
        val4.innerHTML = "";
        console.log( score4Txt.value );
    }

    if (score5Txt.value==""||score5Txt.value==null) {
        val5.innerHTML = "*Required";
        console.log("*Required");
    } else {
        val5.innerHTML = "";
        console.log( score5Txt.value );
    }

    if (score6Txt.value==""||score6Txt.value==null) {
        val6.innerHTML = "*Required";
        console.log("*Required");
    } else {
        val6.innerHTML = "";
        console.log( score6Txt.value );
    }

    














    if (firstNameTxt.value != "" && lastNameTxt.value != "" && ageTxt.value != "" && phoneTxt.value != "" && schoolNameTxt.value != "" && countryTxt.value != "" && englishTxt.value != "" && mathsTxt.value != ""&& score1Txt.value != ""&& score2Txt.value != ""&& score3Txt.value != ""&& score4Txt.value != ""&& score5Txt.value != ""&& score6Txt.value != "") {
        AssignVal() ;
 
         
          
       
       console.log(firstNameTxt.value, lastNameTxt.value, ageTxt.value,
        phoneTxt.value, schoolNameTxt.value, countryTxt.value,
        englishTxt.value,mathsTxt.value, score1Txt.value, score2Txt.value,
        score3Txt.value, score4Txt.value, score5Txt.value,score6Txt.value
       );
   }


}


function AssignVal() {
    dateNow = new Date;
     age = new Date(ageTxt.value);
     ageDiff = dateNow.getFullYear() - age.getFullYear()
    console.log(ageDiff);
    

    // course1 = courseTxt1.value
    // course2 = courseTxt2.value
    // course3 = courseTxt3.value
    // course4 = courseTxt4.value
    // course5 = courseTxt5.value
    // course6 = courseTxt6.value
    firstName =  firstNameTxt.value
    lastName = lastNameTxt.value
    phone = phoneTxt.value
    gender = genderTxt.value
    schoolName = schoolNameTxt.value
    country = countryTxt.value
    english = englishTxt.value
    maths = mathsTxt.value
  score1= parseInt(score1Txt.value)
 score2= parseInt( score2Txt.value)
score3 =parseInt( score3Txt.value)
score4 =parseInt( score4Txt.value)
score5=parseInt( score5Txt.value)
score6 = parseInt(score6Txt.value) 
scoreMaths=parseInt(scoreMathsTxt.value) 
scoreEnglish = parseInt(scoreEnglishTxt.value)
 average= (score1+score2+score3+score4+score5+score6+scoreEnglish+scoreMaths)/8
    

credibility()
}

function credibility() {
    if(ageDiff>=18 &&ageDiff<=24 ){
        points+=100
        agePoints=100;
    }
    else if(ageDiff>=25 &&ageDiff<=30 ){
        points+=80
        agePoints=80;
    }
    else if(ageDiff>=31 &&ageDiff<=35 ){
        points+=50
        agePoints=50;
    }
    else if(ageDiff>=36 &&ageDiff<=40 ){
        points+=30
        agePoints=30;
    }
    else if(ageDiff>=41 ){
        points+=10
        agePoints=10;
    }
    console.log(`after age points=${points}`);

    switch (country) {
        case "1": points+=50;
        console.log(`country points:${points}`);
            countryPts =50;
            break;
    
            case "2":points+=40;
            console.log(`country points:${points}`);
            countryPts =40;
            break;

            case "3":points+=30;
            console.log(`country points:${points}`);
            countryPts =30;
            break;
            case "4":points+=20;
                console.log(`country points:${points}`);
                countryPts =20;
            break;
            case "5":points+=10;
            console.log(`country points:${points}`);
            countryPts =10;
            break;
        default:
            
    }
    if (average>=90&& average<=100)  {
        points+=150
        console.log(`average point is 150`);
        avePts=150;
    }
    else if (average>=85&& average<=89)  {
        points+=140
        console.log(`average point is 140`);
        avePts=140;
    }
    else  if (average>=75&& average<=84)  {
        points+=120
        console.log(`average point is 120`);
        avePts=120;
    }

    else  if (average>=74&& average<=65)  {
        points+=100
        console.log(`average point is 100`);
        avePts=100;
    }

    else  if (average>=60&& average<=64)  {
        points+=80
        console.log(`average point is 80`);
        avePts=80;
    }
    else  if (average>=50&& average<=59)  {
        points+=50
        console.log(`average point is 50`);
        avePts=50;
    }
    else  if (average>=40&& average<=49)  {
        points+=20
        console.log(`average point is 20`);
        avePts=20;
    }
    validatePoints()
}


function validatePoints() {

     // Get the modal
     var modal = document.getElementById("myModal");

     // Get the button that opens the modal
 
 
     // Get the <span> element that closes the modal
     var span = document.getElementsByClassName("close")[0];
 
     // When the user clicks the button, open the modal 
 
     modal.style.display = "block";
    if (points>=180) {
        popupItem.innerHTML=` 
        <p style="color:white;font-size:30px">Scholarship awarded with a total points of  <br> ${points}
        <canvas class="text-center   chart" id="myChart" height="400"></canvas> <br>
        <button class="btn btn-outline-secondary fw-bold " id="closeBtn">OKAY</button>
        </p>
        `
        piechart()
        console.log(`accepted with total points of ${points}`);
        
        
    }
    else{
        popupItem.innerHTML=`    
        <p style="color:red;font-size:30px">Request for scholarship has been denied with a total points of ${points}
        <canvas class="text-center" id="myChart" height="400"></canvas> <br>
        <button class="btn btn-outline-danger fs-5" id="closeBtn">OKAY</button>

        </p>`
        piechart()
        console.log(`Rejected with total points of ${points}`);
       
    }


    document.getElementById("closeBtn").onclick = function () {
        modal.style.display = "none";
         clearForm()
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
          clearForm()
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
              clearForm()
        }
    }
    points=0;
}


function clearForm() {
    countryTxt.value=""
    firstNameTxt.value=""
    lastNameTxt.value=""
    genderTxt.value=""
    schoolNameTxt.value=""
    phoneTxt.value=""
    score1Txt.value=""
    score2Txt.value=""
    score3Txt.value=""
    score4Txt.value=""
    score5Txt.value=""
    score6Txt.value=""
    scoreMaths.value=""
    scoreEnglishTxt.value=""
    ageTxt.value=""
   
    
}
function piechart() {
   
    var xValues = ["Age", "Country", "Grade"];
    var yValues = [agePoints, countryPts, avePts];
    var barColors = [
        "#b91d47",
        "#321136",
        "#87718a"

    ];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            responsive: true,
    
            title: {
                display: true,
                text: "This is how your total of " +points+ " points was divided based On Your Criteria "
            }
        }
    });
}




