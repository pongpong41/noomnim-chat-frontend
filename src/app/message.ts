import { User } from './user';

export class Message {
  id: number;
  time: string;
  content: string;
  posted_by: User;
  group_id: number;
}
