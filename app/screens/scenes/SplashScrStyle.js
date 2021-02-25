import { StyleSheet } from 'react-native';
import scale  from '../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },

    testStyle: {
        fontSize: scale(25),
        fontWeight: 'bold',
        color: '#ffffff',
    
    },

    weltxt: {
        alignSelf: 'center',
        fontSize: scale(25),
        fontWeight: 'bold',
        color: '#ffffff',  
    },
});
