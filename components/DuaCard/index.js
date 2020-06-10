//import React form react
import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
//import styles fro your PokeCard component.
import styles from './styles';


//Define your stateless componetns, and destrcuts props from function arguments
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