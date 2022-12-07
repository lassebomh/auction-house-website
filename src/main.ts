import 'virtual:windi.css'

import Router from 'svelte-spa-router'

import Login from './pages/Login.svelte'
import Register from './pages/Register.svelte'
import Scaffold from './pages/Scaffold.svelte'

const routes = {
    '/login': Login,
    '/register': Register,
    '*': Scaffold,
}

const app = new Router({target: document.body, props: { routes }})

export default app

