import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Alert,
    TouchableOpacity
} from 'react-native';


import {Shadow} from 'react-native-shadow-2';

export default function CategoryListItem(props) {
    return (
        <TouchableOpacity delayPressIn={50} activeOpacity={0.5} onPress={() => {
            Alert.alert("Alert");
        }}>
            <Shadow distance={9} 
                    startColor={'#ddd8'}
                    offset={[0, 0]}
                    containerViewStyle={{marginTop:8, marginBottom:8}}
                    viewStyle={{alignSelf: 'stretch'}}>
                <View style={styles.container}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Image style={styles.categoryImage} source={props.imgSrc}></Image>
                </View>
            </Shadow>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0}
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    categoryImage: {
        width: 64,
        height: 64
    }
});