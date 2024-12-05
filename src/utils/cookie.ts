// utils/cookies.ts
import * as cookie from 'cookie';

export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    // On the client side, get the cookies
    const cookies = cookie.parse(document.cookie);
    return cookies.authToken || null;
  }
  return null;
};
