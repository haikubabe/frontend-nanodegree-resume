var email = "sreemoyeec172@gmail.com";
var newemail = email.replace("gmail", "rediff");
var name = "Sreemoyee Chowdhury";
var role = "Software Developer";

console.log(email);
console.log(newemail);

var awesomethoughts = "I am Sreemoyee Chowdhury and I am AWESOME!";
var funthoughts = awesomethoughts.replace("AWESOME" , "FUN");

//$ is the jquery selector
$("#main").append(funthoughts); 



for(var i=0;i<9;i++)
{
	console.log(i);
}





var email = "sreemoyeec172@gmaiil.com";
var role = "Web Developer";
var name = "Sreemoyee Chowdhury";
var age = 21;
var welcome = "Hiiii! Welcome Sreemoyee";
var url = "http://cdn.skyje.com/wp-content/uploads/2014/02/attention.jpg";

var formattedName = HTMLheaderName.replace("%data%" , name);
var formattedRole = HTMLheaderRole.replace("%data%" , role);

$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)




var bio = 
	{"name":name,"role":role,
		"age":age,"welcome_message":welcome,
		"contacts":{"mobile":9051456362,"email":email,
			   "github":"https://github.com/haikubabe",
				"location":"Bangalore"},
		"skills":["hard-working","good-listener","dedicated","have-patience"],
		"url":url};


//$("#main").append(bio.name);

var work = {"jobs":
		[		
		   {"employer":"Lexmark",
		    "title":"Software Developer",
		    "dates":"January 1,2011-Future",
		    "description":"A software developer is a person concerned with facets of the software development process. In short, developers (make software for the world to use.) Their work includes researching, designing, implementing, and testing software.",
		    "Location":"Kolkata"},

		 {"employer":"Amazon",
		  "title":"Web Developer",
		  "dates":"July 5,2009-December 2014",
		  "description":"A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications, or distributed network applications that are run over HTTP from a web server to a web browser."
		  "Location":"Bangalore"},

		{"employer":"Microsoft",
		 "title":"Android Developer Challenge",
		 "dates":"April 2005-March 2008",
		 "description":"The Android Developer Challenge (ADC) was launched by Google in 2008, with the aim of providing awards for high-quality mobile applications built on the Android platform. In November 2009, the winners of Android Developers Challenge II were selected after two rounds of scoring by thousands of Android users as well as an official panel of judges."
		 "Location":"Mumbai"},

		{"employer":"Accenture",
		 "title":"Associate Software Developer",
		 "dates":"August 2004-October",
		 "description":"An Associate Software Engineer earns an average salary of Rs 319,122 per year. Most people move on to other jobs if they have more than 10 years' experience in this career. Experience strongly influences income for this job. The highest paying skills associated with this job are J2EE and Java/J2EE.",
		 "Location":"Hyderabad"}
		]
	   };



var education = {"school":{"name":"Kendriya Vidyalaya No.1 Ishapore",
			"city":"Kolkata","no_of_year":12,
			"majors":["Data Structure","Algorithm","DBMS","Networks"],
			"minors":["Financial Accounting","Management"]
			},
			"online-courses":["Web Development","Git and Github",
			"Python","Javascript"]
		};


var projects = {"college_projects":[
					{"2nd-year":"Particle-Swarm Optimization",
					    "3rd-year":"PSO using Medical Image Registration",
						"Final-year":"Image Categorization using Machine Learning"
					}
			],
		"internships":{
				"organization":"Technophilia Systems Pvt.Ltd.",
				"Project-name":"Android App Development"}
		}; 

		 
if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%" , bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%" , bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%" , bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%" , bio.skills[3]);
	$("#skills").append(formattedSkill);

}
	
function displaywork() {
	for(job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
	
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displaywork(); 




