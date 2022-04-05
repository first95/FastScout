import React from 'react';
import {StyleSheet, View, Text} from "react-native";

export default function Prematch(props) {
    return (<>
        <h1>Prematch</h1>

        <View style={styles.container}>
            <label htmlFor={"scouter"}>Scouter Name</label>
            <input id={"scouter"}
                   onChange={(event) => props.setState({...props.state, scouterName: event.target.value})}/>

            <label htmlFor={"event"}>Event</label>
            <input id={"event"} onChange={(event) => props.setState({...props.state, event: event.target.value})}/>

            <h3 style={{justifySelf: "center", alignSelf: "center"}}>Match Level</h3>
            <View>
                <View style={styles.input}>
                    <input type="radio" id="mlQualifiers" name="qualifiers" value="qualifiers" checked={props.state.matchLevel === "qualifiers"}
                           onChange={(event) => props.setState({...props.state, matchLevel: event.target.value})}/>
                    <label htmlFor="mlQualifiers">Qualifiers</label>
                </View>

                <View style={styles.input}>
                    <input type="radio" id="mlEighthfinals" name="eighthfinals" value="eighthfinals" checked={props.state.matchLevel === "eighthfinals"}
                           onChange={(event) => props.setState({...props.state, matchLevel: event.target.value})}/>
                    <label htmlFor="mlEighthfinals">Eighthfinals</label>
                </View>

                <View style={styles.input}>
                    <input type="radio" id="mlQuarterfinals" name="quarterfinals" value="quarterfinals" checked={props.state.matchLevel === "quarterfinals"}
                           onChange={(event) => props.setState({...props.state, matchLevel: event.target.value})}/>
                    <label htmlFor="mlQuarterfinals">Quarterfinals</label>
                </View>

                <View style={styles.input}>
                    <input type="radio" id="mlSemifinals" name="semifinals" value="semifinals" checked={props.state.matchLevel === "semifinals"}
                           onChange={(event) => props.setState({...props.state, matchLevel: event.target.value})}/>
                    <label htmlFor="mlSemifinals">Semifinals</label>
                </View>

                <View style={styles.input}>
                    <input type="radio" id="mlFinals" name="finals" value="finals" checked={props.state.matchLevel === "finals"}
                           onChange={(event) => props.setState({...props.state, matchLevel: event.target.value})}/>
                    <label htmlFor="mlFinals">Finals</label>
                </View>
            </View>

            <label htmlFor={"matchNumber"}>Match #</label>
            <input id={"matchNumber"}
                   onChange={(event) => props.setState({...props.state, matchNumber: event.target.value})}/>

            <h3 style={{justifySelf: "center", alignSelf: "center"}}>Robot Position</h3>

            <View style={styles.input}>
                <View>
                    <View style={styles.input}>
                        <input type="radio" id="robotRed1" name="red1" value="red1" checked={props.state.robotPosition === "red1"}
                               onChange={(event) => props.setState({...props.state, robotPosition: event.target.value})}/>
                        <label htmlFor="robotRed1">Red - 1</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" id="robotRed2" name="red2" value="red2" checked={props.state.robotPosition === "red2"}
                               onChange={(event) => props.setState({...props.state, robotPosition: event.target.value})}/>
                        <label htmlFor="robotRed1">Red - 2</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" id="robotRed3" name="red3" value="red3" checked={props.state.robotPosition === "red3"}
                               onChange={(event) => props.setState({...props.state, robotPosition: event.target.value})}/>
                        <label htmlFor="robotRed1">Red - 3</label>
                    </View>
                </View>
                <View>
                    <View style={styles.input}>
                        <input type="radio" id="robotBlue1" name="blue1" value="blue1" checked={props.state.robotPosition === "blue1"}
                               onChange={(event) => props.setState({...props.state, robotPosition: event.target.value})}/>
                        <label htmlFor="robotBlue1">Blue - 1</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" id="robotBlue2" name="blue2" value="blue2" checked={props.state.robotPosition === "blue2"}
                               onChange={(event) => props.setState({...props.state, robotPosition: event.target.value})}/>
                        <label htmlFor="robotBlue2">Blue - 2</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" id="robotBlue3" name="blue3" value="blue3" checked={props.state.robotPosition === "blue3"}
                               onChange={(event) => props.setState({...props.state, robotPosition: event.target.value})}/>
                        <label htmlFor="robotBlue3">Blue - 3</label>
                    </View>
                </View>
            </View>

            <label htmlFor={"teamNumber"}>Team #</label>
            <input id={"teamNumber"}
                   onChange={(event) => props.setState({...props.state, teamNumber: event.target.value})}/>
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
        display: "grid", gap: "10px", padding: "10px", gridTemplateColumns: "auto auto",
    }, input: {
        display: "flex", flexDirection: "row"
    }
});
