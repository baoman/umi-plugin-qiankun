import request from '../../common/utils/request';

export async function query() {
  return request('/apps');
}
