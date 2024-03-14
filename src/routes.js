import React from 'react'

const Home = React.lazy(() => import('./component/Home/Home'))
const About = React.lazy(() => import('./component/about/About'))

const routes = [
    { path: '/', exact: true, name: 'Home', element: Home },
    { path: '/about', name: 'About', element: About },
]

export default routes