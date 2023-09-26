import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "@screens/SignIn/sign-in";
import { SignUp } from "@screens/SignUp/sign-up";

type AuthRoutes = {
  SignIn: undefined;
  SignUp: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="SignIn"
        component={SignIn}
      />
      <Screen 
        name="SignUp"
        component={SignUp}
      />
    </Navigator>
  )
}