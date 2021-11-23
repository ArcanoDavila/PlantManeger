import React from "react";
import {Text, 
        Dimensions,
        StyleSheet,
        SafeAreaView,Image,
        TouchableOpacity,
        Touchable, 
        View
    } from "react-native";
import wateringImg from '../assets/watering.png'
import { Entypo } from '@expo/vector-icons'
import fonts from "../styles/fonts";
import { useNavigation } from "@react-navigation/core";


export function Welcome(){
    const navigation = useNavigation()

    function handleStar(){
        navigation.navigate('UserIdentification')
    }
    return(
    <SafeAreaView style={styles.cotainer}>
        <View style={styles.wrapper}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas de{'\n'}
                forma fácil
            </Text>
            <Image source={wateringImg} style={styles.image} resizeMode='contain' />
            <Text style={styles.subtitle}>
                Nao Esqueça de regar suas plantinhas
                Nos cuidamos de lembrar voce sempre que precisar
            </Text>

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
                onPress={handleStar}
                >
                    <Entypo name='chevron-right' style={styles.buttonIcon}/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cotainer:{
        flex:1,
    },
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:20
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:38,
        fontFamily: fonts.heading
    },
    subtitle:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:20,
        fontFamily: fonts.text
    },
    button:{
        backgroundColor: '#222',
        justifyContent:"center",
        alignItems:'center',
        borderRadius:16,
        marginBottom:25,
        width:56,
        height:56
    },
    buttonIcon:{
        color:'#fff',
        fontSize:28
    },
    image:{
        height: Dimensions.get('window').width * 0.7
    }
})