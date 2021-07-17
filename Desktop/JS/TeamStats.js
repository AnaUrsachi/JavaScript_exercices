const team= {
    _players: [ 
        {firstName: 'Pablo', 
        lastName: 'Sanchez', 
        age: 11}, 
        { firstName: 'Marie', 
        lastName: 'Marie', 
        age:12}, 
        {firstName: 'Andre', 
        lastName: 'Janson', 
        age: 12}],
    _games: [
    {opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
   },
{
    opponent: 'Mark',
    teamPoints: 18,
    opponentPoints: 40 
}, 
{
    opponent: 'Charles',
    teamPoints: 34,
    opponentPoints: 23
}],
     get players(){
return this._players;
        },
 get games(){
return this._games;
        },
addPlayer(firstName, lastName, age) {
let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
            };
this.players.push(player);},

addGame(opponent, teamPoints, opponentPoints) {
let game = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints};
this.games.push(game);}
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Broncos', 42, 27);
team.addGame('Mark', 18, 40);
team.addGame('Charles', 34, 23);


console.log(team.games);