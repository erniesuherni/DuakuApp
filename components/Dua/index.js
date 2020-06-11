import React, { PureComponent } from 'react'; 
//import UI from react-native
import { View, Text, Image } from 'react-native';
//import styles for component.
import styles from './styles';


//Define  class component
class Dua extends PureComponent {
    static navigationOptions  = ({ navigation }) => ({
        title: `${navigation.getParam('title')} Info`
    })
    render() {
        //Destruct  navigation props (NOT SETUP YET!)
        const { navigation } = this.props;
        return (
            <View>
               
            {/*Use navigation.getParam to get the params of navigation prefered since you can set a default value
            therefore not returning undefined and not crashing  app. */}
                <Text style={styles.title}>{navigation.getParam('title')}</Text>
                <Text style={styles.title}>{navigation.getParam('desc')}</Text>
                <Text style={styles.title}>{navigation.getParam('pronuntiation')}</Text>
                <Text style={styles.title}>{navigation.getParam('translation')}</Text>
                <Text style={styles.title}>{navigation.getParam('source')}</Text>
            </View>
        );
    }
    
}
export default Dua;