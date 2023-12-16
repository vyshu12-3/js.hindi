const name="vara"
const repocount=50

//console.log(name+repocount+"value")
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename=new String('hithest-hc')

console.log(gamename[0])
console.log(gamename._proto_)


console.log(gamename.length)

console.log(gamename.toUpperCase())

console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));
 const newString=gamename.substring(0,4)
console.log(newString);

const astring=gamename.slice(-10,2)
console.log(astring);
const url="http://hithest.com/hithesh%20choudary"

url.replace('%20','_')
console.log(url.replace('%20','_'));

