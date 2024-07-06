import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const crossImage = require('../../assets/cross.png');
const sunImage = require('../../assets/sun.png');
const rainImage = require('../../assets/rain.png');

interface WeatherModalType {
  place: string;
  temperature: number;
  rainfallMaxValue?: number;
  isVisible: boolean;
  setIsVisible: any;
}

const WeatherModal = (props: WeatherModalType) => {
  const edges = useSafeAreaInsets();
  return (
    <Modal style={style.modal} isVisible={props.isVisible}>
      <ImageBackground
        resizeMode="cover"
        imageStyle={style.image}
        source={props.rainfallMaxValue ? rainImage : sunImage}>
        <View style={[style.container, {paddingBottom: 10 + edges.bottom}]}>
          <View style={style.titleRow}>
            <Text style={style.title}>{props.place}</Text>
            <TouchableOpacity
              onPress={() => {
                props.setIsVisible(false);
              }}>
              <Image source={crossImage}></Image>
            </TouchableOpacity>
          </View>
          <View style={style.detailRow}>
            <Text style={style.detailText}>現時氣溫</Text>
            <View style={style.temperatureRow}>
              <Text style={style.temperature}>{props.temperature}</Text>
              <Text style={style.temperatureSpan}>{`°C`}</Text>
            </View>
          </View>
          <View style={style.detailRow}>
            <Text style={style.detailText}>最高雨量紀錄</Text>
            <Text style={style.detailText}>
              {props.rainfallMaxValue ? props.rainfallMaxValue : '-'}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
};

const style = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
  },
  titleRow: {
    paddingTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailRow: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffffCC',
    borderRadius: 12,
    padding: 16,
  },
  detailText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  temperatureSpan: {
    fontSize: 18,
    color: '#000',

    fontWeight: '400',
  },
  temperature: {
    color: '#000',

    fontSize: 48,
    fontWeight: '400',
  },
  temperatureRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  image: {
    borderRadius: 12,
  },
  container: {
    paddingHorizontal: 26,
    gap: 16,
  },
});

export default WeatherModal;
