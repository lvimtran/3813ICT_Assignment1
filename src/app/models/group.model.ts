import { Channel } from "./channel.model";
import { User } from "./user.model";

export class Group{
    id = '';
    username = '';
    email = '';
    admins = User;
    channels = Channel;
}