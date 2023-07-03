//import React from 'react';

import React, {useState, useEffect} from "react";

/*import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';*/

import PostSummary from "../components/ItemSummary";
import { baseUrl } from "../config";

const Products = () => {

	let [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      let results = await fetch(`${baseUrl}/api/item/all`).then(resp => resp.json());
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
			<h1>Explore products</h1>
			<br></br>

			{posts.map(post => {
          return(
            <PostSummary {...post} key={post._id} />
          )
        	})}

		</div>
	);
};

export default Products;