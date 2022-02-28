import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'
import { POPPINS_BOLD, Poppins_SemiBold } from '../../components/Fonts'

const Home = ({ navigation, user }) => {
  const dispatch = useDispatch()

  function ListUser() {
    return user.map(data => {
      return (
        <View
          key={data.id}
          style={{
            borderBottomWidth: 1,
            borderColor: '#eee',
            padding: 1,
            marginTop: 10
          }}>
          <Text style={{ fontSize: 15 }}>
            {data.id}. {data.name}
          </Text>
        </View>
      )
    })
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon name={'ios-home'} size={100} color={'purple'} />
          <View>
            <TextInput placeholder='teext '/>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchDataUser())}>
              <Text style={{...styles.text,fontFamily:POPPINS_BOLD}}>Cick here to show User data:</Text>
            </TouchableOpacity>
            <ListUser />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(Home)
