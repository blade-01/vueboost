import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
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
          name: 'About',
          icon: 'image-filter-center-focus',
          route: '/about'
        }
      ]
    },
    {
      title: 'Components',
      icon: 'mdi-puzzle',
      list: [
        {
          name: 'Forms',
          icon: 'form-select',
          show: false,
          sub: [
            {
              name: 'Form Input',
              route: '/dashboard'
            },
            {
              name: 'Form Select',
              route: '/'
            }
          ]
        },
        {
          name: 'Table',
          icon: 'table',
          show: false,
          sub: [
            {
              name: 'Base Table',
              route: '/dashboard'
            }
          ]
        }
      ]
    }
  ]);
  const activeSidebar = ref(false);
  const toggleLoader = (value: boolean): any => {};
  const toggleError = (value: boolean): any => {};

  const toggleDropdown = (item: any): void => {
    // links.value.forEach((link) =>
    //   link.list?.forEach((list) => (list.show = false))
    // );
    item.show = !item.show;
    // if (item.show === true) {
    //   item.show = false;
    // } else {
    //   item.show = true;
    // }
    // console.log(item.show);
  };

  const toggleSidebar = (): void => {
    activeSidebar.value = !activeSidebar.value;
    console.log('active');
  };

  return {
    links,
    activeSidebar,
    toggleLoader,
    toggleError,
    toggleDropdown,
    toggleSidebar
  };
});
