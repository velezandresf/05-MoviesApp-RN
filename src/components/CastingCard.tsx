import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface'
import { NavigationContainer } from '@react-navigation/native';

interface Props{
    actor: Cast
}

export const CastingCard = ({actor}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={styles.container}>
            {
                actor.profile_path &&
                <Image 
                    source={{ uri }}
                    style={{ width:50, height:50, borderRadius:10}}
                />
            }
            <View style={styles.actorInfo}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>
                    {actor.name}
                </Text>
                <Text style={{fontSize:16, opacity:0.7}}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,

        elevation: 9,
        marginLeft: 20,
        height: 50
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    }
})
