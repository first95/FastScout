import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {IPreMatchState} from "../Dashboard/types";
import Header from "../../components/Header";
import {RadioButton, TextInput} from "react-native-paper";

interface setState {
    (setState: IPreMatchState): void;
}

interface IProps {
    state: IPreMatchState;
    setState: setState;
}

export default function Prematch(props: IProps) {
    return (
        <View style={styles.viewer}>
            <Header text={"Prematch"}/>

            <View style={styles.container}>
                <Text>Scouter Name</Text>
                <TextInput dense={true} value={props.state.scoutName}
                           onChange={(event) => props.setState({...props.state, scoutName: (event.target.value)})}/>

                <Text>Event</Text>
                <TextInput dense={true} value={props.state.event}
                           onChange={(event) => props.setState({...props.state, event: event.target.value})}/>

                <Text style={{justifySelf: "center", alignSelf: "center"}}>Match Level</Text>
                <View>
                    <View style={styles.input}>
                        <RadioButton status={props.state.matchLevel === "qualifiers" ? "checked" : "unchecked"}
                                     onPress={() => props.setState({...props.state, matchLevel: "qualifiers"})}/>
                        <Text>Qualifiers</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.matchLevel === "eighthfinals" ? "checked" : "unchecked"}
                                     onPress={() => props.setState({...props.state, matchLevel: "eighthfinals"})}/>
                        <Text>Eighthfinals</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.matchLevel === "quarterfinals" ? "checked" : "unchecked"}
                                     onPress={() => props.setState({...props.state, matchLevel: "quarterfinals"})}/>
                        <Text>Quarterfinals</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.matchLevel === "semifinals" ? "checked" : "unchecked"}
                                     onPress={() => props.setState({...props.state, matchLevel: "semifinals"})}/>
                        <Text>Semifinals</Text>
                    </View>

                    <View style={styles.input}>
                        <RadioButton status={props.state.matchLevel === "finals" ? "checked" : "unchecked"}
                                     onPress={() => props.setState({...props.state, matchLevel: "finals"})}/>
                        <Text>Finals</Text>
                    </View>
                </View>

                <Text>Match #</Text>
                <TextInput dense={true} onChange={(text) => props.setState({...props.state, matchNumber: text})}/>

                <Text style={{justifySelf: "center", alignSelf: "center"}}>Robot Position</Text>

                <View style={styles.input}>
                    <View>
                        <View style={styles.input}>
                            <RadioButton status={props.state.robotPosition === "red1" ? "checked" : "unchecked"}
                                         onPress={() => props.setState({
                                             ...props.state,
                                             robotPosition: "red1"
                                         })}/>
                            <Text>Red - 1</Text>
                        </View>

                        <View style={styles.input}>
                            <RadioButton status={props.state.robotPosition === "red2" ? "checked" : "unchecked"}
                                         onPress={() => props.setState({
                                             ...props.state,
                                             robotPosition: "red2"
                                         })}/>
                            <Text>Red - 2</Text>
                        </View>

                        <View style={styles.input}>
                            <RadioButton status={props.state.robotPosition === "red3" ? "checked" : 'unchecked'}
                                         onPress={() => props.setState({
                                             ...props.state,
                                             robotPosition: "red3"
                                         })}/>
                            <Text>Red - 3</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.input}>
                            <RadioButton status={props.state.robotPosition === "blue1" ? "checked" : "unchecked"}
                                   onPress={() => props.setState({
                                       ...props.state,
                                       robotPosition: "blue1"
                                   })}/>
                            <Text>Blue - 1</Text>
                        </View>

                        <View style={styles.input}>
                            <RadioButton status={props.state.robotPosition === "blue2" ? "checked" : "unchecked"}
                                   onPress={() => props.setState({
                                       ...props.state,
                                       robotPosition: "blue2"
                                   })}/>
                            <Text>Blue - 2</Text>
                        </View>

                        <View style={styles.input}>
                            <RadioButton status={props.state.robotPosition === "blue3" ? "checked" : "unchecked"}
                                   onPress={() => props.setState({
                                       ...props.state,
                                       robotPosition: "blue3"
                                   })}/>
                            <Text>Blue - 3</Text>
                        </View>
                    </View>
                </View>

                <Text>Team #</Text>
                <TextInput dense={true} onChange={(text) => props.setState({...props.state, teamNumber: text})}/>
            </View>

            {/*Horizontal Rule*/}
            <View style={{flexDirection: 'row', alignItems: 'center', width: "100vw"}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
                <View>
                    <Text style={{width: 50, textAlign: 'center'}}>Next</Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
            </View>
        </View>)
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
