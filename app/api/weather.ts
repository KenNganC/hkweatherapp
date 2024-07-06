import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Weather} from './type/weatherType';

const useWeather = () => {
  return useQuery({
    queryKey: ['weather'],
    queryFn: () =>
      axios.get<Weather>(
        'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc',
      ),
  });
};

export {useWeather};
