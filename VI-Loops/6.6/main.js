// Write your code below

const bobsFollowers = ['Kristen', 'Tdawg', 'hasFishNeedsNet', 'ronald_a'];
const tinasFollowers= ['hasFishNeedsNet', 'ronald_b', 'Kristen'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers [j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);