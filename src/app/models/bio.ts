import { Games } from "./games";
import { linksIguess } from "./linksIgues";

export class Bio {
  favoriteGames: Games;
  birthday: String;
  other: String;
  otherWorks: linksIguess;
  body: String;
  constructor(
    favGame: Games,
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
