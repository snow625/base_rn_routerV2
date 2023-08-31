import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuthStore } from "@redux/auth/authSelector";
import { userRegister } from "@redux/auth/authOperations";

import { Text } from "react-native";
import { Button, TextField } from "@components";
import { FormLayoutAuth } from "@layouts";

const initState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initState);

  const onRegister = useCallback(
    (registerForm) => {
      const { password, email, confirmPassword } = registerForm;
      if (confirmPassword !== password) {
        console.error(`passwords not the same!`);
        return;
      }
      dispatch(userRegister({ password, email: email.trim() }));
    },
    [dispatch]
  );

  const handleChange = useCallback(
    (value, stateName) => {
      setState((prev) => ({ ...prev, [stateName]: value }));
    },
    [setState]
  );

  const { loading } = useSelector(getAuthStore);
  const { email, password, confirmPassword } = state;

  return (
    <FormLayoutAuth withLogo={false}>
      <Text
        style={{
          fontSize: 35,
          color: "white",
          textAlign: "center",
          fontWeight: "500",
          marginBottom: 20,
        }}
      >
        Register
      </Text>

      <TextField
        disabled={loading}
        value={email}
        error={false}
        mode="flat"
        stateName="email"
        label="Email"
        onChange={handleChange}
      />
      <TextField
        disabled={loading}
        value={password}
        mode="flat"
        secureTextEntry
        stateName="password"
        label="Password"
        onChange={handleChange}
      />
      <TextField
        disabled={loading}
        value={confirmPassword}
        mode="flat"
        secureTextEntry
        stateName="confirmPassword"
        label="Password confirm"
        onChange={handleChange}
      />

      <Button
        mode={loading ? `text` : "contained"}
        loading={loading}
        disabled={loading || !(password && email && confirmPassword)}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          borderColor: "white",
          fontSize: 25,
          marginTop: 20,
          zIndex: 10,
        }}
        text={loading ? `Loading` : "Register"}
        onPress={() => onRegister(state)}
        labelStyle={{ fontSize: 18, padding: 3, paddingHorizontal: 55 }}
      />
    </FormLayoutAuth>
  );
};

export default Register;
