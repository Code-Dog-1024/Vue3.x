export const userModules = [
  {
    id: "1",
    name: "模块1",
    children: [
      {
        id: "1-1",
        name: "模块1-1",
        children: [
          {
            id: "1-1-1",
            name: "模块1-1-1",
            route: "/test",
          },
          {
            id: "1-1-2",
            name: "模块1-1-2",
          },
        ],
      },
      {
        id: "1-2",
        name: "模块1-2",
        children: [
          {
            id: "1-2-1",
            name: "模块1-2-1",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "模块2",
    children: [
      {
        id: "2-1",
        name: "模块2-1",
      },
      {
        id: "2-2",
        name: "模块2-2",
      },
    ],
  },
];
