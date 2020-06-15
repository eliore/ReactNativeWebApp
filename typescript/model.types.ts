import { IKeyValue, IPerson, IUser as IUserAbstract, IWorker } from "typescript/abstracts/model.types";

export interface IRole extends IKeyValue{}
export interface ISubject extends IKeyValue{}
export interface ITag extends IKeyValue{}
export interface ISource extends IKeyValue{}
export interface ISatisfaction extends IKeyValue{}
export interface ISendCoupon extends IKeyValue{}
export interface ITryContact extends IKeyValue{}

export interface IChain extends IKeyValue{
  manager_id: number;
}

export interface IBranch extends IKeyValue{
  manager_id: number;
  area_manager_id: number;
}

export interface IUser extends IUserAbstract{}
export interface IManager extends IWorker{}

export interface ICustomer extends IPerson{
  has_history: boolean;
}

export interface IDocumentation
{
  user_name: number;
  date_time: string;
  text: string;
}

export interface IFeedback {
  id: number;
  customer: ICustomer;
  chain_id: number;
  branch_id: number;
  area_manager_id: number;
  subject: string;
  tag: string;
  sub_tags: string[];
  start_date: string;
  due_date: string;
  end_date: string;
  start_watch_date: string;
  alert_date: string; // whats this?
  visit_date: string; // whats this?
  status: string;
  source: string;
  reopen: boolean;
  notes: string;
  attachments: string[];
  description: string;
  copied_managers_ids: number[]; // empty in v1
  // feedback handle
  documentations: IDocumentation[];
  customer_satisfaction: string;
  customer_satisfaction_description?: string;
  send_coupon: string;
  try_contact: string;
  summary: string;
}
