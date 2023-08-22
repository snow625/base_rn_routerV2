import { Provider } from "react-redux";
import { store, persistor } from "../../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from "./protectedRoute";

export default function RootProvider(props) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ProtectedRoute>{props.children}</ProtectedRoute>
      </PersistGate>
    </Provider>
  );
}
