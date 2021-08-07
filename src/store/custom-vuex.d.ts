import { ModulesState } from "./userModules";

export interface RootState {
  [k: string]: any;
}

export interface StoreState extends RootState {
  modules: ModulesState;
}
