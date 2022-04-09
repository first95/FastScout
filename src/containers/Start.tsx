import {StyleSheet, Text, View} from "react-native";
import {Button, shadow, TextInput} from "react-native-paper";
import {useState} from "react";
import styled from "styled-components/native";
import tbaInterface from "../../Services/TBAInterface";

interface IProps {
    navigation: any;
    setTeams: any;
    setSchedule: any;
}

export default function Start(props: IProps) {
    const [allowContinue, setAllowContinue] = useState(false);
    const [eventCode, setEventCode] = useState("2022mabos");
    const [error, setError] = useState("");

    const startScouting = async () => {
        if (eventCode === "") {
            setError("* Please enter an event code!")
            return;
        }

        let teams = await tbaInterface.getTeams(eventCode);
        let schedule = await tbaInterface.getSchedule(eventCode);

        console.log("Teams: ", teams)
        console.log("Schedule: ", schedule)

        if(teams == null) {
            setError("* Unable to get teams for event code: " + eventCode);
            return;
        }

        if(schedule == null) {
            setError("* Unable to get schedule for event code: " + eventCode);
            return;
        }

        props.navigation.navigate('Dashboard')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Fast Scout!</Text>
            <Text style={styles.subTitle}>Please enter your event code to continue!</Text>

            <View style={{
                marginTop: "1em",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{paddingRight: "0.25em"}}>Event Code:</Text>
                <TextInput value={eventCode} onChangeText={(event) => setEventCode(event.toString())} dense={true} mode={'flat'}/>
            </View>

            <Text style={{color: "red"}}>{error}</Text>

            <View style={{marginTop: "0.5em"}}>
                <Continue visible={eventCode !== ""} onPress={() => startScouting()}>Continue</Continue>
            </View>

            {/*TODO: Add loader*/}
        </View>
    )
}

interface IContinueProps {
    visible: boolean;
}

const Continue = styled(Button)<IContinueProps>`
  visibility: ${props => props.visible ? "visible" : "hidden"};;
  opacity: ${props => props.visible ? 1 : 0};
  transition: all 0.5s;
`;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: "24px"
    },
    subTitle: {
        fontSize: "18px"
    }
});
