import Geolocation from '@react-native-community/geolocation';
import {findNearest} from 'geolib';
import {useEffect, useState} from 'react';
import list from '../list';

const useNearestLocation = () => {
  const [location, setLocation] = useState('');
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      const nearest: any = findNearest(info.coords, list);
      setLocation(nearest.name);
    });
  }, []);
  return location;
};

export {useNearestLocation};
