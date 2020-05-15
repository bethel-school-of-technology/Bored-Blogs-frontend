export class Contributor {
  id: number;
  name: String;
  bio: String;
  color: any; //TODO: correct the type
  url: String;  
  constructor(
    id: number,//
    name: String,
    bio: String,
    color: String,
    url: String
  ) {
    this.id = id;
    this.name = name;
    this.bio = bio;
    this.color = color;
    this.url = url;
  }
}
