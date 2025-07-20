import { router, useRootNavigationState } from 'expo-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from 'firebase/auth';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, } from 'react-native';
import { auth } from '../../FirebaseConfig';
const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navState = useRootNavigationState();

  if (!navState?.key) return null; // Wait until navigation is ready
  
  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace('/(tabs)');
      
    }
    catch (error: any) {
      console.log(error); alert('Sign in failed: ' + error.message);
    }
  };

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace('/(tabs)');
      
    }
    catch (error: any) {
      console.log(error); alert('Sign up failed: ' + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.textInput} placeholder="email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.textInput} placeholder="password" value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.text}>Make Account</Text>
      </TouchableOpacity>
    </SafeAreaView>);
};
export default Index;
const styles = StyleSheet.create(
  {
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAFAFA', },
    title: { fontSize: 28, fontWeight: '800', marginBottom: 40, color: '#1A237E', },
    textInput: {
      height: 50,
      width: '90%',
      backgroundColor: '#FFFFFF',
      borderColor: '#E8EAF6',
      borderWidth: 2,
      borderRadius: 15,
      marginVertical: 15,
      paddingHorizontal: 25,
      fontSize: 16,
      color: '#3C4858',
    },
    button: {
      width: '90%',
      marginVertical: 15,
      backgroundColor: '#5C6BC0',
      padding: 20,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },
  });
