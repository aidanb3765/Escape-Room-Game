// GameManager.js

class GameManager {
    constructor() {
        this.currentRoom = null;
        this.player = null;
        this.rooms = [];
    }

    // Method to initialize the game environment
    initializeGame() {
        // Initialize player
        this.player = new Player();
        
        // Initialize rooms
        this.rooms.push(new Room("Foyer", "You are in the foyer. It's dark and musty."));
        this.rooms.push(new Room("Dining Room", "You find yourself in a spacious dining room."));
        // Add more rooms as needed

        // Set starting room
        this.currentRoom = this.rooms[0];
    }

    // Method to handle player input
    handlePlayerInput(input) {
        // Process player input
        // Example: move north, look around, use key, etc.
        // Update game state accordingly
    }
}

module.exports = GameManager;
