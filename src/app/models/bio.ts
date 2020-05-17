import { Games } from './games';
import { linksIguess } from './linksIgues';

export class Bio {
  favoriteGames: Games;
  birthday: String;
  other: String;
  otherWorks: linksIguess;
  constructor(
    favGame: Games,
    birthday: String,
    other: String,
    otherWorks: linksIguess
  ) {
    this.favoriteGames = favGame;
    this.birthday = birthday;
    this.other = other;
    this.otherWorks = otherWorks;
  }
}
