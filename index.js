import MapView, { Animated, MAP_TYPES, ProviderPropType } from './lib/MapView';
import Marker from './lib/MapMarker.js';

export { default as Callout } from './lib/MapCallout.js';
export { Marker };
export { Animated, MAP_TYPES, ProviderPropType };

export const PROVIDER_GOOGLE = MapView.PROVIDER_GOOGLE;
export const PROVIDER_DEFAULT = MapView.PROVIDER_DEFAULT;

export const MarkerAnimated = Marker.Animated;

export default MapView;

