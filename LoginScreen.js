import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in to watch videos with friends</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <Button title="Sign In" onPress={() => {}} />
      <Text style={styles.or}>or sign in with social account</Text>
      {/* Social login buttons ka UI yahan add kar sakte hain */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { width: '90%', borderWidth: 1, borderRadius: 5, marginBottom: 15, padding: 10 },
  or: { marginTop: 20, color: '#888' },
});
