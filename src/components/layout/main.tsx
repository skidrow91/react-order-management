import Header from './header/Header/Header';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../views/LoginPage/LoginPage';
import Product from '../../views/Products/Product';

function Main() {

	return (
		<div className='container mx-auto'>
			<Header />
			<main>
      	<Routes>
					<Route path="/" element={<Product />} />
					<Route path="/product" element={<Product />} />
        	<Route path="/login" element={<LoginPage />} />
				</Routes>
      </main>								
		</div>
	);
}

export default Main;