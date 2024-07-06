import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {useWeather} from '../../api/weather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNearestLocation} from '../../hook/location';
import WeatherCard from './WeatherCard';
import WeatherHeader from './WeatherHeader';
import {useState} from 'react';

const WeatherList = () => {
  const weatherQuery = useWeather();
  const currentLocation = useNearestLocation();
  const [searchText, setSearchText] = useState('');
  if (!weatherQuery.isSuccess) return <ActivityIndicator />;
  return (
    <SafeAreaView edges={['top']}>
      <FlatList
        style={style.list}
        contentContainerStyle={style.containerStyle}
        ListHeaderComponent={
          <WeatherHeader
            searchText={searchText}
            setSearchText={setSearchText}
          />
        }
        data={Object.entries(weatherQuery.data)
          .sort((a, b) => {
            if (a[0] === currentLocation) return -1;
            return 1;
          })
          .filter(item => item[0].includes(searchText))}
        renderItem={({item: [place, info]}) => {
          return (
            <WeatherCard
              place={place}
              rainfallMaxValue={info.rainInfo?.max}
              rainfallMinValue={info.rainInfo?.min}
              temperature={info.temperatureInfo.value}
              isCurrent={currentLocation === place}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  list: {
    backgroundColor: '#D8E9EE',
  },
  containerStyle: {
    gap: 16,
    paddingHorizontal: 24,
    paddingVertical: 17,
  },
});
export default WeatherList;
