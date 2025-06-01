import HomePage from "~/pages/HomePage";
import routes from "./Routes";

const publicRoutes = [{ path: routes.home, component: HomePage }];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
