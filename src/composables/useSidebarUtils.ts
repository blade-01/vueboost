export default () => {
  const links = ref<
    {
      title: string;
      icon?: string;
      route?: string;
      list?: {
        name: string;
        show?: boolean;
        icon?: string;
        route?: string;
        sub?: { name: string; icon?: string; route?: string; sub?: object[] }[];
      }[];
      show?: boolean;
    }[]
  >([
    {
      title: 'Navigation',
      list: [
        {
          name: 'Dashboard',
          icon: 'view-dashboard',
          route: '/dashboard'
        },
        {
          name: 'User',
          icon: 'account',
          show: false,
          sub: [
            {
              name: 'Account',
              route: '/'
            },
            {
              name: 'Settings',
              route: '/'
            },
            {
              name: 'Logout',
              route: '/'
            }
          ]
        }
      ]
    },
    {
      title: 'Components',
      icon: 'mdi-puzzle',
      list: [
        {
          name: 'Button',
          icon: 'gesture-tap-button',
          show: false,
          route: '/dashboard/button'
        },
        {
          name: 'Forms',
          icon: 'form-select',
          show: false,
          route: '/dashboard/form'
        },
        {
          name: 'Modal',
          icon: 'card',
          show: false,
          route: '/dashboard/modal'
        },
        {
          name: 'Table',
          icon: 'table',
          show: false,
          route: '/dashboard/table'
        }
      ]
    }
  ]);

  const toggleDropdown = (item: any): void => {
    item.show = !item.show;
  };

  return { links, toggleDropdown };
};
