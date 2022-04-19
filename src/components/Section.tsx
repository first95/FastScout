import {StyleSheet, View} from "react-native";
import {ConfigSection} from "../../config/config.types";
import Header from "./Header";
import Part from "./Part";
import {ISection} from "../containers/Dashboard/Dashboard";
import {Text} from "react-native-paper";
import React from "react";

interface IProps {
    currentTeamScouting: string;
    sectionConfig: ConfigSection;
    sectionState: ISection | undefined
    state: Array<ISection>
    setState: any;
}

export default function Section(props: IProps) {
    return (
        <View style={styles.viewer}>
            <View style={{marginBottom: "2em"}}>
                <Text>Currently Scouting: {props.currentTeamScouting}</Text>
                <Header text={props.sectionConfig.Title}/>
            </View>

            <View style={styles.container}>
                {props.sectionConfig.Parts.map((part, index) => {
                    let partState = props.sectionState?.Parts.find(statePart => statePart.Name === part.Name);
                    if (partState == null) return <></>

                    return (
                        <>
                            <Part key={index} partConfig={part}
                                  partState={partState}
                                  state={props.state} setState={props.setState}/>

                            <View style={{width: "100%", marginTop: 20, marginBottom:  20, borderBottom: "black solid 1px"}}/>
                            <View style={{width: "100%", marginTop: 20, marginBottom: 20, borderBottom: "black solid 1px"}}/>

                        </>
                    )
                })}
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', width: "80vw", margin: "2em"}}>
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
        // border: "red solid 2px"
    },
    container: {
        // @ts-ignore
        display: "grid",
        // gap: "10px",
        gridTemplateColumns: "auto auto",
        // border: "blue solid 2px"
    }
});

