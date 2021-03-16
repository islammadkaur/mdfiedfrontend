import { Eventcalendar } from '@mobiscroll/react'; /* or import any other component */

import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

function DateForm() {
    return (
        <Datepicker
            controls={['calendar', 'time']}
            display="inline"
        />
    ); 
}


export default DateForm;