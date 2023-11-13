const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy'},
    {title: 'Total enlightenment', pages: 250, genre: 'romance'},
    {title: 'Big loss', pages: 400, genre: 'fantasy'},
    {title: 'Tenth Joy', pages: 32, genre: 'action'},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy'},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy'},
    {title: 'Paranormal', pages: 200, genre: 'thriller'},
];

const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');

const mapToPages = (list) => list.map(({pages}) => pages)
const sumPages = (book) => book.reduce((acc, newPage) => acc + newPage)

//console.log(sumPages(mapToPages(filterTitleStartsWithTotal(books))))

//const getPagesWhereTitleIsTotal = sumPages(mapToPages(filterTitleStartsWithTotal(books)))

const badCompose = (fn1, fn2, fn3) => (x) => fn3(fn2(fn1(x)));

const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x)
const compose2 = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x)

const getPagesWhereTitleIsTotal = compose(sumPages, mapToPages, filterTitleStartsWithTotal, filterGenreIsFantasy)
const getPagesWhereTitleIsTotal2 = compose2(filterTitleStartsWithTotal, filterGenreIsFantasy, mapToPages, sumPages)

console.log(getPagesWhereTitleIsTotal(books))


filtr(tablica1)

function filtr(arr, filtered){
	var res = new Array();
	for (let index = 0; index < arr.length; index++) {
		if (arr[index] == filtered){
			res.push(arr[index])
		}
	}
	return res
}