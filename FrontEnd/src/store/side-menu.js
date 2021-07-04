const state = () => {
  return {
    menu: [
      {
        icon: 'HomeIcon',
        pageName: 'side-menu-dashboard',
        title: 'Dashboard'
      },
      {
        icon: 'InboxIcon',
        pageName: 'side-menu-inbox',
        title: 'Inbox'
      },
      {
        icon: 'MessageSquareIcon',
        pageName: 'side-menu-chat',
        title: 'Chat'
      },
      {
        icon: 'FileTextIcon',
        pageName: 'side-menu-blog-layout-1',
        title: 'Blog'
      },
      {
        icon: 'CalendarIcon',
        pageName: 'side-menu-calendar',
        title: 'Calendar'
      },
      'devider',
      {
        icon: 'HardDriveIcon',
        pageName: 'side-menu-crud-data-list',
        title: 'Products'
      },
      {
        icon: 'UsersIcon',
        pageName: 'side-menu-users-layout-3',
        title: 'Users'
      },
      {
        icon: 'HardDriveIcon',
        pageName: 'side-menu-file-manager',
        title: 'File Manager'
      }
    ]
  }
}

// getters
const getters = {
  menu: state => state.menu
}

// actions
const actions = {}

// mutations
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
