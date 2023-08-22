import { useEffect } from "react";
import { router, useSegments } from "expo-router";

export default function useProtectedRoute(isAuth) {
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    if (!isAuth && !inAuthGroup) {
      setImmediate(() => {
        router.replace("/(auth)");
      });
    } else if (isAuth && inAuthGroup) {
      setImmediate(() => {
        router.replace("/(main)");
      });
    }
  }, [isAuth, segments]);
}

// if (Platform.OS === "ios") {
//   setTimeout(() => {
//     router.replace("/");
//   }, 1)
// } else {
//   setImmediate(() => {
//     router.replace("/");
//   });
// }
