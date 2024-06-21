const team = {
  _players: [
    {firstName: "Brett", lastName: "Stapley", age: 25},
    {firstName: "Adam", lastName: "Berg", age: 27},
    {firstName: "Cole", lastName: "Gallant", age: 26}
  ],
  _games: [
    {opponent: "Steelheads", teamPoints: 4, opponentPoints: 1},
    {opponent: "Rush", teamPoints: 5, opponentPoints: 3},
    {opponent: "Kansas City", teamPoints: 1, opponentPoints: 5},
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {firstName: newFirstName, lastName: newLastName, age: newAge};
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
    this._games.push(game);
  }
}

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("Titans", 10, 8);
console.log(team.games);