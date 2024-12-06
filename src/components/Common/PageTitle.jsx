import React from 'react'

export const PageTitle = ({ title, action }) => {
    return (
        <div className='mb-3 d-flex justify-content-between border-bottom pb-2'>
            <h5 >{title}</h5>
            {action && action}
        </div>
    )
}
