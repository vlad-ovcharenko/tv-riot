import './style.css'
import '@riotjs/hot-reload'
import registerGlobalComponents from './register-global-components'
import * as riot from 'riot'
import App from './app.riot'
// register
registerGlobalComponents()

// mount all the global components found in this page
riot.mount('[data-riot-component]')

const mountApp = riot.component(App)
const app = mountApp(
    document.getElementById('root')
)