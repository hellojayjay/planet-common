export class AppRootContext {

	private storage: any = {};

	/** 设置键值 */
	setItem(key: string, value: any) {
		this.storage[key] = value;
	}

	/** 根据键获取值 */
	getItem(key: string) {
		return this.storage[key];
	}

	/** 根据移除对应键值 */
	removeItem(key: string) {
		this.storage[key] = undefined;
		delete this.storage[key];
	}

	/** 清除所有 */
	clear() {
		this.storage = {};
	}
}
