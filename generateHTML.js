console.log ( "\nStarting inside generateHTML.js file.\n" ); 

const colors = { 
	green: { 
		wrapperBackground: "#E6E1C3", 
		headerBackground: "#C1C72C", 
		headerColor: "black", 
		photoBorderColor: "#black" 
	}, 
	blue: { 
		wrapperBackground: "#5F64D3", 
		headerBackground: "#26175A", 
		headerColor: "white", 
		photoBorderColor: "#73448C" 
	}, 
	pink: { 
		wrapperBackground: "#879CDF", 
		headerBackground: "#FF8374", 
		headerColor: "white", 
		photoBorderColor: "#FEE24C" 
	}, 
	red: { 
		wrapperBackground: "#DE9967", 
		headerBackground: "#870603", 
		headerColor: "white", 
		photoBorderColor: "white" 
	} 
}; 

function generateHTML ( data ) { 

	console.log ( "Inside generateHTML function." ); 

	let hugeString = '<!DOCTYPE html> \n'; 
	
	hugeString += '<html lang="en"> \n'; 
	hugeString += '	<head> \n'; 
	hugeString += '			<meta charset="UTF-8" /> \n'; 
	hugeString += '			<meta name="viewport" content="width=device-width, initial-scale=1.0" /> \n'; 
	hugeString += '			<meta http-equiv="X-UA-Compatible" content="ie=edge" /> \n'; 
	hugeString += '			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/> \n'; 
	hugeString += '			<link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet"> \n'; 
	hugeString += '			<title>Profile</title> \n'; 
	hugeString += '			<style> \n'; 
	hugeString += '				@page { margin: 0; } \n'; 
	hugeString += "\n"; 
	hugeString += '				*, \n'; 
	hugeString += '				*::after, \n'; 
	hugeString += '				*::before { box-sizing: border-box; } \n'; 
	hugeString += "\n"; 
	hugeString += '				html, body { \n'; 
	hugeString += '					padding: 0; \n'; 
	hugeString += '					margin: 0; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				html, body, .wrapper { height: 100%; } \n'; 
	hugeString += '				.wrapper { \n'; 
	hugeString += '					background-color: ' + colors[data.color].wrapperBackground + '; \n'; 
	hugeString += '					padding-top: 100px; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				body { \n'; 
	hugeString += '					background-color: white; \n'; 
	hugeString += '					-webkit-print-color-adjust: exact !important; \n'; 
	hugeString += '					font-family: "Cabin", sans-serif; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				main { \n'; 
	hugeString += '					background-color: #E9EDEE; \n'; 
	hugeString += '					height: auto; \n'; 
	hugeString += '					padding-top: 30px; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				h1, h2, h3, h4, h5, h6 { \n'; 
	hugeString += '					font-family: "BioRhyme", serif; \n'; 
	hugeString += '					margin: 0; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				h1 { font-size: 3em; } \n'; 
	hugeString += "\n"; 
	hugeString += '				h2 { font-size: 2.5em; } \n'; 
	hugeString += "\n"; 
	hugeString += '				h3 { font-size: 2em; } \n'; 
	hugeString += "\n"; 
	hugeString += '				h4 { font-size: 1.5em; } \n'; 
	hugeString += "\n"; 
	hugeString += '				h5 { font-size: 1.3em; } \n'; 
	hugeString += "\n"; 
	hugeString += '				h6 { font-size: 1.2em; } \n'; 
	hugeString += "\n"; 
	hugeString += '				.photo-header { \n'; 
	hugeString += '					position: relative; \n'; 
	hugeString += '					margin: 0 auto; \n'; 
	hugeString += '					margin-bottom: -50px; \n'; 
	hugeString += '					display: flex; \n'; 
	hugeString += '					justify-content: center; \n'; 
	hugeString += '					flex-wrap: wrap; \n'; 
	hugeString += '					background-color: ' + colors[data.color].headerBackground + ' \n'; 
	hugeString += '					color: ' + colors[data.color].headerColor + ' \n'; 
	hugeString += '					padding: 10px; \n'; 
	hugeString += '					width: 95%; \n'; 
	hugeString += '					border-radius: 6px; \n'; 
	hugeString += '				}  \n'; 
	hugeString += "\n"; 
	hugeString += '				.photo-header img { \n'; 
	hugeString += '					width: 250px; \n'; 
	hugeString += '					height: 250px; \n'; 
	hugeString += '					border-radius: 50%; \n'; 
	hugeString += '					object-fit: cover; \n'; 
	hugeString += '					margin-top: -75px; \n'; 
	hugeString += '					border: 6px solid ' + colors[data.color].photoBorderColor + ' \n'; 
	hugeString += '					box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				.photo-header h1, .photo-header h2 { \n'; 
	hugeString += '					width: 100%; \n'; 
	hugeString += '					text-align: center; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				.photo-header h1 { margin-top: 10px; } \n'; 
	hugeString += "\n"; 
	hugeString += '				.links-nav { \n'; 
	hugeString += '					width: 100%; \n'; 
	hugeString += '					text-align: center; \n'; 
	hugeString += '					padding: 20px 0; \n'; 
	hugeString += '					font-size: 1.1em; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				.nav-link { \n'; 
	hugeString += '					display: inline-block; \n'; 
	hugeString += '					margin: 5px 10px; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				.workExp-date { \n'; 
	hugeString += '					font-style: italic; \n'; 
	hugeString += '					font-size: .7em; \n'; 
	hugeString += '					text-align: right; \n'; 
	hugeString += '					margin-top: 10px; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				.container { \n'; 
	hugeString += '					padding: 50px; \n'; 
	hugeString += '					padding-left: 100px; \n'; 
	hugeString += '					padding-right: 100px; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				.row { \n'; 
	hugeString += '					 display: flex; \n'; 
	hugeString += '					 flex-wrap: wrap; \n'; 
	hugeString += '					 justify-content: space-between; \n'; 
	hugeString += '					 margin-top: 20px; \n'; 
	hugeString += '					 margin-bottom: 20px; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				.card { \n'; 
	hugeString += '					 padding: 20px; \n'; 
	hugeString += '					 border-radius: 6px; \n'; 
	hugeString += '					 background-color: ' + colors[data.color].headerBackground + ' \n'; 
	hugeString += '					 color: ' + colors[data.color].headerColor + ' \n'; 
	hugeString += '					 margin: 20px; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				.col { \n'; 
	hugeString += '					flex: 1; \n'; 
	hugeString += '					text-align: center; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				a, a:hover { \n'; 
	hugeString += '					text-decoration: none; \n'; 
	hugeString += '					color: inherit; \n'; 
	hugeString += '					font-weight: bold; \n'; 
	hugeString += '				} \n'; 
	hugeString += "\n"; 
	hugeString += '				@media print { body { zoom: .75; } } \n'; 
	hugeString += '			</style> \n'; 
	hugeString += '	<body> \n'; 
	hugeString += '		<div class="wrapper"> \n'; 
	hugeString += '			<div class="photo-header"> \n'; 
	hugeString += '				<img src="' + data.avatar_url + '" alt="Photo of ' + data.name + '" /> \n'; 
	hugeString += '				<h1>Hi!</h1> \n'; 
	hugeString += '				<h2>My name is ' + data.name + '!</h2> \n'; 
	
	if ( data.company ) { hugeString += '				<h5>Currently @ ' + data.company + '</h5> \n'; } 

	hugeString += '			<nav class="links-nav"> \n'; 

	if ( data.location ) { hugeString += '				<a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/' + data.location + '"><i class="fas fa-location-arrow"></i> ' + data.location + '</a> \n'; } 

	hugeString += '				<a class="nav-link" target="_blank" rel="noopener noreferrer" href="' + data.html_url + '"><i class="fab fa-github-alt"></i> GitHub</a> \n'; 

	if ( data.blog ) { hugeString += '							 <a class="nav-link" target="_blank" rel="noopener noreferrer" href="' + data.blog + '"><i class="fas fa-rss"></i> Blog</a> \n'; } 

	hugeString += '			</nav> \n'; 
	hugeString += '		</div> \n'; 
	hugeString += '		<main> \n'; 
	hugeString += '			<div class="container"> \n'; 
	hugeString += '				<div class="row"> \n'; 
	hugeString += '					<div class="col"> \n'; 
	hugeString += '						<h3> \n'; 

	hugeString += ( data.bio ) ? data.bio : ""; 

	hugeString += '</h3> \n'; 
	hugeString += '					</div> \n'; 
	hugeString += '				</div> \n'; 
	hugeString += '				<div class="row"> \n'; 
	hugeString += '					<div class="col"> \n'; 
	hugeString += '						<div class="card"> \n'; 
	hugeString += '							<h3>Public Repositories</h3> \n'; 
	hugeString += '							<h4>' + data.public_repos + '</h4> \n'; 
	hugeString += '						</div> \n'; 
	hugeString += '					</div> \n'; 
	hugeString += '					<div class="col"> \n'; 
	hugeString += '						<div class="card"> \n'; 
	hugeString += '							<h3>Followers</h3> \n'; 
	hugeString += '							<h4>' + data.followers + '</h4> \n'; 
	hugeString += '						</div> \n'; 
	hugeString += '					</div> \n'; 
	hugeString += '				</div> \n'; 
	hugeString += '				<div class="row"> \n'; 
	hugeString += '					<div class="col"> \n'; 
	hugeString += '						<div class="card"> \n'; 
	hugeString += '							<h3>GitHub Stars</h3> \n'; 
	hugeString += '							<h4>' + data.stars + '</h4> \n'; 
	hugeString += '						</div> \n'; 
	hugeString += '					</div> \n'; 
	hugeString += '					<div class="col"> \n'; 
	hugeString += '						<div class="card"> \n'; 
	hugeString += '							<h3>Following</h3> \n'; 
	hugeString += '							<h4>' + data.following + '</h4> \n'; 
	hugeString += '						</div> \n'; 
	hugeString += '					</div> \n'; 
	hugeString += '				</div> \n'; 
	hugeString += '			</div> \n'; 
	hugeString += '		</main> \n'; 
	hugeString += '		</div> \n'; 
	hugeString += '	</body> \n'; 
	hugeString += '</html>';

	return hugeString; 
} 

module.exports = generateHTML; 