import { Platform, StyleSheet } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Libros favoritos</ThemedText>
      </ThemedView>
      <ThemedText>Algunos de mis libros favoritos no relacionados con Computacion.</ThemedText>
      <Collapsible title="El Conde de Montecristo">
        <ThemedText>
          Author: Alejandro Dumas
        </ThemedText>
        
      </Collapsible>
      <Collapsible title="El Judio Errante">
        <ThemedText>
          Author: Eugenio Sue
        </ThemedText>
      </Collapsible>
      
      <Collapsible title="El Psicoanalista">
        <ThemedText>
          Author: John Katzenbach
          
        </ThemedText>
        
      </Collapsible>
      <Collapsible title="El Retrato de Dorian Gray">
        <ThemedText>
          Author: Oscar Wilde
          
        </ThemedText>
        
      </Collapsible>
      <Collapsible title="Muchos Otros">
        <ThemedText>
          etc., etc.,
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
