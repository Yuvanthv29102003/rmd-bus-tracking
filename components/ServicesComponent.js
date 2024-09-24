// ServicesComponent.js
import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ServicesComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require('../assets/logo.png')} // Assuming you have the logo image in assets
          style={styles.logo}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome Student,</Text>
          <Text style={styles.subtitle}>Plan your community efficiently</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.rateButton}>
          <Text style={[styles.buttonText, { color: '#000' }]}>Rate Service</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.feedbackButton}>
          <Text style={[styles.buttonText, { color: '#fff' }]}>Provide Feedback</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'flex-start', // Move logo and text to the left
    paddingHorizontal: 20, // Add padding for better left alignment
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    // New container to hold title and subtitle together
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666', // Lighter color for the subtitle
    marginTop: 5,  // Space between title and subtitle
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  rateButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  feedbackButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ServicesComponent;
