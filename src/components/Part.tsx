import {ConfigPart} from "../../config/config.types";
import {Checkbox, RadioButton, Text, TextInput} from "react-native-paper";
import React from "react";
import {ISection, ISectionPart} from "../containers/Dashboard/Dashboard";
import {StyleSheet, View} from "react-native";

interface IProps {
    partConfig: ConfigPart;
    partState: ISectionPart;
    state: Array<ISection>;
    setState: any;
}

export default function Part(props: IProps) {
    let currentPart = props.partConfig;
    let part: JSX.Element

    if (currentPart.Type === "string") {
        part = (
            <>
                <Text style={{alignSelf: "center"}}>{currentPart.Name}</Text>
                <TextInput dense={true} value={props.partState.Value}
                           onChangeText={text => {
                               props.partState.Value = text;
                               props.setState([...props.state])
                           }}
                />
            </>
        )
    } else if (currentPart.Type === "radio") {
        part = (
            <>
                <Text style={{alignSelf: "center"}}>{currentPart.Name}</Text>
                <View style={styles.radio}>
                    {currentPart.Values?.map((value, index) => {
                        return (
                            <View key={index} style={{
                                flexBasis: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <RadioButton status={props.partState.Value === value.Value ? "checked" : "unchecked"}
                                             onPress={() => {
                                                 props.partState.Value = value.Value;
                                                 props.setState([...props.state])
                                             }}
                                />
                                <Text>{value.Name}</Text>
                            </View>
                        )
                    })}
                </View>
            </>
        )
    } else if (currentPart.Type === "checkbox") {
        part = (
            <>
                <Text style={{alignSelf: "center"}}>{currentPart.Name}</Text>
                <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Checkbox status={props.partState.Value == "true" ? "checked" : "unchecked"}
                              onPress={() => {
                                  props.partState.Value = props.partState.Value == "true" ? "false" : "true";
                                  props.setState([...props.state])
                              }}/>
                </View>
            </>
        );
    } else if (currentPart.Type === "textarea") {
        part = (
            <>
                <Text>{currentPart.Name}</Text>
                <TextInput value={props.partState.Value}
                           style={{minHeight: "200px", minWidth: "200px"}}
                           multiline={true}
                           onChangeText={(text) => {
                               props.partState.Value = text;
                               props.setState([...props.state])
                           }}/>
            </>
        )
    } else {
        part = (
            <>
                <Text>Part type not defined!</Text>
                <Text> </Text>
            </>
        )
    }

    return (
        <>
            {part}
        </>
    )
}

const styles = StyleSheet.create({
    radio: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
        // border: "purple solid 2px"
    }
});
