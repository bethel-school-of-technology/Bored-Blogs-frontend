import { Game } from "./game";
import { linksIguess } from "./linksIguess";

export class Bio {
  favoriteGames: Game[];
  birthday: String;
  other: String;
  otherWorks: linksIguess;
  body: String;
  constructor(
    favGame: Game[],
    birthday: String,
    other: String,
    otherWorks: linksIguess,
    body: String
  ) {
    this.favoriteGames = favGame;
    this.birthday = birthday;
    this.other = other;
    this.otherWorks = otherWorks;
    this.body = body;
  }
}
