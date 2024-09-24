import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Sample notifications data
const notificationsData = [
  {
    id: '1',
    title: 'Bus 211 Delayed',
    description: 'Bus 211 is delayed by 10 minutes due to traffic.',
    time: '2 mins ago',
  },
  {
    id: '2',
    title: 'Route 5 Change',
    description: 'Route 5 has been modified, skipping the "Senthil Nagar" stop.',
    time: '10 mins ago',
  },
  {
    id: '3',
    title: 'Bus 220 Arrival',
    description: 'Bus 220 has arrived at "Kolathur".',
    time: '15 mins ago',
  },
  {
    id: '4',
    title: 'Bus 301 Canceled',
    description: 'Bus 301 has been canceled due to a technical issue.',
    time: '30 mins ago',
  },
];

// Component for individual notification items
const NotificationItem = ({ title, description, time }) => (
  <View style={styles.notificationItem}>
    <Text style={styles.notificationTitle}>{title}</Text>
    <Text style={styles.notificationDescription}>{description}</Text>
    <Text style={styles.notificationTime}>{time}</Text>
  </View>
);

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>

      {/* List of notifications */}
      <FlatList
        data={notificationsData}
        renderItem={({ item }) => (
          <NotificationItem
            title={item.title}
            description={item.description}
            time={item.time}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  notificationItem: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationDescription: {
    fontSize: 16,
    marginTop: 5,
  },
  notificationTime: {
    fontSize: 14,
    color: '#757575',
    marginTop: 10,
  },
});

export default NotificationsScreen;
