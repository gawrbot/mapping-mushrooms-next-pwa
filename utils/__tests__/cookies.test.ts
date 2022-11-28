import {
  deleteCookie,
  getParsedCookie,
  setStringifiedCookie,
} from '../cookies';

test('set or update, get and delete a cookie', () => {
  const cookieKey = 'currentLocation';
  const cookieValue = [{ longitude: 48.193453, latitude: 16.408898 }];
  const cookieValueTwo = [{ longitude: 16.363254, latitude: 48.230869 }];

  // Unit: Test functions for adding and removing info from cookie
  expect(getParsedCookie(cookieKey)).toBe(undefined);
  expect(() => setStringifiedCookie(cookieKey, cookieValue)).not.toThrow();
  expect(getParsedCookie(cookieKey)).toStrictEqual(cookieValue);

  // Unit: Test function for updating location in cookie
  expect(() => setStringifiedCookie(cookieKey, cookieValueTwo)).not.toThrow();
  expect(getParsedCookie(cookieKey)).toStrictEqual(cookieValueTwo);

  // Clear state
  expect(deleteCookie(cookieKey)).toBe(undefined);
  expect(getParsedCookie(cookieKey)).toBe(undefined);
});

// Unit: Test setLocationCookie(), used when clicking on map marker
test('setting location cookie', () => {
  const e = {
    latlng: {
      lat: -77.767708,
      lng: -6.292013,
    },
  };
  const currentLocationLng = e.latlng.lng;
  const currentLocationLat = e.latlng.lat;

  expect(() =>
    setStringifiedCookie('currentLocation', [
      { longitude: currentLocationLng, latitude: currentLocationLat },
    ]),
  ).not.toThrow();

  expect(getParsedCookie('currentLocation')).toStrictEqual([
    { longitude: -6.292013, latitude: -77.767708 },
  ]);

  // Clear state
  expect(deleteCookie('currentLocation')).toBe(undefined);
  expect(getParsedCookie('currentLocation')).toBe(undefined);
});
