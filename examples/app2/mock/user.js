import mockjs from 'mockjs';

export default {
  'GET /api/app2/users': mockjs.mock({
    'data|100': [
      {
        'id|+1': 1,
        name: '@cname',
        email: '@email'
      },
    ],
  }),
};
