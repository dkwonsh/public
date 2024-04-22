import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Text> Welcome to the </Text>
      <Title>Daily Bible Reader</Title>
      <StartButton
        title="Start Reading"
        onPress={() => navigation.navigate('Reading')}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StartButton = styled.Button`
  font-size: 20px;
  font-weight: bold;
`;

export default HomeScreen;
