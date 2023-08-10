import { useSelector, useDispatch } from "react-redux";
import { setUser, initialState } from "store/auth/userSlice";
import { onSignInSuccess, onSignOutSuccess } from "store/auth/sessionSlice";
import appConfig from "configs/app.config";
import { REDIRECT_URL_KEY } from "constants/app.constant";
import { useNavigate } from "react-router-dom";
import useQuery from "./useQuery";
import { login } from "service/authService";

function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery();

  const { token, signedIn, expired } = useSelector(
    (state) => state.auth.session
  );

  const signIn = async (data) => {
    try {
      const resp = await login(data);

      if (resp.jwt) {
        const token = resp.jwt;

        dispatch(onSignInSuccess(token));

        if (resp.user) {
          dispatch(setUser(resp.user || {}));
        }

        const redirectUrl = query.get(REDIRECT_URL_KEY);
        navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath);
        return {
          status: "success",
          message: "",
        };
      }
    } catch (errors) {
      return {
        status: "failed",
        message: errors?.response?.data?.message || errors.toString(),
      };
    }
  };

  const handleSignOut = () => {
    dispatch(onSignOutSuccess());
    dispatch(setUser(initialState));
    navigate(appConfig.unAuthenticatedEntryPath);
  };

  const signOut = async () => {
    handleSignOut();
  };

  return {
    authenticated: token && signedIn && expired > new Date().getTime(),
    signIn,
    signOut,
  };
}

export default useAuth;
