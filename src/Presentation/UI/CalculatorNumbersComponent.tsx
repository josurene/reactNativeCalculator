import React from 'react';
import {Pressable, Text, View} from 'react-native';
import CalculatorNumbersStyle from '@Presentation/Styles/CalculatorNumbersStyle';

export interface Props {
    numbers: string[],
    onPress: (val: string) => void,
}

const CalculatorNumbersComponent: React.FC<Props> = ({numbers, onPress}) => {
    return (
        <View style={CalculatorNumbersStyle.numbersContainer}>
            {numbers.map((value, index) => {
                return (
                    <Pressable key={index} style={CalculatorNumbersStyle.keyContainer} onPress={() => {onPress(value)}}>
                        <Text>{value}</Text>
                    </Pressable>
                )
            })}
        </View>
    );
};

export default CalculatorNumbersComponent;
