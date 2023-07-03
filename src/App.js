//import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Products from './pages/products';
import SignIn from './pages/signin';
import Contact from './pages/contact';

import React, {useState, useEffect} from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import PostSummary from './components/ItemSummary';
import { baseUrl } from './config';



function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' exact element={<Home />} />
        		<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/products' element={<Products />} />
				<Route path='/sign-in' element={<SignIn />} />
			</Routes>
		</Router>
	);
}

export default App;