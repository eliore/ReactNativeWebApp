import AuthUserStoreShared from "stores/abstracts/auth-user.store";
import { IUser } from "typescript/model.types";
import { IAuthUserStore } from "typescript/store.types";

import { getAPI } from "../api";

const USER_STORAGE_KEY = "USER_KEY";
const DEFAULT_SETTINGS = {};

class AuthUserStore extends AuthUserStoreShared<IUser>
  implements IAuthUserStore {
  constructor(params: Partial<IAuthUserStore>) {
    super(params);
  }
}

export default new AuthUserStore({
  API: getAPI(),
  options: {
    auth_storage_key: USER_STORAGE_KEY,
    default_settings: DEFAULT_SETTINGS
  }
});
