// Import required modules
const GameManager = require('./GameManager');
const InputHandler = require('./InputHandler');
const NarrativeManager = require('./NarrativeManager');

// Initialize game manager
const gameManager = new GameManager();

// Initialize input handler
const inputHandler = new InputHandler();

// Initialize narrative manager
const narrativeManager = new NarrativeManager();

// Initialize the game environment
gameManager.initializeGame();

// Set up event listener for player input
process.stdin.on('data', (input) => {
    const userInput = input.toString().trim();
    // Pass user input to the input handler
    inputHandler.handleInput(userInput);
});

// Display initial game state or room description
narrativeManager.displayText(gameManager.currentRoom.description);
