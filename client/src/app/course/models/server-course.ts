import { Author } from './author';

export class ServerCourse {
  public id: string;
  public length: number;
  public date: Date;
  public name: string;
  public description: string;
  public isTopRated: boolean;
  public authors: Author[];
}
