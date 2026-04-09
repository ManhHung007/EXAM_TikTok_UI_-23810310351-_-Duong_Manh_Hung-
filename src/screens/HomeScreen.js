import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import RightSidebar from '../components/RightSidebar';
import CommentScreen from './CommentScreen';

const HomeScreen = ({ backgroundImage, avatarImage }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.background} resizeMode="cover" />

      <View style={styles.bottomOverlay}>
        <Text style={styles.userText}>@craig_love</Text>
        <Text style={styles.descText}>The most satisfying job #fyp #roadmarking</Text>
      </View>

      <View style={styles.sidebar}>
        <RightSidebar 
          data={{ likes: '328.7K', comments: '579', shares: '51k', avatar: avatarImage }} 
          onOpenComments={() => setShowComments(true)} 
        />
      </View>

      <Modal animationType="slide" transparent={true} visible={showComments}>
        {/* Lớp này giúp căn giữa toàn bộ cấu trúc Modal vào khung máy */}
        <View style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={() => setShowComments(false)}>
              {/* Nền tối bây giờ sẽ bị giới hạn bởi modalContainer */}
              <View style={styles.dimBg} />
            </TouchableWithoutFeedback>
            
            <View style={styles.commentSheet}>
               <CommentScreen onClose={() => setShowComments(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { ...StyleSheet.absoluteFillObject },
  bottomOverlay: { position: 'absolute', bottom: 20, left: 15, right: 80 },
  userText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  descText: { color: '#fff', fontSize: 14, marginTop: 5 },
  sidebar: { position: 'absolute', bottom: 80, right: 10 },

  // Lớp bọc ngoài cùng của Modal để căn giữa trên nền Web
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Khung chứa nội dung Modal - KHÓA CỨNG theo kích thước điện thoại
  modalContainer: { 
    width: 414, // Khớp với chiều rộng khung hình giả lập của bạn
    height: '100%',
    justifyContent: 'flex-end',
    overflow: 'hidden', // Quan trọng: Giữ nền tối không tràn ra ngoài
  },

  dimBg: { 
    position: 'absolute', 
    width: '100%', 
    height: '100%', 
    backgroundColor: 'rgba(0,0,0,0.4)' 
  },

  commentSheet: { 
    width: '100%', // Bây giờ 100% của 414px
    height: '70%', 
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  }
});

export default HomeScreen;