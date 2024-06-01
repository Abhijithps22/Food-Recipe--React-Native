import { StyleSheet } from "react-native";

export const colors ={
    COLOR_RED:"#f96163",
    COLOR_DARK:"#000",
    COLOR_WHITE:"#fff",
    COLOR_GREEN:"#0AC004"
}

 export const globalStyles =StyleSheet.create({
    container: {
        padding: 20,  
      },
      title:{
        fontSize:22,
        fontWeight:"700",
        color:"black",
      },
      description:{
        fontSize:16,
        marginTop:5,
        fontWeight:"300",
        lineHeight:20,
      }
})