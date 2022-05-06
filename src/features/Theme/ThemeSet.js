import React from "react";
import { useState, useEffect } from "react";
import Sun from "./Icons/Sun";
import Moon from "./Icons/Moon";

let ThemeSetter = (props) => {
	const [theme, setTheme] = useState(localStorage.getItem("theme"));
	const [ stylePath, setStylePath ] = useState("./Themes/" + (theme == "light" ? "Light" : "Dark")  + ".css");

	const handleStylePath = () => {
		if (theme == "light") {
			setStylePath("./Themes/Dark.css");
		} else if (theme == "dark") {
			setStylePath("./Themes/Light.css");
		} else {
			setStylePath("./Themes/Light.css");
		}
	}

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
		<empty></empty>
	);
}

export default ThemeSetter;