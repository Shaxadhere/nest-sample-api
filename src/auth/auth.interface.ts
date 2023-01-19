export interface AuthToken {
  access_token: string;
  refresh_token: string;
}

export interface Payload {
  id: number;
  username: string;
  password: string;
}
