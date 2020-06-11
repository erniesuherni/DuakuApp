import React, { PureComponent } from 'react';
import { View, Text, Button, Image } from 'react-native';
//import styles for component
import styles from './styles';

class Home extends PureComponent {
    //Have  navigationOptions in a form of a static method to have access to navigation prop.
    static navigationOptions = ({navigation}) => ({
        headerRight: (
            <Button 
                color="#000"
                title="Go to Dua"
                onPress={() => navigation.navigate('DuaList')}
            />
        )
    })
    render() {
        return (
            <View style={styles.homeDiv}>
                
                <Text style={styles.header}>Welcome to Daily Dua App</Text>
            </View>
        )
    }
}



//Export the statelesss component as a default export 
export default Home;