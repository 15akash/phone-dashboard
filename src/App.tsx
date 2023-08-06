import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Homepage from './pages/Homepage/Homepage';
import NoPage from './pages/Nopage/NoPage';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Flexbox from './foundations/Flexbox/Flexbox';
import AllOtherPage from './pages/AllOtherPage/AllOtherPage';
import FormsProvider from './store/FormsProvider';

function App() {
	const [route, setRoute] = useState<string>('/');

	return (
		<FormsProvider>
			<div style={{ display: 'flex' }} className={styles['app']}>
				<menu className={styles['menu-con']}>
					<Menu menuItem={setRoute} />
				</menu>
				<Flexbox direction="column" className={styles['main-content']}>
					<Header />
					<Routes>
						<Route path={'/'} element={<Homepage />} />
						<Route path={`/${route}`} element={<AllOtherPage pageName={route} />} />
						<Route path="*" element={<NoPage />} />
					</Routes>
				</Flexbox>
			</div>
		</FormsProvider>
	);
}

export default App;
