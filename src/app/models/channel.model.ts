import { Chat } from "./chat.model";
import { Group } from "./group.model";

export class Channel{
    id = '';
    username = '';
    email = '';
    group = Group;
    chat = Chat;
}