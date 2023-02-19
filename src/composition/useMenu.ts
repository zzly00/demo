import { reactive, readonly } from 'vue';
import { MenuState } from '../interface';

export default () => {
  const menuState: MenuState = reactive({
    menuCollapse: false,
    lists: [
      {
        icon: 'menu1',
        name: 'Home General'
      },
      {
        icon: 'menu2',
        name: 'Marketing &  Sales',
        child: [
          {
            name: 'Option_1'
          },
          {
            name: 'Option_2',
            child: [
              {
                name: 'Suboption_1'
              },
              {
                name: 'Suboption_2'
              },
              {
                name: 'Suboption_3'
              }
            ]
          },
          {
            name: 'Option_3'
          }
        ]
      },
      {
        icon: 'menu3',
        name: 'Customer Service & Operation'
      },
      {
        icon: 'menu4',
        name: 'Carrier Management'
      },
      {
        icon: 'menu5',
        name: 'Finance & Accounting'
      },
      {
        icon: 'menu6',
        name: 'HR Development & Organization Setup'
      }
    ],
  });

  const switchMenuCollapse = () => {
    menuState.menuCollapse = !menuState.menuCollapse;
  };

  return {
    menuState: readonly(menuState),
    switchMenuCollapse
  }
};