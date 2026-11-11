const ACCESS_TOKEN_KEY = "docmate-access-token";
const REFRESH_TOKEN_KEY = "docmate-refresh-token";

export const tokenStorage = {
  getAccessToken: () => sessionStorage.getItem(ACCESS_TOKEN_KEY),
  getRefreshToken: () => sessionStorage.getItem(REFRESH_TOKEN_KEY),
  save({ accessToken, refreshToken }) {
    if (!accessToken || !refreshToken) {
      throw new Error("The server returned an incomplete token pair.");
    }
    sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  },
  clear() {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};
