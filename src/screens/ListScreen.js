import React,{useState,useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from '../styles/styles';

const ListScreen = () => {
    const [items, setItems] = useState([])
    const [search, setSearch] = useState(null)
    const [loading, setLoading] = useState(false)

    const fecthData= async()=>{
      setLoading(true)
      try {
        const res = await fetch('https://food-names-api.herokuapp.com/api/Food-Names?number=1')
        const data = await res.json()
          setItems([
            ...items,
            {
              id:items.length+1,
              title:data[0].Food
            }
          ])
          setLoading(false)
        } catch (error) {
          Alert.alert(error)
        }    
      }
    
    const handleSearch = search ? items.filter((val)=>{return val.title.includes(search)}) : items

    useEffect(() => {
      fecthData()
    }, [])

    return (
      <View>
        <View style={styles.headerContainer}>
          <Searchbar
            placeholder='Search'
            value={search}
            iconColor='blue'
            selectionColor='blue'
            onTouchCancel={()=>setSearch(null)}
            style={styles.searchBarStyle}
            onChangeText={(val)=>{setSearch(val)}}
          />
          <Icon
            name='plussquare'
            size={50}
            color='blue'
            onPress={()=>fecthData()}
          />
        </View>
        { loading ? <ActivityIndicator color='blue' size={30} style={styles.loadingStyle} /> : null}
        <FlatList
          data={ handleSearch} 
          renderItem={({item})=>{
              return(
                <View style={styles.listContainerStyle}>
                  <Text style={styles.listTextStyle}>{item.id}. </Text>
                  <Text style={styles.listTextStyle}>{item.title}</Text>
                </View>  
              )
          }}
          key={(item)=>{item.id}}
        />
      </View>
    )
}

export default ListScreen