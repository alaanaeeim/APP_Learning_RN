import * as React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
} from 'react-native';

const QuestionsBoard = () => {
  const [username, setUsername] = React.useState('Alaa Naeeim');
  return (
    <ScrollView>
      <View>
        <Text accessibilityLabel="usernameText">{username}</Text>

        <TextInput
          accessibilityLabel="username"
          placeholder="Enter USername"
          value={username}
          onChangeText={val => setUsername(val)}
        />

        <Image
          style={styles.image}
          source={require('../../assets/images/iphone.jpg')}
        />
        <Button
          title="Change Username"
          accessibilityLabel="change username"
          onPress={() => setUsername('Bassem Naeeim')}
        />
      </View>
    </ScrollView>
  );
};

export default QuestionsBoard;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
