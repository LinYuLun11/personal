import { useState } from 'react';
import './App.css';
import Topbar from './component/Topbar';
import Dashboard from './component/Dashboard';

function App(){
    return(
        <div>
            <Topbar />
            <Dashboard />
        </div>
    );
}

const styles = {
	content: {
		marginTop: 60,
		padding: 24,
		overflowY: 'auto',
	},
};

export default App;