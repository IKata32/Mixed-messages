// Inspiration Message Generator
// Run locally with: node inspiration.js

const greetings = ["Hello", "Hi", "Hey", "Greetings", "Salutations","Howdy","Hey there"];

const nicknames = ["Buddy", "Pal", "Friend", "Mate","Amigo","Chum","Champ", "Bro","Jock","Player","Superstar","Rockstar","Tiger"];

const motivations = [
    "you're doing amazing things!",
    "keep pushing forward!",
    "your potential is limitless!",
    "you're making incredible progress!",
    "every step counts - keep going!",
    "you're stronger than you think!",
    "success is on your horizon!",
    "you're inspiring others around you!",
    "your dedication is paying off!",
    "greatness is within your reach!",
    "you're on the path to excellence!",
    "your hard work is creating miracles!",
    "you're becoming the best version of yourself!",
    "obstacles are just opportunities in disguise!",
    "you're writing your own success story!",
    "your positive energy is contagious!",
    "you're turning dreams into reality!",
    "every challenge makes you stronger!",
    "you're a beacon of inspiration!",
    "the world needs your unique gifts!"
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateInspirationMessage() {
    const greeting = getRandomElement(greetings);
    const nickname = getRandomElement(nicknames);
    const motivation = getRandomElement(motivations);
    return `${greeting}, ${nickname}! ${motivation}`;
}

function generateMultipleMessages(count=3) {
    console.log("Today's Inspirational Messages:");
    for (let i = 0; i < count; i++) {
        console.log(`${i + 1}. ${generateInspirationMessage()}`);
    }
}

function main() {
    console.log("Welcome to the Inspiration Message Generator!");
    console.log("--------------------------------------------");
    console.log("Here are some messages to brighten your day:\n");
    const messages = generateMultipleMessages();

    console.log("Would you like to generate more messages? (yes/no)");

    setTimeout(() => {
        const userResponse = "no"; // Simulated user input
        if (userResponse.toLowerCase() === "yes") {
            generateMultipleMessages();
        } else {
            console.log("Thank you for using the Inspiration Message Generator! Stay motivated!");
        }
    }, 2000);
    }

    if (require.main === module) {
        main();
    }

    module.exports = {
        generateInspirationMessage,
        generateMultipleMessages,
        getRandomElement
    };


