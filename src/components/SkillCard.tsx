import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import homeStyle from "../pages/home/homeStyle";

interface SkillCardProps extends TouchableOpacityProps{
    skill:string;
}

export function SkillCard({skill, ...rest}: SkillCardProps){

  return(
    <TouchableOpacity {...rest}  style={homeStyle.buttonSkill}>
      <Text style={homeStyle.textSkill}>{skill}</Text>
    </TouchableOpacity>
  )
}
