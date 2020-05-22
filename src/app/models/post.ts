import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Game } from './games';
import { User } from './user';

export class Post {
  id: number;  
  title: string;
  preview: string;
  body: string;
  authorId:number;
  author: User;


  relatedGames:Game[];//not true
  tags: string[];//not true
  published: string;//not true
}