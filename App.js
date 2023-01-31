import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import { Formik } from 'formik';


export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./cajatrujillo.png')}></Image>
      <Formik
        initialValues={{ nrotarjeta: '' , dni: '', nrodocumento: '', pass:''}}
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
              onChangeText={handleChange('nrotarjeta')}
              onBlur={handleBlur('nrotarjeta')}
              value={values.nrotarjeta}
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
                onChangeText={handleChange('nrodocumento')}
                onBlur={handleBlur('nrodocumento')}
                value={values.nrodocumento}
                placeholder='******** '
              />
            </View>  
            <TextInput
                style={styles.input}
                onChangeText={handleChange('pass')}
                onBlur={handleBlur('pass')}
                value={values.pass}
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
