const readline = require('readline');

class GameManager {
    constructor() {
        this.currentRoom = null;
        this.player = null;
        this.rooms = [];
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    // Method to initialize the game environment
    initializeGame() {
        // Initialize player
        this.player = new Player();
        
        // Initialize rooms
        this.rooms.push(new Room("Foyer", "You are in the foyer. It's dark and musty.", foyerAscii));
        this.rooms.push(new Room("Dining Room", "You find yourself in a spacious dining room.", diningRoomAscii));
        // Add more rooms as needed

        // Set starting room
        this.currentRoom = this.rooms[0];

        // Display initial room description
        this.currentRoom.displayRoom();
        this.currentRoom.displayExits();

        // Start input loop
        this.processInput();
    }

    // Method to handle player input
    processInput() {
        this.rl.question("What do you want to do next? ", (input) => {
            // Process player input
            this.handlePlayerInput(input);
        });
    }

    // Method to handle player input
    handlePlayerInput(input) {
        // Process player input
        // Example: move north, look around, use key, etc.
        // Update game state accordingly
    }
}

module.exports = GameManager;
