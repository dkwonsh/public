import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const ReadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [chapterText, setChapterText] = useState('');
  const [currentChapter, setCurrentChapter] = useState(1); // Start at Genesis Chapter 1

  useEffect(() => {
    fetchChapter(currentChapter); // Fetch Genesis Chapter 1
  }, []);

  // Hard-coded chapter texts for Genesis chapters 1-10
  const chapterTexts = [
    // Chapter 1
    `
    The Beginning\n\n
    1 In the beginning God created the heavens and the earth. 2 Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.\n\n
    ... (Chapter 1 text goes here)
    `,
    // Chapter 2
    `
    1 Thus the heavens and the earth were completed in all their vast array.
    2 By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. 3 Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done.
    ... (Chapter 2 text goes here)
    `,
    // Chapter 3 and so on...
    `    
    1 Now the serpent was more crafty than any of the wild animals the Lord God had made. He said to the woman, “Did God really say, ‘You must not eat from any tree in the garden’?”
    ... (Chapter 3 text goes here)
    `,
    // Chapter 4
    `
    1 Adam[a] made love to his wife Eve, and she became pregnant and gave birth to Cain.[b] She said, “With the help of the Lord I have brought forth[c] a man.” 2 Later she gave birth to his brother Abel.

    Now Abel kept flocks, and Cain worked the soil.    
    ... (Chapter 4 text goes here)
    `,
     // Chapter 5
    `
    1 This is the written account of Adam’s family line.

    When God created mankind, he made them in the likeness of God. 2 He created them male and female and blessed them. And he named them “Mankind”[a] when they were created.
     ... (Chapter 5 text goes here)
     `,
      // Chapter 6
    `
    1 When human beings began to increase in number on the earth and daughters were born to them, 2 the sons of God saw that the daughters of humans were beautiful, and they married any of them they chose.    
    ... (Chapter 6 text goes here)
    `,
     // Chapter 7
     `
     1 The Lord then said to Noah, “Go into the ark, you and your whole family, because I have found you righteous in this generation. 2 Take with you seven pairs of every kind of clean animal, a male and its mate, and one pair of every kind of unclean animal, a male and its mate,
     ... (Chapter 7 text goes here)
     `,
      // Chapter 8
    `
    1 But God remembered Noah and all the wild animals and the livestock that were with him in the ark, and he sent a wind over the earth, and the waters receded. 2 Now the springs of the deep and the floodgates of the heavens had been closed, and the rain had stopped falling from the sky.
    ... (Chapter 8 text goes here)
    `,
     // Chapter 9
     `
     1 Then God blessed Noah and his sons, saying to them, “Be fruitful and increase in number and fill the earth. 2 The fear and dread of you will fall on all the beasts of the earth, and on all the birds in the sky, on every creature that moves along the ground, and on all the fish in the sea; they are given into your hands.
     ... (Chapter 9 text goes here)
     `,
      // Chapter 10
    `
    1 This is the account of Shem, Ham and Japheth, Noah’s sons, who themselves had sons after the flood.
    The Japhethites
    
    2 The sons[a] of Japheth:
    
    Gomer, Magog, Madai, Javan, Tubal, Meshek and Tiras.
    ... (Chapter 10 text goes here)
    `,
  ];

  function fetchChapter(chapter) {
    if (chapter >= 1 && chapter <= 10) {
      setChapterText(chapterTexts[chapter - 1]);
      setLoading(false); 
    } 
  }

  const goToPreviousChapter = () => {
    const prevChapter = currentChapter - 1;
    if (prevChapter >= 1) {
      setCurrentChapter(prevChapter);
      fetchChapter(prevChapter); // Fetch previous chapter
    }
  };

  const goToNextChapter = () => {
    const nextChapter = currentChapter + 1;
    if (nextChapter <= 10) {
      setCurrentChapter(nextChapter);
      fetchChapter(nextChapter); // Fetch next chapter
    }
  };

  return (
    <Container>
      <Header>
        <NavigationButton onPress={goToPreviousChapter}>
          <ButtonText>Previous</ButtonText>
        </NavigationButton>
        <ChapterTitle>Chapter {currentChapter}</ChapterTitle>
        <NavigationButton onPress={goToNextChapter}>
          <ButtonText>Next</ButtonText>
        </NavigationButton>
      </Header>
      <Content>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView>
            <ChapterText>{chapterText}</ChapterText>
          </ScrollView>
        )}
      </Content>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;
`;

const NavigationButton = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
`;

const ChapterTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ChapterText = styled.Text``;

export default ReadingScreen;
