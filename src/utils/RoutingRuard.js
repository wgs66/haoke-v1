import router from '@/router'
import store from '@/store'
const Address = ['/favorate']
// console.log(Address)
router.beforeEach((to, from, next) => {
  const isShow = !!store.state.user.token
  const index = Address.indexOf(to.fullPath)
  // console.log(to.fullPath)
  // console.log(Address.indexOf(to.fullPath))
  if (index !== -1 && isShow === false) {
    next('/login')
  } else {
    next()
  }
  // console.log(to, from)
})
