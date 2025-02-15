function gameObject() {
   return {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["black", "white"],
        players: { 
            player1: {
                name: "Alan Anderson",
                number: "0",
                shoe: "16",
                points: "22",
                rebounds: "12",
                assists: "12",
                steals: "3",
                blocks: "1",
                slamDunks: "1",
            }, 
            player2: {
                name: "Reggie Evans",
                number: "30",
                shoe: "14",
                points: "12",
                rebounds: "12",
                assists: "12",
                steals: "12",
                blocks: "12",
                slamDunks: "7",
            }, 
            player3: {
                name: "Brook Lopez",
                number: "11",
                shoe: "17",
                points: "17",
                rebounds: "19",
                assists: "10",
                steals: "3",
                blocks: "1",
                slamDunks: "15",
            },
            player4: {
                name: "Mason Plumlee",
                number: "1",
                shoe: "19",
                points: "26",
                rebounds: "12",
                assists: "6",
                steals: "3",
                blocks: "8",
                slamDunks: "5",
            },
            player5: {
                name: "Jason Terry",
                number: "31",
                shoe: "15",
                points: "19",
                rebounds: "2",
                assists: "2",
                steals: "4",
                blocks: "11",
                slamDunks: "1",
            }, 
        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: { 
            player1: {
                name: "Jeff Adrien",
                number: "4",
                shoe: "18",
                points: "10",
                rebounds: "1",
                assists: "1",
                steals: "2",
                blocks: "7",
                slamDunks: "2",
            }, 
            player2: {
                name: "Bismak Biyombo",
                number: "0",
                shoe: "16",
                points: "12",
                rebounds: "4",
                assists: "7",
                steals: "7",
                blocks: "15",
                slamDunks: "10",
            }, 
            player3: {
                name: "DeSagna Diop",
                number: "2",
                shoe: "14",
                points: "24",
                rebounds: "12",
                assists: "12",
                steals: "4",
                blocks: "5",
                slamDunks: "5",
            },
            player4: {
                name: "Ben Gordon",
                number: "8",
                shoe: "15",
                points: "33",
                rebounds: "3",
                assists: "2",
                steals: "1",
                blocks: "1",
                slamDunks: "0",
            },
            player5: {
                name: "Brendan Haywood",
                number: "33",
                shoe: "15",
                points: "6",
                rebounds: "12",
                assists: "12",
                steals: "22",
                blocks: "5",
                slamDunks: "12",
            }, 
        }
   } 
}
   
}

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  console.log(homeTeamName());

  function numPointsScored(playerName) {
    let game = gameObject();
    let teams = ["home", "away"];

    for (let i = 0; i < teams.length; i++) {
        let teamPlayers = game[teams[i]].players;
        for (let player in teamPlayers) {
            if (teamPlayers[player].name === playerName)
            return teamPlayers[player].points;
        }
    }

  }

  console.log(numPointsScored("Ben Gordon"));

