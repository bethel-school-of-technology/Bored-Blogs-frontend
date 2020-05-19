import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Game } from './games';

export class Post {
  id: number;
  author: string;
  title: string;
  preview: string;
  body: string;
  authorId:number;
  relatedGames:Game[];
  tags:string[];
  published:string;
}

