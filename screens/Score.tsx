

import {View, ImageBackground, StyleSheet, Image, Text} from 'react-native'
import Button from '../components/Button';

const background = require('../assets/images/ic_bg.png');
const trophyImage = require('../assets/images/ic_trophy.png')

export default function Score({route, navigation}) {

    const {name, score, quizNumber} = route.params;

    return (

        <View style={styles.container}>

            <ImageBackground 
            source={background} 
            resizeMode='cover' 
            style={styles.image}>

                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
                    
                    Result

                </Text>


                <Image source={trophyImage} style={styles.trophyImage}/>

                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 10}}>
                    
                    Hey Congratulations!

                </Text>

                <Text style={{ color: 'white', marginTop: 20, fontSize: 20, fontWeight: 'bold'}}>
                   
                   {name}

                </Text>


                <Text style={{ color: 'lightgrey', marginTop: 20, fontSize: 20, marginBottom: 20}}>

                    You scored {score} out of {quizNumber} 
                </Text>

               
                <Button title="FINISH" color="#fff" handleNavigation={() => navigation.navigate("Home")}/>


               

            </ImageBackground>

        </View>
    )
    
}


const styles = StyleSheet.create({


    container: {

        flex: 1,
        backgroundColor: "#fff",
        
    },


    image: {


        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',

    },

    trophyImage: {

       height: 200,
       width: 200,
    }

})