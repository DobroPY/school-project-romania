import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePick(props) {

    const [value, setValue] = React.useState(null);

    const changeValue = (value)=>{ 
      let months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"]; 
      const month = months[value["$M"]];
      const year = value['$y'];
      const date = month + " " + year;
      props.changeDate(date);
         
    }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
        <DatePicker  onChange={changeValue} label={'month'} views={['month', 'year']} className='max-w-[30px]' />
      </DemoContainer>
    </LocalizationProvider>
  );
}