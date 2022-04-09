import {StyleSheet} from 'react-native';
import Dashboard from "./src/containers/Dashboard/Dashboard";
import "./App.css"

export default function App() {
    return (
        <Dashboard/>
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
