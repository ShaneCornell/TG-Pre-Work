// Write your code below
let bobsFollowers = ['john','pickles','rick','astley'];
let tinasFollowers = ['rick','astley','garbldygook']
let mutualFollowers = []

for(i = 0; bobsFollowers.length > i; i++){
  for(let j = 0; tinasFollowers.length > j; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);

/* I learned about nested loops. */
