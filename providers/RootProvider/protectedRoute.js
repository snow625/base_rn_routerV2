import { useProtectedRoute, useIsAuth } from "@hooks";

export default function ProtectedRoute(props) {
  const isAuth = useIsAuth();

  useProtectedRoute(isAuth);

  return <>{props.children}</>;
}
