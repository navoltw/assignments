import React from 'react';
import { withProvider } from './ServiceProvider'

const ActivityContainer = () => {
    return (
        <div className='content'>Activity Container</div>
    )
}

export default withProvider(ActivityContainer)