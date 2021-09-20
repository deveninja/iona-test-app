import { ReactNode } from 'react';
import { ToastPosition } from 'react-bootstrap/esm/ToastContainer';
import { JsxElement } from 'typescript';

export interface NotificationType {
    children?: JsxElement | ReactNode;
    position?: ToastPosition;
    delay?: number;
    title?: string;
}

export type ErrorObjType = {
    show: boolean;
    message: string;
    title: string;
}

