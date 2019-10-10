class GuessingGame {
    constructor() {
        this.number;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;

    }

    guess() {
        return this.number = Math.ceil((this.maxValue + this.minValue) / 2);

    }

    lower() {
        this.maxValue = this.number;
    }

    greater() {
        this.minValue = this.number;
    }
}

module.exports = GuessingGame;
