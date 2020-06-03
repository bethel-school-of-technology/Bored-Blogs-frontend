import { User } from './user';

export class Comment {
  id: number;//backend gives me this id
  createdAt: string; // Needs to be converted to date //backend gives me this id
  createdAtDate:Date;
  parentPostId: number;
  body: string;  
  //TODO: jacob do the stuff with this if jacob has time
  children:Comment[];  
  CommentId: number;
  authorId: number;
  author: User;

  constructor(author: User, body: string, CommentId: number|null) {
    this.body = body;
    this.CommentId = CommentId;
    this.authorId = author.id;
  }

  emptyComment():Comment{
    return this
  }
}
