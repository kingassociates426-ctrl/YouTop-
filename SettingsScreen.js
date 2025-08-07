import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function SettingsScreen() {
  const [isDark, setIsDark] = useState(false);

  return (
    <View style={[styles.container, isDark && styles.darkBg]}>
      <Text style={[styles.header, isDark && styles.darkText]}>Settings</Text>
      <View style={styles.row}>
        <Text style={isDark ? styles.darkText : styles.text}>Dark Theme</Text>
        <Switch value={isDark} onValueChange={setIsDark} />
      </View>
      {/* Yahan aap future mein aur setting add kar sakte hain */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  darkBg: { backgroundColor: '#222' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 18 },
  darkText: { color: "#fff" },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 14, justifyContent: 'space-between' }
});import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import VideoListScreen from './VideoListScreen';
import SettingsScreen from './SettingsScreen'; // Ye line add karein

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Videos" component={VideoListScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} /> {/* Ye line add karein */}
      </Tab.Navigator>
    </NavigationContainer>
  );
    }
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';

export default function SettingsScreen() {
  const [isDark, setIsDark] = useState(false);
  const [notify, setNotify] = useState('');

  const showNotification = () => {
    setNotify('Settings saved!');
    setTimeout(() => setNotify(''), 2000); // 2 seconds mein hide ho jayega
  };

  return (
    <View style={[styles.container, isDark && styles.darkBg]}>
      <Text style={[styles.header, isDark && styles.darkText]}>Settings</Text>
      <View style={styles.row}>
        <Text style={isDark ? styles.darkText : styles.text}>Dark Theme</Text>
        <Switch value={isDark} onValueChange={setIsDark} />
      </View>
      <Button title="Show Notification" onPress={showNotification} />
      {notify !== '' && (
        <View style={styles.notifyBanner}>
          <Text style={styles.notifyText}>{notify}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  darkBg: { backgroundColor: '#222' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 18 },
  darkText: { color: "#fff" },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 14, justifyContent: 'space-between' },
  notifyBanner: { backgroundColor: '#d1e7dd', padding: 8, borderRadius: 6, marginTop: 8 },
  notifyText: { color: '#0f5132', fontWeight: 'bold', textAlign: 'center' },
});
