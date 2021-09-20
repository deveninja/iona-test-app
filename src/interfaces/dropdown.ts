export type DropDownType = {
    id: string;
    name: string;
}

export interface DropDownProps {
    options: DropDownType[],
    onChange: any;
    selected: string;
}