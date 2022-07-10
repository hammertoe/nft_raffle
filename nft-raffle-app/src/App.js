import './App.css';
import "react-widgets/styles.css"

import NumberPicker from "react-widgets/NumberPicker";

//import * as React from 'react';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

import { XummSdk } from "xumm-sdk";


function App() {

    function buyTicket() {
	alert('Hello!');
    }

    
  return (
    <div className="App">
	  <header className="App-header">
	      <h1>Nicole's Car Fundraiser</h1>
	  </header>
	<Grid container spacing={2}>
	    <Grid item xs={2}> </Grid>
	    <Grid item xs={8}>
		<p>My good friend, Nicole runs a small catering business from her kitchen in Barbados. She cooks food for collection and delivery by foot in her neighbourhood. She had managed to save up for a used car to help grow her business and be able to expand her delivery area. Four days after getting the car, a truck hit her and the car was written off. Luckily she was OK, but the car is beyond repair. As it was so old, and purchased from a family member there is no official valuation and insurance will unlikely pay out anything near the cost of actually replacing it.</p>

		<p>So we are running a fundraiser to buy her another car. We are raffling off a handmade crochet blanket made by my wife.</p>
		</Grid>
	    <Grid item xs={2}> </Grid>
	    <Grid item xs={2}> </Grid>
	    <Grid item xs={4}>
		<Item>
		    <img src="https://raw.githubusercontent.com/hammertoe/nft_raffle/main/images/nicole-souse_small.jpeg" alt="Nicole and food" />
		</Item>
	    </Grid>
	    <Grid item xs={4}>
		<Item>
	<img src="https://raw.githubusercontent.com/hammertoe/nft_raffle/main/images/nicole-car-crash_small.jpeg" alt="Nicole's wrecked car" />
		</Item>
	    </Grid>
	    <Grid item xs={2}> </Grid>
	    <Grid item xs={2}> </Grid>
	    <Grid item xs={8}>
		<Item>
        <p>
	  Each ticket is 10 XRP. How many raffle tickets do you want to buy?
        </p>
<p>
              <NumberPicker defaultValue={1} step={1} max={10} min={1} />
</p>

<p>
	      <Button variant="contained" onClick={buyTicket}>
          Buy tickets
        </Button>
</p>
		</Item>
	    </Grid>
	    <Grid item xs={2}> </Grid>
	</Grid>

	</div>
  );
}

export default App;
