export interface IClient {
  id: number;
  company_name: string;
}

export interface IUser extends IClient {
  first_name: string;
  last_name: string;
  role: string;
  authentication_token: string;
  email: string;
  metric_units: boolean;
  accessible_users_count: number;
  jwt_token: string;
  settings?: Record<string, any>;
}
