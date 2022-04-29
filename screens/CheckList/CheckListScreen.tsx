import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import ViewWithLoading from "../../components/ViewWithLoading";

export default function CheckListScreen() {
  // navigate
  type input = {
      title: string,
      check: boolean
  }
  const navigation = useNavigation();
  const [textInputs, setTextInputs] = useState<Array<input>>([{ title: "", check: false }]);

  const customOnChangeValue = (index: number, data: input) => {
      textInputs[index] = data;
      setTextInputs([...textInputs]);
  }

  const deleteInput = (index: number) => {
      if (textInputs.length > 1) {
          textInputs.splice(index, 1);
          setTextInputs([...textInputs]);
      } else {
          Alert.alert("Error")
      }
  }

  const submitInputs = () => {
      const checkInputs = textInputs.filter((data: input) => {
          if (data.check) {
              //TDO SAVE
          }
      });
      console.log(checkInputs);
  }

  const addInput = () => {
      textInputs.push({ title: "", check: false });
      setTextInputs([...textInputs]);
  }

  useLayoutEffect(() => {
      navigation.setOptions({
         
      })
  }, [])

  return (
    <ViewWithLoading loading={false}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 ,     backgroundColor:"#DEB1B8"}}>
    
            {textInputs.length > 0 && textInputs.map((data: input, index: number) => (
                <View
                    key={index.toString()}
                    style={[styles.inputContainer, { borderWidth: 1, borderColor: data.check ? "black" : "red" }]}
                >
                    <CheckBox
                        center
                        title=""
                        checked={data.check}
                        onPress={() => {
                            customOnChangeValue(index, { title: data.title, check: !data.check });
                        }}
                    />
                    <TextInput
                        style={{ flex: 1 }}
                        autoComplete={false}
                        label={""}
                        value={data.title}
                        onChangeText={text => {
                            customOnChangeValue(index, { title: text, check: false });
                        }}
                        onSubmitEditing={addInput}
                    />
                    <TouchableOpacity
                        style={{ marginHorizontal: 10, alignSelf: 'center' }}
                        onPress={() => deleteInput(index)}
                    >
                        <Ionicons name="close-circle-outline" size={24} color={"black"} />
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
       
    </ViewWithLoading>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white"
},
inputContainer: {
    flex: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  
}
});
