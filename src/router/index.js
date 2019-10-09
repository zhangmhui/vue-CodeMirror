import Vue from 'vue'
import Router from 'vue-router'
import EditPage from '@/components/EditPage'
import TextArea from '@/components/TextArea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EditPage',
      component: EditPage
    },
    {
      path: '/textarea',
      name: 'TextArea',
      component: TextArea
    },
  ]
})
