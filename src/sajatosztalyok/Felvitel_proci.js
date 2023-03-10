import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
const IP = require('./Ipcim');

export default class Bevitel extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          nev: "",
          marka:"",
          foglalat: "",
          meret: "",
          kep: "",
          ar: 0,
          teljesitmeny: "",
          gyart_tech: 0

        };
      }

felvitel=()=>{
  var bemenet={
    bevitel1:this.state.marka,
    bevitel2:this.state.nev,
    bevitel3:this.state.ar,
    bevitel4:this.state.teljesitmeny,
    bevitel5:this.state.foglalat,
    bevitel6:this.state.gyart_tech,
    bevitel7:this.state.kep

   
  }

  fetch(IP.ipcim + 'procifelvitel', {
    method: "POST",
    body: JSON.stringify(bemenet),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(x => x.text())
  .then(y => {alert(y)});
}




  render() {
    return (
      <View style={{backgroundColor:"#0d706d", borderRadius: 20, alignItems: "center"}}>
        <View style={styles.buttonContainer}>
        <Text style={{fontWeight: "bold", alignSelf: 'center'}}>Processzor Márka:</Text> 
        <TextInput
        style={{height: 40, alignItems: "center"}}
        placeholder="Add meg a processzor márkáját!"
        onChangeText={(beirtszoveg)=>this.setState({marka:beirtszoveg})}
        value={this.state.marka}
      />
        <Text style={{fontWeight: "bold", alignSelf: 'center'}}>Processzor neve:</Text>
        <TextInput
        style={{height: 40}}
        placeholder="Add meg a processzor nevét!"
        onChangeText={(beirtszoveg)=>this.setState({nev:beirtszoveg})}
        value={this.state.nev}
      />
      <Text style={{fontWeight: "bold", alignSelf: 'center'}}>Processzor Ár:</Text>
        <TextInput
        style={{height: 40}}
        placeholder="Add meg az árat!"
        onChangeText={(beirtszoveg)=>this.setState({ar:beirtszoveg})}
        value={this.state.ar}
      />
      <Text style={{fontWeight: "bold", alignSelf: 'center'}}>Processzor teljesítmény:</Text>
        <TextInput
        style={{height: 40}}
        placeholder="Add meg a teljesítményt!"
        onChangeText={(beirtszoveg)=>this.setState({teljesitmeny:beirtszoveg})}
        value={this.state.teljesitmeny}
      />
      <Text style={{fontWeight: "bold", alignSelf: 'center'}}>Processzor foglalatot:</Text>
        <TextInput
        style={{height: 40}}
        placeholder="Add meg a foglalatot!"
        onChangeText={(beirtszoveg)=>this.setState({foglalat:beirtszoveg})}
        value={this.state.foglalat}
      />
      <Text style={{fontWeight: "bold", alignSelf: 'center'}}>Processzor gyártási technológia:</Text>
        <TextInput

        style={{height: 40}}
        placeholder="Add meg a gyártást!"
        onChangeText={(beirtszoveg)=>this.setState({gyart_tech:beirtszoveg})}
        value={this.state.gyart_tech}
      />
      <Text style={{fontWeight: "bold", alignSelf: 'center'}}>Processzor kép:</Text>
        <TextInput
        style={{height: 40}}
        placeholder="Add meg a kép fájl nevét!"
        onChangeText={(beirtszoveg)=>this.setState({kep:beirtszoveg})}
        value={this.state.kep}
      />
      
          <TouchableOpacity style={styles.gomb} onPress={()=>this.felvitel()}>
            <Text style={{fontWeight: "bold"}}>Felvitel</Text>
          </TouchableOpacity>
        </View>
       
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    borderRadius: 30
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  gomb: {
    margin: 20,
    alignSelf: 'center',
    borderRadius: 5,
    
  }
});