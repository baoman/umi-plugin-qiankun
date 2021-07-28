/**
 * 用户实体
 */
import { USERTYPELIST } from '../../../common/constants/user'
class User {
    constructor(user = {}) {
        this.id = user.id
        this.name = user.name
        this.type = user.type
    }
    // 获取用户名称
    getUserName() {
        return this.name;
    }

    // 获取用户类型
    getUserType(typeId) {
        const index = USERTYPELIST.findIndex(list => +list.type === +typeId)
        return index > -1 ? USERTYPELIST[index].typeName : '';
    }
}

export default User