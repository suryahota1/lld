import Jump from "./Jump";

class Cell {

    #jump;

    constructor ( index ) {
        this.#putJump(index);
    }

    getJump () {
        return this.#jump;
    }

    // This can be customized
    #putJump ( index ) {
        if ( index === 8 ) {
            this.#jump = new Jump(8, 49);
            // Ladder
        } else if ( index === 51 ) {
            this.#jump = new Jump(51, 4);
            // Snake
        } else if ( index === 98 ) {
            this.#jump = new Jump(98, 1);
            // Snake
        } else if ( index === 59 ) {
            this.#jump = new Jump(59, 99);
            // Ladder
        } else if ( index === 80 ) {
            this.#jump = new Jump(80, 10);
            // Snake
        } else if ( index === 21 ) {
            this.#jump = new Jump(21, 78);
            // Ladder
        } else if ( index === 67 ) {
            this.#jump = new Jump(67, 5);
            // Snake
        } else {
            this.#jump = null;
        }
    }
}

export default Cell;
