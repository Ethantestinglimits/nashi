import React from "react";
import {TouchableOpacity, StyleSheet, Image, Text, View} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function MangaPoster(navigation:any) {
    

    return(
        <TouchableOpacity onPress={() => navigation.navigate('Manga Details', { name : manga.title, id: manga.mangaId})}>
            <View style={styles.view}>

                <Image source={require('../../assets/images/sl.jpg')} style={styles.mangaPoster} />
                    
                    <LinearGradient colors={['#00000000', 'black']} style={styles.text}>
                    <Text style={styles.title}>Solo Leveling</Text>
                    </LinearGradient>
  
                    

            </View>  
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    view : {
        
    },
    text : {
        position: 'absolute', 
        bottom: 8, 
        left: 8 , 
        justifyContent: 'center', 
        alignItems: 'center', 
        zIndex: 3,
        height: '30%',
        width: '91%',
        marginRight: 10,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 4,
    },    
    mangaPoster : {
        height: 250,
        width: 160,
        margin: 8,       
        borderRadius: 5,
        zIndex: 1,
        elevation: 1,
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        flexWrap: 'nowrap',
        zIndex: 4,
        elevation: 4,
        position: 'absolute',
        bottom: 10,
        left: 10,   
        
    }
})
