import {StyleSheet, View} from "react-native";
import data from "../../../config/2022";
import Section from "../../components/Section";
import React, {useEffect, useState} from "react";
import Header from "../../components/Header";
import {Button, Text} from "react-native-paper";
import QRPage from "../QRPage";

interface IProps {
    teams: any;
    schedule: any;
}

export interface ISection {
    Section: string;
    Parts: Array<ISectionPart>;
}

export interface ISectionPart {
    Name: string;
    Value: string;
}

export default function Dashboard(props: IProps) {
    let initState: Array<ISection> = data.Sections.map((section): ISection => {
        return {
            "Section": section.Title,
            "Parts": section.Parts.map((part): ISectionPart => {
                return {
                    "Name": part.Name,
                    "Value": part.DefaultValue ?? ""
                }
            })
        }
    })
    console.log("== DEBUG == Init State: ", initState)

    const [appState, setAppState] = useState<Array<ISection>>(initState);
    const [qrString, setQrString] = useState("TEST TEST TEST TEST");
    const [formVisible, setFormVisible] = useState(true);
    const [currentTeamScouting, setCurrentTeamScouting] = useState("None");

    useEffect(() => {
        console.log("APP STATE: ", appState);
    }, [appState])

    const submitForm = () => {
        console.log("== DEBUG == Current State During Submit: ", appState);

        let qrCode = "";

        // Format state to string
        // Using for loop instead of for each because of type errors!
        for (let i = 0; i < appState.length; i++) {
            for (let j = 0; j < appState[i].Parts.length; j++) {
                qrCode += appState[i].Parts[j].Value;
                qrCode += " ";
            }
        }

        console.log("== DEBUG == QR Code string: ", qrCode);
        setQrString(qrCode);
        setFormVisible(false);
    }

    return (
        <>
            {formVisible ? (
                <View style={styles.container}>
                    <Header text={data.Title}/>

                    <View style={{flexDirection: 'row', alignItems: 'center', width: "80vw", margin: "2em"}}>
                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
                        <View>
                            <Text style={{width: 50, textAlign: 'center'}}>Next</Text>
                        </View>
                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
                    </View>

                    {data.Sections.map((section: any, index) => {
                        return (
                            <Section key={index} sectionConfig={section}
                                     sectionState={appState.find(state => state.Section === section.Title)}
                                     state={appState} setState={setAppState}/>
                        )
                    })}

                    <Button onPress={() => submitForm()}>Generate QR Code</Button>
                </View>
            ) : (
                <QRPage qrString={qrString} setFormVisible={setFormVisible} resetState={() => setAppState(initState)}/>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
});
