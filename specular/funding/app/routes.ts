import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("problem", "routes/problem.tsx"),
  route("architecture", "routes/architecture.tsx"),
  route("models", "routes/models.tsx"),
  route("technology", "routes/technology.tsx"),
  route("privacy", "routes/privacy.tsx"),
] satisfies RouteConfig;
