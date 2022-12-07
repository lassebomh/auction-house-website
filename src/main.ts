import 'virtual:windi.css'

import Router from 'svelte-spa-router'
import Home from './pages/Home.svelte'
import NotFound from './pages/NotFound.svelte'

const routes = {
  '/': Home,
  '*': NotFound,
}

const app = new Router({target: document.body, props: {routes}})

export default app

