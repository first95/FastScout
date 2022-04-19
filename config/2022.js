let data = {
    "Title": "Rapid React FRC 2022",
    "Sections": [
        {
            "Title": "Prematch",
            "Parts": [
                {
                    "Name": "Scouter Name",
                    "Type": "string"
                },
                {
                    "Name": "Event",
                    "Type": "string"
                },
                {
                    "Name": "Match Level",
                    "Type": "radio",
                    "DefaultValue": "qm",
                    "Values": [
                        {
                            "Name": "Qualifiers",
                            "Value": "qm"
                        },
                        {
                            "Name": "Eighthfinals",
                            "Value": "ef"
                        },
                        {
                            "Name": "Quaterfinals",
                            "Value": "qf"
                        },
                        {
                            "Name": "Semifinals",
                            "Value": "sf"
                        },
                        {
                            "Name": "Finals",
                            "Value": "f"
                        }
                    ]
                },
                {
                    "Name": "Match #",
                    "Type": "string"
                },
                {
                    "Name": "Robot Position",
                    "Type": "radio",
                    "DefaultValue": "r1",
                    "Values": [
                        {
                            "Name": "Red - 1",
                            "Value": "r1"
                        },
                        {
                            "Name": "Red - 2",
                            "Value": "r2"
                        },
                        {
                            "Name": "Red - 3",
                            "Value": "r3"
                        },
                        {
                            "Name": "Blue - 1",
                            "Value": "b1"
                        },
                        {
                            "Name": "Blue - 2",
                            "Value": "b2"
                        },
                        {
                            "Name": "Blue - 3",
                            "Value": "b3"
                        }
                    ]
                },
                {
                    "Name": "Team #",
                    "Type": "string"
                }
            ]
        },
        {
            "Title": "Autonomous",
            "Parts": [
                {
                    "Name": "Taxi",
                    "Type": "checkbox",
                },
                {
                    "Name": "Auton Cargo Scored",
                    "Type": "radio",
                    "DefaultValue": "Not Observed",
                    "Values": [
                        {
                            "Name": "0",
                            "Value": "0"
                        },
                        {
                            "Name": "1",
                            "Value": "1"
                        },
                        {
                            "Name": "2",
                            "Value": "2"
                        },
                        {
                            "Name": "3",
                            "Value": "3"
                        },
                        {
                            "Name": "4",
                            "Value": "4"
                        },
                        {
                            "Name": "5",
                            "Value": "5"
                        },
                        {
                            "Name": "Not Observed",
                            "Value": "Not Observed"
                        }
                    ]
                }
            ]
        },
        {
            "Title": "Teleop",
            "Parts": [
                {
                    "Name": "Shots Taken",
                    "Type": "radio",
                    "DefaultValue": "Not Observed",
                    "Values": [
                        {
                            "Name": "None",
                            "Value": "None"
                        },
                        {
                            "Name": "Some",
                            "Value": "Some"
                        },
                        {
                            "Name": "Lots",
                            "Value": "Lots"
                        },
                        {
                            "Name": "Not Observed",
                            "Value": "Not Observed"
                        }
                    ]
                },
                {
                    "Name": "Shot Accuracy",
                    "Type": "radio",
                    "DefaultValue": "Not Observed",
                    "Values": [
                        {
                            "Name": "Low",
                            "Value": "Low"
                        },
                        {
                            "Name": "Medium",
                            "Value": "Medium"
                        },
                        {
                            "Name": "High",
                            "Value": "High"
                        },
                        {
                            "Name": "Not Observed",
                            "Value": "Not Observed"
                        }
                    ]
                },
                {
                    "Name": "Target Goal",
                    "Type": "radio",
                    "DefaultValue": "Not Observed",
                    "Values": [
                        {
                            "Name": "None",
                            "Value": "None"
                        },
                        {
                            "Name": "Low",
                            "Value": "Low"
                        },
                        {
                            "Name": "High",
                            "Value": "High"
                        },
                        {
                            "Name": "Both",
                            "Value": "Both"
                        },
                        {
                            "Name": "Not Observed",
                            "Value": "Not Observed"
                        }
                    ]
                },
                {
                    "Name": "Cargo Intake",
                    "Type": "radio",
                    "DefaultValue": "Not Observed",
                    "Values": [
                        {
                            "Name": "None",
                            "Value": "None"
                        },
                        {
                            "Name": "Terminal",
                            "Value": "Terminal"
                        },
                        {
                            "Name": "Ground",
                            "Value": "Ground"
                        },
                        {
                            "Name": "Both",
                            "Value": "Both"
                        },
                        {
                            "Name": "Not Observed",
                            "Value": "Not Observed"
                        }
                    ]
                },
                {
                    "Name": "Shooting Spot",
                    "Type": "radio",
                    "DefaultValue": "Not Observed",
                    "Values": [
                        {
                            "Name": "None",
                            "Value": "None"
                        },
                        {
                            "Name": "Close",
                            "Value": "Close"
                        },
                        {
                            "Name": "Far",
                            "Value": "Far"
                        },
                        {
                            "Name": "Adjustable",
                            "Value": "Adjustable"
                        },
                        {
                            "Name": "Not Observed",
                            "Value": "Not Observed"
                        }
                    ]
                },
            ]
        },
        {
            "Title": "Endgame",
            "Parts": [
                {
                    "Name": "Attempted Climb",
                    "Type": "radio",
                    "DefaultValue": "Not Observed",
                    "Values": [
                        {
                            "Name": "Bar 1",
                            "Value": "Bar 1"
                        },
                        {
                            "Name": "Bar 2",
                            "Value": "Bar 2"
                        },
                        {
                            "Name": "Bar 3",
                            "Value": "Bar 3"
                        },
                        {
                            "Name": "Bar 4",
                            "Value": "Bar 4"
                        },
                        {
                            "Name": "Not Attempted",
                            "Value": "Not Attempted"
                        },
                        {
                            "Name": "Not Observed",
                            "Value": "Not Observed"
                        }
                    ]
                },
                {
                    "Name": "Successful Climb",
                    "Type": "radio",
                    "DefaultValue": "Not Observed",
                    "Values": [
                        {
                            "Name": "Bar 1",
                            "Value": "Bar 1"
                        },
                        {
                            "Name": "Bar 2",
                            "Value": "Bar 2"
                        },
                        {
                            "Name": "Bar 3",
                            "Value": "Bar 3"
                        },
                        {
                            "Name": "Bar 4",
                            "Value": "Bar 4"
                        },
                        {
                            "Name": "None",
                            "Value": "None"
                        },
                        {
                            "Name": "Not Attempted",
                            "Value": "Not Attempted"
                        },
                        {
                            "Name": "Not Observed",
                            "Value": "Not Observed"
                        }
                    ]
                },
                {
                    "Name": "Climb Time",
                    "Type": "radio",
                    "DefaultValue": "Not Observed",
                    "Values": [
                        {
                            "Name": "0-10 Seconds",
                            "Value": "0-10"
                        },
                        {
                            "Name": "10-20 Seconds",
                            "Value": "10-20"
                        },
                        {
                            "Name": "20-30 Seconds",
                            "Value": "20-30"
                        },
                        {
                            "Name": ">30 Seconds",
                            "Value": ">30"
                        },
                        {
                            "Name": "Not Attempted",
                            "Value": "Not Attempted"
                        },
                        {
                            "Name": "Not Observed",
                            "Value": "Not Observed"
                        }
                    ]
                }
            ]
        },
        {
            "Title": "Postmatch",
            "Parts": [
                {
                    "Name": "Driver Skill",
                    "Type": "radio",
                    "DefaultValue": "Not Observed",
                    "Values": [
                        {
                            "Name": "Low",
                            "Value": "Low"
                        },
                        {
                            "Name": "Medium",
                            "Value": "Medium"
                        },
                        {
                            "Name": "High",
                            "Value": "High"
                        },
                        {
                            "Name": "Not Observed",
                            "Value": "Not Observed"
                        }
                    ]
                },
                {
                    "Name": "Defense Skill",
                    "Type": "radio",
                    "DefaultValue": "Not Observed",
                    "Values": [
                        {
                            "Name": "Didn't Defend",
                            "Value": "Didn't Defend"
                        },
                        {
                            "Name": "Low",
                            "Value": "Low"
                        },
                        {
                            "Name": "Medium",
                            "Value": "Medium"
                        },
                        {
                            "Name": "High",
                            "Value": "High"
                        },
                        {
                            "Name": "Not Observed",
                            "Value": "Not Observed"
                        }
                    ]
                },
                {
                    "Name": "Defense Tolerance",
                    "Type": "radio",
                    "DefaultValue": "Not Observed",
                    "Values": [
                        {
                            "Name": "Wasn't Defended",
                            "Value": "Wasn't Defended"
                        },
                        {
                            "Name": "Low",
                            "Value": "Low"
                        },
                        {
                            "Name": "Medium",
                            "Value": "Medium"
                        },
                        {
                            "Name": "High",
                            "Value": "High"
                        },
                        {
                            "Name": "Not Observed",
                            "Value": "Not Observed"
                        }
                    ]
                },
                {
                    "Name": "Comments",
                    "Type": "textarea",
                }
            ]
        }
    ]
}

export default data;
