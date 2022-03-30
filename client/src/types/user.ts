export interface IUser {
  id: any;
  name: string;
  email: string;
  password: string;
  additional_info?: string;
  created_at: string;
  updated_at: string;
}

export interface IUserState {
  user: IUser | null;
  loading: boolean;
  error: string;
}
