import { Games } from './games';
import { Bio } from './bio';

export class Contributor {
  id: number;
  firstName: String;
  lastName: String;
  name: String;
  bio: Bio;
  game: Games;
  color: any; //TODO: correct the type
  url: String;
  constructor(
    id: number, //
    fName: String,
    lName: String,
    bio: Bio,
    color: String,
    url: String
  ) {
    this.id = id;
    this.firstName = fName;
    this.lastName = lName;
    this.name = fName + " " + lName;
    this.bio = bio;
    this.color = color;
    this.url = url;
  }
}
