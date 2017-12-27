import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import headd from '../components/header'
import portfolio from '../components/portfolio'
import about from '../components/about'
import contact from '../components/contact'
import log from '../components/logined'
import maiin from '../components/main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to,from){
    return{
      x:0,
      y:0
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path:'/portfolio',
    	name:'portfolio',
    	component:portfolio
    },
    {
    	path:'/about',
    	name:'about',
    	component:about
    },
    {
    	path:'/contact',
    	name:'contact',
    	component:contact
    },
    {
      path:'/logined',
      name:'login',
      component:log
    },
    {
      path:'/main',
      name:'main',
      component:maiin
      
    }
   ]
})
