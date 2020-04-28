import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class ListView extends Component {
  constructor() {
        super();
        this.state = {
                dataSource: []
        };   
  }

  renderItem = ({item})=> {
    return (
     <View style={styles.container}> 
     <View> 
     <Text style={styles.name}>{item.employee_name}</Text> 
     <Text style={styles.salary}>{item.employee_salary}</Text>
     <Text style={styles.age}>{item.employee_age}</Text> 
       </View> 
     </View> 
      )
  }

  componentDidMount() {
       const url = "http://dummy.restapiexample.com/api/v1/employees";
       fetch(url).then((response)=>response.json())
                 .then((responseJson)=> {
                   this.setState({
                     dataSource : responseJson.data
                   })
                  })
                  .catch((error)=> {
                    console.log(error);
                  })      
  }

  render() {
     return (
       <View> 
           <FlatList 
            data={this.state.dataSource}
            renderItem={this.renderItem}
            />
       </View>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 35,
    marginLeft: 32,
    marginVertical: 5,
    borderWidth: 2,
    backgroundColor: "#E1E1E1"
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 10
  },
  salary: {
    color: "#B3B3B3",
    marginLeft: 25,
    marginTop: 10
  },
  age: {
    color: "#B3B3B3",
    marginLeft: 25,
    marginBottom: 15
  }
});