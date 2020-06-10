import React, { PureComponent } from 'react'; 
//import UI from react-native
import { View, Text, Image } from 'react-native';
//import styles for component.
import styles from './styles';


//Define your class component
export default class Dua extends PureComponent {
    c
    render() {
        //Destruct your navigation props (NOT SETUP YET!)
        const { navigation } = this.props;
        return (
            <View>
               
            {/*Use navigation.getParam to get the params of navigation prefered since you can set a default value
            therefore not returning undefined and not crashing your app. */}
                <Text style={styles.title}>{navigation.getParam('title', 'Dua title')}</Text>
            </View>
        );
    }
    
}