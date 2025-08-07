import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';

const videos = [
  { id: '1', title: 'Pyar Vyar (Official Video)' },
  { id: '2', title: 'Majid Al Mohandis - Kheth Aoyooni' },
  { id: '3', title: 'Majid Al Mohandis Ensaa' },
  { id: '4', title: 'Ramy Sabry - Mosh Farek' },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [inviteMsg, setInviteMsg] = useState('');
  const filterVideos = videos.filter(v => v.title.toLowerCase().includes(search.toLowerCase()));

  const handleInvite = (videoTitle) => {
    setInviteMsg(`Invited friends to "${videoTitle}"!`);
    setTimeout(() => setInviteMsg(''), 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.search}
        value={search}
        onChangeText={setSearch}
        placeholder="Search videos..."
      />
      <FlatList
        data={filterVideos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity>
              <Text>{item.title}</Text>
            </TouchableOpacity>
            <Button title="Invite" onPress={() => handleInvite(item.title)} />
          </View>
        )}
      />
      {inviteMsg !== '' && (
        <View style={styles.inviteBanner}>
          <Text style={styles.inviteText}>{inviteMsg}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: { padding: 14, marginBottom: 8, backgroundColor: '#f1f1f1', borderRadius: 6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  search: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 8, marginBottom: 14 },
  inviteBanner: { backgroundColor: '#d1e7dd', padding: 8, borderRadius: 6, marginTop: 8 },
  inviteText: { color: '#0f5132', fontWeight: 'bold', textAlign: 'center' },
});
