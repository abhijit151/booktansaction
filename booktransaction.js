import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions' 
import {BarCodeScanner} from 'expo-barcode-scanner'


export default class Transaction extends React.Component {
  constructor(){
 super()
 this.state={
Camerapermission:null,
scanned:false,
scannedata:'',
buttonstate:'normal',

 }

  }
  Getcamerapermission = async()=>{
const status = await Permissions.askAsync(Permissions.CAMERA)
this.setState({Camerapermission:status==="granted",
buttonstate: 'clicked ',scanned:false
})

  }
  handleBarCodeScan = async({type,data})=>{
this.setState({
  scanned:true,
scannedata:data,
buttonstate:'normal',
})
  }
  
  render(){
    var Camerapermission = this.state.Camerapermission
    var scanned = this.state.scanned 
    var buttonstate = this.state.buttonstate
    if (buttonstate==='clicked'&& Camerapermission){
return(
  <BarCodeScanner onBarCodeScanned={scanned ?undefined:this.handleBarCodeScan} />
  
    )
}else if( buttonstate==='normal'){



return (
    <View >
      <Text>{Camerapermission===true?this.state.scannedata:"REquestcamerapermisson"}</Text>
      <TouchableOpacity onPress={this.Getcamerapermission}>
        <Text>
Scanned QR code
        </Text>
      </TouchableOpacity>

    </View>

  );
}
  }
}