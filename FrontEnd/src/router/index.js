import { createRouter, createWebHistory } from 'vue-router'
import SideMenu from '../layouts/side-menu/Main.vue'
import DashboardOverview3 from '../views/dashboard-overview-3/Main.vue'
import Inbox from '../views/inbox/Main.vue'
import FileManager from '../views/file-manager/Main.vue'
import Chat from '../views/chat/Main.vue'
import Post from '../views/post/Main.vue'
import Calendar from '../views/calendar/Main.vue'
import CrudDataList from '../views/products/Main.vue'
import CrudForm from '../views/addProduct/Main.vue'
import UsersLayout3 from '../views/users/Main.vue'
import ProfileOverview1 from '../views/profile/Main.vue'
import WizardLayout3 from '../views/wizard-layout-3/Main.vue'
import BlogLayout1 from '../views/blog/Main.vue'
import InvoiceLayout2 from '../views/invoice/Main.vue'
import Login from '../views/login/Main.vue'
import Register from '../views/register/Main.vue'
import ErrorPage from '../views/error-page/Main.vue'
import UpdateProfile from '../views/update-profile/Main.vue'
import ChangePassword from '../views/change-password/Main.vue'

const routes = [
  {
    path: '/',
    component: SideMenu,
    children: [
      {
        path: '/',
        name: 'side-menu-dashboard',
        component: DashboardOverview3
      },
      {
        path: 'inbox',
        name: 'side-menu-inbox',
        component: Inbox
      },
      {
        path: 'file-manager',
        name: 'side-menu-file-manager',
        component: FileManager
      },
      {
        path: 'chat',
        name: 'side-menu-chat',
        component: Chat
      },
      {
        path: '/blog/post',
        name: 'side-menu-post',
        component: Post
      },
      {
        path: 'calendar',
        name: 'side-menu-calendar',
        component: Calendar
      },
      {
        path: 'invoice',
        name: 'invoice',
        component: InvoiceLayout2
      },
      {
        path: 'products',
        name: 'side-menu-crud-data-list',
        component: CrudDataList
      },
      {
        path: '/products/add-product',
        name: 'side-menu-crud-form',
        component: CrudForm
      },
      {
        path: 'users',
        name: 'side-menu-users-layout-3',
        component: UsersLayout3
      },
      {
        path: 'profile',
        name: 'side-menu-profile-overview-1',
        component: ProfileOverview1
      },
      {
        path: 'sign-up',
        name: 'sign-up',
        component: WizardLayout3
      },
      {
        path: 'blog',
        name: 'side-menu-blog-layout-1',
        component: BlogLayout1
      },
      {
        path: 'update-profile',
        name: 'side-menu-update-profile',
        component: UpdateProfile
      },
      {
        path: 'change-password',
        name: 'side-menu-change-password',
        component: ChangePassword
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/error-page',
    name: 'error-page',
    component: ErrorPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

export default router
