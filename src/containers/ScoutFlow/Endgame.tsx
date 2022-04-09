import {StyleSheet, Text, View} from "react-native";
import {IAutonState, IEndgameState} from "../Dashboard/types";

interface setState {
    (setState: IEndgameState): void;
}

interface IProps {
    state: IEndgameState;
    setState: setState;
}

export default function Endgame(props: IProps) {
    return (
        <>
            <h1>Endgame</h1>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Attempted Climb</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio" checked={props.state.attemptedClimb === "bar1"}
                               onChange={() => {
                                   props.setState({...props.state, attemptedClimb: "bar1"})
                               }}/>
                        <label>Bar 1</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.attemptedClimb === "bar2"}
                               onChange={() => {
                                   props.setState({...props.state, attemptedClimb: "bar2"})
                               }}/>
                        <label>Bar 2</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.attemptedClimb === "bar3"}
                               onChange={() => {
                                   props.setState({...props.state, attemptedClimb: "bar3"})
                               }}/>
                        <label>Bar 3</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.attemptedClimb === "bar4"}
                               onChange={() => {
                                   props.setState({...props.state, attemptedClimb: "bar4"})
                               }}/>
                        <label>Bar 4</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.attemptedClimb === "notAttempted"}
                               onChange={() => {
                                   props.setState({...props.state, attemptedClimb: "notAttempted"})
                               }}/>
                        <label>Not Attempted</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.attemptedClimb === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, attemptedClimb: "notObserved"})
                               }}/>
                        <label>Not Observed</label>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Successful Climb</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio" checked={props.state.successfulClimb === "bar1"}
                               onChange={() => {
                                   props.setState({...props.state, successfulClimb: "bar1"})
                               }}/>
                        <label>Bar 1</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.successfulClimb === "bar2"}
                               onChange={() => {
                                   props.setState({...props.state, successfulClimb: "bar2"})
                               }}/>
                        <label>Bar 2</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.successfulClimb === "bar3"}
                               onChange={() => {
                                   props.setState({...props.state, successfulClimb: "bar3"})
                               }}/>
                        <label>Bar 3</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.successfulClimb === "bar4"}
                               onChange={() => {
                                   props.setState({...props.state, successfulClimb: "bar4"})
                               }}/>
                        <label>Bar 4</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.successfulClimb === "none"}
                               onChange={() => {
                                   props.setState({...props.state, successfulClimb: "none"})
                               }}/>
                        <label>None</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.successfulClimb === "notAttempted"}
                               onChange={() => {
                                   props.setState({...props.state, successfulClimb: "notAttempted"})
                               }}/>
                        <label>Not Attempted</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.successfulClimb === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, successfulClimb: "notObserved"})
                               }}/>
                        <label>Not Observed</label>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Climb Time</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio" checked={props.state.climbTime === "0-10s"}
                               onChange={() => {
                                   props.setState({...props.state, climbTime: "0-10s"})
                               }}/>
                        <label>0 - 10 Seconds</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.climbTime === "10-20s"}
                               onChange={() => {
                                   props.setState({...props.state, climbTime: "10-20s"})
                               }}/>
                        <label>10 - 20 Seconds</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.climbTime === "20-30s"}
                               onChange={() => {
                                   props.setState({...props.state, climbTime: "20-30s"})
                               }}/>
                        <label>20 - 30 Seconds</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.climbTime === ">30s"}
                               onChange={() => {
                                   props.setState({...props.state, climbTime: ">30s"})
                               }}/>
                        <label>{">"}30 Seconds</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.climbTime === "notAttempted"}
                               onChange={() => {
                                   props.setState({...props.state, climbTime: "notAttempted"})
                               }}/>
                        <label>Not Attempted</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.climbTime === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, climbTime: "notObserved"})
                               }}/>
                        <label>Not Observed</label>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Shot Accuracy</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio" checked={props.state.shotAccuracy === "low"}
                               onChange={() => {
                                   props.setState({...props.state, shotAccuracy: "low"})
                               }}/>
                        <label>Low</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.shotAccuracy === "medium"}
                               onChange={() => {
                                   props.setState({...props.state, shotAccuracy: "medium"})
                               }}/>
                        <label>Medium</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.shotAccuracy === "high"}
                               onChange={() => {
                                   props.setState({...props.state, shotAccuracy: "high"})
                               }}/>
                        <label>High</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio"checked={props.state.shotAccuracy === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, shotAccuracy: "notObserved"})
                               }}/>
                        <label>Not Observed</label>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Target Goal</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio"
                               checked={props.state.targetGoal === "none"}
                               onChange={() => {
                                   props.setState({...props.state, targetGoal: "none"})
                               }}/>
                        <label>None</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.targetGoal === "low"}
                               onChange={() => {
                                   props.setState({...props.state, targetGoal: "low"})
                               }}/>
                        <label>Low</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.targetGoal === "high"}
                               onChange={() => {
                                   props.setState({...props.state, targetGoal: "high"})
                               }}/>
                        <label>High</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.targetGoal === "both"}
                               onChange={() => {
                                   props.setState({...props.state, targetGoal: "both"})
                               }}/>
                        <label>Both</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.targetGoal === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, targetGoal: "notObserved"})
                               }}/>
                        <label>Not Observed</label>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Cargo Intake</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio" checked={props.state.cargoIntake === "none"}
                               onChange={() => {
                                   props.setState({...props.state, cargoIntake: "none"})
                               }}/>
                        <label>None</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.cargoIntake === "terminal"}
                               onChange={() => {
                                   props.setState({...props.state, cargoIntake: "terminal"})
                               }}/>
                        <label>Terminal</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.cargoIntake === "ground"}
                               onChange={() => {
                                   props.setState({...props.state, cargoIntake: "ground"})
                               }}/>
                        <label>Ground</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.cargoIntake === "both"}
                               onChange={() => {
                                   props.setState({...props.state, cargoIntake: "both"})
                               }}/>
                        <label>Both</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.cargoIntake === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, cargoIntake: "notObserved"})
                               }}/>
                        <label>Not Observed</label>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Shooting Spot</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio" checked={props.state.shootingSpot === "none"}
                               onChange={() => {
                                   props.setState({...props.state, shootingSpot: "none"})
                               }}/>
                        <label>None</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.shootingSpot === "close"}
                               onChange={() => {
                                   props.setState({...props.state, shootingSpot: "close"})
                               }}/>
                        <label>Close</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.shootingSpot === "far"}
                               onChange={() => {
                                   props.setState({...props.state, shootingSpot: "far"})
                               }}/>
                        <label>Far</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.shootingSpot === "adjustable"}
                               onChange={() => {
                                   props.setState({...props.state, shootingSpot: "adjustable"})
                               }}/>
                        <label>Adjustable</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.shootingSpot === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, shootingSpot: "notObserved"})
                               }}/>
                        <label>Not Observed</label>
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
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // @ts-ignore
        display: "grid", gap: "10px", padding: "10px", gridTemplateColumns: "auto auto",
    }, input: {
        display: "flex", flexDirection: "row"
    }
});
