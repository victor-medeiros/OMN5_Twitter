import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome '

import { View, KeyboardAvoidingView, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native';

export default class Login extends Component {
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.content} >
                <Icon sizw={24} color="#4BB0EE" name="twitter" />
                <TextInput 
                    style={styles.input}
                    placeholder="Digite o nome de usuário"
                    //value={}
                    returnKeyType="send"
                />

                <TouchableOpacity onPress={() => {}} style={styles.button}>
                  <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
  
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 30
    },
  
    input: {
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 5,
      height: 44,
      paddingHorizontal: 15,
      alignSelf: "stretch",
      marginTop: 30
    },
  
    button: {
      height: 44,
      alignSelf: "stretch",
      marginTop: 10,
      backgroundColor: "#4BB0EE",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center"
    },
  
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
    }
  });
  