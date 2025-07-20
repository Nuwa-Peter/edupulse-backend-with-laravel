import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <View style={styles.sidebarHeader}>
          <Text style={styles.sidebarHeaderText}>EduPulse</Text>
        </View>
        <View style={styles.sidebarMenu}>
          <View style={styles.sidebarMenuItem}>
            <Feather name="home" size={20} color="white" />
            <Text style={styles.sidebarMenuItemText}>Dashboard</Text>
          </View>
          <View style={styles.sidebarMenuItem}>
            <Feather name="users" size={20} color="white" />
            <Text style={styles.sidebarMenuItemText}>Students</Text>
          </View>
          <View style={styles.sidebarMenuItem}>
            <Feather name="book-open" size={20} color="white" />
            <Text style={styles.sidebarMenuItemText}>Courses</Text>
          </View>
          <View style={styles.sidebarMenuItem}>
            <Feather name="file-text" size={20} color="white" />
            <Text style={styles.sidebarMenuItemText}>Reports</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Dashboard</Text>
          <View style={styles.headerActions}>
            <Feather name="bell" size={24} color="gray" />
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>SA</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Students</Text>
            <Text style={styles.cardValue}>1,234</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>New Admissions</Text>
            <Text style={styles.cardValue}>56</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Courses</Text>
            <Text style={styles.cardValue}>34</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
  },
  sidebar: {
    width: 250,
    backgroundColor: '#1F2937',
    padding: 16,
  },
  sidebarHeader: {
    marginBottom: 32,
  },
  sidebarHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  sidebarMenu: {},
  sidebarMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sidebarMenuItemText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 12,
  },
  mainContent: {
    flex: 1,
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4B5563',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    flex: 1,
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 8,
  },
});

export default Dashboard;
