import {View, Text} from 'react-native';
import React from 'react';
import {useGetFiveMoviesQuery} from '../app/service/movieApi';
import Header from './Header';
import HeroSection from './HeroSection';
import MoviesCards from './MoviesCards';
import FavoiteMovie from './FavoiteMovie';
const MyApp = () => {
    const {data,isError,isLoading} = useGetFiveMoviesQuery();


  if (isError) {
        return(
      <View>
        <Text>Hey, we got an error</Text>
            </View>
    );
    }


    if (isLoading) {
        return(
      <View>
        <Text>Loading Movies...</Text>
            </View>
    );
    }



  
  return (
    <View>
     
      <Header/>
      <HeroSection/>
      <MoviesCards/>
      <FavoiteMovie/>
    </View>
  )
}

export default MyApp