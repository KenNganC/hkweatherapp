import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const useWeather = () => {
  return useQuery({
    queryKey: ['weather'],
    queryFn: () =>
      axios.get(
        'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc',
      ),
  });
};

export {useWeather};
