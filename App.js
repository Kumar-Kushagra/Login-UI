import React from 'react';
import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity, ImageBackground, SegmentedControlIOSComponent } from 'react-native';

const App = () => {
  state = {
    email: "",
    password: ""
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.logoContainer, { marginTop: 40 }]}>
        <Text style={styles.logo}>Fast Food</Text>
      </View>
      <View style={styles.container}>
        <View style={{
          flexDirection: "row",
          width: "80%",
          backgroundColor: "white",
          borderRadius: 50,
          borderWidth: 0.4,
          bordercolor: "crimson",
          bottom: 20,
          justifyContent: 'space-between',
        }}>

          <View style={
            {
              backgroundColor: "crimson",
              borderRadius: 20,
              paddingVertical: 4,
              paddingHorizontal: 50,

            }
          }>
            <TouchableOpacity>
              <Text style={styles.log}>Login</Text>
            </TouchableOpacity>
          </View>


          <View style={
            {
              backgroundColor: "white",
              borderRadius: 20,
              paddingVertical: 4,
              // width: '30%'
              paddingHorizontal: 20,
            }
          }>
            <TouchableOpacity>
              <Text style={styles.signup}>Sign up</Text>
            </TouchableOpacity>
          </View>



        </View>


        {/* <View style={{ flexDirection: 'row' }}>
          <View style={{ alignItems: 'center', marginEnd: 5, backgroundColor: "crimson", marginStart: 80, width: '45%', padding: 5, borderRadius: 20, borderWidth: 2, borderColor: "crimson" }}>
            <TouchableOpacity>
              <Text style={styles.signup}>Log in</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ alignItems: "center", width: '65%', padding: 5, borderRadius: 20, borderWidth: 2, borderColor: "crimson" }}>
                <TouchableOpacity>
                  <Text style={styles.log}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View> */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter email or Username"
            placeholderTextColor="black"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Password"
            placeholderTextColor="black"
            onChangeText={text => this.setState({ password: text })} />
        </View>
        <View>
          <Image
            style={styles.tomato}
            source={require('./source/assets/tomato.png')}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <Text style={{ color: "black", top: 20, fontSize: 15 }}>OR</Text>
        <View style={{ flexDirection: "row", top: 30 }}>
          <View style={{ borderRadius: 50, borderWidth: 1, borderColor: "gold", margin: 10 }}>
            <TouchableOpacity>
            <Image
              style={styles.social}
              source={require('./source/assets/google.png')}
            />
            </TouchableOpacity>
          </View>
          <View style={{ borderRadius: 50, borderWidth: 2, borderColor: "gold", margin: 10 }}>
            <TouchableOpacity>
            <Image
              style={styles.social}
              source={require('./source/assets/facebook.png')}
            />
            </TouchableOpacity>
          </View>
          <View style={{ borderRadius: 50, borderWidth: 2, borderColor: "gold", margin: 10 }}>
            <TouchableOpacity>
            <Image
              style={styles.social}
              source={require('./source/assets/twitter.png')}
            />
            </TouchableOpacity>
          </View>
        </View>
      </View >
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    margin: 20,
    borderRadius: 80,
    backgroundColor: 'white',
    borderColor: 'midnightblue',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 200,
  },
  social: {
    margin: 10,
    width: 30,
    height: 30,
  },
  logoContainer: {
    flex: 0.4,
    backgroundColor: 'crimson',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomStartRadius: 2000,
    borderBottomEndRadius: 2000,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: 'white',
    bottom: 80
  },
  inputView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
  },
  inputText: {
    top: 20,
    borderRadius: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "black",
    height: 50,
    color: 'black'
  },
  forgot: {
    top: 10,
    paddingStart: 150,
    color: "black",
    fontSize: 15
  },
  tomato: {
    width: 200,
    height: 200,
    position: "absolute",
    marginVertical: 330,
    marginHorizontal: -240
  },
  loginBtn: {
    width: "50%",
    backgroundColor: "crimson",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10
  },
  loginText: {
    color: "white",
    fontSize: 20
  },
  signup: {
    color: "crimson",
    fontSize: 25
  },
  log: {
    color: "white",
    fontSize: 25,
  }
});


export default App;