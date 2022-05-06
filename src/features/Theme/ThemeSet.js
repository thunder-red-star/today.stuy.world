import React from "react";
import { useState, useEffect } from "react";

let ThemeSetter = (props) => {
	const [theme] = useState(localStorage.getItem("theme"));
	const [ stylePath ] = useState("./Themes/" + (theme === "light" ? "Light" : "Dark")  + ".css");

	useEffect(() => {
		var head = document.head;
		var link = document.createElement("link");

		link.type = "text/css";
		link.rel = "stylesheet";
		link.href = stylePath;

		head.appendChild(link);

		return () => { head.removeChild(link); }

	}, [theme, stylePath]);

	return (
		<div></div>
	);
}

export default ThemeSetter;