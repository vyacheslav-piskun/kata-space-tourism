import React, { useEffect, useState } from 'react';

import * as styles from './App.module.scss';

const App = () => {

	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log('hello world')
	})
	return (
		<div className={styles.wrapper}>
			<div>App Component</div>
			<div>{count}</div>
			<button type="button" onClick={() => {setCount(prev => prev + 1)}}>CLICK</button>
		</div>
	);
};

export default App;
