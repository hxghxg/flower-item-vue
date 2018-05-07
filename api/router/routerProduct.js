module.exports = {'register':function(app,opt){
    var ObjectId = require('mongodb').ObjectId;

    app.get('/product', function (req, res){
        var terms = {
            "_id":ObjectId(req.query.id)
        };
        opt.utilMongo.select('products',terms,function(data){
            if(data.length > 0){
                res.send(opt.utilRes(true,data,'founded'));
            }else{
                res.send(opt.utilRes(false,{},'notfound'));
            }
        });
    });


    app.post('/product/userlistupdate',opt.filterJwt,function (req,res){
        var nowtoken = opt.jwt.decode(req.body.token,'secret');
        opt.utilMongo.select('products',{"_id":ObjectId(req.body.id)},function(data){
            var newdata = data;
            newdata[0].qty = req.body.qty;

            opt.utilMongo.updateOne('users',{'uname':nowtoken.uname},{$pull:{'userlist':{"_id":ObjectId(req.body.id)}}},function(){
                opt.utilMongo.updateOne('users',{'uname':nowtoken.uname},{$push:{'userlist':newdata[0]}} ,function(){
                    res.send(opt.utilRes(true,{},'updated'));
                });
            });
        });
    });

    app.post('/product/userlistdelete',opt.filterJwt,function (req,res){
        var nowtoken = opt.jwt.decode(req.body.token,'secret');
        opt.utilMongo.updateOne('users',{'uname':nowtoken.uname},{$pull:{'userlist':{"_id":ObjectId(req.body.id)}}},function(){
            res.send(opt.utilRes(true,{},'deleted'));
        });
    });

    app.post('/product/userlistget',opt.filterJwt,function (req,res){
        var nowtoken = opt.jwt.decode(req.body.token,'secret');
        opt.utilMongo.select('users',{'uname':nowtoken.uname},function(data){
            res.send(opt.utilRes(true,data[0].userlist || [],'userlist'));
        });
    });


    app.get('/list',function (req,res){
        var terms = {'types':req.query.types};
        opt.utilMongo.select('products',terms,function(data){
            res.send(opt.utilRes(true,data,'founded'));
        });
    });
}};