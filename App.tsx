import React from 'react';
import {store} from './app/store';
import {Provider} from 'react-redux';
import MyApp from './components/MyApp';


const App = () => {
return (
<Provider store={store}>
<MyApp />
</Provider>
);
};

export default App;