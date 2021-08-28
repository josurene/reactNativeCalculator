import React from 'react';
import {Text, View} from 'react-native';
import CalculatorStyle from '@Presentation/Styles/CalculatorStyle';

export interface Props {
    text: string,
}

const CalculatorScreenComponent: React.FC<Props> = ({text}) => {
    return (
        <View style={CalculatorStyle.calculatorScreen}>
            <Text>{text}</Text>
        </View>
    );
};

export default CalculatorScreenComponent;
