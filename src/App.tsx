import { Route, Routes } from 'react-router-dom';

import { Aside, Header } from '@components';
import { OneUser, UserPanel, MessagesForKey, UserPanel } from '@pages';


import styles from './App.module.scss';
// import  from '@/pages/MessagesForKey/MessagesForKey.tsx';

function App() {
    return (
        <>
            <Header />
            <main className={styles.main}>


                <Aside />

                <Routes>
                    <Route path='/statistics' element={<Statistics />} />
                    <Route path='/users' element={<UserPanel />} />
                    {/* user должен быть динамическим роутом */}
                    <Route path='/user' element={<OneUser />} />

                    <Route path='/messages' element={<MessagesForKey />} />

                </Routes>

            </main>



        </>
    );
}

export default App;
