//import PoreCompoent for preventing unnecesary updates. 
import React, { PureComponent } from 'react';
//import comopnents
import DuaCard from '../DuaCard';
//import your components from react-native 
import {  FlatList, ActivityIndicator } from 'react-native';
//import styles for your component
import styles from './styles';

export default class DuaList extends PureComponent {
    //Define  state for your component. 
    state = {
        //Assing a array to your pokeList state
        duaList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true
    }
    //Define  componentDidMount lifecycle hook that will retrieve data.
    //Also have the async keyword to indicate that it is asynchronous.

    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const duaApiCall = await fetch('./App.json');
            const dua = await duaApiCall.json();
            this.setState({ duaList: dua.results, loading: false });
        } catch (err) {
            console.log("Error fetching data-----------", err);
        }
    }
  
    render() {
        //Destruct pokeList and Loading from state.
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