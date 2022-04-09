import {StyleSheet, Text, View} from "react-native";
import {IEndgameState} from "../Dashboard/types";
import Header from "../../components/Header";
import {RadioButton} from "react-native-paper";

interface setState {
    (setState: IEndgameState): void;
}

interface IProps {
    state: IEndgameState;
    setState: setState;
}

export default function Endgame(props: IProps) {
    return (
        <View style={styles.viewer}>
            <Header text={"Endgame"}/>

            <View style={styles.container}>
                <Text style={{justifySelf: "center", alignSelf: "center"}}>Attempted Climb</Text>
                <View>
                    <View style={styles.input}>
                        <RadioButton status={props.state.attemptedClimb === "bar1" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, attemptedClimb: "bar1"})
                               }}/>
                        <Text>Bar 1</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.attemptedClimb === "bar2" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, attemptedClimb: "bar2"})
                               }}/>
                        <Text>Bar 2</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.attemptedClimb === "bar3" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, attemptedClimb: "bar3"})
                               }}/>
                        <Text>Bar 3</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.attemptedClimb === "bar4" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, attemptedClimb: "bar4"})
                               }}/>
                        <Text>Bar 4</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.attemptedClimb === "notAttempted" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, attemptedClimb: "notAttempted"})
                               }}/>
                        <Text>Not Attempted</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.attemptedClimb === "notObserved" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, attemptedClimb: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={{justifySelf: "center", alignSelf: "center"}}>Successful Climb</Text>
                <View>
                    <View style={styles.input}>
                        <RadioButton status={props.state.successfulClimb === "bar1" ? "checked" : 'unstatus'}
                               onPress={() => {
                                   props.setState({...props.state, successfulClimb: "bar1"})
                               }}/>
                        <Text>Bar 1</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.successfulClimb === "bar2" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, successfulClimb: "bar2"})
                               }}/>
                        <Text>Bar 2</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.successfulClimb === "bar3" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, successfulClimb: "bar3"})
                               }}/>
                        <Text>Bar 3</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.successfulClimb === "bar4" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, successfulClimb: "bar4"})
                               }}/>
                        <Text>Bar 4</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.successfulClimb === "none" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, successfulClimb: "none"})
                               }}/>
                        <Text>None</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.successfulClimb === "notAttempted" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, successfulClimb: "notAttempted"})
                               }}/>
                        <Text>Not Attempted</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.successfulClimb === "notObserved" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, successfulClimb: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Climb Time</h3>
                <View>
                    <View style={styles.input}>
                        <RadioButton status={props.state.climbTime === "0-10s" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, climbTime: "0-10s"})
                               }}/>
                        <Text>0 - 10 Seconds</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.climbTime === "10-20s" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, climbTime: "10-20s"})
                               }}/>
                        <Text>10 - 20 Seconds</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.climbTime === "20-30s" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, climbTime: "20-30s"})
                               }}/>
                        <Text>20 - 30 Seconds</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.climbTime === ">30s" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, climbTime: ">30s"})
                               }}/>
                        <Text>{">"}30 Seconds</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.climbTime === "notAttempted" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, climbTime: "notAttempted"})
                               }}/>
                        <Text>Not Attempted</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.climbTime === "notObserved" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, climbTime: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Shot Accuracy</h3>
                <View>
                    <View style={styles.input}>
                        <RadioButton status={props.state.shotAccuracy === "low" ? "checked" : "unchecked"}
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
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Target Goal</h3>
                <View>
                    <View style={styles.input}>
                        <RadioButton
                               status={props.state.targetGoal === "none" ? "checked" : "unchecked"}
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
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Cargo Intake</h3>
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
                        <RadioButton status={props.state.cargoIntake === "notObserved" ? "checked" : "unchecked"}
                               onPress={() => {
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
                        <RadioButton status={props.state.shootingSpot === "notObserved" ? "checked" : "unchecked"}
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
        display: "flex", flexDirection: "row", alignItems: 'center'
    }
});
