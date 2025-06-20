import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Priority from "./priority";
import EditTask from "./editTask";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState("");
  const [showTasks, setShowTasks] = useState(false);
  const [priority, setPriority] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem("tasks");
        if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
        }
      } catch (e) {
        console.error("Failed to load tasks: ", e);
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
      } catch (e) {
        console.error("Failed to save tasks: ", e);
      }
    };
    saveTasks();
  }, [tasks]);

  const scheduleNotification = async (taskText) => {
    const triggerTime = new Date(Date.now() + 10 * 1000);
    const id = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Task Reminder",
        body: `Time to complete: ${taskText}`,
      },
      trigger: triggerTime,
    });

    return id;
  };

  const handleAddTask = async () => {
    if (addTask.trim() === "") {
      alert("Cannot add empty task");
      return;
    } else if (priority === "") {
      alert("Please select the priority");
      return;
    }

    const notificationId = await scheduleNotification(addTask.trim());
    const newTask = {
      text: addTask.trim(),
      checked: false,
      priority: priority,
      notificationId,
    };
    setTasks([...tasks, newTask]);
    setAddTask("");
    setPriority("");
  };

  const handleUpdateCheckedTasks = async (index) => {
    const updatedTasks = [...tasks];
    let state = updatedTasks[index].checked;
    state ? (state = false) : (state = true);
    updatedTasks[index].checked = state;

    const currentTask = updatedTasks[index];

    if (currentTask.checked && currentTask.notificationId) {
      try {
        await Notifications.cancelScheduledNotificationAsync(
          currentTask.notificationId
        );
        currentTask.notificationId = null;
      } catch (e) {
        console.error("Failed to cancel notification: ", e);
      }
    }
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
  setEditIndex(index);
  setEditText(tasks[index].text);
};


  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <View >
    <ScrollView className="min-h-screen">
      {/* Current Tasks Title */}
      <View className=" pt-16 flex flex-col">
        <Text className="text-white ml-10 text-4xl font-semibold">
          Add a Task
        </Text>
        <View className="flex-col gap-2 mt-2 mx-4 h-auto">
          <View className="flex-row items-center gap-2">
            <TextInput
              value={addTask}
              onChangeText={setAddTask}
              className="bg-white px-4 py-2 text-xl rounded-2xl flex-1 placeholder:text-gray-400 h-16 items-center justify-center border-4 border-black"
              placeholder="Add a Task"
            />
            <TouchableOpacity onPress={handleAddTask} className="text-white">
              <FontAwesome6 name="plus" size={30} color="white" />
            </TouchableOpacity>
          </View>
          {addTask && (
            <Priority priority={priority} setPriority={setPriority} />
          )}
        </View>

        <TouchableOpacity
          onPress={() =>
            showTasks === false ? setShowTasks(true) : setShowTasks(false)
          }
        >
          <Text className="text-gray-300 text-xl mt-3 mx-5">
            {showTasks === false ? "Show Tasks" : "Hide Tasks"}
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-3 mx-4">
        {showTasks &&
          tasks.map((task, index) => (
            <View
              key={index}
              className="flex-row mb-2 p-3 bg-white rounded-xl justify-between h-auto items-center border-4 border-gray-800"
            >
              <View className="flex-1 pr-2">
                <Text
                  className={`text-black text-xl font-semibold flex-wrap ${
                    task.checked && "line-through decoration-4"
                  }`}
                >
                  {task.text}
                </Text>
                <Text className="">
                  Priority:{" "}
                  <FontAwesome
                    name="circle"
                    size={16}
                    color={
                      task.priority === "High"
                        ? "red"
                        : task.priority === "Medium"
                        ? "orange"
                        : "green"
                    }
                  />
                </Text>
              </View>

              <View className="flex-row gap-2 ">
                <TouchableOpacity
                  onPress={() => handleUpdateCheckedTasks(index)}
                >
                  <Ionicons
                    name={task.checked ? "checkbox" : "checkbox-outline"}
                    color={task.checked ? "green" : "black"}
                    size={30}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleEditTask(index)}>
                  <Ionicons name="pencil" color="black" size={26} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                  <Ionicons name="trash-outline" color="black" size={30} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </View>
      
    </ScrollView>
    {editIndex!==null&&<EditTask
  editIndex={editIndex}
  editText={editText}
  setEditText={setEditText}
  setEditIndex={setEditIndex}
  tasks={tasks}
  setTasks={setTasks}
/>
}
    </View>
    
    
    
  );
}
