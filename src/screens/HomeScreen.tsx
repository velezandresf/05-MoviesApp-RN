import React from 'react'
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { Movie } from '../interfaces/movieInterface';
import { HorizontalSlider } from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window')

export const HomeScreen = () => {
  
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const { top,  } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color='red' size={ 100 } />
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* main carousel */}
        <View style={{height: 440}}>
            <Carousel 
              data={ nowPlaying }
              renderItem={ (item: {item: Movie}) => <MovieCard movie= { item.item } /> }
              sliderWidth= {windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.7}
            />
        </View>
      
        <HorizontalSlider title = 'Popular' movies={ popular }/>

        <HorizontalSlider title = 'Top Rated' movies={ topRated }/>

        <HorizontalSlider title = 'Upcoming' movies={ upcoming }/>


      </View>
    </ScrollView>
  )
}
