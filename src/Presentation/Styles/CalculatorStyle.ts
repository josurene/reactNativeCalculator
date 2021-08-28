import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    titleContainer: {
        marginTop: '10%',
    },
    titleText: {
        fontSize: 20,
    },
    calculatorScreen: {
        height: '10%',
        width: '90%',
        backgroundColor: 'white',
        marginTop: '10%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    allKeysContainer: {
        height: '90%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
