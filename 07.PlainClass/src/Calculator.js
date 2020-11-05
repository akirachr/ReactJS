class Calculator {
  constructor() {
    this.scores = [0, 0, 0];
  }
  getScores() {
    this.scores[0]++;
    this.scores[1]++;
    this.scores[1]++;
    this.scores[2]++;
    this.scores[2]++;
    this.scores[2]++;

    return this.scores;
  }
}

export default Calculator;
