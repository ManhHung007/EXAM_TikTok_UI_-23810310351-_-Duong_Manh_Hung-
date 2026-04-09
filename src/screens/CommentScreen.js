import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const commentsData = [
  {
    id: '1',
    user: 'martini_rond',
    content: 'How neatly I write the date in my book',
    time: '22h',
    likes: '8098',
    replies: 4,
    avatar: require('../img_assets/user1.png'),
  },
  {
    id: '2',
    user: 'maxjacobson',
    content: "Now that's a skill very talented",
    time: '22h',
    likes: '8098',
    replies: 1,
    avatar: require('../img_assets/user2.png'),
  },
  {
    id: '3',
    user: 'zackjohn',
    content: "Doing this would make me so anxious",
    time: '22h',
    likes: '8098',
    replies: 9,
    avatar: require('../img_assets/user3.png'),
  },
  {
    id: '4',
    user: 'kiero_d',
    content: "Use that on r air forces to whiten them",
    time: '21h',
    likes: '8098',
    replies: 9,
    avatar: require('../img_assets/user4.png'),
  },
  {
    id: '5',
    user: 'mis_potter',
    content: "Sjpuld've used that on his forces 😁😁",
    time: '13h',
    likes: '8098',
    replies: 4,
    isVerified: true,
    avatar: require('../img_assets/user5.png'),
  },
  {
    id: '6',
    user: 'karennne',
    content: "No prressure",
    time: '22h',
    likes: '8098',
    replies: 2,
    avatar: require('../img_assets/user6.png'),
  },
  {
    id: '7',
    user: 'joshua_l',
    content: "My OCD couldn't do it",
    time: '15h',
    likes: '8098',
    replies: 0,
    avatar: require('../img_assets/user7.png'),
  },
];

const CommentScreen = ({ onClose }) => {
  const renderItem = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image source={item.avatar} style={styles.avatar} />
      
      <View style={styles.commentContent}>
        <View style={styles.userRow}>
          <Text style={styles.userName}>{item.user}</Text>
          {item.isVerified && (
            <MaterialCommunityIcons name="check-decagram" size={14} color="#44b1fb" style={{marginLeft: 4}} />
          )}
        </View>
        
        <Text style={styles.contentText}>
          {item.content} <Text style={styles.timeText}>{item.time}</Text>
        </Text>
        
        {item.replies > 0 && (
          <TouchableOpacity>
            <Text style={styles.viewReplies}>
              View replies ({item.replies}) <AntDesign name="down" size={10} />
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.likeSection}>
        <FontAwesome name="heart-o" size={16} color="#888" />
        <Text style={styles.likeCount}>{item.likes}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>579 comments</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <AntDesign name="close" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={commentsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.inputContainer}>
        <TextInput placeholder="Add comment..." style={styles.input} placeholderTextColor="#999" />
        <View style={styles.inputIcons}>
          <MaterialCommunityIcons name="at" size={26} color="#000" style={{ marginRight: 15 }} />
          <MaterialCommunityIcons name="emoticon-outline" size={26} color="#000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { 
    height: 50, flexDirection: 'row', justifyContent: 'center', 
    alignItems: 'center', borderBottomWidth: 0.5, borderColor: '#f0f0f0' 
  },
  headerTitle: { fontWeight: 'bold', fontSize: 15 },
  closeBtn: { position: 'absolute', right: 15 },
  commentContainer: { flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 12 },
  avatar: { width: 42, height: 42, borderRadius: 21 },
  commentContent: { flex: 1, marginLeft: 12 },
  userRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 2 },
  userName: { fontWeight: '600', color: '#8a8a8a', fontSize: 13 },
  contentText: { fontSize: 15, lineHeight: 20, color: '#111' },
  timeText: { color: '#ccc', fontSize: 14 },
  viewReplies: { color: '#8a8a8a', fontSize: 13, fontWeight: '600', marginTop: 10 },
  likeSection: { alignItems: 'center', width: 45, paddingTop: 5 },
  likeCount: { color: '#888', fontSize: 12, marginTop: 4 },
  inputContainer: {
    flexDirection: 'row', alignItems: 'center', padding: 10,
    borderTopWidth: 1, borderColor: '#eee', paddingBottom: 30,
  },
  input: { flex: 1, height: 45, paddingHorizontal: 15, fontSize: 16 },
  inputIcons: { flexDirection: 'row', alignItems: 'center', paddingRight: 5 },
});

export default CommentScreen;