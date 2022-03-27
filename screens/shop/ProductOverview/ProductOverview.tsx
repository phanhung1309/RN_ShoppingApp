import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

const ProductOverview: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>Product Overview screen</Text>
    </View>
  );
};

export default ProductOverview;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
