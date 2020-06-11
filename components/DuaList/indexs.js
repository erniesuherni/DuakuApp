//import PoreCompoent for preventing unnecesary updates. 
import React, { PureComponent } from 'react';
//import component
import DuaCard from '../DuaCard';
//import  components from react-native 
import {  FlatList, ActivityIndicator } from 'react-native';
//import styles for  component
import styles from './styles';
import data from './data.json';




export default class DuaList extends PureComponent {
    //Define  state for  component. 
    state = {
        //Assing a array to dua state
        duaList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true
    }
    //Define  componentDidMount lifecycle hook that will retrieve data.
    //Also have the async keyword to indicate that it is asynchronous.

    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            fetch('./data.json').then(Response => {
                console.log(Response);
                return Response.json();
            }).then(data => {
                console.log(data);
            })
        } catch (err) {
            console.log("Error fetching data", err);
        }
    }
  
    render() {
        //Destruct Dualist and Loading from state.
        const { duaList, loading } = this.state;
        const { navigation } = this.props;
        if(!loading) {
            return <FlatList 
                    data={duaList}
                    renderItem={(data) => <DuaCard {...data.item} navigation={ navigation} />} 
                    keyExtractor={(item) => item.name} 
                    />
        } else {
            return <ActivityIndicator />
        }
    }
}