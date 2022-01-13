import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkox/Checkbox';
import DropDownBox from '../../components/DropDownBox/DropDownBox';

const DetailsScreen = () => {
  const [name, setName] = useState('');
  const [avatarURL, setAvatarURL] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [activity, setActivity] = useState('');

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
