import Geolocation from '@react-native-community/geolocation';
import {findNearest} from 'geolib';
import {useEffect, useState} from 'react';
import list from '../list';
import {GeolibInputCoordinates} from 'geolib/es/types';

const useNearestLocation = () => {
  const [location, setLocation] = useState('');
  useEffect(() => {
    const watchId = Geolocation.watchPosition(info => {
      const nearest = findNearest(
        info.coords,
        list,
      ) as GeolibInputCoordinates & {name: string};
      setLocation(nearest.name);
    });
    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);
  return location;
};

export {useNearestLocation};
