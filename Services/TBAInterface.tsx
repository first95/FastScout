import axios from "axios";

class TBAInterface {
    private authKey: string;

    constructor() {
        // Read-only API key - please use your own if you fork/clone this project
        // thebluealliance.com, Account menu lets you create a free account and generate
        // your own.
        this.authKey = "hNDnK23dYcPhS6V5SKwfZK8l9VKtWZyZBDKYQRQh5aUqWiKj5KyvKOLDJW49YO00";
    }

    /**
     * Get list of teams in event
     *
     * @param {eventCode} eventCode the event code (i.e. 2020caln) to pull the team list
     */
    async getTeams(eventCode: string) {
        if (this.authKey) {
            let url = "https://www.thebluealliance.com/api/v3/event/" + eventCode + "/teams/simple";

            let request = await axios({
                method: 'get',
                url: url,
                headers: {"X-TBA-Auth-Key": this.authKey}
            });


            if (request.status == 200) {
                if (request.data.length != 0)
                    return request.data;
                else
                    return {}
            }
            else {
                return undefined
            }
        }
    }

    /**
     * Get schedule for event
     *
     * @param {eventCode} eventCode the event code (i.e. 2020caln) to pull the team list
     */
    async getSchedule(eventCode: string) {
        if (this.authKey) {
            let url = "https://www.thebluealliance.com/api/v3/event/" + eventCode + "/matches/simple";

            let request = await axios({
                method: 'get',
                url: url,
                headers: {"X-TBA-Auth-Key": this.authKey}
            });

            if (request.status == 200) {
                if (request.data.length != 0)
                    return request.data;
                else
                    return {}
            }
            else {
                return undefined
            }
        }
    }
}

let tbaInterface = new TBAInterface();
export default tbaInterface;
