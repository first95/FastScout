import {StyleSheet, Text, View} from "react-native";
import {IPostmatchState} from "../Dashboard/types";

interface setState {
    (setState: IPostmatchState): void;
}

interface IProps {
    state: IPostmatchState;
    setState: setState;
}

export default function Postmatch(props: IProps) {
    return (
        <>
            <h1>Postmatch</h1>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Driver Skill</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio" checked={props.state.driverSkill === "low"}
                               onChange={() => {
                                   props.setState({...props.state, driverSkill: "low"})
                               }}/>
                        <label>Low</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.driverSkill === "medium"}
                               onChange={() => {
                                   props.setState({...props.state, driverSkill: "medium"})
                               }}/>
                        <label>Medium</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.driverSkill === "high"}
                               onChange={() => {
                                   props.setState({...props.state, driverSkill: "high"})
                               }}/>
                        <label>High</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.driverSkill === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, driverSkill: "notObserved"})
                               }}/>
                        <label>Not Observed</label>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Defense Skill</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio" checked={props.state.defenseSkill === "didntDefend"}
                               onChange={() => {
                                   props.setState({...props.state, defenseSkill: "didntDefend"})
                               }}/>
                        <label>Didn't Defend</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.defenseSkill === "low"}
                               onChange={() => {
                                   props.setState({...props.state, defenseSkill: "low"})
                               }}/>
                        <label>Low</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.defenseSkill === "medium"}
                               onChange={() => {
                                   props.setState({...props.state, defenseSkill: "medium"})
                               }}/>
                        <label>Medium</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.defenseSkill === "high"}
                               onChange={() => {
                                   props.setState({...props.state, defenseSkill: "high"})
                               }}/>
                        <label>High</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.defenseSkill === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, defenseSkill: "notObserved"})
                               }}/>
                        <label>Not Observed</label>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Defense Tolerance</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio" checked={props.state.defenseTolerance === "wasntDefended"}
                               onChange={() => {
                                   props.setState({...props.state, defenseTolerance: "wasntDefended"})
                               }}/>
                        <label>Wasn't Defended</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.defenseTolerance === "low"}
                               onChange={() => {
                                   props.setState({...props.state, defenseTolerance: "low"})
                               }}/>
                        <label>Low</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.defenseTolerance === "medium"}
                               onChange={() => {
                                   props.setState({...props.state, defenseTolerance: "medium"})
                               }}/>
                        <label>Medium</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.defenseTolerance === "high"}
                               onChange={() => {
                                   props.setState({...props.state, defenseTolerance: "high"})
                               }}/>
                        <label>High</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.defenseTolerance === "notObserved"}
                               onChange={() => {
                                   props.setState({...props.state, defenseTolerance: "notObserved"})
                               }}/>
                        <label>Not Observed</label>
                    </View>
                </View>
            </View>

            <label>Comments</label>
            <textarea value={props.state.comment}
                      onChange={(event) => props.setState({...props.state, comment: event.target.value})}/>

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
