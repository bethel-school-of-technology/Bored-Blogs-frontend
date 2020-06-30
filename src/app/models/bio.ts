import { Game } from "./game";
import { linksIguess } from "./linksIguess";

export class Bio {  
  favoriteGames: Game[];
  constructor(
    public favGame: Game[],
    public birthday: String,
    public other: String,
    public otherWorks: linksIguess,
    public body: String
  ) {}
}
