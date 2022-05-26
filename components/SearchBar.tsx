import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = (clicked:boolean, searchPhrase:any, setSearchPhrase:any, setClicked:any, placeholder:string) => {
  return (
    <View style={styles.container}>
      <View
        style={clicked
          ? styles.searchBar__clicked
          : styles.searchBar__unclicked}
      >
        {/* search Icon */}
        
          <Feather
            name="search"
            size={20}
            color="white"
            style={{ marginLeft: 1 }} />
        

        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder={placeholder}

          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          } } />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="white" style={{ padding: 1 }} onPress={() => {
            setSearchPhrase("");
          } } />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            } }
          ></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  searchBar__unclicked: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#383838",
    color: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    width: "75%",
    backgroundColor: "#383838",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    color : "white",
    fontSize: 20,
    marginLeft: 10,
    width: "85%",
  },
});