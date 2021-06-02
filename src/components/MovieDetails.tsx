import React from 'react'
import { Text, View, FlatList } from "react-native"
import currencyFormatter from "currency-formatter";
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import  Icon from 'react-native-vector-icons/Ionicons';
import { CastingCard } from './CastingCard';
import { HorizontalSlider } from './HorizontalSlider';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}

export const MovieDetails = ({movieFull, cast}: Props) => {
    return (
        <>
            <View style={{marginHorizontal:20}}>
                <View style={{flexDirection:'row'}}>
                <Icon 
                    name='star-outline'
                    color='gray'
                    size={16}
                    />
                    <Text> {movieFull.vote_average}</Text>
                    <Text style={{marginLeft: 5}}> 
                        - { movieFull.genres.map( g => g.name).join(', ') }
                    </Text>
                </View>
                
                <Text style={{fontSize:23, marginTop:10, fontWeight: 'bold'}}>
                    History
                </Text>
                <Text style={{fontSize: 16}}>
                    {movieFull.overview}
                </Text>

                <Text style={{fontSize:23, marginTop:10, fontWeight: 'bold'}}>
                    Budget
                </Text>
                <Text style={{fontSize: 16}}>
                    {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
                </Text>
            </View>

            <View style={{marginTop:10, marginBottom:100}}>
                <Text style={{fontSize:23, marginTop:10, fontWeight: 'bold', marginHorizontal:20}}>
                    Casting
                </Text>

                <FlatList 
                    data= {cast}
                    keyExtractor= {(item) => item.id.toString()}
                    renderItem={({item}) => <CastingCard actor={item}/>}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ 
                        marginTop: 10,
                        height:60
                    }}
                />
                
            </View>
        </>
    )
}
