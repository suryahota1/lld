class Dice {

    #min;
    #max;

    constructor ( min, max ) {
        this.#min = min;
        this.#max = max;
    }

    #getRandomNumber () {
        return Math.ceil(this.#min + Math.random() * (this.#max - this.#min));
    }

    async rollDice () {
        try {
            const count = this.#getRandomNumber();
            return count;
        } catch ( err ) {
            throw err;
        }
    }
}

export default Dice;
