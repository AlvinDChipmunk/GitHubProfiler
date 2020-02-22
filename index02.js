// known constants 
const fs           = require("fs"); 
const axios        = require("axios"); 
const inquirer     = require("inquirer"); 
const util         = require("util");
const convertapi = require('convertapi')('DxNx3TNyFXBu3Ydn');
const generateHTML = require("./generateHTML"); 

// The built-in util package can be used to create Promise-based versions of functions using node style callbacks
const readFileAsync = util.promisify(fs.readFile); 
const writeFileAsync = util.promisify(fs.writeFile); 
const appendFileAsync = util.promisify(fs.appendFile); 
//const genHTMLAsync = util.promisify(genHTML.generateHTML); 

// global variables 
let color                = ""; 
let googleLocation       = ""; 
let htmlForFile          = ""; 
let htmlFileName         = ""; 
let pdfFileName          = ""; 
let htmlFileNameWithPath = ""; 
let pdfFileNameWithPath  = ""; 

function userData ( imgPath, usrName, usrFormalName, usrCompany, usrLoc, usrGitHome, usrBlog, usrBio, usrEmail, usrPubRepos, usrFollowers, usrFollowing, usrStars, usrColor ) { 

	this.imgPath       = imgPath; 
	this.usrName       = usrName; 
	this.usrFormalName = usrFormalName; 
	this.usrCompany    = usrCompany; 
	this.usrLoc        = usrLoc; 
	this.usrGitHome    = usrGitHome; 
	this.usrBlog       = usrBlog; 
	this.usrBio        = usrBio; 
	this.usrEmail      = usrEmail; 
	this.usrPubRepos   = usrPubRepos; 
	this.usrFollowers  = usrFollowers; 
	this.usrFollowing  = usrFollowing; 
	this.usrStars      = usrStars; 
	this.usrColor      = usrColor; 

} 

let tmpUserData = new userData ( "", "", "", "", "", "", "", "", "", "", "", "", "", "" ); 

inquirer
	.prompt (
		[
			{
				message: "Enter your GitHub username",
				name: "username"
			}, 
			{ 
				message: "Enter your E-Mail",
				name: "userEmail"
			}, 
			{ 
				type: "list", 
				name: "color", 
				message: "Choose a color scheme for the file.(up & down arrows to move selector, enter to select)",
				choices: [ "green", "blue", "pink", "red" ]
			}
		]
	)
	.then( function ( { username, userEmail, color } ) { 

			const queryUrl = `https://api.github.com/users/${username}`; 

			axios
				.get( queryUrl )
				.then ( function ( res ) {
					
						//was here to see the fields, so not needed anymore 
						//console.log ( res.data ); 

						tmpUserData.imgPath       = res.data.avatar_url; 
						tmpUserData.usrName       = res.data.login; 
						tmpUserData.usrFormalName = res.data.name; 
						tmpUserData.usrCompany    = res.data.company; 
						tmpUserData.usrLoc        = res.data.location; 
						tmpUserData.usrGitHome    = res.data.html_url; 
						tmpUserData.usrBlog       = res.data.blog; 
						tmpUserData.usrBio        = res.data.bio; 
						tmpUserData.usrEmail      = userEmail; 
						tmpUserData.usrPubRepos   = res.data.public_repos; 
						tmpUserData.usrFollowers  = res.data.followers; 
						tmpUserData.usrFollowing  = res.data.following; 
						tmpUserData.usrStars      = res.data.stars; 
						tmpUserData.usrColor      = color; 
						
						googleLocation = encodeURI ( tmpUserData.usrLoc ); 
						
						console.log ( "Profile Image        : " + tmpUserData.imgPath ); 
						console.log ( "Username             : " + tmpUserData.usrName ); 
						console.log ( "Actual Name          : " + tmpUserData.usrFormalName ); 
						
						console.log ( "Location             : " + tmpUserData.usrLoc ); 
						console.log ( "Git Home             : " + tmpUserData.usrGitHome ); 
						console.log ( "Blog                 : " + tmpUserData.usrBlog ); 
						console.log ( "Bio                  : " + tmpUserData.usrBio ); 
						console.log ( "E-Mail               : " + tmpUserData.usrEmail ); 
						console.log ( "# of public repos    : " + tmpUserData.usrPubRepos ); 
						console.log ( "How many followers   : " + tmpUserData.usrFollowers ); 
						console.log ( "# of people following: " + tmpUserData.usrFollowing ); 
						console.log ( "# of stars           : " + tmpUserData.usrStars ); 
						console.log ( "Color Scheme         : " + tmpUserData.usrColor ); 
						
						res.data.color = color; 
						
						console.log ( "\nAttempting to start generateHTML function.\n" ); 
						
						//htmlForFile = genHTMLAsync( res.data ) ; 
						htmlForFile = generateHTML ( res.data ) ; 
						
						htmlFileName = res.data.login + "Profile.html"; 
						pdfFileName  = res.data.login + "Profile.pdf"; 
						
						writeFileAsync ( htmlFileName, htmlForFile, function ( err ) { console.log ( ( err ) ? err : "Profile HTML file created." ); } ); 

						htmlFileNameWithPath = "./" + htmlFileName; 
						pdfFileNameWithPath  = "./" + pdfFileName; 

						convertapi.convert('pdf', {
							File: htmlFileNameWithPath
						}, 'html' ).then ( function ( result ) {
							result.saveFiles( pdfFileNameWithPath );
						});

					}
				); 	
		}
	); 

/*
var convertapi = require('convertapi')('DxNx3TNyFXBu3Ydn');
convertapi.convert('pdf', {
    File: '/path/to/my_file.html'
}, 'html').then(function(result) {
    result.saveFiles('/path/to/dir');
});
*/
