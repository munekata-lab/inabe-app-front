import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const InputValue = () => {
    const [value, setValue] = useState('');

    return (
        <View>
            <TextInput
                placeholder='input the number'
                value={value}
                onChangeText={setValue}
            />
        </View>
    )
};

export default InputValue;
