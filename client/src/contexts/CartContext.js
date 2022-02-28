import React, {useCallback, useContext, useMemo, useReducer, useState} from 'react';

const Context = React.createContext({});

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload.id],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload.id),
      };
  }
}

function CartProvider({children}) {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
  });

  const addItem = useCallback((id) => 
    dispatch({
      type: 'ADD_ITEM',
      payload: {id},
    }));

  const removeItem = useCallback((id) => 
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {id},
    }));

  const value = useMemo(() => ({
    state, 
    addItem, 
    removeItem
  }), [state, dispatch]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

function useCartContext() {
  return useContext(Context);
}

export {
  CartProvider,
  useCartContext,
};