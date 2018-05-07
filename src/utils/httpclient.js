import axios from 'axios';
import qs from 'qs';

const baseUrl = 'http://localhost:6655/';

var filterUrl = function(_url){
    if(_url && _url.startsWith('http')){
        return _url;
    };
    return baseUrl + _url;
};

export default {
    'get':function(_url, _params,opt){
        return new Promise(function(resolve, reject){
            axios({
                'method':'get',
                'url':filterUrl(_url),
                'params': _params || {},
                'headers':opt || {}
            }).then(function(res){
                resolve(res);
            }).catch(function(error){
                reject(error);
            });
        });
    },
    'post':function(_url, _params,opt){
        opt = opt || {};
        opt['Content-Type'] = 'application/x-www-form-urlencoded';
        return new Promise(function(resolve, reject){
            axios({
                'method':'post',
                'url':filterUrl(_url),
                'data':qs.stringify(_params || {}),
                'headers': opt
            }).then(function(res){
                resolve(res);
            }).catch(function(error){
                reject(error);
            });
        });
    }
};