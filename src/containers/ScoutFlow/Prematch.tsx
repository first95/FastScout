import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {IPreMatchState} from "../Dashboard/types";

interface setState {
    (setState: IPreMatchState): void;
}

interface IProps {
    state: IPreMatchState;
    setState: setState;
}

export default function Prematch(props: IProps) {
    return (
        <>
            <h1>Prematch</h1>

            <View style={styles.container}>
                <label>Scouter Name</label>
                <input value={props.state.scoutName}
                       onChange={(event) => props.setState({...props.state, scoutName: (event.target.value)})}/>

                <label>Event</label>
                <input value={props.state.event}
                       onChange={(event) => props.setState({...props.state, event: event.target.value})}/>

                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Match Level</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio" checked={props.state.matchLevel === "qualifiers"}
                               onChange={(event) => props.setState({...props.state, matchLevel: "qualifiers"})}/>
                        <label>Qualifiers</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.matchLevel === "eighthfinals"}
                               onChange={(event) => props.setState({...props.state, matchLevel: "eighthfinals"})}/>
                        <label>Eighthfinals</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.matchLevel === "quarterfinals"}
                               onChange={(event) => props.setState({...props.state, matchLevel: "quarterfinals"})}/>
                        <label>Quarterfinals</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.matchLevel === "semifinals"}
                               onChange={(event) => props.setState({...props.state, matchLevel: "semifinals"})}/>
                        <label>Semifinals</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" checked={props.state.matchLevel === "finals"}
                               onChange={(event) => props.setState({...props.state, matchLevel: "finals"})}/>
                        <label>Finals</label>
                    </View>
                </View>

                <label>Match #</label>
                <input onChange={(event) => props.setState({...props.state, matchNumber: event.target.value})}/>

                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Robot Position</h3>

                <View style={styles.input}>
                    <View>
                        <View style={styles.input}>
                            <input type="radio" checked={props.state.robotPosition === "red1"}
                                   onChange={(event) => props.setState({
                                       ...props.state,
                                       robotPosition: "red1"
                                   })}/>
                            <label>Red - 1</label>
                        </View>

                        <View style={styles.input}>
                            <input type="radio" checked={props.state.robotPosition === "red2"}
                                   onChange={(event) => props.setState({
                                       ...props.state,
                                       robotPosition: "red2"
                                   })}/>
                            <label>Red - 2</label>
                        </View>

                        <View style={styles.input}>
                            <input type="radio" checked={props.state.robotPosition === "red3"}
                                   onChange={(event) => props.setState({
                                       ...props.state,
                                       robotPosition: "red3"
                                   })}/>
                            <label>Red - 3</label>
                        </View>
                    </View>
                    <View>
                        <View style={styles.input}>
                            <input type="radio" checked={props.state.robotPosition === "blue1"}
                                   onChange={(event) => props.setState({
                                       ...props.state,
                                       robotPosition: "blue1"
                                   })}/>
                            <label>Blue - 1</label>
                        </View>

                        <View style={styles.input}>
                            <input type="radio" checked={props.state.robotPosition === "blue2"}
                                   onChange={(event) => props.setState({
                                       ...props.state,
                                       robotPosition: "blue2"
                                   })}/>
                            <label>Blue - 2</label>
                        </View>

                        <View style={styles.input}>
                            <input type="radio" checked={props.state.robotPosition === "blue3"}
                                   onChange={(event) => props.setState({
                                       ...props.state,
                                       robotPosition: "blue3"
                                   })}/>
                            <label>Blue - 3</label>
                        </View>
                    </View>
                </View>

                <label>Team #</label>
                <input onChange={(event) => props.setState({...props.state, teamNumber: event.target.value})}/>
            </View>

            {/*Horizontal Rule*/}
            <View style={{flexDirection: 'row', alignItems: 'center', width: "100vw"}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
                <View>
                    <Text style={{width: 50, textAlign: 'center'}}>Next</Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
            </View>
        </>)
}

const styles = StyleSheet.create({
    container: {
        // @ts-ignore
        display: "grid", gap: "10px", padding: "10px", gridTemplateColumns: "auto auto",
    }, input: {
        display: "flex", flexDirection: "row"
    }
});
