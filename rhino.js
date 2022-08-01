var currentPackageName = common.getlpparam().packageName;
if (currentPackageName == 'tv.danmaku.bili') {
common.hookMethod('com.bilibili.lib.accountinfo.model.VipUserInfo', 'isEffectiveVip', [], function (param) {
     param.setResult(java.lang.Boolean.valueOf('true'));
}, function (param) {
    
}); 

common.hookMethod('com.bilibili.lib.accountinfo.model.VipExtraUserInfo', 'isEffectiveVip', [], function (param) {
     param.setResult(java.lang.Boolean.valueOf('true'));
}, function (param) {
    
}); 


common.hookMethod('', '', [], function (param) {
    
}, function (param) {
    common.setStaticObjectField('com.bilibili.lib.accountinfo.model.VipUserInfo', 'endTime', java.lang.Long.valueOf('4102415999000'));
});
 


common.hookMethod('', '', [], function (param) {
    
}, function (param) {
    common.setStaticObjectField('com.bilibili.lib.accountinfo.model.VipUserInfo', 'vipStatus', java.lang.Integer.valueOf('1'));
});
 


common.hookMethod('', '', [], function (param) {
    
}, function (param) {
    common.setStaticObjectField('com.bilibili.lib.accountinfo.model.VipUserInfo', 'vipType', java.lang.Integer.valueOf('1'));
});
 


} 
