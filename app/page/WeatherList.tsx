import {
  FlatList,
  Text,
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import {useWeather} from '../api/weather';
import {SafeAreaView} from 'react-native-safe-area-context';

interface WeatherCardType {
  temperature?: number;
  rainfallMaxValue?: number;
  rainfallMinValue?: number;
  place: string;
}
const sunImage = require('../assets/sun.png');
const rainImage = require('../assets/rain.png');
const searchImage = require('../assets/search.png');

const WeatherCard = (props: WeatherCardType) => {
  return (
    <ImageBackground
      imageStyle={style.image}
      source={props.rainfallMaxValue ? rainImage : sunImage}>
      <View style={style.card}>
        <Text style={style.cardText}>{props.place}</Text>
        <View style={style.cardTemperatureRow}>
          <Text style={[style.cardText, style.cardTemperature]}>
            {props.temperature}
          </Text>
          <Text style={style.cardText}>{`°C`}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const WeatherHeader = () => {
  return (
    <View style={style.header}>
      <Text style={style.headerText}>香港各區氣溫</Text>
      <View>
        <TextInput style={style.headerSearchBar}></TextInput>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 12,
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <Image source={searchImage} />
        </View>
      </View>
    </View>
  );
};

const WeatherList = () => {
  const weatherQuery = useWeather();
  if (!weatherQuery.isSuccess) return <></>;
  return (
    <SafeAreaView edges={['top']}>
      <FlatList
        style={style.list}
        contentContainerStyle={style.containerStyle}
        ListHeaderComponent={WeatherHeader}
        data={Object.entries(weatherQuery.data)}
        renderItem={({item: [place, info]}) => {
          return (
            <WeatherCard
              place={place}
              rainfallMaxValue={info.rainInfo?.max}
              rainfallMinValue={info.rainInfo?.min}
              temperature={info.temperatureInfo.value}
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
  card: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  cardText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  cardTemperatureRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  cardTemperature: {
    fontSize: 48,
    fontWeight: '400',
  },
  header: {
    gap: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  headerSearchBar: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 9.5,
    paddingLeft: 40,
    fontSize: 14,
  },
  image: {
    borderRadius: 12,
  },
  containerStyle: {
    gap: 16,
    paddingHorizontal: 24,
    paddingVertical: 17,
  },
});
export default WeatherList;
