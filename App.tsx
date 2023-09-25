import 'react-native-gesture-handler';
import { Dispatch, SetStateAction,useState } from 'react' ;
import {Navigation} from "./src/navigations"
import { AuthProvider } from './src/contexts/auth';
export interface IPage {
  setPageI: Dispatch<SetStateAction<number>>
}
export default function App() {
  return(
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  )
}