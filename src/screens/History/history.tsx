import { HistoryCard } from "@components/HistoryCard/history-card";
import { ScreenHeader } from "@components/ScreenHeader/screen-header";
import { Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";


export function History(){
  const [ exercises, setExercises ] = useState([
    {
      title: '27/08/2023',
      data: ['Puxada frontal'],
    },
    {
      title: '26/08/2023',
      data: ['Puxada frontal'],
    }
  ])

  return(
    <VStack flex={1}>
      <ScreenHeader
        title="Histórico de Exercício"
      />
      <SectionList 
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color='gray.200' fontSize='md' mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center'}}
        ListEmptyComponent={() => (
          <Text color='gray.100' textAlign='center'>
            Que pena.{`\n`}
            Você ainda não registrou nenhum exercício hoje.{`\n`}
            Vai já treinar!
          </Text>
        )}
      />
    </VStack>
  );
}