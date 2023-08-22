import { useSelector } from "react-redux";
import { getUserToken } from "../../redux/auth/authSelector";

export default function isAuth() {
  const user = useSelector(getUserToken);
  return user ? true : false;
}
