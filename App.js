import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //list of dua
      data: [
        {id:1,  title: "When waking up",      color:"#4682B4"},
        {id:2,  title: "When wearing new clothes",     color:"#87CEEB"},
        {id:3,  title: "When leaving home",     color:"#4682B4"} ,
        {id:4,  title: "When beginning a meal",   color:"#87CEEB"} ,
        {id:5,  title: "Upon entering home",  color:"#4682B4"} ,
        {id:6,  title: "Before entering toilet",   color:"#87CEEB"} ,
        {id:7,  title: "After leaving toilet",   color:"#4682B4"} ,
        {id:8,  title: "Upon entering home",    color:"#87CEEB"} ,
        {id:9,  title: "Before sleep", color:"#4682B4"} ,
        {id:10, title: "Upon sneezing",     color:"#87CEEB"}
      ]
    };
  }

 

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
                
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },

  /******** card **************/
  card:{
    width: width,
    height:150,
    flexDirection:'row',
    padding:20,

    justifyContent: 'center', 
    alignItems: 'center' 
  },
  
  title:{
    fontSize:28,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold',
    marginLeft:40
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     
 