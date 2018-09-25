import PropTypes from 'prop-types';
import React from 'react';
import {
  EdgeInsetsPropType,
  Platform,
  Animated as RNAnimated,
  requireNativeComponent,
  NativeModules,
  ColorPropType,
  findNodeHandle,
  ViewPropTypes,
  View,
} from 'react-native';
import MapMarker from './MapMarker';



// if ViewPropTypes is not defined fall back to View.propType (to support RN < 0.44)
const viewPropTypes = ViewPropTypes || View.propTypes;

const propTypes = {
  ...viewPropTypes,
  
  showsUserLocation: PropTypes.bool,
  userLocationAnnotationTitle: PropTypes.string,
  showsCompass: PropTypes.bool,
  zoomEnabled: PropTypes.bool,
  scrollEnabled: PropTypes.bool,
  showsScale: PropTypes.bool,
  showsTraffic: PropTypes.bool,

  region: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }),

  initialRegion: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }),

  maxDelta: PropTypes.number,
  minDelta: PropTypes.number,
  onMapReady: PropTypes.func,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  onPanDrag: PropTypes.func,
  onMarkerPress: PropTypes.func,
  minZoomLevel: PropTypes.number,
  maxZoomLevel: PropTypes.number,

};

class MapView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: Platform.OS === 'ios',
    };

    this._onMapReady = this._onMapReady.bind(this);
    this._onMarkerPress = this._onMarkerPress.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onLayout = this._onLayout.bind(this);
  }

  getChildContext() {
    return { provider: this.props.provider };
  }

  componentWillUpdate(nextProps) {
    // const a = this.__lastRegion;
    // const b = nextProps.region;
    // if (!a || !b) return;
    // if (
    //   a.latitude !== b.latitude ||
    //   a.longitude !== b.longitude ||
    //   a.latitudeDelta !== b.latitudeDelta ||
    //   a.longitudeDelta !== b.longitudeDelta
    // ) {
    //   this.map.setNativeProps({ region: b });
    // }
  }



  // _onMapReady() {

  //   this.setState({ isReady: true }, () => {
  //     if (onMapReady) onMapReady();
  //   });
  // }

  // _onLayout(e) {
  //   const { layout } = e.nativeEvent;
  //   if (!layout.width || !layout.height) return;
  //   if (this.state.isReady && !this.__layoutCalled) {
  //     const { region, initialRegion } = this.props;
  //     if (region) {
  //       this.__layoutCalled = true;
  //       this.map.setNativeProps({ region });
  //     } else if (initialRegion) {
  //       this.__layoutCalled = true;
  //       this.map.setNativeProps({ initialRegion });
  //     }
  //   }
  //   if (this.props.onLayout) {
  //     this.props.onLayout(e);
  //   }
  // }

  // _onMarkerPress(event) {
  //   if (this.props.onMarkerPress) {
  //     this.props.onMarkerPress(event.nativeEvent);
  //   }
  // }

  // _onChange(event) {
  //   this.__lastRegion = event.nativeEvent.region;
  //   if (event.nativeEvent.continuous) {
  //     if (this.props.onRegionChange) {
  //       this.props.onRegionChange(event.nativeEvent.region);
  //     }
  //   } else if (this.props.onRegionChangeComplete) {
  //     this.props.onRegionChangeComplete(event.nativeEvent.region);
  //   }
  // }

  render() {
    // let props;

    // if (this.state.isReady) {
    //   props = {
    //     region: null,
    //     initialRegion: null,
    //     onMarkerPress: this._onMarkerPress,
    //     onChange: this._onChange,
    //     onMapReady: this._onMapReady,
    //     onLayout: this._onLayout,
    //     ...this.props,
    //   };
    //   props.handlePanDrag = !!props.onPanDrag;
    // } else {
    //   props = {
    //     style: this.props.style,
    //     region: null,
    //     initialRegion: null,
    //     onMarkerPress: this._onMarkerPress,
    //     onChange: this._onChange,
    //     onMapReady: this._onMapReady,
    //     onLayout: this._onLayout,
    //   };
    // }

    console.log('--------------------');
    console.log('%s',this.props.provider);
    console.log('--------------------');

    //在这里添加对应的地图视图
    const AIRMap = requireNativeComponent("AIRMap", MapView);

    return (
      <AIRMap
        ref={ref => { this.map = ref; }}
        {...props}
      />
    );
  }
}

MapView.propTypes = propTypes;
MapView.Marker = MapMarker;
export default MapView;
