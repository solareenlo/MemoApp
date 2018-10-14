import { createStackNavigator } from 'react-navigation';

import MemoListScreen from './src/screens/MemoListScreen';

const App = createStackNavigator({
    Home: {
        screen: MemoListScreen,
        navigationOptions: () => ({
            headerTitle: 'MEMODASU',
            headerStyle: {
                backgroundColor: '#BBB',
            },
            headerTitleStyle: {
                color: '#fff',
            },
        }),
    },
});

export default App;
