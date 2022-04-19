export interface Config {
    Title: string;
    Sections: Array<ConfigSection>;
}

export interface ConfigSection {
    Title: string;
    Parts: Array<ConfigPart>;
}

export interface ConfigPart {
    Name: string;
    Type: "string" | "radio";
    Grouping?: "string";
    Values?: Array<RadioValue>;
}

export interface RadioValue {
    Name: string;
    Value: string;
}
