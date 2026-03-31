const readline = require('readline-sync');

// Starting inventory
const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = true;

console.log("You wake up in a dark forest.");
console.log("There are two paths ahead: one leads to the mountains, the other to the village.");

const choice = readline.question('Do you go to the "mountains" or the "village"? ');

// First branch
if (choice === "mountains") {
  console.log("You head toward the mountains.");

  // Combined boolean expression with &&
  if (hasTorch && hasSword) {
    console.log("Because you have both a torch and a sword, you safely enter a dark cave.");

    const caveChoice = readline.question('Inside the cave, do you "explore" deeper or "leave"? ');

    // Nested conditional
    if (caveChoice === "explore") {
      if (hasCompass || hasMap) {
        console.log("Using your sense of direction, you find hidden treasure and escape safely.");
      } else {
        console.log("You find treasure, but without directions you wander for hours before escaping.");
      }
    } else if (caveChoice === "leave") {
      console.log("You leave the cave and return to the forest safely.");
    } else {
      console.log("Unable to decide, you camp outside the cave for the night.");
    }

  } else if (!hasTorch) {
    // Use of !
    console.log("It is too dark to continue into the mountains, so you turn back.");
  } else {
    console.log("Without a sword, the mountain path feels too dangerous. You retreat.");
  }

} else if (choice === "village") {
  console.log("You travel toward the village.");

  // Combined boolean expression with ||
  if (hasMap || hasCompass) {
    console.log("With navigation tools, you find the village quickly.");

    const villageChoice = readline.question('In the village, do you visit the "market" or the "inn"? ');

    // Nested conditional
    if (villageChoice === "market") {
      if (hasSword && hasTorch) {
        console.log("A merchant is impressed by your gear and offers you a reward.");
      } else {
        console.log("You browse the market and buy supplies for the journey ahead.");
      }
    } else if (villageChoice === "inn") {
      if (!hasMap) {
        console.log("At the inn, a traveler gives you a map for free.");
      } else {
        console.log("You rest at the inn and prepare for tomorrow's adventure.");
      }
    } else {
      console.log("You wander through the village square, unsure where to go next.");
    }

  } else {
    console.log("Without a map or compass, you get lost before reaching the village.");
  }

} else {
  console.log("You hesitate too long and remain in the forest as night falls.");
}
