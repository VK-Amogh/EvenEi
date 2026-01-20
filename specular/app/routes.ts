import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("funding", "routes/funding.tsx")
] satisfies RouteConfig;
