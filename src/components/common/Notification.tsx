import { NotificationType } from 'interfaces/notification'
import React, { useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'


const Notification: React.FC<NotificationType> = (props: NotificationType) => {
    const { children, position, delay, title } = props
    const [show, setShow] = useState(true)

    return (
        <ToastContainer
            className="p-3"
            position={position ?? 'top-start'}
        >
            <Toast
                show={show}
                onClose={() => setShow(!show)}
                delay={delay ?? 3000}
                autohide
            >
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{title}</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>{children}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default Notification