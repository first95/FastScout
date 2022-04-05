import {StyleSheet, Text, View} from "react-native";

export default function Autonomous() {
    return (
        <>
            <h1>Autonomous</h1>

            <View style={styles.container}>
                <label htmlFor={"taxi"}>Taxi</label>
                <input type="checkbox" id={"taxi"} name={"taxi"} value={"taxied"}/>

                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Auton Cargo Scored</h3>
                <View>
                    <View style={styles.input}>
                        <View style={styles.input}>
                            <input type="radio" id="acs0" name="0" value="0"/>
                            <label htmlFor="acs0">0</label>
                        </View>

                        <View style={styles.input}>
                            <input type="radio" id="acs1" name="1" value="1"/>
                            <label htmlFor="acs1">1</label>
                        </View>

                        <View style={styles.input}>
                            <input type="radio" id="acs2" name="2" value="2"/>
                            <label htmlFor="acs2">2</label>
                        </View>
                    </View>

                    <View style={styles.input}>
                        <View style={styles.input}>
                            <input type="radio" id="acs3" name="3" value="3"/>
                            <label htmlFor="acs3">3</label>
                        </View>

                        <View style={styles.input}>
                            <input type="radio" id="acs4" name="4" value="4"/>
                            <label htmlFor="acs4">4</label>
                        </View>

                        <View style={styles.input}>
                            <input type="radio" id="acs5" name="5" value="5"/>
                            <label htmlFor="acs5">5</label>
                        </View>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" id="acsNO" name="notobserved" value="notobserved"/>
                        <label htmlFor="acsNO">Not Observed</label>
                    </View>
                </View>

                <h3 style={{justifySelf: "center", alignSelf: "center"}}>Auton Target Goal</h3>
                <View>
                    <View style={styles.input}>
                        <input type="radio" id="atgNone" name="none" value="none"/>
                        <label htmlFor="atgNone">None</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" id="atgLow" name="low" value="low"/>
                        <label htmlFor="atgLow">Low</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" id="atgHigh" name="high" value="high"/>
                        <label htmlFor="atgHigh">High</label>
                    </View>

                    <View style={styles.input}>
                        <input type="radio" id="atgNO" name="notobserved" value="notobserved"/>
                        <label htmlFor="atgNO">Not Observed</label>
                    </View>
                </View>
            </View>

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
        display: "grid",
        gap: "10px",
        padding: "10px",
        gridTemplateColumns: "auto auto",
    },
    input: {
        display: "flex",
        flexDirection: "row"
    }
});
