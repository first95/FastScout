import {StyleSheet, Text, View} from "react-native";
import {IPostmatchState} from "../Dashboard/types";
import Header from "../../components/Header";
import {TextInput} from "react-native-paper";

interface setState {
    (setState: IPostmatchState): void;
}

interface IProps {
    state: IPostmatchState;
    setState: setState;
}

export default function Postmatch(props: IProps) {
    return (
        <View style={styles.viewer}>
            <Header text={"Postmatch"} />

            <View style={styles.container}>
                <Text style={{justifySelf: "center", alignSelf: "center"}}>Driver Skill</Text>
                <View>
                    <View style={styles.input}>
                        <input status={props.state.driverSkill === "low"}
                               onPress={() => {
                                   props.setState({...props.state, driverSkill: "low"})
                               }}/>
                        <Text>Low</Text>
                    </View>

                    <View style={styles.input}>
                        <input status={props.state.driverSkill === "medium"}
                               onPress={() => {
                                   props.setState({...props.state, driverSkill: "medium"})
                               }}/>
                        <Text>Medium</Text>
                    </View>

                    <View style={styles.input}>
                        <input status={props.state.driverSkill === "high"}
                               onPress={() => {
                                   props.setState({...props.state, driverSkill: "high"})
                               }}/>
                        <Text>High</Text>
                    </View>

                    <View style={styles.input}>
                        <input status={props.state.driverSkill === "notObserved"}
                               onPress={() => {
                                   props.setState({...props.state, driverSkill: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={{justifySelf: "center", alignSelf: "center"}}>Defense Skill</Text>
                <View>
                    <View style={styles.input}>
                        <input status={props.state.defenseSkill === "didntDefend"}
                               onPress={() => {
                                   props.setState({...props.state, defenseSkill: "didntDefend"})
                               }}/>
                        <Text>Didn't Defend</Text>
                    </View>

                    <View style={styles.input}>
                        <input status={props.state.defenseSkill === "low"}
                               onPress={() => {
                                   props.setState({...props.state, defenseSkill: "low"})
                               }}/>
                        <Text>Low</Text>
                    </View>

                    <View style={styles.input}>
                        <input status={props.state.defenseSkill === "medium"}
                               onPress={() => {
                                   props.setState({...props.state, defenseSkill: "medium"})
                               }}/>
                        <Text>Medium</Text>
                    </View>

                    <View style={styles.input}>
                        <input status={props.state.defenseSkill === "high"}
                               onPress={() => {
                                   props.setState({...props.state, defenseSkill: "high"})
                               }}/>
                        <Text>High</Text>
                    </View>

                    <View style={styles.input}>
                        <input status={props.state.defenseSkill === "notObserved"}
                               onPress={() => {
                                   props.setState({...props.state, defenseSkill: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={{justifySelf: "center", alignSelf: "center"}}>Defense Tolerance</Text>
                <View>
                    <View style={styles.input}>
                        <input status={props.state.defenseTolerance === "wasntDefended"}
                               onPress={() => {
                                   props.setState({...props.state, defenseTolerance: "wasntDefended"})
                               }}/>
                        <Text>Wasn't Defended</Text>
                    </View>

                    <View style={styles.input}>
                        <input status={props.state.defenseTolerance === "low"}
                               onPress={() => {
                                   props.setState({...props.state, defenseTolerance: "low"})
                               }}/>
                        <Text>Low</Text>
                    </View>

                    <View style={styles.input}>
                        <input status={props.state.defenseTolerance === "medium"}
                               onPress={() => {
                                   props.setState({...props.state, defenseTolerance: "medium"})
                               }}/>
                        <Text>Medium</Text>
                    </View>

                    <View style={styles.input}>
                        <input status={props.state.defenseTolerance === "high"}
                               onPress={() => {
                                   props.setState({...props.state, defenseTolerance: "high"})
                               }}/>
                        <Text>High</Text>
                    </View>

                    <View style={styles.input}>
                        <input status={props.state.defenseTolerance === "notObserved"}
                               onPress={() => {
                                   props.setState({...props.state, defenseTolerance: "notObserved"})
                               }}/>
                        <Text>Not Observed</Text>
                    </View>
                </View>
            </View>

            <Text>Comments</Text>
            <TextInput value={props.state.comment}
                      onChange={(text) => props.setState({...props.state, comment: text})}/>

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
        display: "flex", flexDirection: "row"
    }
});
