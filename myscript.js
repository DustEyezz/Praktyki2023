const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy'},
    {title: 'Total enlightenment', pages: 250, genre: 'romance'},
    {title: 'Big loss', pages: 400, genre: 'fantasy'},
    {title: 'Tenth Joy', pages: 32, genre: 'action'},
    {title: 'Quickfix', pages: 15, genre: 'fantasy'},
    {title: 'World Ender', pages: 199, genre: 'fantasy'},
    {title: 'Paranormal', pages: 200, genre: 'thriller'},
];

const mapToPages = (list, operation = ((page) => page)) => list.map(({pages}) => operation(pages))
console.log(mapToPages(books, ((page) => page)))

const SumPages = (myPages, initialValue = 0) => myPages.reduce((result, newPage) => result + newPage, initialValue)
console.log(SumPages(mapToPages(books), 1000))
console.log(SumPages(mapToPages(books), 0))

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [6, 7]

console.log(numbers.concat(numbers2))
console.log(numbers.reverse()[0])
console.log("Marek".endsWith("ek"))

const arr1 = ["Anna", "Maria"];

function filterNumbersGreaterThanThree(numArray) {
	let resArray = new Array();
	for (let index = 0; index < numArray.length; index++) {	
		if(numArray[index] > 3) {
			resArray.push(numArray[index])
		}
	}
	return resArray;
}

const filterNumbers = (numberArray, comparator) => numberArray.filter((number) => comparator(number));

console.log(filterNumbersGreaterThanThree(numbers))
console.log(filterNumbers(numbers, ((number) => number > 3)))
console.log(filterNumbers(numbers, ((number) => number < 3)))




function myRecursion(x) { //zad1 
	if (x > 0){ // do zrobienia z y
		console.log(x)
		myRecursion(x - 1)
	}
}

myRecursion(10)

function joinArrays(Arr1, Arr2) { //zad 3
	//for (let index = 0; index < Arr1.length; index++) {
		//Arr1.push("Cos tu trzeba zrobic")
	//}
	return Arr1
}
console.log(joinArrays(numbers, ["Grzegorz", "Marek"]))

function myFilter(myArray, elementToBeFiltered) {
	let resArray = new Array();
	for (let index = 0; index < myArray.length; index++) {
		//if (myArray[index]) { //warunek do zrobienia
			//resArray.push("Cos");
		//}
	} 
}

function mySum(Arr) {
	let result = 0;
	for (let index = 0; index < Arr.length; index++) {
		result+=index; // tu do poprawy by nie dodawało index a elementy z tablicy
	}
}