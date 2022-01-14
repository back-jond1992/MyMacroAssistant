import React, {useState} from 'react';
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

const DetailsScreen = () => {
  const [name, setName] = useState('');
  const [avatarURL, setAvatarURL] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [activity, setActivity] = useState('');
  const [deficit, setDeficit] = useState('');
  const [maintain, setMaintain] = useState('');
  const [surplus, setSurplus] = useState('');
  const [disabled, setDisabled] = useState(true);

  const email = auth().currentUser.email;

  const sex = male ? 'male' : 'female';

  const selectedTarget = deficit
    ? 'deficit'
    : surplus
    ? 'surplus'
    : 'maintenance';

  const BMR = BMRCalculator(sex, weight, height, age);

  const TDEE = TDEECalculator(activity);

  const maintenance = Math.round(BMR * TDEE);

  const targetCalories = target(selectedTarget, maintenance);

  const newUser = {
    name: name,
    email: email,
    avatar_url: avatarURL ? avatarURL : 'no image',
    weight: weight,
    height: height,
    age: age,
    sex: sex,
    BMR: BMR,
    TDEE: TDEE,
    maintenance: maintenance,
    target: targetCalories,
  };

  // Object.values(newUser).map(value => {
  //   console.log(value === undefined);
  // });

  console.log(newUser);
  console.log(disabled);

  const onSubmit = () => {
    postUser(newUser).then(response => {
      console.log(response);
      navigation.navigate('HomePage');
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.text_primary}>Just a few more details</Text>

        <Text style={styles.text_secondary}>Name</Text>
        <Input
          placeholder="type your name here"
          value={name}
          setValue={setName}
        />

        <Text style={styles.text_secondary}>Avatar_url</Text>
        <Input
          placeholder="image url goes here"
          value={avatarURL}
          setValue={setAvatarURL}
        />

        <Text style={styles.text_secondary}>Weight(pounds)</Text>
        <Input
          placeholder="weight in pounds"
          value={weight}
          setValue={setWeight}
        />

        <Text style={styles.text_secondary}>Height(inches)</Text>
        <Input
          placeholder="height in inches"
          value={height}
          setValue={setHeight}
        />

        <Text style={styles.text_secondary}>Age(years)</Text>
        <Input placeholder="Age in years" value={age} setValue={setAge} />

        <Text style={styles.text_secondary}>Sex</Text>

        <Checkbox value={male} setValue={setMale} />
        <Text style={styles.text_secondary}>Male</Text>

        <Checkbox value={female} setValue={setFemale} />
        <Text style={styles.text_secondary}>Female</Text>

        <Text style={styles.text_secondary}>Activity</Text>
        <DropDownBox
          options={[
            'little to no exercise and work a desk job',

            'light exercise 1-3 days per week',

            'moderate exercise 3-5 days per week',

            'heavy exercise 6-7 days per week',

            'strenuous training 2 times a day',
          ]}
          setValue={setActivity}
        />

        <Checkbox value={deficit} setValue={setDeficit} />
        <Text style={styles.text_secondary}>Lose weight</Text>

        <Checkbox value={maintain} setValue={setMaintain} />
        <Text style={styles.text_secondary}>Maintain weight</Text>

        <Checkbox value={surplus} setValue={setSurplus} />
        <Text style={styles.text_secondary}>Gain weight</Text>

        <Button
          onPress={onSubmit}
          text={'Submit'}
          type={'primary'}
          disabled={disabled}
        />
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
});

export default DetailsScreen;
