import { getAuth } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from '../../FirebaseConfig';

export default function TaskScreen() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<any>([]);
  const auth = getAuth();
  const user = auth.currentUser;
  const todosCollection = collection(db, 'todos');

  useEffect(() => {
    fetchTodos();
  }, [user]);

  const fetchTodos = async () => {
    if (user) {
      const q = query(todosCollection, where("userId", "==", user.uid));
      const data = await getDocs(q);
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } else {
      console.log("No user logged in");
    }
  };

  const addTodo = async () => {
    if (user) {
      await addDoc(todosCollection, { task, completed: false, userId: user.uid });
      setTask('');
      fetchTodos();
    } else {
      console.log("No user logged in");
    }
  };

  const updateTodo = async (id: string, completed: any) => {
    const todoDoc = doc(db, 'todos', id);
    await updateDoc(todoDoc, { completed: !completed });
    fetchTodos();
  };

  const deleteTodo = async (id: string) => {
    const todoDoc = doc(db, 'todos', id);
    await deleteDoc(todoDoc);
    fetchTodos();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Lista de Tareas</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Ir al cine.."
            value={task}
            onChangeText={(text) => setTask(text)}
            style={styles.input}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTodo}>
            <Text style={styles.buttonText}>Agregar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.todoContainer}>
              <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none', flex: 1 }}>{item.task}</Text>
              <TouchableOpacity style={styles.button} onPress={() => updateTodo(item.id, item.completed)}>
                <Text style={styles.buttonText}>{item.completed ? "Reiniciar" : "Completada"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => deleteTodo(item.id)}>
                <Text style={styles.buttonText}>Borrar</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10, // Adjust spacing as needed
    color: '#333', // Choose a color that fits your app theme
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    flex: 1, // Adjusted to take available space
    marginRight: 10, // Add margin to separate input and button
  },
  addButton: {
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA726', // Use a distinct color for the add button
    shadowColor: '#FFA726',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  button: {
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5C6BC0',
    shadowColor: '#5C6BC0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    marginLeft: 10,
  },
});