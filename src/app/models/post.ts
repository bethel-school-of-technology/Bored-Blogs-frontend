import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Game } from './games';
import { Contributor } from './contributor';

export class Post {
  id: number;
  
  title: string;
  preview: string;
  body: string;
  authorId:number;
  author: Contributor;
  relatedGames:Game[];
  tags:string[];
  published:string;
}