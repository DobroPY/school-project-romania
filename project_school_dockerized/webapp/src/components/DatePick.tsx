import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePick() {

    const [value, setValue] = React.useState(null);

    const changeValue = (value)=>{
        setValue(value);
        
    }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
        <DatePicker  onChange={changeValue} label={'month'} views={['month', 'year']} className='max-w-[30px]' />
      </DemoContainer>
    </LocalizationProvider>
  );
}