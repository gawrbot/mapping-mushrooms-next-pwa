### Workaround for Leaflet Type Error `Property '_getIconUrl' does not exist on type 'Default'.`:

Add `_getIconUrl?: (name: string) => string;` in the `class Default` of the `namespace Icon` after Line 2466 in: node_modules\@types\leaflet\index.d.ts --> will have to do after each setup change though!
