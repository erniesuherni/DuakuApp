import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native';
import { Card } from 'react-native-paper';




export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: "Dua Before Sleep", color: "#FF4500", image: "https://img.icons8.com/color/70/000000/name.png" },
        { id: 2, title: "Dua Before eat", color: "#FF4500", image: "https://img.icons8.com/color/70/000000/name.png" },
        { id: 3, title: "Dua Before going out", color: "#FF4500", image: "https://img.icons8.com/color/70/000000/name.png" },
        { id: 4, title: "Dua after wake up", color: "#FF4500", image: "https://img.icons8.com/color/70/000000/name.png" },

      ]
    };
  }


  render() {
    return (
      <View >
        <FlatList

          data={this.state.data}

          renderItem={({ item }) => 
            <Card>
              <View>
                <Text>Dua Before Sleep</Text>
                <Text>{item.title}</Text>
              </View>
            </Card>
          }
          
        />
      </View>
    );
  }
}
