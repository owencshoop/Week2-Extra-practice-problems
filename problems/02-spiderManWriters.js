/***********************************************************************
Welcome to The Article Company! At AC, you have been tasked with a
very important job! Your boss says we need more articles about Spiderman!
But, uh-oh! Some of the writers did not write articles about Spiderman.
You have been given a long string that contains a list of every writer,
and a value that shows if they have written an article about Spiderman.
You must write a function, 'spiderManWriters(string)' and convert its contents
to an object that "ONLY" contains key value pairings of writers who did "NOT"
write about Spiderman.

Assumptions:
You may assume that the order of the key value pairs in the object does NOT matter.

Examples:

str1 = 'Angela T: wrote about Spiderman, Miah B: no Spiderman, Adrian R: wrote about Spiderman'
str2 = 'Tom B: no Spiderman, Justin N: no Spiderman, Emily B: wrote about Spiderman'
***********************************************************************/
// create empty object
// split the string on ", "
// filter the string based on arrays elements that includes "no Spiderman"
// split the string on ": "
// filter the array to only include names
// iterate the array adding name and 'no Spiderman' to object

const spiderManWriters = (str) => {
    let obj = {};
    let noSpiderman = str.split(", ").filter((ele) => ele.toLowerCase().includes('no spiderman')).map((ele) => ele.slice(0, ele.indexOf(':')))
    // let names = noSpiderman.map((ele) => ele.slice(0, ele.indexOf(':')))
    for (let name of noSpiderman){
        obj[name] = "no Spiderman";
    }
    return obj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
    module.exports = spiderManWriters;
} catch(e){
    module.exports = null;
}
