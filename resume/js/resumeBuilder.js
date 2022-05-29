// Declare bio object to hold info about me
var bio = {
    "name": "Seb McDev",
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "sebmcdev@gmail.com",
        "github": "sebdev",
        "location": "Shenzhen, China"
    },
    "welcomeMessage": "Welcome to my site!",
    "skills": ["HTML", "CSS", "JavaScript"],
    "biopic": "images/fry.jpg"
};

bio.display = function() {
    // Name and Role
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);

    // Contact Info
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    // Pic, Message and Skills
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedWelcomeMsg);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }
};
bio.display();

// Declare a projects object that holds project info
var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "dates": "May, 2022",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "images": ["https://placedog.net/300/300/g"]
    }, {
        "title": "Resume Template",
        "dates": "May, 2022",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "images": ["https://placedog.net/300/300/g"]
    }]
};

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

// Declare a work object that holds job info
var work = {
    "jobs": [{
        "employer": "Willy Wonka's Chocolate Factory",
        "title": "Taster",
        "location": "Neverland, USA",
        "dates": "September 2016 - present",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
        "employer": "Times Square",
        "title": "Shoe Shiner",
        "location": "New York, USA",
        "dates": "2012 - 2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedWorkEmployer, formattedWorkTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
    }
};
work.display();

// Declare education object that holds education info
var education = {
    "schools": [{
        "name": "New York University",
        "location": "New York, NY",
        "degree": "Bachelor of Science",
        "majors": ["Mathematics"],
        "minor": "Literature",
        "dates": "2010-2014",
        "url": "https://www.nyu.edu/"
    }],
    "onlineCourses": [{
        "title": "Front End Web Development",
        "school": "Udacity",
        "dates": "September 2016 - Present",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }]
};

education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        if (education.schools[school].majors.length > 0) {
            for (var major = 0; major < education.schools[school].majors.length; major++) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        }
        var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
        $(".education-entry:last").append(formattedSchoolMinor);
        var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
        $(".education-entry:last").append(formattedSchoolURL);
    }

    for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(HTMLonlineClasses, formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
    }
};
education.display();

// Append google map to index.html
$("#mapDiv").append(googleMap);
