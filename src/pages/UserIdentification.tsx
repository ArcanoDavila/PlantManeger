import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";


export function UserIdentification(){
    const [isFocused,setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation();

    function handleSubmit(){
        navigation.navigate('Confirmation');
    }
    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }
    function handleInputFocus(){
        setIsFocused(true);
    }
    function handleInputChange(value: string){
        setIsFilled(!!value)
        setName(value);
    }
    return (
        <SafeAreaView style={styles.conatiner}>
            <KeyboardAvoidingView style={styles.conatiner}
            behavior = {Platform.OS == 'ios' ? 'padding' : "height"}
            >
            <View style={styles.content}>
                <View style={styles.form}>
                    
                    <Text style={styles.emoji}>
                        {isFilled ? '😁' : '😊'}
                        </Text>

                    <Text style={styles.title}> Como podemos {'\n'} chamar voce?</Text>
                    
                    <TextInput 
                    style={[
                        styles.input,
                        (isFocused || isFilled) && {borderColor: colors.green}
                    ]}
                    placeholder = "Digite seu nome"
                    onBlur = {handleInputBlur}
                    onFocus = {handleInputFocus}
                    onChangeText = {handleInputChange}
                    ></TextInput>
                    
                    <View style={styles.footer}>
                    
                    <Button
                    title='Começar'
                    onPress = {handleSubmit}
                    ></Button>
                    
                    </View>
                </View>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        width: '100%',
        alignItems:'center',
        justifyContent: 'space-around'
    },
    content:{
        flex:1,
        width: '100%'
    },
    footer:{
        width:"100%",
        marginTop:40
    },
    form:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:54,
        alignItems:'center'
    },
    emoji:{
        fontSize:44
    },
    input:{
        borderBottomWidth:1,
        borderColor: '#222',
        width: '100%',
        fontSize:18,
        marginTop:50,
        padding:10,
        textAlign:'center'
    },
    title:{
        fontFamily:fonts.heading,
        fontSize:24,
        textAlign:'center',
        marginTop:20
    }
})