import {StyleSheet, Text, View} from "react-native";
import {IAutonState, IPreMatchState} from "../Dashboard/types";
import Header from "../../components/Header";
import {Checkbox, RadioButton} from "react-native-paper";

interface setState {
    (setState: IAutonState): void;
}

interface IProps {
    state: IAutonState;
    setState: setState;
}

export default function Autonomous(props: IProps) {
    return (
        <View style={styles.viewer}>
            <Header text={"Autonomous"} />

            <View style={styles.container}>
                <Text>Taxi</Text>
                <Checkbox status={props.state.taxi ? "checked" : "unchecked"}
                    onPress={() => props.setState({...props.state, taxi: !props.state.taxi})}/>

                <Text style={{justifySelf: "center", alignSelf: "center"}}>Auton Cargo Scored</Text>
                <View>
                    <View style={styles.input}>
                        <View style={styles.input}>
                            <RadioButton status={props.state.cargoScored === 0 ? "checked" : "unchecked"}
                                   onPress={() => {
                                       props.setState({...props.state, cargoScored: 0})
                                   }}/>
                            <Text>0</Text>
                        </View>

                        <View style={styles.input}>
                            <RadioButton status={props.state.cargoScored === 1 ? "checked" : "unchecked"}
                                   onPress={() => {
                                       props.setState({...props.state, cargoScored: 1})
                                   }}/>
                            <Text>1</Text>
                        </View>

                        <View style={styles.input}>
                            <RadioButton status={props.state.cargoScored === 2 ? "checked" : "unchecked"}
                                   onPress={() => {
                                       props.setState({...props.state, cargoScored: 2})
                                   }}/>
                            <Text>2</Text>
                        </View>
                    </View>

                    <View style={styles.input}>
                        <View style={styles.input}>
                            <RadioButton status={props.state.cargoScored === 3 ? "checked" : "unchecked"}
                                   onPress={() => {
                                       props.setState({...props.state, cargoScored: 3})
                                   }}/>
                            <Text>3</Text>
                        </View>

                        <View style={styles.input}>
                            <RadioButton status={props.state.cargoScored === 4 ? "checked" : "unchecked"}
                                   onPress={() => {
                                       props.setState({...props.state, cargoScored: 4})
                                   }}/>
                            <Text>4</Text>
                        </View>

                        <View style={styles.input}>
                            <RadioButton status={props.state.cargoScored === 5 ? "checked" : "unchecked"}
                                   onPress={() => {
                                       props.setState({...props.state, cargoScored: 5})
                                   }}/>
                            <Text>5</Text>
                        </View>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.cargoScored === "notObserved" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, cargoScored: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>

                <Text style={{justifySelf: "center", alignSelf: "center"}}>Auton Target Goal</Text>
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
                        <RadioButton status={props.state.targetGoal === "notObserved" ? "checked" : "unchecked"}
                               onPress={() => {
                                   props.setState({...props.state, targetGoal: "notObserved"})
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
        display: "grid",
        gap: "10px",
        padding: "10px",
        gridTemplateColumns: "auto auto",
    },
    input: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
});
