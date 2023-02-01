import ApiContext from "./apiContext";

const ApiProvider = ({ children }: any) => {
  return <ApiContext.Provider value={[]}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
