import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const sunImage = require('../../assets/sun.png');
const rainImage = require('../../assets/rain.png');
interface WeatherCardType {
  temperature?: number;
  rainfallMaxValue?: number;
  rainfallMinValue?: number;
  place: string;
  isCurrent: boolean;
}

const WeatherCard = (props: WeatherCardType) => {
  return (
    <ImageBackground
      imageStyle={style.image}
      source={props.rainfallMaxValue ? rainImage : sunImage}>
      <View style={style.card}>
        <View style={{gap: 5}}>
          <Text style={style.cardText}>
            {props.isCurrent ? '我的位置' : props.place}
          </Text>
          {props.isCurrent && (
            <Text style={[style.cardText, {fontSize: 14}]}>{props.place}</Text>
          )}
        </View>
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

const style = StyleSheet.create({
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
  image: {
    borderRadius: 12,
  },
});

export default WeatherCard;
