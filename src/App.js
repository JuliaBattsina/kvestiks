import React from 'react';
import CustomNavbar from '../src/Navbars/CustomNavbar'; // Путь к вашему компоненту Navbar
import Content from './Contect/Content';

function App() {
    return (
        <div>
            <CustomNavbar />
            <Content/>
        </div>
    );
}

export default App;