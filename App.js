import { createStackNavigator } from 'react-navigation';
import firebase from 'firebase';
import { Platform, StyleSheet } from 'react-native';

import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import ENV from './env.json';

require("firebase/firestore");

const config = {
    apiKey: ENV.FIREBASE_API_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL: ENV.FIREBASE_DB_URL,
    projectId: ENV.FIREBASE_PROJ_ID,
    storageBucket: ENV.FIREBASE_STORAGE,
    messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

const App = createStackNavigator({
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Home: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
    MemoCreate: { screen: MemoCreateScreen },
}, {
    navigationOptions: () => ({
        headerTitle: 'MEMODASU',
        headerTintColor: '#fff',
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: '#BBB',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.4,
            shadowRadius: 3,
            ...Platform.select({
                android: {
                    height: 80,
                },
                ios: {
                    height: 60,
                },
            }),
        },
        headerTitleStyle: {
            color: '#fff',
        },
    }),
});

export default App;
