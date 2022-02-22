import React from  'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import homeStyle from "../pages/home/homeStyle";

interface ButtonProps extends TouchableOpacityProps{
    title:string
}

export function Button({title,...rest} : ButtonProps){
  return(
    <TouchableOpacity
      {...rest}
      style={homeStyle.button}>
      <Text style={homeStyle.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
