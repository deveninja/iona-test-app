export type CardComponentType = {
    imgSrc?: string;
    title?: string;
    size?: string;
    text?: string;
    btnLabel?: string;
    link?: {
        to: string;
        prevPath: string;
    };
}