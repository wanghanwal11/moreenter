
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './listApp'
import hh from './stk'
import home from './hom'
import index from './index'


const routes = [
    { path: '/', component: index },
    { path: '/home/list', component: hh }
]

Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
    routes:routes
})

const store = new Vuex.Store({}) // 这里你可能已经有其他 module

store.registerModule('vux', {
    state: {
        demoScrollTop: 0,
        isLoading: false,
        direction: 'forward'
    },
    mutations: {
        updateDemoPosition (state, payload) {
            state.demoScrollTop = payload.top
        },
        updateLoadingStatus (state, payload) {
            state.isLoading = payload.isLoading
        },
        updateDirection (state, payload) {
            state.direction = payload.direction
        }
    },
    actions: {
        updateDemoPosition ({commit}, top) {
            commit({type: 'updateDemoPosition', top: top})
        }
    }
})

router.beforeEach(function (to, from, next) {
    store.commit('updateLoadingStatus', {isLoading: true})
    next()
})

router.afterEach(function (to) {
    store.commit('updateLoadingStatus', {isLoading: false})
})
new Vue({
    router: router,
    store:store,
    render: h => h(App)
}).$mount('#app')
