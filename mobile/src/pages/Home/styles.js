import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'


export default StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:Constants.statusBarHeight,
        paddingHorizontal: 25,
        
    },

    title: {
        fontSize:30,
        color: '#13131A',
        marginTop: 48,
        marginBottom: 16


    },
    productList:{
        marginTop:30

    },
    product:{
        padding: 25,
        borderRadius:4,
        backgroundColor: '#FFF',
        marginBottom: 15,
        alignItems: "center"

    },
    productImage:{
        width: 100,
        height:100
    },
    productName:{
        fontSize:20,
        color: '#41414D',
        fontWeight: 'bold'

    },
    productPrice:{
        fontSize: 13,
        fontWeight: 'bold',
        color:'#0001FC',
        marginTop:8,
        marginBottom:20



    },
    detailsButton:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
       width: 80 
       
    },
    detailsButtonText:{
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold'
        

    }
    
    
})