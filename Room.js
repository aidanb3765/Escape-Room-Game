const colors = require('colors'); // Using the colors package for color coding

class Room {
    constructor(name, description, asciiArt) {
        this.name = name;
        this.description = description;
        this.asciiArt = asciiArt; // ASCII art representation of the room
        this.exits = {}; // Dictionary mapping directions to neighboring rooms
        this.puzzles = [];
        this.clues = [];
    }

    // Method to add a puzzle to the room
    addPuzzle(puzzle) {
        this.puzzles.push(puzzle);
    }

    // Method to add a clue to the room
    addClue(clue) {
        this.clues.push(clue);
    }

    // Method to display room description with ASCII art
    displayRoom() {
        console.log(this.asciiArt);
        console.log(this.description.cyan); // Display description in cyan color
    }

    // Method to display available exits
    displayExits() {
        console.log("Available Exits:".green);
        for (let direction in this.exits) {
            console.log(`${direction}: ${this.exits[direction].name}`);
        }
    }
}

module.exports = Room;
