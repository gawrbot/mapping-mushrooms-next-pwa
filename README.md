### Workaround for Leaflet TS Error `Property '_getIconUrl' does not exist on type 'Default'.`:

Add `_getIconUrl?: (name: string) => string;` in the `class Default` of the `namespace Icon` in: node_modules\@types\leaflet\index.d.ts
