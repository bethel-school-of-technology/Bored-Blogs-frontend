export class Games {
  games: Game[];
  constructor(arrayOfGames:any[]){
      this.games = arrayOfGames;
  }
}

export class Game {
  title: String;
  constructor(title: String) {
    this.title = title;
  }
}
