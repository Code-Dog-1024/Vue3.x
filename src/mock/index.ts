export const userModules = [
  {
    id: 'module1',
    name: '模块1',
    route: '/module1',
    children: [
      {
        id: 'module1_menu1',
        name: '菜单1',
        route: '/module1/menu1',
        children: [
          {
            id: 'module1_menu1-1',
            name: '菜单1-1',
            route: '/module1/menu1/menu1-1',
          },
          {
            id: 'module1_menu1-2',
            name: '菜单1-2',
            route: '/module1/menu1/menu1-2',
          },
        ],
      },
      {
        id: 'module1_menu2',
        name: '菜单2',
        route: '/module1/menu2',
        children: [
          {
            id: 'module1_menu2-1',
            name: 'menu2-1',
            route: '/module1/menu2/menu2-1',
          },
        ],
      },
    ],
  },
  {
    id: 'module2',
    name: '模块2',
    route: '/module2',
    children: [
      {
        id: 'module2_menu1',
        name: '菜单1',
        route: '/module2/menu1',
      },
      {
        id: 'module2_menu2',
        name: '菜单2',
        route: '/module2/menu2',
      },
    ],
  },
];
