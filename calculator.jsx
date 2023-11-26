// Calculator.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Erro');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>

      <View style={styles.row}>
        {['7', '8', '9', '/'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handlePress(value)}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.row}>
        {['4', '5', '6', '*'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handlePress(value)}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.row}>
        {['1', '2', '3', '-'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handlePress(value)}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.row}>
        {['0', '.', '=', '+'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handlePress(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('C')}
      >
        <Text style={styles.buttonText}>C</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 30,
    marginBottom: 10,
  },
  result: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default Calculator;
