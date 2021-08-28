import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CalculatorStyle from '@Presentation/Styles/CalculatorStyle';
import CalculatorScreenComponent from '@Presentation/UI/CalculatorScreenComponent';
import CalculatorNumbersComponent from '@Presentation/UI/CalculatorNumbersComponent';
import CalculatorCalculatorsComponent from '@Presentation/UI/CalculatorCalculatorsComponent';

const numbers = ['7','8','9','4','5','6','1','2','3'];
const keys = ['C','X','/','+','-']

const App: React.FC = () => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [calculation, setCalculation] = useState('');

    const add = (number1 : string, number2: string) : string => {
        return `${parseInt(number1, 10) + parseInt(number2, 10)}`;
    }

    const remove = (number1: string, number2: string) : string => {
        return `${parseInt(number1, 10) - parseInt(number2, 10)}`;
    }

    const multiply = (number1: string, number2: string) : string => {
        return `${parseInt(number1, 10) * parseInt(number2, 10)}`;
    }

    const divide = (number1: string, number2: string) : string => {
        return `${parseInt(number1, 10) / parseInt(number2, 10)}`;
    }

    const calculationsDictionary: Record<string, (val: string, val2: string) => string> = {
        'X' : multiply,
        '/' : divide,
        '+' : add,
        '-' : remove,
    }

    const getScreenText = (): string => {
        if (firstNumber !== '' && secondNumber !== '' && calculation !== '') {
            return `${firstNumber} ${calculation} ${secondNumber} = ${calculationsDictionary[calculation](firstNumber, secondNumber)}`;
        }
        return `${firstNumber} ${calculation} ${secondNumber}`;
    }

    const onCalculatePress = (val: string) => {
        if (val === 'C') {
            setFirstNumber('');
            setSecondNumber('');
            setCalculation('');
        } else {
            setCalculation(val);
        }
    }

    const onNumberPress = (val: string) => {
        if (calculation === '') {
            setFirstNumber(firstNumber + val);
        } else {
            setSecondNumber(secondNumber + val);
        }
    }

    return (
        <View style={CalculatorStyle.mainContainer}>
            <View style={CalculatorStyle.titleContainer}>
                <Text style={CalculatorStyle.titleText}>Super Josu Calculator</Text>
            </View>
            <CalculatorScreenComponent text={getScreenText()}/>
            <View style={CalculatorStyle.allKeysContainer}>
                <CalculatorNumbersComponent numbers={numbers} onPress={onNumberPress}/>
                <CalculatorCalculatorsComponent keys={keys} onPress={onCalculatePress}/>
            </View>
        </View>
    );
};

export default App;

