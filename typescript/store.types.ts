import {
  IAppStore as IAppStoreShared,
  IAuthUserStore as IAuthUserStoreShared
} from "typescript/abstracts/store.types";

import { IUser } from "typescript/models/model.types";

export interface IAuthUserStore extends IAuthUserStoreShared<IUser> {}

export interface IAppStore extends IAppStoreShared<IAuthUserStore> {
  viewStores: any;
}
