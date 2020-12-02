export const setSortParams = (color) => {
    return{
        type: 'SET_SORT_PARAMS',
        payload: color
    }
};

export const sortByCheaper = () => {
    return{
        type: 'SORT_BY_CHEAPER'
    }
};

export const sortByMostExpensive = () => {
  return{
      type: 'SORT_BY_MOST_EXPENSIVE'
  }
};

export const sortByAlphabet = () => {
    return{
        type: 'SORT_BY_ALPHABET'
    }
};

export const toggleMenu = () => {
    return{
        type: 'TOGGLE_MENU'
    }
};