import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/me.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hola!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Quien soy?</ThemedText>
        <ThemedText>
          Tengo 44 años, soy casado y tengo una hija adolescente, actualmente vivo cerca de Austin Texas, aunque soy originario de Monterrey
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Mis pasatiempos</ThemedText>
        <ThemedText>
          Me gusta el cine y el futbol aunque el futbol ya no tanto como antes, solo cuando juega mi equipo los Rayados de Monterrey,
          me gusta ver perder a los Tigres, suelo leer diferentes temas aunque en los ultimos años mis lecturas se han enfocado mas en temas relacionados
          con las ciencias computacionales en general, y absorbe la mayor parte de mi tiempo digamos que un 80%.
        </ThemedText>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
