import { User } from './user';

export class Comment {
  id: number;//backend gives me this id
  createdAt: string; // Needs to be converted to date //backend gives me this id
  
  parentPostId: number;
  body: string;  
  //TODO: jacob do the stuff with this if jacob has time
  //children:Comment[];  
  CommentId: number;
  authorId: number;
  user: User;

  constructor(user: User, body: string, CommentId: number|null) {
    this.body = body;
    this.CommentId = CommentId;
    this.authorId = user.id;
  }

  emptyComment():Comment{
    return this
  }
}
