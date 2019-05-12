import Vue from 'vue'
import VueRouter from 'vue-router'

import TodoContents from '../components/TodoContents'
import TodoLogin from '../components/TodoLogin'
import Canvas from '../components/Canvas'
import TodoMap from '../components/TodoMap'
import TodoMenu from '../components/TodoMenu'
import TodoWeather from '../components/TodoWeather'
import TodoCalender from '../components/TodoCalender'
import Configuration from '../components/Configuration'
import TodoNews from '../components/TodoNews'
import TodoView from '../components/TodoView'
import notice from '../components/notice'


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: TodoLogin },
        { path: '/draw', component: Canvas },
       { path: '/todo', component: TodoContents },
        { path: '/menu', component: TodoMenu },
        { path: '/map', component: TodoMap },
       { path: '/weather', component: TodoWeather },
       { path: '/cal', component: TodoCalender },
       { path: '/con', component: Configuration },
	    { path: '/news', component: TodoNews },
        { path: '/view', component: TodoView },
        { path: '/notice', component: notice },
        { path: '*', component: TodoMenu }

    ]
})

export default router


