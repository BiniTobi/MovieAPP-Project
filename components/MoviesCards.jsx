import { View, FlatList } from 'react-native';
import { useGetFiveMoviesQuery } from '../app/service/movieApi';
import MovieCard from './MovieCard';

const MoviesCards = () => {
const { data, isError, isLoading } = useGetFiveMoviesQuery();

if (isError) {
return (
<View>
<Text>Hey, we got an error</Text>
</View>
);
}

if (isLoading) {
return (
<View>
<Text>Loading Movies...</Text>
</View>
);
}

return (
<View>
<FlatList
data={data}
keyExtractor={(item) => item.id.toString()}
horizontal
showsHorizontalScrollIndicator={false}
renderItem={({ item }) => <MovieCard item={item} />}
/>
</View>
);
};

export default MoviesCards;