import httpUtil from "./http";
class Https {
    getContents = params => httpUtil.get('/', params);
    postCreate = params => httpUtil.post('/todo/insert', params);
    postUpdate = params => httpUtil.post('/todo/update', params);
    postDelete = params => httpUtil.post('/todo/delete', params);
}

export default (new Https());
