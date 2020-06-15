export interface IKeyValue {
  id: number;
  name: string;
}

export interface IPerson {
  id: number;
  tz?: string;
  first_name: string;
  last_name?: string;
  phone?: string;
  mobile: string;
  email?: string;
}

export interface IWorker extends IPerson{
  user_name: string;
  chain_id?: number | null;
  branch_id?: number | null;
  role: string;
}

export interface IUser extends IWorker{
  authentication_token: string;
}
