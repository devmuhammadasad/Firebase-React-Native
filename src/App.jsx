import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        title: "Home Screen",
                    }}
                />
                <Stack.Screen
                    name="DetailsScreen"
                    component={DetailsScreen}
                    options={{
                        title: "Details Screen",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
