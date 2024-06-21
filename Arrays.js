const arr1 = ['abc',345,true,null];
console.log(arr1);

console.log(typeof arr1);

console.log(Array.isArray(arr1));

const movies = ['sholay','newton','fukrey'];
console.log(movies.length);

//indexing

console.log(movies.indexOf('shaitaan'));
console.log(movies.at(-2));

movies[2] ='3 idiots';
console.log(movies);

//slicing

console.log(movies.slice(1,3));
console.log(movies.slice(2));
console.log(movies.slice(2,-1));