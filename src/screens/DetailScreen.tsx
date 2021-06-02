import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'

import { 
    Image, View, StyleSheet, 
    Dimensions, Text, ActivityIndicator,
    ScrollView,TouchableOpacity 
} from 'react-native';

import { RootStackParams } from '../navigation/Navigation';


import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('screen')

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};


export const DetailScreen = ({route, navigation} : Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const {isLoading, movieFull, cast } = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image 
                        source={{uri}}
                        style={ styles.imagePoster }
                    />
                </View>
                
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{ movie.original_title } </Text>
                <Text style={styles.title}>{ movie.title } </Text>
            </View>

            { isLoading 
                ? <ActivityIndicator 
                    size={35}
                    color= 'gray'
                    style={{marginTop: 20}}
                />
                : <MovieDetails movieFull= {movieFull!} cast={cast} />      
            }

            <View  style={styles.backButton}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                >
                    <Icon 
                        name='arrow-back-outline'
                        color='white'
                        size={40}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        //overflow: 'hidden',
        width: '100%',
        height : height * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,

        elevation: 9, 
    },
    imageBorder: {
        flex: 1,
        overflow:'hidden',
        borderBottomEndRadius:15,
        borderBottomStartRadius:15
    },
    imagePoster: {
        flex: 1
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize:20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top:40,
        left: 15
    }
})
