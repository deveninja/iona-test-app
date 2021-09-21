export type DropDownType = {
    id: string;
    name: string;
    [key: string]: string
}

export interface DropDownProps {
    options: DropDownType[],
    onChange: any;
    selected: string;
}