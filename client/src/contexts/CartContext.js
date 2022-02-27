import React, {useCallback, useContext, useState} from 'react';

const Context = React.createContext({});

function CartProvider({children}) {
  const [items, setItems] = useState([]);

  const addItem = useCallback((item) => {
    setItems([...items, item]);
  });

  return (
    <Context.Provider value={{items, addItem}}>
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