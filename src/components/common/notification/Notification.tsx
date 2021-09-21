import { GlobalType } from 'enums/actionTypes'
import { ErrorObjType, NotificationType } from 'interfaces/notification'
import React, { useEffect, useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store'


const Notification: React.FC<NotificationType> = (props: NotificationType) => {
    const { position, delay } = props
    const AppErrorState = useSelector<AppState, ErrorObjType>(state => state.globalReducer.error)
    const [show, setShow] = useState<boolean>(AppErrorState.show)
    const dispatch = useDispatch()

    useEffect(() => {
        let time1 = setTimeout(() => {
            dispatch({
                type: GlobalType.ERROR,
                payload: {
                    show: false
                }
            })
        }, 3000)

        return () => {
            clearTimeout(time1)
        }
    }, [AppErrorState.show, dispatch])

    useEffect(() => {
        setShow(AppErrorState.show)
        return () => {
            setShow(AppErrorState.show)
        }
    }, [AppErrorState.show])

    return (
        <ToastContainer
            className="p-3"
            position={position ?? 'top-end'}
            style={{ zIndex: 2, color: 'white' }}
        >
            <Toast
                show={show}
                onClose={() => setShow(!show)}
                delay={delay ?? 3000}
                autohide
                bg="danger"
            >
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{AppErrorState.title ?? 'Error'}</strong>
                </Toast.Header>
                <Toast.Body>{AppErrorState.message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default Notification