export function configRouter (router) {
  router.map({
    '/hello': {
      component: require('./components/Hello.vue')
    }
  })
}
