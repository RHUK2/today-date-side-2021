const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';

export const openMenuAction = () => ({
  type: OPEN_MENU,
});

export const closeMenuAction = () => ({
  type: CLOSE_MENU,
});

const initValue = {
  isOpenMenu: false,
};

export const modalReducer = (state = initValue, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isOpenMenu: true,
      };
    case CLOSE_MENU:
      return {
        ...state,
        isOpenMenu: false,
      };
    default:
      return state;
  }
};
