import { createContext, useContext } from "react";
import { failWith } from "runtime";
import { AppViewModel } from "viewmodels";

const AppContext = createContext<AppViewModel | undefined>(undefined);

export function useAppProvider(): AppViewModel {
  return useContext(AppContext) ?? failWith("No App context was defined");
}

export default AppContext.Provider;
