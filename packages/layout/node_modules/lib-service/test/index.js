import getServiceFactory from '../src/index.js'

const createServices = getServiceFactory({
  baseUrl: '/api',
  dataType: 'json',
  onError(err) {
    console.error(err);
  }
})


const service = createServices({
  query: {
    url: '/user'
  },
  create: {
    url: '/user',
    method: 'post'
  },
  remove: {
    url: '/user/{id}',
    method: 'delete'
  }
});


service.query({
  name: 'zhangsan'
});

service.create({
  name: 'Hello',
  age: 24
});

service.remove({
  id: 1
});