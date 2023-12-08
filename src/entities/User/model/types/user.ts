export interface User {
    id: string;
    usernames: string;
}

export interface UserSchema {
    authData?: User;
}
