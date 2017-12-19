import React from 'react'
import icon from './bizreach.png';
import { Image, StyleSheet, Text, View, Button } from 'react-native'

// Components
const Card = ({ children }) => <View style={styles.card}>{children}</View>;
const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;
const Photo = ({ uri }) => <Image source={{ uri }} style={styles.image} />;
const App = () => (
  <Card>
    <Title>App Card</Title>
    <Photo uri={icon}  />
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
    height: 20,
    marginVertical: 10,
    width: 151
  }
});

export default App;