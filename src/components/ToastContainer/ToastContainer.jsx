import React, { useEffect, useReducer } from 'react'
// import { Toast, ToastHeader, ToastBody } from 'reactstrap'
import { ToastContext } from '../../CommonFunction'

function reducer(state, action) {
    switch (action.type) {
        case 'error': {
            return {
                ...state,
                ...action.payload,
                type: 'danger',
                show: true,
            };
        }
        case 'success': {
            return {
                ...state,
                ...action.payload,
                type: 'success',
                show: true,
            };
        }
        case 'close': {
            return {
                ...state,
                show: false,
            };
        }
    }
}

export function ToastContainer({ children }) {
    const [toastMeta, setToastMeta] = useReducer(reducer,
        {
            show: false,
            title: 'error',
            message: '',
            type: 'error',
            duration: 2000,

        }
    )

    useEffect(() => {
        if (toastMeta.show) {
            setTimeout(() => {
                setToastMeta({
                    type: 'close'
                })
            }, [toastMeta.duration])
        }
    }, [toastMeta.show])

    return (
        <>
            <ToastContext.Provider value={{ toastMeta, setToastMeta }}>
                <div className={`toast_container bg-${toastMeta.type}`}>
                    {/* <Toast isOpen={toastMeta?.show} className="border-0 rounded-0">
                        <ToastHeader
                            toggle={() => setToastMeta({
                                type: 'close'
                            })} >
                            {toastMeta.title}
                        </ToastHeader>
                        <ToastBody>
                            {toastMeta.message}
                        </ToastBody>
                    </Toast> */}
                </div>
                {children}
            </ToastContext.Provider>
        </>
    )
}
