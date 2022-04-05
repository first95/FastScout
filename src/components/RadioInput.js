import {StyleSheet, View} from "react-native";

export default function RadioInput(props) {
    return (
        <View style={styles.input}>
            <label htmlFor={props.id}>{props.name}</label>
            <input type="radio" id={props.id} value={props.value}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        display: "flex",
        flexDirection: "row"
    }
});
