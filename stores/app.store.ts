import AppStoreShared from "stores/abstracts/app.store";
import { IAppStore, IAuthUserStore } from "typescript/store.types";

import AuthUserStore from "stores/auth-user.store";
import CommonViewStore from "view-stores/common.view.store";

import { getAPI } from "../api";

class AppStore extends AppStoreShared<IAuthUserStore> implements IAppStore {
  viewStores: Record<string, any> = {};

  constructor(params: Partial<IAppStore>) {
    super(params);

    this.stores = {};

    const commonViewStore = new CommonViewStore();

    this.viewStores = {
      commonViewStore
    };
  }
}

export default new AppStore({
  API: getAPI(),
  authUserStore: AuthUserStore
});
