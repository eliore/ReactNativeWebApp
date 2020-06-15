import { TFetchStates } from "../types";

import { IApi } from "api/api";

export interface IAuthUserStore<IUser> {
  API: IApi | any;
  options: {
    auth_storage_key?: string;
    default_settings?: any;
  };
  authUser: IUser | null | undefined;
  loginStatus: "idle" | "pending" | "confirm";
  pendingLogin: boolean;
  loginError: boolean;
  signedIn: boolean;
  authToken: string;
  initFromLocalStorage: () => void;
  signIn: (username: string, password: string) => Promise<any>;
  autoSignIn: () => Promise<any>;
  signOut: () => Promise<any>;
}

export interface IAppStore<IAuthUserStoreParam> {
  API: IApi | any;
  stores: Record<string, any>;
  options: {
    initialResources?: string[];
  };
  authUserStore?: IAuthUserStoreParam;
  fetchState: TFetchStates;
  fetchInitial: (
    refresh?: boolean,
    resources?: string[],
    functionName?: string,
    functionParameter?: any
  ) => Promise<any>;
  lastUpdated: Date | null;
  setAppRefreshState: (isRefreshing?: boolean) => void;
  appRefreshing: boolean;
  appSignOut: (resources?: string[]) => void;
}

export interface IBaseStore<Entity> {
  API: IApi | any;
  options: {
    entityName?: string;
    apiServerName?: string;
    authType?: string;
    defaultValues?: (entity: any) => any;
    compareFields?: string[];
  };
  selectedId?: number | null;
  selected?: Entity | null | undefined;
  select: (id: number | null) => void;
  clearSelected: () => void;
  initialAll: () => void;
  fetchAll: () => any;
  fetchById: (id: number) => any;
}

export interface IEntityListBaseStore<Entity> extends IBaseStore<Entity> {
  list: Entity[];
  getMapById: Record<number | string, Entity>;
  setCollection: (list: Entity[]) => void;
  updateCollection: (list: Entity[]) => void;
}

export interface IEntityMapBaseStore<Entity> extends IBaseStore<Entity> {
  map: Record<number | string, Entity[]>;
  getList: Entity[];
  setCollection: (data?: Entity[] | Record<number | string, Entity[]>) => void;
  updateCollection: (
    data: Entity[] | Record<number | string, Entity[]>
  ) => void;
}
