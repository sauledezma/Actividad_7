//import React from 'react' -- este es para hacer aplicaciones web 
import {Text,Image, } from 'react-native'

export const CatComponents = (props) => {
  return (
    <view>
       <Text>Hola soy un gato mi nombre es {props.nombre} y mi raza {props.raza}  </Text> 
     <Image
     source={{uri: props.foto}}
     style={{width: 200, height: 200}}
     ></Image>
     
    </view>
    
    
  )
}

export default CatComponents
