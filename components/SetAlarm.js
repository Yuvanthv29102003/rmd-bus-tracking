import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AddAlarm from './AddAlarm'; // Import the new AddAlarm component

const SetAlarm = ({ navigation }) => {
  const [reminders, setReminders] = useState([
    { id: 1, name: 'Padi', frequency: 'Once', enabled: false },
    { id: 2, name: 'Senthil Nagar', frequency: 'Mon to Fri', enabled: false },
    { id: 3, name: 'Kolathur', frequency: 'Once', enabled: false },
  ]);

  const [modalVisible, setModalVisible] = useState(false); // State to control the AddAlarm modal visibility

  // Function to toggle switch
  const toggleSwitch = (id) => {
    setReminders((prevReminders) =>
      prevReminders.map((reminder) =>
        reminder.id === id ? { ...reminder, enabled: !reminder.enabled } : reminder
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Set a reminder to alert you before the bus reaches your stop</Text>
        {reminders.map((reminder) => (
          <View key={reminder.id} style={styles.reminderBox}>
            <View style={styles.reminderContent}>
              <Text style={styles.reminderName}>{reminder.name}</Text>
              <Text style={styles.reminderFrequency}>{reminder.frequency}</Text>
            </View>
            <Switch
              value={reminder.enabled}
              onValueChange={() => toggleSwitch(reminder.id)}
              thumbColor={reminder.enabled ? '#4CAF50' : '#ddd'}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
            />
          </View>
        ))}
      </ScrollView>

      {/* Add alarm button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)} // Open the AddAlarm modal
      >
        <FontAwesome name="plus" size={30} color="black" />
      </TouchableOpacity>

      {/* AddAlarm component (popup modal) */}
      <AddAlarm modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60, // Adjusted to give space from the top
  },
  header: {
    position: 'absolute', // Keeps the header fixed at the top
    top: 60,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1, // Ensures the header stays on top
  },
  backButton: {
    marginRight: 15, // Space between button and title
  },
  scrollContainer: {
    marginTop: 120, // Moves the content down
    paddingBottom: 90, // Space for the addButton
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reminderBox: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Align items to the start of the flex container
    marginBottom: 15,
  },
  reminderContent: {
    flexDirection: 'column', // Stack name and frequency vertically
  },
  reminderName: {
    color: '#fff',
    fontSize: 18,
  },
  reminderFrequency: {
    color: '#aaa',
    fontSize: 14,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0',
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 80, // Increased space from the bottom
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default SetAlarm;
