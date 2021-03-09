import { ApiProvider } from "Ap";

const ContextProvider = ({ children }) => {
  return (
    <ApiProvider>
        {children}
    </ApiProvider>
  );
};

export default ContextProvider;