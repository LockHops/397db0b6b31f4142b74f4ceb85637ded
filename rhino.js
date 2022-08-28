if(common.getlpparam().packageName == 'tv.danmaku.bili'){

//{"className":"com.bilibili.lib.accountinfo.model.VipUserInfo","enable":true,"fieldClassName":"","fieldName":"","hookPoint":"after","methodName":"isEffectiveVip","mode":0,"params":"","resultValues":"true","returnClassName":""}
common.hookMethod('com.bilibili.lib.accountinfo.model.VipUserInfo','isEffectiveVip',[],function(param){
param.setResult(java.lang.Boolean.valueOf('true'));
});

//{"className":"com.bilibili.lib.accountinfo.model.VipExtraUserInfo","enable":true,"fieldClassName":"","fieldName":"","hookPoint":"after","methodName":"isEffectiveVip","mode":0,"params":"","resultValues":"true","returnClassName":""}
common.hookMethod('com.bilibili.lib.accountinfo.model.VipExtraUserInfo','isEffectiveVip',[],function(param){
param.setResult(java.lang.Boolean.valueOf('true'));
});

//{"className":"","enable":true,"fieldClassName":"com.bilibili.lib.accountinfo.model.VipUserInfo","fieldName":"endTime","hookPoint":"after","methodName":"","mode":3,"params":"","resultValues":"4102415999000L","returnClassName":""}
common.hookMethod('','',[],null,function(param){
common.setStaticObjectField('com.bilibili.lib.accountinfo.model.VipUserInfo','endTime',java.lang.Long.valueOf('4102415999000'));
});

//{"className":"","enable":true,"fieldClassName":"com.bilibili.lib.accountinfo.model.VipUserInfo","fieldName":"vipStatus","hookPoint":"after","methodName":"","mode":3,"params":"","resultValues":"1","returnClassName":""}
common.hookMethod('','',[],null,function(param){
common.setStaticObjectField('com.bilibili.lib.accountinfo.model.VipUserInfo','vipStatus',java.lang.Integer.valueOf('1'));
});

//{"className":"","enable":true,"fieldClassName":"com.bilibili.lib.accountinfo.model.VipUserInfo","fieldName":"vipType","hookPoint":"after","methodName":"","mode":3,"params":"","resultValues":"1","returnClassName":""}
common.hookMethod('','',[],null,function(param){
common.setStaticObjectField('com.bilibili.lib.accountinfo.model.VipUserInfo','vipType',java.lang.Integer.valueOf('1'));
});

}
