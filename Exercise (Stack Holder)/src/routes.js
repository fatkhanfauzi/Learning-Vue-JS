import Dashboard from './components/Dashboard.vue'
import Portfolio from './components/Portfolio.vue'
import Stock from './components/Stock.vue'

export const routes = [
    { path: '', component: Dashboard}, // default
    { path: '/portfolio', component: Portfolio},
    { path: '/stocks', component: Stock},
]
