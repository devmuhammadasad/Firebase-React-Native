import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button
                title="Go to details"
                onPress={() => {
                    navigation.navigate("DetailsScreen");
                }}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
