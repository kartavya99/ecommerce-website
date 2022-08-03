import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ props }) => {
  const [cart, setCart] = useState();
  return <Provider value={{ cart, setCart }} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
