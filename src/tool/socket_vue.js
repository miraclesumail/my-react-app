/*eslint-disable*/

/* // TODO 该心跳包貌似是有问题的 在重连机制方面产生了一些bug
*websocket处理插件，
*heartBeat   websocket心机包组件保证链接不失活
	_heartBeat 心机包识别码
 * @example
 *  var ws = new  Socket(platformId,url,store);
 * ws.send 返回一个 Promise对象 向服务端发送请求
 	1：_silence参数控制是否不显示加载动画默认false显示
 	1：_closeCONFIRM参数控制是否关闭错误提示框默认false不关闭
 	open 心机包开关设置，开发环境可以关闭，上线必须开启
 * ws.from 提供一个服务端推送接口处理方案
*hank 2017.11.9
 */


// const errMsg = {
//     '该手机号码已被注册，请更换或联系客服。': '联系电话号码已存在，请联系客服人员核实',
//     '无可用短信验证码，请重新获取': '验证码已失效，请重新获取',
//     '没有可分配银行卡或更换金额从新申请': '银行卡被占用，请更换金额或方式重新申请',
//     '未达到周期内存款笔数条件': '本次申请不符合要求，请联系客服核实'
// };


class Socket {
    constructor(platformId, url) {
        this.platformId = platformId;
        this.url = url;
        this.connectCount = 0;
        this.tryCount = 0;
        this.count = 1;
        this.maxTry = 10;
        this.token = null;
        this.reconnectTimer = null;
      
        this.delayQueue = [];
        this.loadQueue = [];
        this.callback = {};
        this.fromCallback = {};
        this.valid = false;
        this.isOpen = false;
        this.err = false;
        this.init();
    }

    init() {      
        if (this.tryCount == this.maxTry) {
            console.log('axibaba')
            clearInterval(this.reconnectTimer);
            return false;
        }
        if (typeof (WebSocket) !== 'function' && typeof WebSocket === 'undefined') {
            console.log('不支持打开这个');
        } else {
            this.ws && this.ws.close();
            this.ws = new WebSocket(this.url);
            this.tryCount++;
            this.ws.onopen = this.onOpenCallback.bind(this);
            this.ws.onerror = this.onErrorCallback.bind(this);
            this.ws.onclose = this.onCloseCallback.bind(this);
            this.ws.onmessage = this.onMessageCallback.bind(this);
            this.isOpen = false;
            return this;
        }
    }

    onOpenCallback() {
        // 如果是在中途断线链接需重新验证用户有效性
        console.log(this.ws.readyState);
        // console.log(this.count);
        console.log(this.ws.readyState === 1 ? '连接成功了' : '没有连接成功');
        this.isOpen = true;
        this.reconnectTimer && clearInterval(this.reconnectTimer);
        this.reconnectTimer = null;
        this.delayFun();
    }

    /*
    * 对链接成功做出的处理
    * */
    delayFun() {
        console.log(new Date().toLocaleString() + ':服务器连接成功...');
        //this.isOpen = false;
        this.valid = true;
        this.err = false;
        this.connectCount++;
        this.tryCount = 0;
        this.delayQueue.length > 0 && this.delayQueue.map((item, index) => {  /*队列处理多个之前的请求方案*/
            this.load(item) //发起请求
        });
        this.delayQueue = [];
    }

    /*
    * 服务端返回信息 这里很重要
    * #name 是用来判断是否主动和被动
    * */
    onMessageCallback(res) {
        let respData = JSON.parse(res.data);
        let name = respData.requestId || null;
        //服务端主动推送接口
        if (!name) {
            let notifyNewMail = JSON.parse(res.data);
            console.log(notifyNewMail);
            return;
        }
        let callback = this.callback[name];
        if (callback.data.data._heartBeat) {
           
        }

        /*
        * 客户端请求服务器返回的数据初步处理 (这个很重要,一定要看得懂)
        * */
        //用户未登录status==420
        // console.log(respData);
        switch (respData['data']['status']) {
            case 420 :
                break;
            case 200 :
                callback.promise.resolve(respData['data']);
                break;
            default :
                if (callback.data.data._isModal) {
                    callback.promise.reject(respData['data']);
                    if (respData['data'].errorMessage === '玩家IP不匹配') {
                        
                    }
                } else {
                    let errorMessage = respData['data'].errorMessage;
                    callback.promise.reject(respData['data']);
                }
                break;
        }
        delete this.callback[name];
    }

    /**
     * 断线重连  erro close回调中触发
     * 3s 一次  最大重连次数 10  超过十次弹窗提示
     */
    tryReconnect() {
        if(!this.reconnectTimer) {
            this.reconnectTimer = setInterval(() => {
               this.init();
            }, 3000)
        }
    }

    /*
    * 服务端报错
    * */
    onErrorCallback() {
        console.log(new Date().toLocaleString() + ':服务器连接发生错误', event);
        /*服务器发生错误会主动推送过来,所以要启动重连机制,第一不行,那么第二次就弹窗提示*/
        this.tryReconnect();
        this.err = true;
        this.isOpen = false;
    }

    /*
    * 连接关闭
    * */
    onCloseCallback() {
        console.log(new Date().toLocaleString() + ':服务器连接关闭');
        if (!this.err) {
            this.tryReconnect();
        }
        this.isOpen = false;
        this.valid = false;
    }

    promiseFun(resolve, reject) {
        this.reject = reject;
        this.resolve = resolve;
    }

    createPromise() {
        let promise = new Promise(this.promiseFun.bind(this)); //创建promise异步回调方案
        promise.reject = this.reject;
        promise.resolve = this.resolve;
        return promise;
    }

    send(opt) {
        let promise = this.createPromise();
        if (this.ws.readyState !== WebSocket.OPEN) {
            !this.delayQueue.includes([opt, promise]) && this.delayQueue.push([opt, promise]); //TODO 这个判断处理貌似有点问题
            return promise;
        }
        this.load([opt, promise]);
        return promise;
    }

    from(opt) {
        this.fromCallback[opt.functionName] = opt;
    }

    /*
    * 发起请求的功能函数
    * */
    load(arr) {
        if (!this.isOpen) return;
        let index = 'RQ' + this.count,
            sendData = arr[0];
        this.callback[index] = {};  // 获取请求发起的参数和Promise
        if (!sendData.data) {
            sendData['data'] = {};
        }
        sendData['data']['requestId'] = index; // 发送的请求ID,用来判断是否是平台还是服务器用的
        sendData['data']['platformId'] = this.platformId;// 平台ID
        // if (sendData['functionName'] !== 'create') { // 通过状态管理获取玩家id, 注册不能带PlayerId的否则绝对报错记住了
        //     if (this.store.state.userInfo) sendData['data']['playerId'] = this.store.state.userInfo.playerId;
        // }
        this.callback[index]['promise'] = arr[1];
        this.callback[index]['data'] = arr[0];
        /*
        * 是否要加载loading
        * */
        this.ws.send(JSON.stringify(arr[0]));
        this.count++;
        return arr[1];
    }
}

export default Socket
