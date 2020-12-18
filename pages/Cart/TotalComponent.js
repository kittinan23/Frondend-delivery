import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TotalComponent = () => {
  const { containerStyle, goodsStyle, totalStyle } = styles;
  return (
    <View style={containerStyle}>
      <View style={goodsStyle}>
        <Icon name="ios-cart" size={20} style={{ marginRight: 8 }} />
        <Text>0 อย่าง</Text>
      </View>

      <View style={totalStyle}>
        <Text>รวม - </Text>
        <Text>0 B</Text>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  goodsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};


export default TotalComponent;
