import dynamic from 'next/dynamic';
import React from 'react';

// Dynamic imports, so there are no 'Window is not defined' issues
export const Map = dynamic(() => import('./Map'), {
  loading: () => <p>The map is loading</p>,
  ssr: false,
});

export const LocationMarker = dynamic(() => import('./LocationMarker'), {
  loading: () => <p>Location marker is loading</p>,
  ssr: false,
});

export const SpotMarker = dynamic(() => import('./SpotMarker'), {
  loading: () => <p>Spot markers are loading</p>,
  ssr: false,
});

export const SavedSpots = dynamic(() => import('./SavedSpots'), {
  loading: () => <p>Saved Spots are loading</p>,
  ssr: false,
});

export const Search = dynamic(() => import('./Search'), {
  loading: () => <p>Search is loading</p>,
  ssr: false,
});
