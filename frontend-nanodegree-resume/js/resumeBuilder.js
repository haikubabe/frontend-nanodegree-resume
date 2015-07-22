
//bio object

var bio = 
	{"name":"Sreemoyee Chowdhury",
	 "role":"Web Developer",
	 "age":"21",
	 "contacts":{"mobile":"+91 9051456362",
		     "email":"sreech94@gmail.com",
		     "twitter":"@haiku",
		     "github":"https://github.com/haikubabe",
		     "blog":"www.gohaiku.com",
		     "Location":"Kolkata,West Bengal"
			},
	"welcome_message":"I am so excited to start my career as a Web Developer",
	"bioPic":"http://cdn.skyje.com/wp-content/uploads/2014/02/attention.jpg",
	"skills":["dedicated","good-listener","focuss towards work","jolly"]
    }


//work object

var work = {"jobs":
		[		
		   {"employer":"Lexmark",
		    "title":"Software Developer",
		    "dates":"January 1,2011-Future",
		    "description":"A software developer is a person concerned with facets of the software development process. In short, developers (make software for the world to use). Their work includes researching, designing, implementing, and testing software.",
		    "Location":"Kolkata"},

		 {"employer":"Amazon",
		  "title":"Web Developer",
		  "dates":"July 5,2009-December 2014",
		  "description":"A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications, or distributed network applications that are run over HTTP from a web server to a web browser.",
		  "Location":"Bangalore"},

		{"employer":"Microsoft",
		 "title":"Android Developer Challenge",
		 "dates":"April 2005-March 2008",
		 "description":"The Android Developer Challenge (ADC) was launched by Google in 2008, with the aim of providing awards for high-quality mobile applications built on the Android platform. In November 2009, the winners of Android Developers Challenge II were selected after two rounds of scoring by thousands of Android users as well as an official panel of judges.",
		 "Location":"Mumbai"},

		{"employer":"Accenture",
		 "title":"Associate Software Developer",
		 "dates":"August 2004-October",
		 "description":"An Associate Software Engineer earns an average salary of Rs 319,122 per year. Most people move on to other jobs if they have more than 10 years' experience in this career. Experience strongly influences income for this job. The highest paying skills associated with this job are J2EE and Java/J2EE.",
		 "Location":"Hyderabad"}
		]
	   }


//projects object

var projects = {"projects":[
				{"title":"Particle Swarm Optimization",
				 "date":"July 1,2012-Dec 15,2012",
				 "description":"PSO optimizes a problem by having a population of candidate solutions, here dubbed particles, and moving these particles around in the search-space according to simple mathematical formulae over the particle's position and velocity.",
				 "image":"http://mnemstudio.org/ai/pso/images/pso1.gif"
				},

				{"title":"Image Categorization Using Machine Learning",
				 "date":"July 27,2014-May 15,2015",
				 "description":"To classify the images into two or more categories",
				 "image":"http://www.education.com/worksheet-image/315501/picture-categorization-sorting-categorizing-patterns.gif"
				}
			  ]
		}


//education object

var education = {
		   "schools":[
				{"name":"IIEST,Shibpur",
				 "degree":"B.E.",
				 "dates":"July 2011-May 2015",
				 "location":"Shibpur,Howrah,West Bengal",
				 "major":"CS"
				},
	
				{"name":"Stanford University",
				 "degree":"M.S.",
				 "dates":"August 2015-April 2018",
				 "location":"CA,USA",
				 "major":"CSE"
				}
			   ],
		  
		"courses":[
				{"title":"Cryptography",
				 "school":"Udemy",
				 "dates":"June 5,2012-September 12,2012",
				 "url":"https://www.udemy.com/cryptography"
				},

				{"title":"Web Development",
				 "school":"Udacity",
				 "dates":"June 5,2015-August 25,2015",
				 "url":"https://www.udacity.com/web development"
				}
			]
		}




var displaybio = function() {

	var formattedName = HTMLheaderName.replace("%data%" , bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%" , bio.role);
	var formattedmobile = HTMLmobile.replace("%data%" , bio.contacts.mobile); 
	var formattedemail = HTMLemail.replace("%data%" , bio.contacts.email);
	var formattedtwitter = HTMLtwitter.replace("%data%" , bio.contacts.twitter);
	var formattedgithub = HTMLgithub.replace("%data%" , bio.contacts.github);
	var formattedblog = HTMLblog.replace("%data%" , bio.contacts.blog);  
	var formattedlocation = HTMLlocation.replace("%data%" , bio.contacts.Location);
	var formattedmessage = HTMLwelcomeMsg.replace("%data%" , bio.welcome_message);
	var formattedpic = HTMLbioPic.replace("%data%" , bio.bioPic);
	var formattedcontact = formattedmobile + formattedemail + formattedtwitter + formattedgithub + formattedlocation;

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").prepend(formattedlocation);
	$("#topContacts").prepend(formattedblog);
	$("#topContacts").prepend(formattedgithub);
	$("#topContacts").prepend(formattedtwitter);	
	$("#topContacts").prepend(formattedemail);
	$("#topContacts").prepend(formattedmobile);
	$("#header").append(formattedmessage);
	$("#header").append(formattedpic);
	$("#footerContacts").append(formattedcontact);
	
	if (bio.skills.length > 0)	{
		
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);	

		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);	

		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}

}



function displaywork() {

	for(job in work.jobs) {
	
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDate = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);

		var formattedLocation = HTMLworkLocation.replace("%data%" , work.jobs[job].Location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}




projects.display = function() {

	for (project in projects.projects) {
	
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%" , projects.projects[project].title);
			$(".project-entry:last").prepend(formattedTitle);

			var formattedDate = HTMLprojectDates.replace("%data%" , projects.projects[project].date);
			$(".project-entry:last").append(formattedDate);

			var formattedDescription = HTMLprojectDescription.replace("%data%" , projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
		
			var formattedImage = HTMLprojectImage.replace("%data%" , projects.projects[project].image);
			$(".project-entry:last").append(formattedImage);

			
	}
}




education.display = function() {
	
	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%" , education.schools[school].name);
		
		var formattedDegree = HTMLschoolDegree.replace("%data%" , education.schools[school].degree);

		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDate = HTMLschoolDates.replace("%data%" , education.schools[school].dates);
		$(".education-entry:last").append(formattedDate);

		var formattedLocation = HTMLschoolLocation.replace("%data%" , education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%" , education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

		
	}

	$("#education").append(HTMLonlineClasses);	
	
	for (course in education.courses) {
	
		$("#education").append(HTMLschoolStart);		
		var formattedTitle = HTMLonlineTitle.replace("%data%" , education.courses[course].title);
		
		var formattedSchool = HTMLonlineSchool.replace("%data%" , education.courses[course].school);
		
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDate = HTMLonlineDates.replace("%data%" , education.courses[course].dates);
		$(".education-entry:last").append(formattedDate);

		var formattedURL = HTMLonlineURL.replace("%data%" , education.courses[course].url);
		$(".education-entry:last").append(formattedURL);
		
	}
}

	

function inName() {
	var name = bio.name;
	name = name.split(" ");
	//console.log(name):
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}	

displaybio();
displaywork();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);



