import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const About = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl text-red-500">About</Text>
      <Link href='/' asChild>
      <Pressable className="bg-red-600 p-4 rounded-md">
        <Text className="text-white text-center">Go To Home</Text>
      </Pressable>
      </Link>
    </View>
  );
};

export default About;