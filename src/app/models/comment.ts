export class Comment {
  id: number;
  user: string;
  body: string;
  createdAt: string; // Needs to be converted to date 
  parentPostId: number;
  CommentId: number;
  authorId: number;

  constructor(id: number, user: string, body: string, createdAt: string, parentPostId: number, authorId: number, CommentId: number) {
    this.id = id;
    this.user = user;
    this.body = body;
    this.createdAt = createdAt;
    this.parentPostId = parentPostId;
    this.CommentId = CommentId;
    this.authorId = authorId;
  }
}
