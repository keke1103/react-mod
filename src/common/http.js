import fetch from 'axios';

const makeURL =(url)=>{
    if (url.indexOf('?') !== -1) {
        return `${url}&t=${Date.now()}`;
    } else {
        return `${url}?t=${Date.now()}`;
    }
} ;

/**
 * 错误统一处理
 * @param failCB ,失败回调可不传递
 * @return {function(*=)}
 */
const errorRes = (failCB)=>{
    return (err)=>{
        failCB ? failCB(err.toString()) : alert(err);
    };
};

/**
 * 统一处理成功返回,状态码验证
 * @param callback
 * @return {function(*)}
 */
const successRes = (callback)=>{
    return (res)=>{
        if (res.status !== 200) {
            throw new Error('some thing bad happened');
        } else {
            if (res.data.code !== 0) {
                throw new Error(res.data.message);
            } else {
                callback && callback(res.data);
            }
        }
    };
};

/**
 * get 请求
 * @param url
 * @param data
 * @param success
 * @param fail
 */
export const get = (url,data,success,fail)=>{
    let _url = makeURL(url);
     if(!(typeof data === 'object')){
         success = data;
         fail = success;
     }
    fetch.get(_url,{
            params: data
        })
    .then(successRes(success))
    .catch(errorRes(fail));
};

/**
 * post 请求
 * @param url
 * @param data
 * @param success
 * @param fail
 */
export const post = (url,data,success,fail)=>{
    let _url = makeURL(url);
    if(!(typeof data === 'object')){
        success = data;
        fail = success;
    }
    fetch.post(_url,data)
    .then(successRes(success))
    .catch(errorRes(fail));
};

/**
 * put 请求
 * @param url
 * @param data
 * @param success
 * @param fail
 */
export const put = (url,data,success,fail)=>{
    let _url = makeURL(url);
    if(!(typeof data === 'object')){
        success = data;
        fail = success;
    }
    fetch.put(_url,data )
    .then(successRes(success))
    .catch(errorRes(fail));
};


/**
 * delete 请求
 * @param url
 * @param data
 * @param success
 * @param fail
 */
export const del = (url,data,success,fail)=>{
    let _url = makeURL(url);
    if(!(typeof data === 'object')){
        success = data;
        fail = success;
    }
    fetch.delete(_url,{
        data: data
    })
    .then(successRes(success))
    .catch(errorRes(fail));
};
