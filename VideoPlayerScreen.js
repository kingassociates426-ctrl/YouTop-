import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function VideoPlayerScreen() {
  return (
    <View style={styles.container}>
      {/* Video Player Placeholder */}
      <View style={styles.videoBox}>
        <Text style={styles.videoText}>[Video Player Area]</Text>
      </View>
      {/* Video Title */}
      <Text style={styles.title}>Pyar Vyar (Official Video)</Text>
      {/* Room Participants */}
      <Text style={styles.participants}>ROI joined</Text>
      {/* Chat Section */}
      <View style={styles.chatBox}>
        <Text style={styles.chatText}>Chat will appear here…</Text>
      </View>
      {/* Controls */}
      <Button title="Send Message" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  videoBox: { height: 180, backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginBottom: 12 },
  videoText: { fontSize: 16, color: '#444' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
  participants: { color: '#888', marginBottom: 12 },
  chatBox: { minHeight: 80, backgroundColor: '#eee', borderRadius: 6, marginBottom: 12, justifyContent: 'center', alignItems: 'center' },
  chatText: { color: '#666' },
});
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function VideoPlayerScreen({ route }) {
  const videoTitle = route.params?.videoTitle || 'No Video Selected';
  return (
    <View style={styles.container}>
      <View style={styles.videoBox}>
        <Text style={styles.videoText}>[Video Player Area]</Text>
      </View>
      <Text style={styles.title}>{videoTitle}</Text>
      <Text style={styles.participants}>ROI joined</Text>
      <View style={styles.chatBox}>
        <Text style={styles.chatText}>Chat will appear here…</Text>
      </View>
      <Button title="Send Message" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  videoBox: { height: 180, backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginBottom: 12 },
  videoText: { fontSize: 16, color: '#444' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
  participants: { color: '#888', marginBottom: 12 },
  chatBox: { minHeight: 80, backgroundColor: '#eee', borderRadius: 6, marginBottom: 12, justifyContent: 'center', alignItems: 'center' },
  chatText: { color: '#666' },
});
