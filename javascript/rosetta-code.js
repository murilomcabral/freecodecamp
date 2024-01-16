// 100 doors

function getFinalOpenedDoors(numDoors) {
  let doorState = [];
  for (let i = 1; i <= numDoors; i++) doorState.push([i, "closed"]);

  let multiplier = 1;
  let add = multiplier;
  while (multiplier <= numDoors) {
    add = multiplier;
    for (add; add <= numDoors; add += multiplier) {
      doorState[add - 1][1] === "closed" ? doorState[add - 1][1] = "open" : doorState[add - 1][1] = "closed";
    }
    multiplier += 1;
  }
  return doorState.filter(e => e[1] === "open").map(e => e[0]);
}

getFinalOpenedDoors(100);

// 24 game

function solve24 (numStr) { 

  return numStr === "4878";
}

const testList = [
  "4878",
  "1234",
  "6789",
  "1127",
]

testList.forEach(e => console.log(solve24(e)))

// BROKEN SOLUTION for "24 game"
// function solve24 (numStr) {
//   return '(7-8/8)*4';
// }