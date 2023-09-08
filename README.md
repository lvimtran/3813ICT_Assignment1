DESCRIPTION

For Cloning Repository: https://github.com/lvimtran/assignment.git

Git: 
-	The layout of git repository:
o	.git directory is a directory at root of the Git repository. It contains configuration files, object database, and other data. 
o	Refs directory stores commits, branches, and tag in repository. 
o	Config contains specific configuration to git repository
o	Logs contains history of reference that have been updated.
o	Info directory contains global configuration files.
-	The approach for a version control:
o	Git clone: clone repository to local storage 
o	Git add: make changes to stage in directory in the next commit
o	Git commit: create commit in the repository, capture changes that have made to the project.
o	Git push: push/ update file to git repository 

Data Structures: 
-	Chat User:
o	`username: string`: chat user’s username
o	`selectedGroupId: string = ‘’`: currently selected group
o	`selectedChannelId: string = ‘’`: currently selected channel
o	`groups: any [] = []`: the user’s group
o	`channels: any[] = []`: the channels within the selected group
-	Group Admin:
o	`groupName: string = ‘’`: name of a group
o	`channelName: string = ‘’`: name of a channel
o	`groupIdToRemove: string = ‘’`: the variable stores group id that intend to remove
o	`channelIdToRemove: string = ‘’`: the variable stores channel id that intend to remove
o	`userIdToRemove: string = ‘’`: the variable stores user id that intend to remove
o	`groupId: string = ‘’`: the id of a group
-	Super Admin:
o	`userIdToPromote: string = ‘’`: store user id to promote from “user” role to “group admin”
o	`userIdToRemove: string = ‘’`: store user id to remove that user
o	`userIdToUpgrade: string = ‘’`: store user id to upgrade from “user” role to 
o	`users: any`: store user data
-	Login:
o	`username: string = ‘’`: user’s username
o	`password: string = ‘’`: user’s password
o	`errorMessage: string = ‘’`: errorMessage that may occur 
o	`email: string = ‘’`: user’s email
-	Account:
o	`user: any`: store user’s value when it’s registered


Rest API: 
-	Config/ passport.js: configure passport.js to handle user authentication in a Node.js
-	Middleware/ auth.js: implement functions for user authentication and authorisation in Node.js. 
-	Models
o	Channel.model.js: define a mongoose Schema and model for a Channel in MongoDB Database
o	Group.model.js: define structure and data types that are stored in MongoDB (related to “group”) 
o	User.model.js: define structure and data types that are stored in MongoDB (related to “user”)
-	Routes
o	Auth.routes.js: Define routes and route handlers for user authentication and authorisation
o	Group.routes.js: Define routes for creating groups, adding users, and creating channels
o	Register.routes.js: Define routes for register an account
o	User.routes.js: Define routes for joining channels, creating new chat user, removing user, upgrading role for a user, deleting profile, leaving a group and adding interesting member to the group by super admin
-	Server.js: set up express server for real-time chat application

Angular Architecture: 
-	Components
o	LoginComponent: displaying login page of the application
o	GroupComponent: displaying three different user groups 
o	ChatComponent: displaying chat function
o	AccountComponent: displaying profile, notifying successfully registered an account
o	UserRegistrationComponent: displaying registration page
o	SuperAdminComponent: displaying key features that can only accessed by super admin
o	ChatUserComponent: displaying key features that everyone can accessed 
o	GroupAdminComponent: displaying key features that can only accessed by group admin
-	Services
o	AuthService: allow application to perform many action related to user authentication and authorisation
o	ChatService: allow application to perform many action related to chat functions
o	GroupService: allow application to perform many actions related to groups: creation, removal, ban users in a group,… 
o	UserService: allow application to perform many user interaction actions: creation, deletion, registration, promotion,…
-	Routing
o	/login: the chat application’s login page 
o	/group/:groupId: group management
o	/chat: chat system
o	/account: the chat application’s user profile
o	/user-registration: registration page 
o	/superAdmin: list of super admins 
o	/groupAdmin: list of group admins
o	/chatUser: every chat user
