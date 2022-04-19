import {StyleSheet} from 'react-native';
import Dashboard from "./src/containers/Dashboard/Dashboard";
import "./App.css"
import Start from "./src/containers/Start";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogoTitle from "./src/components/LogoTitle";
import {useState} from "react";

const Stack = createNativeStackNavigator();

export default function App() {
    const [teams, setTeams] = useState(null);
    const [schedule, setSchedule] = useState(null);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Start"} component={(props) => <Start setTeams={setTeams} setSchedule={setSchedule} {...props}/>}
                              options={{headerTitle: (props) => <LogoTitle {...props} />}}/>
                <Stack.Screen name={"Dashboard"} component={Dashboard}
                              options={{headerTitle: (props) => <LogoTitle {...props} />}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
