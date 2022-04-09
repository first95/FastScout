export interface IPreMatchState {
    scoutName: string;
    event: string;
    matchLevel: "qualifiers" | "eighthfinals" | "quarterfinals" | "semifinals" | "finals";
    matchNumber: string;
    robotPosition: "red1" | "red2" | "red3" | "blue1" | "blue2" | "blue3"
    teamNumber: string;
}

export interface IAutonState {
    taxi: boolean;
    cargoScored: 0 | 1 | 2 | 3 | 4 | 5 | "notObserved"
    targetGoal: "none" | "low" | "high" | "notObserved"
}

export interface ITeleopState {
    shotsTaken : "none" | "some" | "lots" | "notObserved"
    shotAccuracy: "low" | "medium" | "high" | "notObserved"
    targetGoal: "none" | "low" | "high" | "both" | "notObserved"
    cargoIntake: "none" | "terminal" | "ground" | "both" | "notObserved"
    shootingSpot: "none" | "close" | "far" | "adjustable" | "notObserved"
}

export interface IEndgameState {
    attemptedClimb: "bar1" | "bar2" | "bar3" | "bar4" | "notAttempted" | "notObserved"
    successfulClimb: "bar1" | "bar2" | "bar3" | "bar4" | "notAttempted" | "notObserved" | "none"
    climbTime: "0-10s" | "10-20s" | "20-30s" | ">30s" | "notAttempted" | "notObserved"
    shotAccuracy: "low" | "medium" | "high" | "notObserved"
    targetGoal: "none" | "low" | "high" | "both" | "notObserved"
    cargoIntake: "none" | "terminal" | "ground" | "both" | "notObserved"
    shootingSpot: "none" | "close" | "far" | "adjustable" | "notObserved"
}

export interface IPostmatchState {
    driverSkill: "low" | "medium" | "high" | "notObserved"
    defenseSkill: "low" | "medium" | "high" | "notObserved" | "didntDefend"
    defenseTolerance: "low" | "medium" | "high" | "notObserved" | "wasntDefended"
    comment: string;
}
