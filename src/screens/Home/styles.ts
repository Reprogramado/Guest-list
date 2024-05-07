import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#131016',
    padding: 24
  },
  eventName:{
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:48
  },
  eventDate:{
    color:'#6B6B6B'
  },

  input:{
    flex: 1,
    height: 56,
    backgroundColor:'#1F1E25',
    borderRadius: 5,
    color:'#FDFCFE',
    padding: 16,
    marginTop: 10,
    marginRight:10,
  },

  buttonText:{
    color:'#111111',
    fontSize: 24
  },
  
  button:{
    width:56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31FE67',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:10
  },

  form:{
    width:'100%',
    flexDirection:'row',
    marginTop:36,
    marginBottom: 42
  },

  listEmptyText:{
    color: '#FFF',
    fontSize:14,
    textAlign: 'center'
  }
  
});