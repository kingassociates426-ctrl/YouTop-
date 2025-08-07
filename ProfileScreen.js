import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Photo */}
      <Image
        source={{ uri: 'https://via.placeholder.com/120' }}
        style={styles.profileImage}
      />
      {/* Username */}
      <Text style={styles.name}>ROI</Text>
      <Text style={styles.handle}>@first.lucky</Text>

      {/* Connected Accounts */}
      <View style={styles.connected}>
        <Text style={styles.section}>Connected accounts</Text>
        <Text>Google: Signed in</Text>
      </View>

      {/* Settings List */}
      <View style={styles.settings}>
        <Text style={styles.section}>Settings</Text>
        <Button title="Quick Reaction" onPress={() => {}} />
        <Button title="Rave Premium" onPress={() => {}} />
        <Button title="Restrict Invitations" onPress={() => {}} />
        <Button title="Floating Video Player" onPress={() => {}} />
        <Button title="Auto-translate Chat Messages" onPress={() => {}} />
        <Button title="Hide Location" onPress={() => {}} />
        <Button title="Privacy" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#f9f9f9' },
  profileImage: { width: 120, height: 120, borderRadius: 60, margin: 16 },
  name: { fontSize: 24, fontWeight: 'bold' },
  handle: { color: '#888', marginBottom: 16 },
  section: { fontSize: 18, fontWeight: '600', marginVertical: 8 },
  connected: { width: '100%', marginBottom: 16 },
  settings: { width: '100%' },
});
