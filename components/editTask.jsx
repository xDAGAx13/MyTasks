import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function EditTask({ editIndex, editText, setEditText, setEditIndex, tasks, setTasks }) {
  if (editIndex === null) return null;

  const handleSave = () => {
    const updated = [...tasks];
    updated[editIndex].text = editText.trim();
    setTasks(updated);
    setEditIndex(null);
  };

  return (
    <View className="absolute inset-0 bg-black/50 justify-center items-center z-50">
      <View className="bg-white p-5 rounded-xl w-5/6 border-4 border-black">
        <Text className="text-xl font-semibold mb-2">Edit Task</Text>
        <TextInput
          value={editText}
          onChangeText={setEditText}
          className="border-2 border-gray-400 rounded-lg p-2 text-lg mb-4"
        />
        <View className="flex-row justify-end gap-4">
          <TouchableOpacity
            onPress={() => setEditIndex(null)}
            className="bg-gray-300 px-4 py-2 rounded-lg"
          >
            <Text className="text-black font-semibold">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSave}
            className="bg-blue-500 px-4 py-2 rounded-lg"
          >
            <Text className="text-white font-semibold">Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
