import {Text} from 'react-native';
import {useWeather} from '../api/weather';

const WeatherList = () => {
  const weatherQuery = useWeather();
  return <Text>{JSON.stringify(weatherQuery.data?.data)}</Text>;
};

export default WeatherList;
