import App from '../App'
import About from '../components/About/About'

const routes = [
    { path: '/',
        exact: true,
        component: App
    },
    { path: '/about',
        component: About
    }
]

export default routes