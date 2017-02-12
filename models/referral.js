var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var referralSchema=new Schema({
    merchantID:'String',
    fromID: 'String',
    toID: 'String',
    points:'String',
    status: 'String'
});

module.exports=mongoose.model('Referrals',referralSchema);
