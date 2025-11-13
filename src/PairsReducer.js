export function pairsReducer(pairs, action) {
    switch (action.type) {
        case 'deleted': {
            return pairs.filter(pair => pair.id !== action.id) // отфильтровал все пары кроме той, что с переданным id
        }
        case 'toggledFlag': {
            return pairs.map(pair =>
                pair.id === action.id ? { ...pair, flag: !pair.flag } : pair
            );
        }

        case 'added': {
            return [...pairs, action.newPair];
        }

        default: {
            return pairs;
        }        
    }
}

export const trucksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
};

export const trailersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
};
