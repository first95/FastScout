import {StyleSheet, Text, View} from "react-native";
import {IAutonState, IPreMatchState} from "../Dashboard/types";

interface setState {
    (setState: IAutonState): void;
}

interface IProps {
    state: IAutonState;
    setState: setState;
}

export default function Autonomous(props: IProps) {
    return (
        <>
            <h1>Autonomous</h1>

            <View style={styles.container}>
                <label>Taxi</label>
                <input type={"checkbox"} checked={props.state.taxi}
                    onChange={(event) => props.setState({...props.state, taxi: event.target.checked})}/>

                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Auton Cargo Scored</h3>
                <View>
                    <View style={styles.input}>
                        <View style={styles.input}>
                            <input type="radio" checked={props.state.cargoScored === 0}
                                   onChange={() => {
                                       props.setState({...props.state, cargoScored: 0})
                                   }}/>
                            <label>0</label>
                        </View>

                        <View style={styles.input}>
                            <input type="radio" checked={props.state.cargoScored === 1}
                                   onChange={() => {
                                       props.setState({...props.state, cargoScored: 1})
                                   }}/>
                            <label>1</label>
                        </View>

                        <View style={styles.input}>
                            <input type="radio" checked={props.state.cargoScored === 2}
                                   onChange={() => {
                                       props.setState({...props.state, cargoScored: 2})
                                   }}/>
                            <label>2</label>
                        </View>
                    </View>

                    <View style={styles.input}>
                        <View style={styles.input}>
                            <input type="radio" checked={props.state.cargoScored === 3}
                                   onChange={() => {
                                       props.setState({...props.state, cargoScored: 3})
                                   }}/>
                            <label>3</label>
                        </View>

                        <View style={styles.input}>
                            <input type="radio" checked={props.state.cargoScored === 4}
                                   onChange={() => {
                                       props.setState({...props.state, cargoScored: 4})
                                   }}/>
                            <label>4</label>
                        </View>

                        <View style={styles.input}>
                            <input type="radio" checked={props.state.cargoScored === 5}
                                   onChange={() => {
                                       props.setState({...props.state, cargoScored: 5})
                                   }}/>
                            <label>5</label>
                        </View>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.cargoScored === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, cargoScored: "notObserved"})
                               }}/>
                        <label>Not Observed</label>
                    </View>
                </View>

                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Auton Target Goal</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio" checked={props.state.targetGoal === "none"}
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
                        <input type="radio" checked={props.state.targetGoal === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, targetGoal: "notObserved"})
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
        display: "grid",
        gap: "10px",
        padding: "10px",
        gridTemplateColumns: "auto auto",
    },
    input: {
        display: "flex",
        flexDirection: "row"
    }
});
