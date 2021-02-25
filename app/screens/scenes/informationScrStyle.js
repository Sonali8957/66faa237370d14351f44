import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';
const { height, width } = Dimensions.get('window');


export default StyleSheet.create({

    container: {
        flex: 1,
    },

    header: {

    },

    infoBgImage: {
        height: scale(812)
    },

    inputFormHeader: {
        flex: 1,
        alignItems: 'center',
        marginTop: verticalScale(20),
    },

    submitButton: {
        marginTop: verticalScale(40),
        width: scale(200),
        height: scale(50),
        borderRadius: scale(21),
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitText: {
        fontSize: scale(15),
        fontWeight: 'bold',
        textAlign: 'center',
    },

    formText: {
        fontSize: scale(25),
        fontWeight: 'bold',
    },

    countryView: {
        marginTop: verticalScale(10),
        marginLeft: scale(25),
       alignItems: 'flex-start',
       justifyContent: 'flex-start',
       alignSelf: 'flex-start',

    },

    fieldValue: {
        fontSize: scale(20),
        // textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold',
        marginTop: verticalScale(10),
        alignSelf: 'flex-start',
        // height: scale(500),

    },

    weatherFieldValue: {
        fontSize: scale(20),
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginTop: verticalScale(10),
    },

    flag: {
        width: scale(200),
        height: scale(150),
        borderWidth: scale(2),
        borderColor: 'green',
        borderRadius: scale(50),
        overflow: 'hidden'
    },

    weatherData: {
        borderWidth: scale(5),
        borderRadius: scale(10),
        width: scale(300),
        height: scale(120),
        marginTop: verticalScale(50),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: scale(-15),
        borderColor: 'green',
        backgroundColor: 'lightgreen',
        opacity: 0.5,
        alignItems: 'flex-start',

    },

    imageIcon: {
        marginTop: verticalScale(30),
        width: scale(50),
        height: scale(50),
        marginRight: scale(40)
    }
});
