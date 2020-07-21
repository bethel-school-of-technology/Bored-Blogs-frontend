import { User } from "./user";

export class Comment {
  id: number; //backend gives me this id
  createdAt: string; // Needs to be converted to date //backend gives me this id
  createdAtDate: Date;
  parentPostId: number;
  //TODO: jacob do the stuff with this if jacob has time
  children: Comment[];
  authorId: number;

  constructor(
    public author: User,
    public CommentId: number | null,
    public body: string
  ) {
    this.authorId = author.id;
  }

  emptyComment(): Comment {
    //TODO: remove this function
    return this;
  }
}
