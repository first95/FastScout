import {StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import {IAutonState, IEndgameState, IPostmatchState, IPreMatchState, ITeleopState} from "./types";
import Prematch from "../ScoutFlow/Prematch";
import Autonomous from "../ScoutFlow/Autonomous";
import Teleop from "../ScoutFlow/Teleop";
import Endgame from "../ScoutFlow/Endgame";
import Postmatch from "../ScoutFlow/Postmatch";
import QRPage from "../QRPage";
import {Button} from "react-native-paper";

let initPreMatchState: IPreMatchState = {
    event: "",
    matchLevel: "qualifiers",
    matchNumber: "",
    robotPosition: "red1",
    scoutName: "",
    teamNumber: ""
}

let initAutonState: IAutonState = {
    cargoScored: "notObserved",
    targetGoal: "notObserved",
    taxi: false
}

let initTeleopState: ITeleopState = {
    cargoIntake: "notObserved",
    shootingSpot: "notObserved",
    shotAccuracy: "notObserved",
    shotsTaken: "notObserved",
    targetGoal: "notObserved"
}

let initEndgameState: IEndgameState = {
    attemptedClimb: "notObserved",
    cargoIntake: "notObserved",
    climbTime: "notObserved",
    shootingSpot: "notObserved",
    shotAccuracy: "notObserved",
    successfulClimb: "notObserved",
    targetGoal: "notObserved"
}

let initPostmatchState: IPostmatchState = {
    defenseSkill: "notObserved",
    defenseTolerance: "notObserved",
    driverSkill: "notObserved",
    comment: ""
}

interface IProps {
    teams: any;
    schedule: any;
}

export default function Dashboard(props: IProps) {
    const [preMatchState, setPreMatchState] = useState<IPreMatchState>(initPreMatchState);
    const [autonState, setAutonState] = useState<IAutonState>(initAutonState);
    const [teleopState, setTeleopState] = useState<ITeleopState>(initTeleopState);
    const [endgameState, setEndgameState] = useState<IEndgameState>(initEndgameState);
    const [postmatchState, setPostmatchState] = useState<IPostmatchState>(initPostmatchState);
    const [formVisible, setFormVisible] = useState(true);
    const [qrString, setQrString] = useState("ujelkjdha3kjfh3wkjahfkjdshfkj3hwkdhfkjah");

    const submitForm = () => {
        console.log("== DEBUG == States: ", preMatchState, autonState, teleopState, endgameState, postmatchState);

        let qrCode = "";
        // format state to string
        for (let key in preMatchState) { // @ts-ignore
            qrCode += preMatchState[key] + " ";
        }
        for (let key in autonState) { // @ts-ignore
            qrCode += autonState[key] + " ";
        }
        for (let key in teleopState) { // @ts-ignore
            qrCode += teleopState[key] + " ";
        }
        for (let key in endgameState) { // @ts-ignore
            qrCode += endgameState[key] + " ";
        }
        for (let key in postmatchState) { // @ts-ignore
            qrCode += postmatchState[key] + " ";
        }

        console.log("== DEBUG == QR Code string: ", qrCode);
        setQrString(qrCode);
        setFormVisible(false);
    }

    const validateData = () => {
        // TODO: validate state data before QR generation
    }

    const resetState = () => {
        setPreMatchState(initPreMatchState);
        setAutonState(initAutonState);
        setTeleopState(initTeleopState);
        setEndgameState(initEndgameState);
        setPostmatchState(initPostmatchState);
    }

    useEffect(() => {
        // setQrString("TEST123");
        // setFormVisible(false);
    }, [props])

    return (
        <>
            {formVisible ? (
                <View style={styles.container}>
                    <Prematch state={preMatchState} setState={setPreMatchState}/>
                    <Autonomous state={autonState} setState={setAutonState}/>
                    <Teleop state={teleopState} setState={setTeleopState}/>
                    <Endgame state={endgameState} setState={setEndgameState}/>
                    <Postmatch state={postmatchState} setState={setPostmatchState}/>
                    <Button onPress={() => submitForm()}>Create QR Code</Button>
                </View>
            ) : (
                <QRPage qrString={qrString} setFormVisible={setFormVisible} resetState={resetState}/>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    }
});
