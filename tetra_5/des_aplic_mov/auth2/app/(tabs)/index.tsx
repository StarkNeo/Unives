import { getAuth, signOut } from '@firebase/auth';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('Signed out');
        router.replace('/(auth)');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bienvenido a UnivesApp 👋</Text>
      <Text style={styles.subheader}>
        Explora esta aplicacion!.
      </Text>
      <TouchableOpacity onPress={() => router.push('/(tabs)/tasks')}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tareas</Text>
          <Text style={styles.cardText}>Administra tus tareas en esta seccion</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subheader: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#222',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#5C6BC0',
    shadowColor: '#5C6BC0',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
