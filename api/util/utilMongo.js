var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

var objCRUD = {
    'DB':{},
    'objDB':{
        // dbName
        // url
    },
    'connect':function(dbName,url){
        var that = this;
        url = url || 'mongodb://localhost:27017/';
        mongoClient.connect(url, function(err, database) {
            if(err) throw err;
            that.objDB = database.db(dbName || 'test');
            that.DB = database;
        });
    },
    'insert':function(colName, data, cb){
        this.objDB.collection(colName).insert(data,function(err,res){
            if (err) throw err;
            if(cb){cb()};
        });
    },
    'select':function(colName, terms, cb){
        this.objDB.collection(colName).find(terms || {}).toArray(function(err, res){
            if (err) throw err;
            if(cb){cb(res)};
        });
    },
    'updateOne':function(colName,tremsOld,tremsNew,cb){
        this.objDB.collection(colName).updateOne(tremsOld, tremsNew, function(err, res) {
            if (err) throw err;
            if(cb){cb()};
        });
    },
    'updateMany':function(colName,tremsOld,tremsNew,cb){
        this.objDB.collection(colName).updateMany(tremsOld, tremsNew, function(err, res) {
            if (err) throw err;
            if(cb){cb()};
        });
    },
    'deleteOne':function(colName,trems,cb){
        this.objDB.collection(colName).deleteOne(trems,function(err, res) {
            if (err) throw err;
            if(cb){cb()};
        });
    },
    'deleteMany':function(colName,trems,cb){
        this.objDB.collection(colName).deleteMany(trems,function(err, res) {
            if (err) throw err;
            if(cb){cb()};
        });
    },
    'close':function(){
        if(!this.DB){
            this.connect('test');
        }
        this.DB.close();
    }
}
   
module.exports = objCRUD;
