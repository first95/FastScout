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
                        <RadioButton status={props.state.targetGoal === "both" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, targetGoal: "both"})
                               }}/>
                        <Text>Both</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.targetGoal === "notObserved" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, targetGoal: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={{justifySelf: "center", alignSelf: "center"}}>Cargo Intake</Text>
                <View>
                    <View style={styles.input}>
                        <RadioButton status={props.state.cargoIntake === "none" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, cargoIntake: "none"})
                               }}/>
                        <Text>None</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.cargoIntake === "terminal" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, cargoIntake: "terminal"})
                               }}/>
                        <Text>Terminal</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.cargoIntake === "ground" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, cargoIntake: "ground"})
                               }}/>
                        <Text>Ground</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.cargoIntake === "both" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, cargoIntake: "both"})
                               }}/>
                        <Text>Both</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.cargoIntake === "notObserved" ? "checked" : 'unchecked'}
                               onPress={() => {
                                   props.setState({...props.state, cargoIntake: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={{justifySelf: "center", alignSelf: "center"}}>Shooting Spot</Text>
                <View>
                    <View style={styles.input}>
                        <RadioButton status={props.state.shootingSpot === "none" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, shootingSpot: "none"})
                               }}/>
                        <Text>None</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.shootingSpot === "close" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, shootingSpot: "close"})
                               }}/>
                        <Text>Close</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.shootingSpot === "far" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, shootingSpot: "far"})
                               }}/>
                        <Text>Far</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.shootingSpot === "adjustable" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, shootingSpot: "adjustable"})
                               }}/>
                        <Text>Adjustable</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.shootingSpot === "notObserved" ? "checked" : 'unchecked'}
                               onPress={() => {
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
