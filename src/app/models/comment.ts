import { User } from './user';

export class Comment {
  id: number;
  
  body: string;
  createdAt: string; // Needs to be converted to date 
  //TODO: jacob do the stuff with this
  //children:Comment[];
  parentPostId: number;
  CommentId: number;

  authorId: number;
  user: User;

  constructor(id: number, user: User, body: string, createdAt: string, parentPostId: number, authorId: number, CommentId: number) {
    this.id = id;
    this.user = user;
    this.body = body;
    this.createdAt = createdAt;
    this.parentPostId = parentPostId;
    this.CommentId = CommentId;
    this.authorId = user.id;
  }
}
