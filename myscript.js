const genPicture = () => {
	fetch('https://jsonplaceholder.typicode.com/photos/9999999')
	.then((response) => {
		if(!response.ok) {
			throw new Error("Network response was not OK")
		}
		return response.json()
	})
	.then((myJson) => {
		let myImage = document.createElement('img');
		myImage.src = myJson["url"];
		console.log("success");
		console.log(myJson);
		console.log(myJson["url"])
		document.querySelector('body').appendChild(myImage)
	})
	.catch((error) => console.error('There has been some kind of problem: ', error))
}

const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => reject(400), 1000)
})

myPromise
	.then((myText) => {
		console.log(myText);
	})
	.catch((error) => console.error('There has been some kind of problem, code: ', error))

const myFunction = (x) => {
	return new Promise((resolve, reject) => {
		if (typeof(x) == "string") {
			resolve("X jest stringiem")
		} else {
			reject("X nie jest stringiem")
		}
	})
}

myFunction(5)
.then(console.log)
.catch(console.error)