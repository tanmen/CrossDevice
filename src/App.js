import React from 'react'
import { Image, StyleSheet, Text, View, Button } from 'react-native'

// Components
const Card = ({ children }) => <View style={styles.card}>{children}</View>;
const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;
const Photo = ({ uri }) => <Image source={{ uri }} style={styles.image} />;
const App = () => (
  <Card>
    <Title>App Card</Title>
    <Photo uri="https://www.bizreach.jp/img/logo/logo-bizreach.png"  />
    <Text>たんめん</Text>
    <Button title="button sample" />
  </Card>
);

// Styles
const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold'
  },
  image: {
    marginVertical: 10,
    width: 200,
    height: 56,
  }
});

export default App;