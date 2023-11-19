import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { Button } from '@rneui/themed';
import { users } from './infos';
import Entypo from 'react-native-vector-icons/Entypo';

export default function App() {
  const showFullname = (users) =>{
    alert(users)
  };

  return (
      <View style={styles.container}>
      <ScrollView>
      <Entypo/>
      <FlatList
        data = {users}
        keyExtractor = {(index) => index.toString()}
        renderItem = {({item}) => (
        <View style = {styles.user}>
            <View style = {styles.nnCon}>
              <Text style = {styles.name}>{item.nickname}</Text>
            </View>
            <View style = {styles.buttonCont}>
              <Button title = "View"
              onPress = {()=>showFullname(`${'Name: '}${item.name.firstname}${'  '}${item.name.lastname}${'\n'}${'Course: '}${item.course}${'\n'}${'Year: '}${item.year}`)}
              buttonStylestyle = {styles.buttonVw}/>
            </View>
        </View>     
        )}
      />
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    marginTop:10,
    padding:10
  },
  user: {
    marginBottom: 10,
    width:300,
    flexDirection: 'row',
  },
  name: {
    fontSize: 28,
    marginTop: 10,
    fontFamily: 'Times New Roman',
    fontWeight:'normal',
  },
  
  nnCon:{
    padding:10,
    width:200,
  },
  buttonCon:{
    marginTop:10,
    width:80,
    flexDirection:'row',
  },
  buttonVw:{
    width:65,
  }  
});
