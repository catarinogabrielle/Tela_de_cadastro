import { StyleSheet, View, StatusBar } from 'react-native';

import Dashboard from './src/pages/Dashboard'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' barStyle="dark-content" />
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
