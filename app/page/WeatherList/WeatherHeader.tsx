import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const searchImage = require('../../assets/search.png');

interface WeatherHeaderType {
  searchText: string;
  setSearchText: any;
}

const WeatherHeader = (props: WeatherHeaderType) => {
  return (
    <View style={style.header}>
      <Text style={style.headerText}>香港各區氣溫</Text>
      <View>
        <TextInput
          value={props.searchText}
          onChangeText={props.setSearchText}
          style={style.headerSearchBar}></TextInput>
        <View style={style.headerSearchImage}>
          <Image source={searchImage} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    gap: 8,
    paddingBottom: 4,
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
  headerSearchImage: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 12,
    justifyContent: 'center',
    pointerEvents: 'none',
  },
});

export default WeatherHeader;
