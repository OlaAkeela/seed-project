import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: PropTypes.any,
};
export default Container;