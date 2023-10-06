import { ButtonGroup } from "@components/ButtonGroup/button-group";
import { ExerciseCard } from "@components/ExerciseCard/exercise-card";
import { HomeHeader } from "@components/HomeHeader/home-header";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { useState } from "react";


export function Home(){
  const [ groupSelected, setGroupSelected] = useState('costas');
  const [ group, setGroup] = useState(['Legs', 'Front', 'Back']);
  const [ exercises, setExercises] = useState(['1', '2', '3', '4']);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleExerciseDetails = () => {
    navigation.navigate('Exercise')
  }

  return(
    <VStack flex={1}>
      <HomeHeader/>
      <FlatList
        data={group}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <ButtonGroup
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 4 }}
        my={4}
        maxH={10}
        minH={10}
      />
      <VStack px={8}>
        <HStack justifyContent='space-between' mb={5}>
          <Heading color='gray.200' fontSize='md'>
            Exercícios
          </Heading>
          <Text color='gray.200' fontSize='sm'>
            {exercises.length}
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard 
              onPress={handleExerciseDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20}}
        />
      </VStack>
    </VStack>
  );
}