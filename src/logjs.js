class Logjs {
	constructor(key = "LOGJS", value = "DEBUG") {
		this.printdata = [];
		this.Key = key;
		this.Value = value;
		this.Node = document.createElement("div"); //保存对这个节点的引用
		this.init();
	}

	/** 初始化 */
	init() {
		let code = this.getQueryString();
		if (this.Value !== code) {
			return; //不是开发模式
		}

		/** 增加属性 */
		this.Node.classList.add("logjs");
		this.Node.id = "logjs";
		document.body.appendChild(this.Node);
	}

	/** 查找url上是否有标志需要测试的值 */
	getQueryString() {
		let reg = new RegExp('(^|&)' + this.Key + '=([^&]*)(&|$)', 'i');
		let r = window.location.search.substr(1).match(reg);
		// let r = "LOGJS=DEBUG".match(reg);
		if (r !== null) {
			return unescape(r[2]);
		}
		return null;
	}

	/** 打印数据(存储起来) */
	log(obj) {
		this.printdata.push(obj);
	}

	/** 显示出来之前打印的数据 */
	show() {

	}
}

let a = new Logjs("LOGJS", "1234");
