import { createRouter, createWebHashHistory, useRouter } from "vue-router";

import type { RouteRecordRaw } from "vue-router";

function goExternal(url: string) {
    window.location.replace(url);
    return false;
  }

const routes = [
    {

    }
] as RouteRecordRaw[];

const externalRoutes = [

  ] as RouteRecordRaw[];


  const debugRoutes = [
] as RouteRecordRaw[];

routes.push(...externalRoutes);
if (process.env?.DEBUG) {
  routes.push(...debugRoutes);
}


const router = createRouter({ history: createWebHashHistory(), routes });

export default router;

export function useNavTo(toFalse: () => void) {
  const router = useRouter();
  return (path: string) => {
    router.push(path);
    toFalse();
  };
}
