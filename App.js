import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
const TaskListScreen = () => {
  const [task, setTasks] = useState([
    {id: 1, task: 'To check email', completed: true},
    {id: 2, task: 'UI task page', completed: false},
    {id: 3, task: 'Learn javaScript basic', completed: false},
    {id: 4, task: 'Learn HTML Advance', completed: false},
    {id: 5, task: 'Medical APP UI', completed: false},
    {id: 6, task: 'Learn Java', completed: false}
  ]);
  const[newTask, setNewTask] = useState('');
  const[editTask, setEditTask] = useState(null);
  const[isModalVisible, setModakVisible] = useState(false);

  const tonggleTaskCompletion = (taskId) =>{
    setTasks(task.map(task => task.id === taskId ? {...task, completed: !task.completed}: task));
  };
  const handelAddTask = () => {
    if (newTask.trim() === '') return;
    setTask([...task, {id: Date.now(), task: newTask, completed: false}]);
    setNewTask('');
    setModakVisible(false);
  };
  const handelEditTask = (taskId) => {
    const taskToEdit = task.find(task => task.id === taskId);
    setEditTask(taskToEdit);
    setNewTask(taskToEdit.task);
    setModakVisible(true);
  };
  const handleDeleteTask = (taskId) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => setTasks(tasks.filter(task => task.id !== taskId)) }
      ]
    );
  };
  const renderTask = ({item}) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
        <Text style={item.completed ? styles.taskCompleted : styles.task}>
          {item.completed ? '✓ ' : ''}{item.task}
        </Text>
      </TouchableOpacity>
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => handleEditTask(item.id)}>
          <Text style={styles.editText}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
          <Text style={styles.deleteText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const TaskManagerApp = () => {
  return (
    <View style={styles.container}>

      <View style={styles.imagePlaceholder}>

        <Image 
          style={styles.image}
          source={{ uri: 'https://your-image-url.com/logo.png' }} 
        />
      </View>
      
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      
      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
        />
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  imagePlaceholder: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    color: 'purple',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: '#00CFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TaskManagerApp;