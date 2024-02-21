// Room.js

class Room {
    constructor(name, description) {
        this.name = name;
        this.description = description;
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
}

module.exports = Room;
