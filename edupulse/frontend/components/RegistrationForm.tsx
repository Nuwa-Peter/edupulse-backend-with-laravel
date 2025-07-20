import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const RegistrationForm = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="School Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Phone" />
      <TextInput style={styles.input} placeholder="Address" />
      <Button title="Register" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default RegistrationForm;
