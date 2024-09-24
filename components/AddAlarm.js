import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AddAlarm = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add New Alarm</Text>

          {/* Input fields for alarm details */}
          <TextInput style={styles.input} placeholder="Stop Name" />
          <TextInput style={styles.input} placeholder="Frequency" />

          {/* Add button */}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(false)} // Close modal after adding
          >
            <Text style={styles.buttonText}>Add Alarm</Text>
          </TouchableOpacity>

          {/* Close button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <FontAwesome name="times" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Modal background with transparency
  },
  modalContainer: {
    width: 320, // Slightly wider for better input
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12, // Slightly more rounded for a cleaner look
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22, // Increased font size
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Darker text color
  },
  input: {
    width: '100%',
    padding: 12, // Slightly more padding
    borderColor: '#ddd', // Lighter border color
    borderWidth: 1,
    borderRadius: 8, // Rounded corners for inputs
    marginBottom: 12, // Spacing between inputs
  },
  addButton: {
    backgroundColor: '#00A859', // Match color to your image
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000', // Shadow for button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevation for Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold', // Bold text for better visibility
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default AddAlarm;
