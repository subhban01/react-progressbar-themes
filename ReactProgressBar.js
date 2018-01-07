import React from 'react';
import styles from './ReactProgressBar.scss';



export default class ReactProgressBar extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	componentWillReceiveProps(nextState, nextProps){
		console.log(nextProps);
		this.refs.bar.style.width = this.props.percent+'%';
	}

	componentDidMount(){
		this.refs.bar.style.width = this.props.percent+'%';
		this.refs.container.style.width = this.props.length;
		if(this.props.theme == 'theme4')
			this.refs.bar.style.width = `calc(${this.props.percent}% - 10px)`
	}

   render() {
   	let {percent, theme, barColor, trenchColor, text, length} = this.props;
      return (
      	<div className={styles[`${theme}`]}>
	         <div ref='container' className={styles['container']}>
	         	<div ref='bar' className={styles['bar']}></div>
	         </div>
        </div>
      );
   }
}