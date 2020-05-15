export class Comment {
  id: number;
  user: string;
  body: string;
  constructor(id: number, user: string, body: string) {
    this.id = id;
    this.user = user;
    this.body = body;
  }
}
