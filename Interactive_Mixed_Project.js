const readline = require('readline');

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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);  // Cleaner, more reliable
        });
    });
}

async function main() {
    console.log("Welcome to the Inspiration Message Generator!");
    console.log("--------------------------------------------");
   
    let continueGenerating = true;

    let messageCount = 1; // Track number of messages shown
try {
    while (continueGenerating) {
        console.log(`Message #${messageCount}`);
        console.log('='.repeat(30));

    const singleMessage = generateInspirationMessage();
    console.log(singleMessage);

        let answer;
        try {
                answer = await askQuestion("\nWould you like another message? (yes/no): ");
            } catch (err) {
                console.log("\n⚠️  Input error. Let's continue anyway...");
                answer = "yes"; // Default to continue
            }
        
         const cleanAnswer = answer.toString().toLowerCase().trim()
        if (cleanAnswer === "no" || cleanAnswer === "n") {
            console.log("THANK YOU FOR USING THE INSPIRATION GENERATOR!");
            console.log("Remember: You're amazing, and you've got this! 💪");
            continueGenerating = false;
        } else {
            messageCount++;
            if (cleanAnswer !== "yes" && cleanAnswer !== "y") {
              console.log(`\n🤔 I'll take "${answer}" as a yes! Here's another!`);
                } else {
                    console.log("\n✨ Great! Here's another message! ✨");
                }
        }
        }
    rl.close();
} catch (error) {
        console.error("\n❌ An unexpected error occurred:", error.message);
    } finally {
        // Always close the interface
        if (rl && !rl.closed) {
            rl.close();
        }
    }
}
if (require.main === module) {
    main().catch(error => {
        console.error("An error occurred:", error);
        if (!rl.closed) rl.close();
    });
}

// Export functions
module.exports = {
    generateInspirationMessage,
    generateMultipleMessages,
    getRandomElement
};