import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import { Formik } from 'formik';


export default function Login() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  const details = {
    'username': '',
    'grant_type': 'password',
    'documentNumber': '',
    'password': '',
    'documentTypeId': 1,
    'authenticationType': 1,
    'deviceId': 'abcdefgw',
    'switchRole': '0',
    'gRCToken': '',
    'phoneNumber': '',
  };

  let formBody = [];
  for (const property in details) {

    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");


  const getLogin = async () => {
    try {
      const response = await fetch('https://devst.cajatrujillo.com.pe:8300/SecurityTokenService/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody,
      });
      const json = await response.json();
      setData(response.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  function handlePress() {
    navigation.navigate('Details', { userID: data.userID });
  }

  useEffect(() => {
    getLogin();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('.../cajatrujillo.png')}></Image>
      <Formik
        initialValues={details}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.minicontainer}>
              <Text style={styles.texto}>Nro. de Tarjeta</Text>
              <Text style={styles.texto}>Recuerdame</Text>
            </View>            
            <TextInput
              style={styles.input}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholder='4446 - 86** - **** - **** '
            />
            <View style={styles.minicontainer}>
              <TextInput
                style={[styles.input, {width:100}]}
                onChangeText={handleChange('dni')}
                onBlur={handleBlur('dni')}
                value={values.dni}
                placeholder='DNI '
              />
              <TextInput
                style={[styles.input, {width:100}]}
                onChangeText={handleChange('documentNumber')}
                onBlur={handleBlur('documentNumber')}
                value={values.documentNumber}
                placeholder='******** '
              />
            </View>  
            <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder='******** '
              />          
            <Button style={styles.ingresar} onPress={handleSubmit} title="Ingresar" />
          </View>
        )}
      </Formik>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    resizeMode: 'stretch',
  },
  texto: {
    color: 'white',
    margin: 20
  },
  minicontainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  input: {
    borderBottomWidth: 2,
    color: 'fff',
    margin: 4,
  },
  ingresar: {
    backgroundColor: 'white',
    color: 'black',
  }
});
