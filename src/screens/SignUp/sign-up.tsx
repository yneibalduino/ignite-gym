import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import BackgroundImage from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from "@components/Input/input";
import { Button } from "@components/Button/button";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }
  return(
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16}>
        <Image 
          source={BackgroundImage}
          defaultSource={BackgroundImage}
          alt="Pessoas Treinando"
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
            Crie sua conta
          </Heading>
          <Input placeholder="Nome"/>
          <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none"/>
          <Input placeholder="Senha" secureTextEntry/>
          <Button title="Criar e acessar"/>
        </Center>
        <Button title="Voltar para o login" variant='outline' mt={24} onPress={handleGoBack}/>
      </VStack>
    </ScrollView>
  );
}