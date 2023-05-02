// ------------function for craeting the textarea of experience----------------

function addField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("qul-field");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Entre here");

  let uExperience = document.querySelector(".user-qualification");
  uExperience.appendChild(newNode);
}

// function for genrating the cv

function genrateCV() {
  let resume = (document.querySelector(".resume-data-card").style.display =
    "none");
  let template = (document.querySelector(".template-data-card").style.display =
    "block");

  // getting the value form resume form

  let nameVal = document.getElementById("Name").value;
  let contactVal = document.getElementById("phone").value;
  let facebookVal = document.getElementById("facebook").value;
  let instagramVal = document.getElementById("instagram").value;
  let linkedinVal = document.getElementById("linkedin").value;
  let objectiveVal = document.getElementById("objective").value;
  let educationVal = document.getElementById("qualification").value;
  let workExpVal = document.getElementById("experience").value;
  let EduVal = document.getElementsByClassName("qul-field");
  let str = "";
  for (let e of EduVal) {
    str = str + `<li>${e.value}</li>`;
  }

  let skillsVal = document.querySelectorAll(".tag-item span");
  let string = "";
  for (let i = 0; i < skillsVal.length; i++) {
    string = string + `<li>${skillsVal[i].innerText}</li>`;
  }

  // set the value in resume template

  let tempName = (document.getElementById("t-name").innerHTML = nameVal);
  let tempPhone = (document.getElementById("t-contact").innerHTML = contactVal);
  let tempFacebook = document
    .getElementById("t-fb")
    .setAttribute("href", facebookVal);
  let tempInstagram = document
    .getElementById("t-insta")
    .setAttribute("href", instagramVal);
  let tempLinkedin = document
    .getElementById("t-linkedin")
    .setAttribute("href", linkedinVal);
  let tempObj = (document.getElementById("t-obj").innerHTML = objectiveVal);
  let tempEdu = (document.getElementById("t-edu").innerHTML = educationVal);
  document.getElementById("t-edu").innerHTML = str;
  let tempskills = (document.getElementById("t-skills").innerHTML = skillsVal);
  document.getElementById("t-skills").innerHTML = string;
  let tempworkExp = (document.getElementById("t-w-exp").innerHTML = workExpVal);
}

// function for add skills

var tag = document.querySelector("#tags");
var liistItem = "";
var span = document.querySelector(".tag-item span");
tag.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    liistItem +=
      "<span class='skill-span'>" +
      e.target.value +
      '<i class="fa fa-times" aria-hidden ="true"></i>' +
      "</span>";
    tag.value = "";
    document.querySelector(".tag-item").innerHTML = liistItem;
  }
});

var close = document.querySelector(".fa");
document.addEventListener("click", function (e) {
  if (e.target.className == "fa fa-times") {
    e.target.parentNode.remove();
    liistItem = document.querySelector(".tag-item").innerHTML;
  }
});
