const genPicture = () => fetch("https://api.unsplash.com/photos/random?client_id=KBhAd8BBDYdSYAU1ikLeq1QsjRfq9NSLC6G8ubnDFr4")
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not OK')
		}
		return (response.json());
	})
	.then((myJson) => {
		let myImage;
		let downloadsButton;
		if (document.getElementById('myImg')) {
			myImage = document.getElementById('myImg');
			myImage.src = myJson.urls.raw;
			downloadsButton = document.getElementById('downloadsButton');
			downloadsButton.onclick = function () { showDownloadsText(myJson.downloads) }
			if (document.getElementById('myTextElement')) {
				console.log("here")
				document.getElementById('myTextElement').innerHTML = myJson.downloads
			}
		}
		else {
			myImage = document.createElement('img');
			myImage.width = "500";
			myImage.height = "500";
			myImage.src = myJson.urls.raw;
			myImage.id = "myImg";
			downloadsButton = document.createElement('button')
			downloadsButton.id = "downloadsButton"
			downloadsButton.onclick = function () { showDownloadsText(myJson.downloads) }
			downloadsButton.style.width = '200px';
			downloadsButton.style.height = '200px'
			document.body.appendChild(downloadsButton);
			document.body.appendChild(myImage);
			document.body.insertBefore(myImage, downloadsButton)
		}
	})
	.catch((error) => {
		console.error('There has been some kind of problem, error: ', error);
	})

const showDownloadsText = (text) => {
	let myTextElement = document.createElement('div')
	myTextElement.innerHTML = text;
	myTextElement.id = "myTextElement";
	document.getElementById('downloadsButton').appendChild(myTextElement)
}

const getTopStory = () => {
	fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not OK')
			}
			return (response.json());
		})
		.then((myJson) => {
			getAndShowStory(myJson[0])
		})
		.catch((error) => {
			console.error('There has been some kind of problem, error: ', error);
		})
}
const getAndShowStory = (id) => {
	fetch("https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty")
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not OK')
			}
			return (response.json());
		})
		.then((myJson) => {
			let myTextElement2 = document.createElement('div')
			myTextElement2.innerHTML = myJson.title;
			myTextElement2.style.color = "white";
			myTextElement2.id = "myTextElement2";
			document.body.appendChild(myTextElement2)
		})
		.catch((error) => {
			console.error('There has been some kind of problem, error: ', error);
		})
}

const genMovie = () => {
	fetch('https://api.themoviedb.org/3/movie/550?api_key=a873c1468183ea42cbb937efd3b8462c')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not OK')
		}
		return (response.json());
	})
	.then((myFunnyJson) => {
		let myTextElement3 = document.createElement('div')
			myTextElement3.innerHTML = myFunnyJson.title;
			myTextElement3.style.color = "white";
			myTextElement3.id = "myTextElement3";
			document.body.appendChild(myTextElement3)
	})
	.catch((error) => {
		console.error('There has been some kind of problem, error: ', error);
	})
}