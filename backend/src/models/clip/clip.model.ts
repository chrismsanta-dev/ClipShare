export interface Clip {
  id: string;
  image: string;
  title: string;
  userId: string;
  username: string;
  votes: number;
  comments: Comment[];
  views: number;
}
