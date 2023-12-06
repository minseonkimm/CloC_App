import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen'; // Home ȭ�� ������Ʈ�� import
import CalendarScreen from './CalendarScreen'; // Calendar ȭ�� ������Ʈ�� import
import AddScreen from './AddScreen'; // Add ȭ�� ������Ʈ�� import
import ClosetScreen from './ClosetScreen'; // Closet ȭ�� ������Ʈ�� import
import ProfileScreen from './ProfileScreen'; // Profile ȭ�� ������Ʈ�� import

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Calendar') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else if (route.name === 'Add') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    } else if (route.name === 'Closet') {
                        iconName = focused ? 'shirt' : 'shirt-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // ������ �̸��� ���� Ionicons �������� ǥ��
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabOptions={{
                activeTintColor: 'black', // ���õ� ���� ����
                inactiveTintColor: 'gray', // ���õ��� ���� ���� ����
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
            <Tab.Screen name="Closet" component={ClosetScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;