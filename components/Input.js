import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function Input({label, value ,id, onChange, placeholder, onFocus, onBlur, focusedItem}) {
  return (
        <View style={styles.formgroup}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            name={`id`}
            style={focusedItem === id ? inputOnFocus : styles.input}
            onBlur={onBlur}
            onFocus={onFocus }
          />
        </View>
  );
}

const styles = StyleSheet.create({
  formgroup: {
    marginBottom: 15
  },
  
  label: {
    color: '#00000',
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 5
  },

  input: {
    width: '100%',
    height: 44,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderColor: '#F6F6F6',
    marginBottom: 10,
  },
   inputFocus: {
    borderColor: '#000',
  },

});

const inputOnFocus = StyleSheet.compose(styles.input, styles.inputFocus);
