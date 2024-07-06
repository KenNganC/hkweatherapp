import {FlatList, Text} from 'react-native';
import {useWeather} from '../api/weather';

const WeatherList = () => {
  const weatherQuery = useWeather();

  return (
    <FlatList
      data={weatherQuery.data?.data.temperature.data}
      renderItem={data => {
        return <Text>{data.item.place}</Text>;
      }}></FlatList>
  );
};

export default WeatherList;
