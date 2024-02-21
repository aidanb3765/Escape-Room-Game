// Player.js

class Player {
    constructor() {
        this.currentRoom = null;
        this.inventory = [];
    }

    // Method to move the player to a new room
    move(direction) {
        // Update current room based on direction
    }

    // Method to add an item to the player's inventory
    addItem(item) {
        this.inventory.push(item);
    }

    // Method to use an item from the player's inventory
    useItem(item) {
        // Implement item usage logic
    }
}

module.exports = Player;
