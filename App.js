import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView } from 'react-native';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpeg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/5.jpg') },
  { id: 8, imgSource: require('./assets/6.jpg') }
]

const centerImgData = Math.floor(imgData.length / 2);

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <View style={styles.avaWrapper}>
            <Image
              source={require('./assets/ava.png')}
              style={styles.ava}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Hang Nguyen</Text>
            <Text style={styles.title}>Developer</Text>
            <View style={styles.userBtn}>
              <TouchableOpacity style={styles.btnFollow}>
                <Text>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSend}>
                <Feather name="send" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.numberCount}>
          <View style={styles.countGroup}> 
            <Text style={styles.txtCount}>210</Text>
            <Text style={styles.countLabel}>Photos</Text>
          </View>
          <View style={styles.countGroup}>
            <Text style={styles.txtCount}>15k</Text>
            <Text style={styles.countLabel}>Followers</Text>
          </View>
          <View style={styles.countGroup}>
            <Text style={styles.txtCount}>605</Text>
            <Text style={styles.countLabel}>Following</Text>
          </View>
        </View>
        <ScrollView style={{flex:0.6}}>
          <View style={styles.imagesArea}>
            
            <View style={styles.leftImagesArea}>
              {imgData.slice(0,centerImgData).map(item => {
                return <Image source={item.imgSource} style={styles.image}></Image>
              })}
            </View>
            <View style={styles.rightImagesArea}>
              {imgData.slice(centerImgData).map(item => {
                return <Image source={item.imgSource} style={styles.image}></Image>
              })}
            </View>
          </View>
        </ScrollView>
        
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading:{
    flex: 0.25,
    backgroundColor: 'white',
    flexDirection:'row'
  },
  numberCount:{
    flex: 0.15,
    backgroundColor: 'white'
  },
  imagesArea:{
    flex: 0.8,
    backgroundColor: 'white',
    flexDirection:"row"
  },
  avaWrapper:{
    flex: 0.4,
    alignItems: "center",
    justifyContent:"center"
  },
  ava:{
    width:100,
    height:100
  },
  userInfo:{
    flex: 0.6,
    flexDirection:"column",
    justifyContent:"space-evenly"
  },
  userName:{
    fontSize: 20
  },
  title:{

  },
  userBtn:{
    flexDirection: "row",
  },
  btnFollow:{
    width: 120,
    height: 40,
    backgroundColor: FOLLOW_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnSend:{
    width: 60,
    height: 40,
    backgroundColor:SEND_MESSAGE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginLeft: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  numberCount:{
    flexDirection:"row",
    justifyContent: "space-around"
  },
  countGroup:{
    flex:1,
    flexDirection:"column",
    justifyContent: "center",
    alignItems: 'center'
  },
  txtCount:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  countLabel:{
    fontSize: 20,
    fontWeight: '400',
  },
  leftImagesArea:{
    flexDirection: 'column',
  },
  rightImagesArea:{
    flexDirection: 'column',
  },
  image:{
    width: 206,
    height: 150,
  },
});
