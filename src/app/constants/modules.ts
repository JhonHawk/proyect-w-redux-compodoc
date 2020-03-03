export const MODULES = {
  HOME: {
    title: 'pages.home.title',
    icon: 'home'
  },
  SETTINGS: {
    title: '',
    icon: 'build',
    modules: {
      PASSWORD_CHANGE: {
        title: 'pages.password_change.title',
        icon: 'lock'
      }
    }
  },
  SECURITY: {
    title: 'pages.security.title',
    icon: 'security',
    key: 'security',
    route: '/security',
    modules: {
      COMPANIES: {
        title: 'pages.security.companies.title',
        icon: 'business',
        key: 'sec-companies',
        route: '/security/companies',
        DETAIL: {
          title: 'pages.security.company_detail.title',
          icon: 'business'
        },
        CONFIG: {
          title: 'pages.security.company_config.title',
          icon: 'settings_applications'
        }
      },
      ROLES: {
        title: 'pages.security.roles.title',
        icon: 'person_add',
        key: 'sec-roles',
        route: '/security/roles',
        DETAIL: {
          title: 'pages.security.role_detail.title',
          icon: 'person_add'
        }
      },
      USERS: {
        title: 'pages.security.users.title',
        icon: 'people',
        key: 'sec-users',
        route: '/security/users',
        DETAIL: {
          title: 'pages.security.user_detail.title',
          icon: 'person'
        }
      }
    }
  }
};
