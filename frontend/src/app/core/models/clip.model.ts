export interface Clip {
  id: string;
  url: string;
  title: string;
  userId: string;
  username: string;
  votes: number;
  comments: Comment[];
  views: number;
}
