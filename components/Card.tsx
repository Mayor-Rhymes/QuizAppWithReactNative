import {StyleSheet, View, Text, TextInput,} from 'react-native';
import Button from './Button';
import { Dispatch, SetStateAction } from 'react';


interface Props{

    handleNavigation: () => void;
    name: string;
    setName: Dispatch<SetStateAction<string>>
}


export default function Card({handleNavigation, name, setName}: Props) {

    

    return (

        <View style={styles.card}>

            <Text style={styles.boldText}>Welcome</Text>

            <Text>Please enter your name</Text>

            <TextInput
            style={styles.textInput}
            placeholder='e.g John'
            value={name}
            onChangeText={setName}
            
            

            />


            

            <Button title="START" handleNavigation={handleNavigation}/>

            

            



        </View>
    )




}


const styles = StyleSheet.create({


    card: {
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: 350,
        borderRadius: 10,
        paddingVertical: 30,
        gap: 20,
    },

    boldText: {

        fontWeight: 'bold',
        fontSize: 30,
        color: "black"

    },

    textInput: {
        height: 50,
        width: "80%",
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 3,
        fontSize: 16,

    }
})