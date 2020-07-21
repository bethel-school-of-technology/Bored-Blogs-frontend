import { User } from './user';

export class ContactUs {
  authorId: number;
  author: User;
  
  createdAt:string;
  createdAtDate:Date;

  constructor(//sometimes i want somethings on the constructors other times i dont
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public subject: string,
    public body: string
  ) {
  }
}
