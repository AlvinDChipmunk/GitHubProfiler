// known constants 
const fs          = require("fs"); 
const axios       = require("axios"); 
const inquirer    = require("inquirer"); 
const tfRepoNames = "repos.txt"; 

// global variables 
let profileImgPath = ""; 
let username       = ""; 
let userLat        = 0; 
let userLng        = 0; 
let userAPI        = "https://api.github.com/users/"; 
let userGitHome    = "https://github.com/"; 
let userEmail      = ""; 
let userPubRepos   = 0; 
let userFollowers  = 0; 
let userFollowing  = 0; 
let userBio        = ""; 


/* 

* Profile image
* User name
* Links to the following:
  * User location via Google Maps
  
  
  https://www.google.com/maps/place/
  
  Richmond,%20Virginia
  
  
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

{
"login": "AlvinDChipmunk",
"id": 6200080,
"node_id": "MDQ6VXNlcjYyMDAwODA=",
"avatar_url": "https://avatars0.githubusercontent.com/u/6200080?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/AlvinDChipmunk",
"html_url": "https://github.com/AlvinDChipmunk",
"followers_url": "https://api.github.com/users/AlvinDChipmunk/followers",
"following_url": "https://api.github.com/users/AlvinDChipmunk/following{/other_user}",
"gists_url": "https://api.github.com/users/AlvinDChipmunk/gists{/gist_id}",
"starred_url": "https://api.github.com/users/AlvinDChipmunk/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/AlvinDChipmunk/subscriptions",
"organizations_url": "https://api.github.com/users/AlvinDChipmunk/orgs",
"repos_url": "https://api.github.com/users/AlvinDChipmunk/repos",
"events_url": "https://api.github.com/users/AlvinDChipmunk/events{/privacy}",
"received_events_url": "https://api.github.com/users/AlvinDChipmunk/received_events",
"type": "User",
"site_admin": false,
"name": "Alvin Revilas",
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": null,
"public_repos": 10,
"public_gists": 0,
"followers": 0,
"following": 0,
"created_at": "2013-12-16T19:49:28Z",
"updated_at": "2019-10-27T05:47:38Z"
}

*/ 

let repoNames = new Array; 

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
			} 
		]
	)
	.then( function ( { username, userEmail } ) { 
			
			//const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`; 
			
			// if I just want the base information object, I may just the below query without the repos parameter
			const queryUrl = `https://api.github.com/users/${username}`; 
			// that might allow direct access to .login, .avatar_url, .html_url, .name, 
			
			axios
				.get( queryUrl )
				.then ( function ( res ) {
						console.log ( res.data ); 
						
						/*
						profileImgPath = res.data[0].owner.avatar_url; 
						username       = res.data[0].owner.login; 
						userAPI        = res.data[0].owner.url; 
						userGitHome    = res.data[0].owner.html_url; 

						userPubRepos = res.data[0].owner.public_repos; 
						if ( typeof  userPubRepos === 'undefined' ) { 
							userPubRepos = 0; 
						}

						userFollowers = res.data[0].owner.followers; 
						if ( typeof  userFollowers === 'undefined' ) { 
							userFollowers = 0; 
						}

						userFollowing = res.data[0].owner.following; 
						if ( typeof  userFollowing === 'undefined' ) { 
							userFollowing = 0; 
						}
						
						userBio = res.data[0].owner.bio; 
						if  (typeof  userBio === 'undefined' ) { 
							userBio = "Bio not found."; 
						}

						for (i in res.data) { 
							repoNames.push ( res.data[i].name ); 
						} 
						
						for ( i in repoNames ) { 
							repoNames[i] += "\n"; 
							// console.log ( repoNames[i] ); 
							fs.appendFile ( "repos.txt", repoNames[i], function ( err ) { 
									if (err) return console.log(err);  
									// console.log("Writing repo name to file: " + repoNames[i] ); 
								} 
							); 
						} 
						
						console.log ( "# of file names written: " + repoNames.length ); 
						userPubRepos = repoNames.length; 
						*/
						console.log ( "Profile Image        : " + res.data.avatar_url ); 
						console.log ( "Username             : " + res.data.login ); 
						console.log ( "Git Home             : " + res.data.html_url ); 
						console.log ( "E-Mail               : " + userEmail ); 
						console.log ( "# of public repos    : " + res.data.public_repos ); 
						console.log ( "How many followers   : " + res.data.followers ); 
						console.log ( "# of people following: " + res.data.following ); 
						console.log ( "Bio                  : " + res.data.bio ); 

						
					}
				); 	
		}
	); 

