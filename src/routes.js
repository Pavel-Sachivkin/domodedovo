const PageMain = () => import('@/pages/PageMain.vue')
const PagePersona = () => import('@/pages/PagePersona.vue')

const routes = [{
  component: PageMain,
  name: 'main',
  path: '/'
}, {
  component: PagePersona,
  name: 'persona',
  path: '*'
}]

export default routes
