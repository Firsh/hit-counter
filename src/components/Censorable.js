"use client";
import React from 'react'
export default function Censorable({ children }) {
	const [visible, setVisible] = React.useState(true);
	return (
		<button onClick={() => setVisible(!visible)} className={!visible && "censored"}>
			{children}
		</button>
	);
}