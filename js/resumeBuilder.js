/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name" : "Xiaoying Lu",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "86-136-1198-0134",
    "email" : "495540992@qq.com",
    "github" : "https://github.com/XiaoyingLu",
    "twitter" : "",
    "location" : "China"
  },
  "bioPic" : "images/fry.jpg",
  "welcomeMessage" : "",
  "skills" :[
    "Android","html", "css", "js", "jQuery"
  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "Shanghai Yipai Co.Ltd",
      "title" : "Android Developer",
      "location" : "Shanghai, China",
      "dates" : "2016 until now",
      "description" : "Responsible for developing and progressing app YiPai"
    }
  ]
}

var education = {
  "schools" : [
    {
    "name" : "Shanghai University",
    "location" : "Shanghai",
    "degree" : "Bachelor Degree",
    "majors" : ["Chemical Engineering"],
    "dates" : "2009 - 2013",
    "url" : "",
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Web Development Nanodegree",
      "school" : "Udacity",
      "date" : 2017,
      "url" : "https://www.udacity.com"
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "Sample Project 1",
      "dates" : "2016",
      "description" : "",
      "images" : []
    },
    {
      "title" : "Sample Project 2",
      "dates" : "2016",
      "description" : "",
      "images" : []
    }]
}

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
  $("#header").append(HTMLskillsStart);

  bio.skills.forEach(function(skill) {
    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkill);
  });

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLcontactGeneric.replace("%contact%", bio.contacts.twitter).replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter);
};

education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", school.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
    $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
  });
};

work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(
      formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
  });
};

projects.display = function() {
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDescription);
    if (project.images.length > 0) {
      project.images.forEach(function(image) {
        var formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedImage);
      });
    }
  });
};


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});

function inName(name) {
  names = name.trim().split(" ");
  firstName = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
  lastName = names[1].toUpperCase();
  return firstName + " " + lastName;
};

work.display();
projects.display();
education.display();
bio.display();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);
