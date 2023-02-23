import cookie from 'cookie';
import Cookies from 'js-cookie';

// FMI: An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser. The browser may store the cookie and send it back to the same server with later requests. Typically, an HTTP cookie is used to tell if two requests come from the same browser—keeping a user logged in, for example.

// **It remembers stateful information for the stateless HTTP protocol.**

export type LocationCookie = {
  latitude: number;
  longitude: number;
};

export function getParsedCookie(key: string): LocationCookie[] | undefined {
  const cookieValue = Cookies.get(key); // Type string | Undefined

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue); // Type should be a string
  } catch (err) {
    return undefined;
  }
}

export function setStringifiedCookie(key: string, value: LocationCookie[]) {
  Cookies.set(key, JSON.stringify(value));
}

export function stringifyCookieValue(value: LocationCookie[]) {
  return JSON.stringify(value);
}

export function deleteCookie(key: string) {
  Cookies.remove(key);
}

// Serialise the cookie to communicate with browser and make it remember me

export function createSerializedRegisterSessionTokenCookie(token: string) {
  // check if we are in production e.g Fly.io
  const isProduction = process.env.NODE_ENV === 'production';

  const maxAge = 60 * 60 * 24; // 24 hours in seconds

  return cookie.serialize('sessionToken', token, {
    // new browsers
    maxAge: maxAge,
    // for internet explorer and old browsers
    expires: new Date(
      Date.now() /** current date in milliseconds */ +
        maxAge * 1000 /** 24  hours in milliseconds */,
    ),
    httpOnly: true,
    secure: isProduction,
    path: '/',
    // Be explicit about new default behavior
    // in browsers
    // https://web.dev/samesite-cookies-explained/
    sameSite: 'lax',
  });
}
