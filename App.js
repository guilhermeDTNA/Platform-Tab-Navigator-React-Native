import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Platform } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

class Tela1 extends Component{

  static navigationOptions = {
    tabBarLabel:'Tela 1',
    tabBarIcon:() => (
      <Image source={require('./assets/images/icone1.jpeg')} style={styles.icon} />
      )
  }

  render(){
    return (
      <View style={styles.container}>
      <Text>Esta é a tela 1</Text>
      <Text></Text>
      <Text style={styles.texto}>Meu sistema operacional é: {Platform.OS}, e minha versão é: {Platform.Version}</Text>
      </View>
      );
  }
}

class Tela2 extends Component {
  static navigationOptions = {
    tabBarIcon:() => (
      <Image source={require('./assets/images/icone2.png')} style={styles.icon} />
      )
  }
  render(){
    return(
      <View style={styles.container}>
      <Text>Esta é a tela 2</Text>
      <Text></Text>
      <Button title="Ir para a tela 3 e mostrar nome" onPress={()=>this.props.navigation.navigate('Tela3', {nome:'Guilherme', idade:22})} />
      </View>
      )
  }
}

class Tela3 extends Component {
  static navigationOptions = {
    tabBarLabel: 'Tela3',
    tabBarVisible: true, //retira o tabbar de uma tela
    tabBarIcon:() => (
      <Image source={require('./assets/images/icone2.png')} style={styles.icon} />
      )
  }
  render(){
    return(
      <View style={styles.container}>
      <Text>Esta é a tela 3</Text>
      <Text></Text>
      <Text>Nome: {this.props.navigation.getParam('nome', 'Ninguém')} </Text>
      <Text>Idade: {this.props.navigation.getParam('idade', 0)} </Text> 


      <Button title="Voltar" onPress={()=>this.props.navigation.goBack()} />
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width:26,
    height:26,
    borderRadius: 50
  },

  texto:Platform.select({
    ios:{
      fontSize:16,
      color:'#0000FF'
    },

    android:{
      fontSize:20,
      color:'#00FF00'
    }
  })
});


const Navegador = createMaterialTopTabNavigator({
  Tela1:{
    screen:Tela1
  },
  Tela2:{
    screen:Tela2
  },
  Tela3:{
    screen:Tela3
  }
},{
  tabBarPosition: 'bottom',
  animationEnabled: true, //Animação na troca de telas
  initialRouteName: 'Tela2', //Tela inicial
  order:['Tela2', 'Tela3', 'Tela1'], //Ordem de apresentação das telas
  tabBarOptions:{
    showIcon:true,
    showLabel: true, //Mostrar label
    activeTintColor: 'red', //Cor da label atual
    inactiveTintColor: 'green', //Cor das labels não abertas,
    upperCaseLabel: true, //Só funciona para Android
    pressColor: 'grey', //Só funciona para Android - cor ao apertar o botão
    scrollEnabled: false, //Só funciona para Android - habilita scroll no menu
    tabStyle:{
      backgroundColor: 'yellow'
    },
    indicatorStyle:{

    },
    labelStyle:{
      fontSize:11
    },
    iconStyle:{

    }
  }
}
);

const AppContainer = createAppContainer(Navegador);

export default AppContainer;
