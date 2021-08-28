import React from 'react';
import {Pressable, Text, View} from 'react-native';
import CalculatorKeysStyle from '@Presentation/Styles/CalculatorKeysStyle';

export interface Props {
    keys: string[],
    onPress: (val: string) => void,
}

const CalculatorCalculatorsComponent: React.FC<Props> = ({keys, onPress}) => {
    return (
        <View style={CalculatorKeysStyle.calculatorsContainer}>
            {keys.map((value, index) => {
                return (
                    <Pressable style={CalculatorKeysStyle.keyContainer} key={index} onPress={() => {
                        onPress(value);
                    }}>
                        <Text>{value}</Text>
                    </Pressable>
                )
            })}
        </View>
    );
};

export default CalculatorCalculatorsComponent;
