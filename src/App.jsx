// import './App.css';
// import { Routes, Route } from 'react-router-dom'; 
// import { Navbar } from './pages/Navbar';
// import { Header } from './pages/Header';

// function App() {
//   return (
    
      // <div>
      //   <Header />
      //   <Navbar />
        
      //   <div style={{ marginLeft: '200px', padding: '20px' }}>
      //     <Routes>
      //       <Route path='/' element={<Context/>}/>
      //     </Routes>
      //   </div>
      // </div>
    
//   );
// }

// export default App;


// App.js
// App.js
import './App.css';
import React from 'react';
import { DataProvider } from './pages/DataContext';
import BookList from './pages/BookList';
// import { Header } from './pages/Header';
// import { Navbar } from './pages/Navbar';

const App = () => {
  return (
    <>
    {/* <Header/>
    <Navbar/> */}
    <DataProvider>
      <div>
        <h1>Books by Chetan Bhagat</h1>
        <BookList />
      </div>
    </DataProvider>
    </>
  );
};

export default App;

