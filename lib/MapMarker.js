import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Platform,
  NativeModules,
  Animated,
  findNodeHandle,
  ViewPropTypes,
  View,
} from 'react-native';


// if ViewPropTypes is not defined fall back to View.propType (to support RN < 0.44)
const viewPropTypes = ViewPropTypes || View.propTypes;
const propTypes = {
  ...viewPropTypes,
  identifier: PropTypes.string,
  reuseIdentifier: PropTypes.string,
  coordinate: PropTypes.shape({
    /**
     * Coordinates for the anchor point of the marker.
     */
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  /**
   * Callback that is called when the user presses on the marker
   */
  onPress: PropTypes.func,
};

const defaultProps = {
  stopPropagation: false,
};

class MapMarker extends React.Component {
  constructor(props) {
    super(props);

    this.showCallout = this.showCallout.bind(this);
    this.hideCallout = this.hideCallout.bind(this);
    this.animateMarkerToCoordinate = this.animateMarkerToCoordinate.bind(this);
  }

  render() {
    return (
      <AIRMapMarker
        ref={ref => {
          this.marker = ref;
        }}
        {...this.props}
        style={[styles.marker, this.props.style]}
        onPress={event => {
          if (this.props.onPress) {
            this.props.onPress(event);
          }
        }}
      />
    );
  }
}

MapMarker.propTypes = propTypes;
MapMarker.defaultProps = defaultProps;
const styles = StyleSheet.create({
  marker: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});

var AIRMapMarker = requireNativeComponent("AIRMapMarker", MapMarker);
export default MapMarker;


