module.exports = {'register':function(app,opt){
    app.post('/mine/userstatus', function (req, res){
        if(req.body.token){
            var oldtoken = opt.jwt.decode(req.body.token,'secret');
            var d = (new Date().getTime())/1000;
            if(d <= oldtoken.exp){
                res.send(opt.utilRes(true,oldtoken.uname,'auth'));
            }else{
                res.send(opt.utilRes(false,'','unauth'));
            };
        }else{
            res.send(opt.utilRes(false,'','unauth'));
        };
        
    });
}};