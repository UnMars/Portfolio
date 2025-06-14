import React, { useState, useRef } from "react";
import "./styles/searchbar.css";

export default function SearchBar({
	placeholder = "",
	onChange,
	onEnter,
	filteredProjects = [],
}) {
	const [query, setQuery] = useState("");
	const inputRef = useRef(null);

	const handleChange = (e) => {
		const value = e.target.value;
		setQuery(value);
		if (onChange) onChange(value);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && filteredProjects.length === 1) {
			if (onEnter) onEnter(filteredProjects[0]);
		}
	};

	return (
		<div className="searchbar-container">
			<span
				className="searchbar-icon"
				onClick={() => inputRef.current?.focus()}
			>
				🔍
			</span>
			<input
				className="searchbar-input"
				type="text"
				value={query}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				placeholder={placeholder}
				autoFocus
				ref={inputRef}
			/>
		</div>
	);
}
