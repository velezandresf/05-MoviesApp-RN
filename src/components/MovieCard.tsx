import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
    width?: number;
    height?: number;
}

export const MovieCard = ({ movie, width = 300, height = 420 }: Props) => {
    //console.log(movie)
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={ () => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.9}
            style= {{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom:20,
                paddingHorizontal: 7
            }}
        >
            <View style = {styles.imageContainer}>
                <Image 
                    source={{uri}}
                    style={ styles.image }
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
        
    },
    imageContainer : {
        borderRadius: 18,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,

        elevation: 9,
    }
});
