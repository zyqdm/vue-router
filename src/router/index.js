import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../admin'
import page1_1 from '../components/page/page1-1'
import page1_2 from '../components/page/page1-2'
import page2_1 from '../components/page/page2-1'
import page2_2 from '../components/page/page2-2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin,
      children:[
	      {
	      	path:'page1-1',
	      	name:'page1-1',
	      	alias:'page1_1',
	      	component:page1_1,
	      },
	      {
	      	path:'page1-2',
	      	name:'page1-2',
	      	alias:'page1_2',
	      	component:page1_2,
	      	children:[
	      			{
				      	path:'page2-1',
				      	name:'page2-1',
				      	alias:'page2_1',
				      	component:page2_1,
				     },
				     {
				      	path:'page2-2',
				      	name:'page2-2',
				      	alias:'page2_2',
				      	component:page2_2,
				     },
	      		

	      	]
	      }

      ]
    }

  ]
})
