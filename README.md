# react-progressbar-themes

React component for displaying progress bar. Has themes to choose from.


![themes list](pbar-themes.png?raw=true)


## Install
```
npm install react-progressbar-themes
```


## Usage
```
import React from 'react';
const Pbar = require('react-progressbar-themes');

export default class yourComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			
		}
	}

   render() {
      return (
      	<Pbar theme={'theme4'} percent={34} length={'100%'}/>
      );
   }
}

```


## Props

| Prop | Values | Example | Description | Type |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ```percent```  | 0 to 100  | 56  | percentage completed  | Number  |
| ```theme```  | Content Cell  | 'theme4'  | theme name  | String  |
| ```length```  | percent or px value  | '40%' or '300px'  | desired length of the progressbar  | String  |
| ```barColor```  | NA  | NA  | to be added  | NA  |
| ```trenchColor```  | NA  | NA  | to be added  | NA  |
| ```text```  | NA  | NA  | to be added  | NA  |

