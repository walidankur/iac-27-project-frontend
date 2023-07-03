//import React from 'react';

import React, {useState, useEffect} from "react";

import PostSummary from "../components/IndexSummary";
import { baseUrl } from "../config";

const Home = () => {
	
	let [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      let results = await fetch(`${baseUrl}/api/item/getexc`).then(resp => resp.json());
      console.log(results);
      setPosts(results);
    }
  
    loadPosts();
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
	
	return (
		
		<div align='center'>
			<h1>Welcome to Ecom Gallery</h1>
			
			<img src='ecom.jpg' align='center'></img>

			<br></br>

			<h1>Exclusive Products</h1>

			{posts.map(post => {
          return(
            <PostSummary {...post} key={post._id} />
          )
        	})}

		</div>
	);
};

export default Home;