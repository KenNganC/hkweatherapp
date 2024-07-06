import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Weather, TemperatureItem, RainfallItem} from './type/weatherType';

type WeatherSet = {
  [place in string]: {
    temperatureInfo: TemperatureItem;
    rainInfo?: RainfallItem;
  };
};

const useWeather = () => {
  return useQuery({
    queryKey: ['weather'],
    queryFn: async () => {
      const res = await axios.get<Weather>(
        'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc',
      );
      const weatherSet: WeatherSet = {};

      res.data.temperature.data.forEach(t => {
        weatherSet[t.place] = {temperatureInfo: t};
      });

      res.data.rainfall.data.forEach(r => {
        if (weatherSet[r.place]) weatherSet[r.place].rainInfo = r;
      });
      return weatherSet;
    },
  });
};

export {useWeather};
