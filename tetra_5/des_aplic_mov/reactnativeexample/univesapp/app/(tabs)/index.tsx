import {View,Button, Image,Text, StyleSheet, Alert } from 'react-native';
import logo from '../../assets/images/react-logo.png'

export default function HomeScreen() {

  const handlePress =()=>{
    Alert.alert("!Boton presionado")
  }
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={logo}
      />
      <Text style={styles.text}>WELCOME TO UNIVES APP EXAMPLE</Text>
      <Button title="Click" onPress={handlePress} />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'white'

  },
  text:{
    color:'black',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
  },
  image:{
    width: 50,
    height: 50,
    
  }
 
});
