import {StyleSheet, Text, View} from "react-native";
import {ITeleopState} from "../Dashboard/types";
import {RadioButton} from "react-native-paper";

interface setState {
    (setState: ITeleopState): void;
}

interface IProps {
    state: ITeleopState;
    setState: setState;
}

export default function Teleop(props: IProps) {
    return (
        <View style={styles.viewer}>
            <h1>Teleop</h1>

            <View style={styles.container}>
                <Text style={{justifySelf: "center", alignSelf: "center"}}>Shots Taken</Text>
                <View>
                    <View style={styles.input}>
                        <RadioButton status={props.state.shotsTaken === "none" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, shotsTaken: "none"})
                               }}/>
                        <Text>None</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.shotsTaken === "some" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, shotsTaken: "some"})
                               }}/>
                        <Text>Some</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.shotsTaken === "lots" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, shotsTaken: "lots"})
                               }}/>
                        <Text>Lots</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton
                               status={props.state.shotsTaken === "notObserved" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, shotsTaken: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={{justifySelf: "center", alignSelf: "center"}}>Shot Accuracy</Text>
                <View>
                    <View style={styles.input}>
                        <RadioButton
                               status={props.state.shotAccuracy === "low" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, shotAccuracy: "low"})
                               }}/>
                        <Text>Low</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.shotAccuracy === "medium" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, shotAccuracy: "medium"})
                               }}/>
                        <Text>Medium</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.shotAccuracy === "high" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, shotAccuracy: "high"})
                               }}/>
                        <Text>High</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.shotAccuracy === "notObserved" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, shotAccuracy: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={{justifySelf: "center", alignSelf: "center"}}>Target Goal</Text>
                <View>
                    <View style={styles.input}>
                        <RadioButton status={props.state.targetGoal === "none" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, targetGoal: "none"})
                               }}/>
                        <Text>None</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.targetGoal === "low" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, targetGoal: "low"})
                               }}/>
                        <Text>Low</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.targetGoal === "high" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, targetGoal: "high"})
                               }}/>
                        <Text>High</Text>
                    </View>

                    <View style={styles.input}>
                        <input checked={props.state.targetGoal === "both"}
                               onChange={() => {
                                   props.setState({...props.state, targetGoal: "both"})
                               }}/>
                        <Text>Both</Text>
                    </View>

                    <View style={styles.input}>
                        <input checked={props.state.targetGoal === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, targetGoal: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Cargo Intake</h3>
                <View>
                    <View style={styles.input}>
                        <input checked={props.state.cargoIntake === "none"}
                               onChange={() => {
                                   props.setState({...props.state, cargoIntake: "none"})
                               }}/>
                        <Text>None</Text>
                    </View>

                    <View style={styles.input}>
                        <input checked={props.state.cargoIntake === "terminal"}
                               onChange={() => {
                                   props.setState({...props.state, cargoIntake: "terminal"})
                               }}/>
                        <Text>Terminal</Text>
                    </View>

                    <View style={styles.input}>
                        <input checked={props.state.cargoIntake === "ground"}
                               onChange={() => {
                                   props.setState({...props.state, cargoIntake: "ground"})
                               }}/>
                        <Text>Ground</Text>
                    </View>

                    <View style={styles.input}>
                        <input checked={props.state.cargoIntake === "both"}
                               onChange={() => {
                                   props.setState({...props.state, cargoIntake: "both"})
                               }}/>
                        <Text>Both</Text>
                    </View>

                    <View style={styles.input}>
                        <input checked={props.state.cargoIntake === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, cargoIntake: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Shooting Spot</h3>
                <View>
                    <View style={styles.input}>
                        <input checked={props.state.shootingSpot === "none"}
                               onChange={() => {
                                   props.setState({...props.state, shootingSpot: "none"})
                               }}/>
                        <Text>None</Text>
                    </View>

                    <View style={styles.input}>
                        <input checked={props.state.shootingSpot === "close"}
                               onChange={() => {
                                   props.setState({...props.state, shootingSpot: "close"})
                               }}/>
                        <Text>Close</Text>
                    </View>

                    <View style={styles.input}>
                        <input checked={props.state.shootingSpot === "far"}
                               onChange={() => {
                                   props.setState({...props.state, shootingSpot: "far"})
                               }}/>
                        <Text>Far</Text>
                    </View>

                    <View style={styles.input}>
                        <input checked={props.state.shootingSpot === "adjustable"}
                               onChange={() => {
                                   props.setState({...props.state, shootingSpot: "adjustable"})
                               }}/>
                        <Text>Adjustable</Text>
                    </View>

                    <View style={styles.input}>
                        <input checked={props.state.shootingSpot === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, shootingSpot: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            {/*Horizontal Rule*/}
            <View style={{flexDirection: 'row', alignItems: 'center', width: "100vw"}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
                <View>
                    <Text style={{width: 50, textAlign: 'center'}}>Next</Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        // @ts-ignore
        display: "grid", gap: "10px", padding: "10px", gridTemplateColumns: "auto auto",
    }, input: {
        display: "flex", flexDirection: "row", alignItems: "center"
    }
});
