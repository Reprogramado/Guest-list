import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginBottom:10,
        height:56,
        width: '100%',
        backgroundColor: '#1f1e25',
        borderRadius:5,
        flexDirection: "row",
        alignItems: 'center'
    },

    name:{
        flex:1,
        color:'#FFF',
        fontSize:16,
        marginLeft:16,
    },

    buttonText:{
        color:'#111111',
        fontSize: 24
      },
      
      button:{
        width:56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems:'center',
        justifyContent: 'center',
        
      },
});