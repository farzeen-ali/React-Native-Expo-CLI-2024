import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl text-blue-500">Home</Text>
      <Link href='/about' asChild>
      <Pressable className="bg-blue-600 p-4 rounded-md">
        <Text className="text-white text-center">Go To About</Text>
      </Pressable>
      </Link>
    </View>
  );
};

export default Home;