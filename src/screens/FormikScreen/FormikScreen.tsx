import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email Required')
    .min(5, 'Email Less Than 5 Character'),
  name: Yup.string()
    .required('Name Required')
    .min(5, 'Name Less Than 5 Character'),
  password: Yup.string()
    .required('Passowrd Required')
    .min(5, 'Passowrd Less Than 5 Character'),
});

const initialValue = {
  email: null,
  name: null,
  password: null,
};

const FormikScreen = () => {
  const [submitForm, setSubmitForm] = React.useState(false);

  const RenderTextInput = (props: any) => {
    return <TextInput {...props} style={styles.input} />;
  };

  const SubmitFormValues = (values: any, setSubmitting: any) => {
    console.log('Values ----------> ', values);
    setSubmitForm(true);

    setTimeout(() => {
      setSubmitForm(false);
      setSubmitting(false);
    }, 3000);
  };

  const GenerateForm = () => {
    return (
      <View style={styles.form}>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={(values, {setSubmitting}) =>
            SubmitFormValues(values, setSubmitting)
          }>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
            isSubmitting,
            dirty,
          }) => (
            <View>
              <RenderTextInput
                value={values.email}
                placeholder="Enter Your Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {errors.email && touched.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <RenderTextInput
                value={values.name}
                placeholder="Enter Your Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              {errors.name && touched.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}

              <RenderTextInput
                value={values.password}
                placeholder="Enter Your password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry={true}
              />
              {errors.password && touched.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <Button
                title="Submit Form"
                onPress={handleSubmit}
                disabled={!dirty || !isValid || isSubmitting}
              />
            </View>
          )}
        </Formik>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/login.png')}
          style={styles.image}
        />
        <GenerateForm />
        <View>
          <Spinner
            visible={submitForm}
            textContent={'Submitting...'}
            textStyle={styles.spinnerTextStyle}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default FormikScreen;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginBottom: 25,
  },
  form: {},
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: width * 0.8,
    borderRadius: 5,
    fontSize: 15,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    fontSize: 10,
  },
  spinnerTextStyle: {
    color: '#b2b',
  },
});
