import utils from '../utils';
import { Http } from '../axios';
import api from '../api';

export type Utils = typeof utils;

type Api = typeof api;
export interface $api extends Api {}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $utils: Utils;
    $http: Http;
    $api: $api;
  }
}
