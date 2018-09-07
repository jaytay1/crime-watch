import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container:{
        flex:1,
        //padding: 30,
        paddingVertical: '30%'
    },
  /*
    bottomContainer:{
        backgroundColor:"white",
        paddingVertical: padding * 3,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },
*/
    containerView:{
        backgroundColor: 'transparent'
    },

    buttonContainer:{
        justifyContent:"center",
        alignItems:"center",
    },

    button:{
        flex: 1,
        padding: 22,
        margin: 25,
    }
});

export default styles;