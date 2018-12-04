import Socket from './socket_vue'

window.net = new Socket(7, 'ws://devtest.wsweb.me:9280');

// 验证链接服务器的有效性 | validate the webSocket link
export const authenticate = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'authenticate',
        data: data
    });
};
// 用户和代理登录接口 | login
export const login = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'login',
        data: data
    });
};

// 用户和代理退出接口 | logout from the system
export const logout = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'logout',
        data: data
    });
};

// 获取手机验证码 | get mobile phone verification code
export const getSMSCode = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getSMSCode',
        data: data
    });
};

// 验证玩家手机是否正确 | validate mobile phone verification code
export const verifyPhoneNumberBySMSCode = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'verifyPhoneNumberBySMSCode',
        data: data
    });
};

// 玩家开户 | send new data to register account
export const create = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'create',
        data: data
    });
};

// 验证开户用户名是否有效 | check if username is valid upon registration
export const isValidUsername = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'isValidUsername',
        data: data
    });
};

// 获取登录验证码 | validate user state (for bots)
export const captcha = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'captcha',
        data: data
    });
};

// 获取用户信息 | get user information
export const get = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'get',
        data: data
    });
};

// 获取玩家站内信 | get all messages
export const getMailList = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getMailList',
        data: data
    });
};

// 查看信件 | open and read a message
export const readMail = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'readMail',
        data: data
    });
};

// 删除所有站内信 | delete all messages
export const deleteAllMail = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'deleteAllMail',
        data: data
    });
};

// 删除站内信 | delete one message
export const deleteMail = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'deleteMail',
        data: data
    });
};

// 获取未读站内信 | get unread messages
export const getUnreadMail = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getUnreadMail',
        data: data
    });
};

// 获取平台公告 | get announcements
export const getPlatformAnnouncements = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getPlatformAnnouncements',
        data: data
    });
};

// 获取游戏账号密码 | get game account password
export const getGamePassword = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getGamePassword',
        data: data
    });
};

// 修改游戏密码 | modify game account password
export const modifyGamePassword = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'modifyGamePassword',
        data: data
    });
};
// 获取玩家当前的等级信息 | get the player level and information
export const getLevel = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getLevel',
        data: data
    });
};

// 获取玩家的全部等级信息 | get all player level information
export const getAllLevel = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getAllLevel',
        data: data
    });
};

// 获取玩家的当前额度 | get the current amount the player has
export const getCredit = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getCredit',
        data: data
    });
};

// 获取玩家当天状态 | get the player status for the day
export const getPlayerDayStatus = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getPlayerDayStatus',
        data: data
    });
};

// 获取玩家的本周状态 | get the player status for the week
export const getPlayerWeekStatus = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getPlayerWeekStatus',
        data: data
    });
};

// 获取玩家最新额度 | get the player's current amount
export const getCreditInfo = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getCreditInfo',
        data: data
    });
};

// 获取玩家游戏平台额度 | get the player credit limit
export const getCreditDetail = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getCreditDetail',
        data: data
    });
};

// 申请优惠代码 | send code for promo
export const applyPromoCode = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'applyPromoCode',
        data: data
    });
};

// 申请奖励活动 | apply code for reward events
export const applyRewardEvent = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'applyRewardEvent',
        data: data
    });
};

// 获取充值优惠 | get list of discount for recharging based on method of payment
export const getTopUpPromoList = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getTopUpPromoList',
        data: data
    });
};

// 获取符合充值返点的充值记录 | get validated recharge record
export const getValidTopUpReturnRecordList = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getValidTopUpReturnRecordList',
        data: data
    });
};

// 游戏额度转入到本地额度 | transfer balance from game to local
export const transferFromProvider = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'transferFromProvider',
        data: data
    });
};

// 本地额度转入到游戏额度 | transfer balance from local to game
export const transferToProvider = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'transferToProvider',
        data: data
    });
};

// 获取玩家短信状态 | get notification for an event to receive
export const getSmsStatus = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getSmsStatus',
        data: data
    });
};

// 获取玩家短信状态 | on modifying sms settings, set to receive which notifications
export const setSmsStatus = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'setSmsStatus',
        data: data
    });
};

// 获取玩家消费返点额度 | get rebate
export const getConsumeRebateAmount = function (data) {
    return window.net.send({
        service: 'reward',
        functionName: 'getConsumeRebateAmount',
        data: data
    });
};
// 玩家向系统申请提前对其未结算的消费进行消费返点结算 | request for early rebate
export const requestConsumeRebate = function (data) {
    return window.net.send({
        service: 'reward',
        functionName: 'requestConsumeRebate',
        data: data
    });
};
// 获取玩家的存款记录 | get player's deposit record
export const getTopupList = function (data) {
    return window.net.send({
        service: 'payment',
        functionName: 'getTopupList',
        data: data
    });
};

// 获取玩家提款信息 | get player's withdrawal record
export const getWithdrawalInfo = function (serivce, data) {
    return window.net.send({
        service: serivce,
        functionName: 'getWithdrawalInfo',
        data: data
    });
};
// 获取玩家所提交的兑奖申请单列表 | get list of bonus requests
export const getBonusRequestList = function (data) {
    return window.net.send({
        service: 'payment',
        functionName: 'getBonusRequestList',
        data: data
    });
};

// 获取玩家以申请的奖励 | get list of rewards for player
export const getPlayerRewardList = function (data) {
    return window.net.send({
        service: 'reward',
        functionName: 'getPlayerRewardList',
        data: data
    });
};

// 修改玩家密码 | modify password
export const updatePassword = function (data) {
    return window.net.send({
        service: 'player',
        functionName: 'updatePassword',
        data: data
    });
};

// 获取优惠代码 | get promo
export const getPromoCode = function (data) {
    return window.net.send({
        service: 'reward',
        functionName: 'getPromoCode',
        data: data
    });
};

// 搜索游戏 | search game
export const searchGame = function (data) {
    return window.net.send({
        service: 'game',
        functionName: 'searchGame',
        data: data
    });
};
/*
* 服务器推送信息
* */
// 通知玩家有新的站内信 | notify that there is a new mail
export const notifyNewMail = function (fun) {
    return window.net.from({
        service: 'player',
        functionName: 'notifyNewMail',
        fun: fun
    });
};

// 手工存款充值单状态发生改变时，会向在线的玩家主动发送充值状态更新的通知 | notify that the manual deposit is updated
export const manualTopupStatusNotify = function (fun) {
    return window.net.from({
        service: 'payment',
        functionName: 'manualTopupStatusNotify',
        fun: fun
    });
};

// 在线充值单状态发生改变时，会向在线的玩家主动发送充值状态更新的通知 | notify that the online deposit is updated
export const onlineTopupStatusNotify = function (fun) {
    return window.net.from({
        service: 'payment',
        functionName: 'onlineTopupStatusNotify',
        fun: fun
    });
};

/*
*  支付api列表
* */

// 获取有效在线充值方式 | get types for online recharge
export const getOnlineTopupType = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getOnlineTopupType',
        data: data
    });
};

// 获取微信充值状态 | get the status of weChat deposit
export const getPlayerWechatPayStatus = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getPlayerWechatPayStatus',
        data: data
    });
};

// 获取支付宝充值状态 | get the status of Alipay deposit
export const getPlayerAliPayStatus = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getPlayerAliPayStatus',
        data: data
    });
};

// 创建在线充提案 | enter data in form as deposit application
export const createOnlineTopupProposal = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'createOnlineTopupProposal',
        data: data
    });
};

// 申请支付宝转账充值 | application for Alipay deposit
export const requestAlipayTopup = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'requestAlipayTopup',
        data: data
    });
};

// 申请微信转账充值 | application for weChat deposit
export const requestWechatTopup = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'requestWechatTopup',
        data: data
    });
};

// 获取微信存款申请单列表
// 获取玩家申请的微信存款申请单. (一般不允许玩家同时申请多个手工存款单)
// get application form to apply weChat deposit
export const getWechatTopupRequestList = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getWechatTopupRequestList',
        data: data
    });
};

// 获取支付宝存款申请单列表
// 获取玩家申请的支付宝存款申请单. (一般不允许玩家同时申请多个手工存款单) .
// get application form to apply Alipay deposit
export const getAlipayTopupRequestList = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getAlipayTopupRequestList',
        data: data
    });
};

// 取消支付宝转账充值 | cancel Alipay deposit
export const cancelAlipayTopup = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'cancelAlipayTopup',
        data: data
    });
};

// 取消微信转账充值 | cancel weChat deposit
export const cancelWechatTopup = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'cancelWechatTopup',
        data: data
    });
};

// 申请手工存款充值 | apply manual deposit
export const requestManualTopup = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'requestManualTopup',
        data: data
    });
};

// 取消手工存款申请单 | cancel manual deposit
export const cancelManualTopupRequest = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'cancelManualTopupRequest',
        data: data
    });
};

// 获取手工存款申请单列表 | get list of available manual deposit methods
export const getManualTopupRequestList = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getManualTopupRequestList',
        data: data
    });
};

// 获取充值申请记录
export const getTopupHistory = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getTopupHistory',
        data: data
    });
};
// 获取省份列表 | get list of provinces
export const getProvinceList = function () {
    return window.net.send({
        service: 'payment',
        functionName: 'getProvinceList',
        data: null
    });
};

// 获取市列表 | get list of cities
export const getCityList = function (data) {
    return window.net.send({
        service: 'payment',
        functionName: 'getCityList',
        data: data
    });
};

// 获取区县列表 | get list of districts
export const getDistrictList = function (data) {
    return window.net.send({
        service: 'payment',
        functionName: 'getDistrictList',
        data: data
    });
};

// 获取银行卡类型列表 | get list of bank card types
export const getBankTypeList = function () {
    return window.net.send({
        service: 'payment',
        functionName: 'getBankTypeList',
        data: null
    });
};
// 获取pms可用银行卡类型 | get bank card type by its name
export const requestBankTypeByUserName = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'requestBankTypeByUserName',
        data: data
    });
};
// 申请兑换奖品 | apply bonus for prizes
export const applyBonus = function (data) {
    return window.net.send({
        service: 'payment',
        functionName: 'applyBonus',
        data: data
    });
};

// 获取玩家全额消费 | get player's balance
export const getCreditBalance = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getCreditBalance',
        data: data
    });
};

/*
*  埋点
* */

// 埋点 | counter
export const clickCount = function (data) {
    return window.net.send({
        service: 'platform',
        functionName: 'clickCount',
        data: data
    });
};

// 获取登录游戏的URL | get URL of the game
export const getLoginURL = function (data) {
    return window.net.send({
        service: 'game',
        functionName: 'getLoginURL',
        data: data
    });
};

// 收藏游戏 | add a game to favorites
export const addFavoriteGame = function (data) {
    return window.net.send({
        service: 'game',
        functionName: 'addFavoriteGame',
        data: data
    });
};

// 删除收藏游戏 | remove a game from favorites
export const removeFavoriteGame = function (data) {
    return window.net.send({
        service: 'game',
        functionName: 'removeFavoriteGame',
        data: data
    });
};

// 获取收藏的游戏列表 | get games marked as favorite by the player
export const getFavoriteGames = function (data) {
    return window.net.send({
        service: 'game',
        functionName: 'getFavoriteGames',
        data: data
    });
};

// 获取游戏分组详细信息 | get game group information
export const getGameGroupInfo = function (data) {
    return window.net.send({
        service: 'game',
        functionName: 'getGameGroupInfo',
        data: data
    });
};

// 获取游戏供应商列表 | get game company list
export const getProviderList = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getProviderList',
        data: data
    });
};

// 编辑玩家QQ | modify player's QQ
export const updatePlayerQQ = function (data) {
    return window.net.send({
        service: 'player',
        functionName: 'updatePlayerQQ',
        data: data
    });
};

// 编辑玩家wechat | modify player's weChat
export const updatePlayerWeChat = function (data) {
    return window.net.send({
        service: 'player',
        functionName: 'updatePlayerWeChat',
        data: data
    });
};

// 修改玩家电话 | modify player's phone number
export const updatePhoneNumberWithSMS = function (data) {
    return window.net.send({
        service: 'player',
        functionName: 'updatePhoneNumberWithSMS',
        data: data
    });
};

// 修改玩家的支付信息 | modify player's payment information
export const updatePaymentInfo = function (data) {
    return window.net.send({
        service: 'player',
        functionName: 'updatePaymentInfo',
        data: data
    });
};

// 请求客服回电 | request for call back
export const playerPhoneChat = function (data) {
    return window.net.send({
        service: 'platform',
        functionName: 'playerPhoneChat',
        data: data
    });
};

// 查询消费记录 | search comsumption record
export const search = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'search',
        data: data
    });
};

// 获取试玩游戏链接
export const getTestLoginURL = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getTestLoginURL',
        data: data
    });
};
// 获取平台设置
export const getConfig = function (service, data) {
    return window.net.send({
        service: service,
        functionName: 'getConfig',
        data: data
    });
};
// User upgrade the jazz club rank
export const manualPlayerLevelUp = (service, data) => {
    return window.net.send({
        service: service,
        functionName: 'manualPlayerLevelUp',
        data: data
    });
};
// 获取优惠所有信息 || get all discount info
export const getRewardList = (service, data) => {
    return window.net.send({
        service: service,
        functionName: 'getRewardList',
        data: data
    });
};
// 添加客户端访问记录|| add source log
export const addClientSourceLog = (service, data) => {
    return window.net.send({
        service: service,
        functionName: 'addClientSourceLog',
        data: data
    });
};
