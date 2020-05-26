import { User } from './user';

export class ContactUs {
  id: number;
  subject: string;
  body: string;
  authorId: number;
  author: User;
  
  createdAt:string;
  createdAtDate:Date;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    subject: string,
    body: string
  ) {
    this.id = id;
    this.subject = subject;
    this.body = body;
  }
}
