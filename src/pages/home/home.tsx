import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import homeStyle from "./homeStyle";
import {Button} from "../../components/Button";
import {SkillCard} from "../../components/SkillCard";

interface SkillData{
  id:string;
  name:string;
}

export function Home(){

  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');
  function handleAddNewSkill(){
    const data ={
        id: String(new Date().getTime()),
        name: newSkill
    }
    setMySkills(oldState => [...oldState,data]);
  }

  function handleRemoveSkill(id:string){
    setMySkills(oldState=>oldState.filter(skill=>skill.id!==id))
  }

useEffect(()=>{
  const currentHour = new Date().getHours();
  if(currentHour<12){
    setGreeting('Good Morning')
  }else if(currentHour>=12 && currentHour<18){
    setGreeting('Good Afternoon')
  }else{
    setGreeting('Good Night')
  }

},[])
  return(
    <>
      <View style={homeStyle.container}>
        <Text style={homeStyle.text}>Welcome Gabriel</Text>
        <Text style={[homeStyle.text, {marginTop:20,}]} >{greeting}</Text>
        <TextInput onChangeText={setNewSkill} style={homeStyle.input} placeholder='New Skill' placeholderTextColor={"#555"}></TextInput>
        <Button title={'Add'} onPress={handleAddNewSkill}/>
        <Text style={[homeStyle.text,{marginVertical:50,}]}>My Skills</Text>
        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({item}) =>(
          <SkillCard onPress={() => handleRemoveSkill(item.id)} skill={item.name}/>
          )}
        />
      </View>

    </>
  )
}
