import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Homepage from './pages/Homepage/Homepage';
import NoPage from './pages/Nopage/NoPage';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Flexbox from './foundations/Flexbox/Flexbox';

function App() {
	return (
		<Flexbox className={styles['app']}>
			<menu className={styles['menu-con']}>
				<Menu />
			</menu>
			<Flexbox direction="column" className={styles['main-content']}>
				<Header />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</Flexbox>
		</Flexbox>
	);
}

export default App;
