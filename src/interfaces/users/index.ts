export interface IUserCreate {
  id?: string;
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUpdateUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  age: number;
  updated_at: Date;
}
