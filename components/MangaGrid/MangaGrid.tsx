import React from "react";
import { Text, StyleSheet, View, ScrollView} from "react-native";
import MangaPoster from "../MangaPoster/MangaPoster";

export default function MangaGrid ({children}) {
    return (
        <View style={styles.grid}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    grid: {
        flexDirection: "row",
        flex: 4,
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
    }
})

