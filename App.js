
import React from 'react';
//first import createStackNavigator from react-navigation
//then import StackNavigator for creatign nested routes
import { createStackNavigator } from 'react-navigation';
//Import your screens 
import DuaList from './components/DuaList';
import Dua from './components/DuaList';
import Home from './components/Home';


//Define  routes using createStackNavigator, which will be a object full of options. 
const RootStack = createStackNavigator({
    //Define your screens.
    Home: { screen: Home },
    DuaList: { screen: DuaList },
    Dua: {screen: Dua }
  },
  {
    initialRouteName:  'Home'
  })


//Export default the stateless component 
const App = () => {
  return <RootStack />
}

export default App;