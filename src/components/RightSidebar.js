import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const RightSidebar = ({ data, onOpenComments }) => {
  const sidebarData = data || { likes: '0', comments: '0', shares: '0', avatar: null };

  return (
    <View style={styles.container}>
      {/* Avatar Group */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarWrapper}>
          <Image 
            source={sidebarData.avatar ? sidebarData.avatar : require('../img_assets/user1.png')} 
            style={styles.avatarImage}
          />
        </View>
        
        {/* Nút cộng đỏ tự chế - Không dùng icon để tránh lỗi dấu ? */}
        <TouchableOpacity style={styles.plusButtonCustom}>
          <View style={styles.redCircle}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.iconBox}>
        <FontAwesome name="heart" size={32} color="#fff" />
        <Text style={styles.text}>{sidebarData.likes}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconBox} onPress={onOpenComments}>
        <FontAwesome name="commenting" size={32} color="#fff" />
        <Text style={styles.text}>{sidebarData.comments}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconBox}>
        <MaterialCommunityIcons name="share" size={38} color="#fff" style={{ transform: [{ scaleX: -1 }] }} />
        <Text style={styles.text}>{sidebarData.shares}</Text>
      </TouchableOpacity>

      <View style={styles.musicDiscWrapper}>
        <View style={styles.blackDisc}><View style={styles.discCenter} /></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'flex-end', width: 65, paddingBottom: 10 },
  avatarContainer: { marginBottom: 25, alignItems: 'center' },
  avatarWrapper: {
    width: 50, height: 50, borderRadius: 25,
    borderWidth: 1.5, borderColor: '#fff', overflow: 'hidden', backgroundColor: '#333'
  },
  avatarImage: { width: '100%', height: '100%' },
  plusButtonCustom: {
    position: 'absolute', bottom: -10, backgroundColor: '#fff',
    width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center',
  },
  redCircle: {
    backgroundColor: '#FF2D55', width: 18, height: 18, borderRadius: 9,
    justifyContent: 'center', alignItems: 'center',
  },
  plusText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: -2 },
  iconBox: { alignItems: 'center', marginBottom: 18 },
  text: { color: '#fff', fontSize: 12, marginTop: 3, fontWeight: 'bold' },
  musicDiscWrapper: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#222', justifyContent: 'center', alignItems: 'center' },
  blackDisc: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#000', borderWidth: 6, borderColor: '#333' },
  discCenter: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#fff' }
});

export default RightSidebar;