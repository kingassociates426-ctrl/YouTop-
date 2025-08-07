import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const invitedVideos = [
  { id: '1', title: 'Pyar Vyar (Official Video)' },
];

const publicVideos = [
  { id: '2', title: 'Majid Al Mohandis - Kheth Aoyooni | Lyrics Video 2024' },
  { id: '3', title: 'Majid Al Mohandis Ensaa' },
  { id: '4', title: 'Ramy Sabry - Mosh Farek' },
];

export default function VideoListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Invited</Text>
      <FlatList
        data={invitedVideos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
      <Text style={styles.header}>Public</Text>
      <FlatList
        data={publicVideos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginTop: 18, marginBottom: 8 },
  card: { padding: 14, marginBottom: 8, backgroundColor: '#f1f1f1', borderRadius: 6 },
});
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const invitedVideos = [
  { id: '1', title: 'Pyar Vyar (Official Video)' },
];

const publicVideos = [
  { id: '2', title: 'Majid Al Mohandis - Kheth Aoyooni | Lyrics Video 2024' },
  { id: '3', title: 'Majid Al Mohandis Ensaa' },
  { id: '4', title: 'Ramy Sabry - Mosh Farek' },
];

export default function VideoListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Invited</Text>
      <FlatList
        data={invitedVideos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Player', { videoTitle: item.title })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.header}>Public</Text>
      <FlatList
        data={publicVideos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Player', { videoTitle: item.title })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginTop: 18, marginBottom: 8 },
  card: { padding: 14, marginBottom: 8, backgroundColor: '#f1f1f1', borderRadius: 6 },
});
