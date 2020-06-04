import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from "@expo/vector-icons";
import {useNavigation , useRoute} from "@react-navigation/native"
import * as MailComposer from "expo-mail-composer"





import im from '../../assets/I01.png'
import styles from './styles'



export default function Details() {

  const navigation = useNavigation()
  const route = useRoute()

  const product = route.params.product
  const value = Intl.NumberFormat('pt-Br',{style:'currency', currency:"Brl" }).format(product.price)


  const message = `Olá gostaria de comprar esse Produto no Valor De ${value}`


  function navigateToBack(){
    navigation.goBack()


  }
  function sendEmail(){
    MailComposer.composeAsync({
      subject:`Compra Do Produto:${product.name_product}`,
      recipients:['hugo.lakers.alves@gmail.com'],
      body: message

    })
  }
  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=+5511985927206&text=${message}`)
  }
  return (

    <View style={styles.container}>
      <Feather onPress={navigateToBack} style={styles.icon} name="arrow-left" size={35} color="#0A1034" />
      <Text style={styles.nameProduct}>prduct.name_product</Text>
      <View style={styles.ViewImageProduct}>
        <Image source={{uri: product.image}} style={styles.image}/>
        <Text style={styles.price}>{value}</Text>

      </View>
      <TouchableOpacity onPress={sendEmail} style={styles.buttonEmail}>
        <Text style={styles.buttonEmailText}>Enviar E-mai</Text></TouchableOpacity>
      <TouchableOpacity onPress={sendWhatsapp} style={styles.buttonWhats}>
        <Text style={styles.buttonWhatsText}>Pedir Whats</Text></TouchableOpacity>
    </View>

  )
}

