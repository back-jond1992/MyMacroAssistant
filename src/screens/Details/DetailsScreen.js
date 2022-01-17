import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Checkox/Checkbox';
import Button from '../../components/Button';
import DropDownBox from '../../components/DropDownBox/DropDownBox';
import TDEECalculator from '../../UtilFunctions/TDEECalculator/TDEECalculator';
import BMRCalculator from '../../UtilFunctions/BMRCalculator/BMRCalculator';
import target from '../../UtilFunctions/Target/target';
import postUser from '../../api/api';
import {useNavigation} from '@react-navigation/native';
import userContext from '../../contexts/userContexts/UserContext';
import {Formik} from 'formik';
import validationSchema from '../../schemas/validationSchema/validationSchema';

const DetailsScreen = () => {
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [activity, setActivity] = useState('');
  const [deficit, setDeficit] = useState('');
  const [maintain, setMaintain] = useState('');
  const [surplus, setSurplus] = useState('');

  const {currentUser, setCurrentUser} = useContext(userContext);

  const email = auth().currentUser.email;

  const navigation = useNavigation();

  const sex = male ? 'male' : 'female';

  const BMR = BMRCalculator(sex, weight, height, age);

  const TDEE = TDEECalculator(activity);

  const maintenance = Math.round(BMR * TDEE);

  const targetCalories = target(selectedTarget, maintenance);

  const selectedTarget = deficit
    ? 'deficit'
    : surplus
    ? 'surplus'
    : 'maintenance';

  const newUser = {
    name: name,
    email: email,
    avatar_url: avatarUrl || 'no image',
    weight: weight,
    height: height,
    age: age,
    sex: sex,
    BMR: BMR,
    TDEE: TDEE,
    maintenance: maintenance,
    target: targetCalories,
  };

  const [user, setUser] = useState(newUser);

  console.log('outside new user', user);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Formik
          initialValues={newUser}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log('inside values', values);
            console.log('inside new user', newUser);
            postUser(newUser).then(response => {
              console.log(response);
              setCurrentUser(response);
              //     navigation.navigate('HomePage');
            });
          }}>
          {props => (
            <View>
              <Text style={styles.text_primary}>Just a few more details</Text>

              <Text style={styles.text_secondary}>Name</Text>
              <Input
                placeholder="type your name here"
                value={name}
                setValue={setName}
              />
              <Text style={styles.text_errors}>
                {props.touched.name && props.errors.name}
              </Text>

              <Text style={styles.text_secondary}>Avatar_url</Text>
              <Input
                placeholder="image url goes here"
                value={avatarUrl}
                setValue={setAvatarUrl}
              />

              <Text style={styles.text_secondary}>Weight(pounds)</Text>
              <Input
                placeholder="weight in pounds"
                value={weight}
                setValue={setWeight}
              />
              <Text style={styles.text_errors}>
                {props.touched.weight && props.errors.weight}
              </Text>

              <Text style={styles.text_secondary}>Height(inches)</Text>
              <Input
                placeholder="height in inches"
                value={height}
                setValue={setHeight}
              />
              <Text style={styles.text_errors}>
                {props.touched.height && props.errors.height}
              </Text>

              <Text style={styles.text_secondary}>Age(years)</Text>
              <Input placeholder="Age in years" value={age} setValue={setAge} />
              <Text style={styles.text_errors}>
                {props.touched.age && props.errors.age}
              </Text>

              <Text style={styles.text_secondary}>Sex</Text>

              <Checkbox value={male} setValue={setMale} />
              <Text style={styles.text_secondary}>Male</Text>

              <Checkbox value={female} setValue={setFemale} />
              <Text style={styles.text_secondary}>Female</Text>
              <Text style={styles.text_errors}>{props.errors.sex}</Text>

              <Text style={styles.text_secondary}>Activity(TDEE)</Text>
              {}
              <DropDownBox
                options={[
                  'little to no exercise and work a desk job',

                  'light exercise 1-3 days per week',

                  'moderate exercise 3-5 days per week',

                  'heavy exercise 6-7 days per week',

                  'strenuous training 2 times a day',
                ]}
                value={activity}
                setValue={setActivity}
              />

              <Text style={styles.text_errors}>
                {props.touched.TDEE && props.errors.TDEE}
              </Text>

              <Text style={styles.text_secondary}>Target</Text>

              <Checkbox value={deficit} setValue={setDeficit} />
              <Text style={styles.text_secondary}>Lose weight</Text>

              <Checkbox value={maintain} setValue={setMaintain} />
              <Text style={styles.text_secondary}>Maintain weight</Text>

              <Checkbox value={surplus} setValue={setSurplus} />
              <Text style={styles.text_secondary}>Gain weight</Text>

              <Text style={styles.text_errors}>
                {props.touched.target && props.errors.target}
              </Text>

              <Button
                onPress={props.handleSubmit}
                text={'Submit'}
                type={'primary'}
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  text_primary: {
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
    fontSize: 24,
  },
  text_secondary: {
    textAlign: 'left',
    padding: 20,
    fontSize: 12,
  },
  text_errors: {
    textAlign: 'left',
    padding: 20,
    fontSize: 10,
    color: 'red',
  },
});

export default DetailsScreen;
