import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CatComponents from './src/components/CatComponents';//mandamos llamar o importar el componente

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Bienvendio a Tu aplicacion</Text>
      <CatComponents nombre="Garfiel" raza="Negro" foto="https://img2.freepng.es/20180313/xew/kisspng-black-cat-kitten-cartoon-cat-face-5aa786715afc35.3088561215209283693727.jpg"></CatComponents>
      <CatComponents nombre="Garfiel1" raza="albino1" foto="https://reactnative.dev/docs/assets/p_cat1.png"></CatComponents>  
      <CatComponents nombre="Garfiel2" raza="albino2"foto="https://reactnative.dev/docs/assets/p_cat2.png" ></CatComponents> 
      <CatComponents nombre="Garfiel3" raza="albino3"foto="https://reactnative.dev/docs/assets/p_cat1.png" ></CatComponents> 
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
