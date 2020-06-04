import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'

import im from '../../assets/I01.png'
import styles from './styles'
import api from'../../service/api'


import {useNavigation} from "@react-navigation/native";





export default function Home() {

  const navegation = useNavigation()
  const [product, setProducts]= useState([])

async function loadProduct(){
  const res= await api.get('/products')
  setProducts(res.data)

}

useEffect(()=>{

    loadProduct()
},[])



  function navegateToDetails(product){

    navegation.navigate('Details', {product})


  }
const formatValue = value => Intl.NumberFormat('pt-Br',{style:'currency', currency:"Brl" }).format(value)






  return (
    <View style={styles.container}>
      <Text style={styles.title}> Home </Text>
      <FlatList
        data={product}
        keyExtractor={product => String (product.id_product)}
        showsVerticalScrollIndicator={false}
        style={styles.productList}
        renderItem={({item: product}) => 
        (<View style={styles.product}>
          <Image style={styles.productImage}source={{uri:product.image}} />
        <Text style= {styles.productName}>{product.name_product}</Text>
        <Text style={styles.productPrice}>{formatValue(product.productPrice)}</Text>
          <TouchableOpacity style={styles.detailsButton} onPress={() => navegateToDetails(product)}>
            <Text style={styles.detailsButtonText}>Detalhes</Text>
            <Feather name="arrow-right" size={18} color="#000" />

          </TouchableOpacity>
        </View>



        )}

      />
    </View>
  )
}
