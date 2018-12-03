import userComponent from './components/InfoUser' 
import hello from './components/HelloWorld' 

const routes = [
  {
    path: '/',
    name: 'hello',
    component: hello
  },
  {
    path: '/userInfo',
    name: 'user',
    component: userComponent
  }
];

export default routes
