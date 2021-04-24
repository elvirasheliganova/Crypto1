import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

const TextButton = ({label, customContainerStyle, customLabelStyle, 
  onPress}) => {
    return (
    <TouchableOpacity style ={{
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor: 'grey',
      ...customContainerStyle
    }}
    onPress={onPress}
    >
      <Text style={{color: '#F3F3F3', fontSize:14, ...customLabelStyle}}>{label}</Text>
    </TouchableOpacity>
    )
  }

  export default TextButton;