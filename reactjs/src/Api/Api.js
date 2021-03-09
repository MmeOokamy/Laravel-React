import { createContext, useState, useEffect } from "react";
import useFetch from "hooks/useFetch";

import { objToArr } from "./utils";

const defaultList = [];
const Api = createContext(defaultList);

export const ApiProvider = ({ children }) => {
  const [list, setList] = useState(defaultList);
  const doFetch = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      const url = `  `;
      setList(objToArr(await doFetch(url)));
    };
    fetchData();
  }, [doFetch]);

  return <Api.Provider value={{ list, setList }}>{children}</Api.Provider>;
};

export default Api;
