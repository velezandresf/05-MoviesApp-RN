import React, { useContext } from 'react'
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { Movie } from '../interfaces/movieInterface';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window')

export const HomeScreen = () => {
  
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const { top,  } = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext)

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const [ primary = 'transparent', secundary = 'transparent'] = await getImageColors(uri);

    setMainColors({primary, secundary})
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color='red' size={ 100 } />
      </View>
    )
  }
  return (
    <GradientBackground>

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
                onSnapToItem={ (index) => getPosterColors(index) }
              />
          </View>
        
          <HorizontalSlider title = 'Popular' movies={ popular }/>

          <HorizontalSlider title = 'Top Rated' movies={ topRated }/>

          <HorizontalSlider title = 'Upcoming' movies={ upcoming }/>
        </View>
      </ScrollView>

    </GradientBackground>
    
  )
}
