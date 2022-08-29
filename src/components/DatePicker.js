import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import MyAppText from './MyAppText'


const DatePicker = (props) => {

    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        props.getDate(currentDate)
        // props.getDate(currentDate.toDateString())
    };

    const showMode = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange
        });
    };

    const showDatepicker = () => {
        showMode();
    };

    return (
        <View>
            <TouchableOpacity onPress={showDatepicker}
                style={{
                    alignSelf: 'baseline',
                    borderWidth: 2,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 50,
                    borderColor: '#21BA3A'
                }} >
                <MyAppText content={date.toDateString()} />
            </TouchableOpacity>
        </View>
    )
}

export default DatePicker