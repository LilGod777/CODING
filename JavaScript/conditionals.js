// You've been given stub code for a program that has the information about the score of a football game. Your job is to use that information to help determine the score of the game. Scoring information has been noted via alpha characters, rather than by their point value.
//
// Here are the point values for each leter option in the list
// t -> 6
// e -> 1
// f -> 3
// s => 2

team1 = ["t", "e", "t", "f", "f", "s"]

team2 = ["f", "f", "f", "t", "e", "t", "e", "f"]

let team1Total = 0
let team2Total = 0

for (let i in team1) {
    // write code under this line to calculate score for team 1
    if (team1[i] == 't') {
        team1Total += 6;
    } else if (team1[i] == 'f') {
        team1Total += 3;
    } else if (team1[i] == 's') {
        team1Total += 2;
    } else if (team1[i] == 'e') {
        team1Total += 1
    }
}


for (let i in team2) {
    // write code under this line to calculate score for team 2
    if (team2[i] == 't') {
        team2Total += 6;
    } else if (team2[i] == 'f') {
        team2Total += 3;
    } else if (team2[i] == 's') {
        team2Total += 2;
    } else if (team2[i] == 'e') {
        team2Total += 1
    }
}

console.log(team1Total)
console.log(team2Total)


// write code under this comment block to determine who the winner is. You should display the follwing:
// "Game Score: *team1 score* - *team2 score*. *Winning Team* Wins!"
// ex. "Game Score: 45 - 22. Team 1 Wins!
