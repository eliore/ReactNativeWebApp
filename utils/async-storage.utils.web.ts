class AsyncStorage {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  async getItem() {
    return Promise.resolve(localStorage.getItem(this.key));
  }
  async setItem(value: any) {
    return Promise.resolve(localStorage.setItem(this.key, value));
  }
  async removeItem() {
    return Promise.resolve(localStorage.removeItem(this.key));
  }
}

export default AsyncStorage;
