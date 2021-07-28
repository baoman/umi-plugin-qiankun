import {
    query
} from '../../services/user/api';

import User from './entities/index';


class UserService {
    /**
     * 获取登录用户信息
     */
    static getUserInfo() {
        return query().then(user => new User(user))
    }
}

export default UserService