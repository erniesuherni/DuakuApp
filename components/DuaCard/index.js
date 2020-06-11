//import React form react
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';


//Define  stateless componetns, and destrcuts props from function arguments
const DuaCard = ({name, navigation}) => {
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => navigation.navigate('Pokemon', {name})}>
            <View  style={styles.listItemContainer}>
                <Text style={styles.duaItemHeader}>{name}</Text>
                
            </View>
        </TouchableOpacity>
    )
}


export default DuaCard;