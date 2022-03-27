import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Text>Page content</Text>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
