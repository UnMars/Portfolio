import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faUsers,
	faClock,
	faDatabase,
	faBolt,
	faCircleExclamation,
	faGear,
	faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

/**
 * BloomFilterDemo
 * A self-contained interactive demo (no Tailwind) to visualize Bloom Filters
 * and compare with a naive list lookup. Designed to be embedded on a project page.
 */
const BloomFilterDemo = () => {
	const [username, setUsername] = useState("");
	const [results, setResults] = useState(null);
	const [isSearching, setIsSearching] = useState(false);
	const [showSettings, setShowSettings] = useState(false);

	const [bloomParams, setBloomParams] = useState({
		capacity: 1000000,
		errorRate: 0.08,
		bitArraySize: 9585059,
		hashFunctions: 3,
		memoryMB: 1.2,
	});

	// Trigger MathJax typesetting after mount and when settings panel toggles
	useEffect(() => {
		if (window.MathJax && window.MathJax.typesetPromise) {
			window.MathJax.typesetPromise();
		}
	}, [showSettings]);

	const stats = useMemo(
		() => ({
			totalUsers: bloomParams.capacity,
			bloomFalsePositiveRate: bloomParams.errorRate,
			listMemory: `${Math.round(
				(bloomParams.capacity * 76) / 1000000
			)} MB`,
			bloomMemory: `${bloomParams.memoryMB.toFixed(1)} MB`,
		}),
		[bloomParams]
	);

	// ---- Math helpers ----
	const calculateOptimalParams = (capacity, errorRate) => {
		const bitArraySize = Math.ceil(
			-(capacity * Math.log(errorRate)) / Math.pow(Math.log(2), 2)
		);
		const hashFunctions = Math.round(
			(bitArraySize / capacity) * Math.log(2)
		);
		const memoryMB = bitArraySize / (8 * 1024 * 1024);
		return {
			capacity,
			errorRate,
			bitArraySize,
			hashFunctions: Math.max(1, Math.min(hashFunctions, 10)),
			memoryMB,
		};
	};

	const optimizeBloomFilter = () => {
		setBloomParams((prev) =>
			calculateOptimalParams(prev.capacity, prev.errorRate)
		);
	};

	const updateBloomParams = (field, value) => {
		const next = { ...bloomParams, [field]: value };
		if (field === "capacity" || field === "errorRate") {
			const optimal = calculateOptimalParams(
				field === "capacity" ? value : bloomParams.capacity,
				field === "errorRate" ? value : bloomParams.errorRate
			);
			setBloomParams(optimal);
			return;
		}
		if (field === "bitArraySize") {
			next.memoryMB = value / (8 * 1024 * 1024);
		}
		setBloomParams(next);
	};

	// ---- Demo logic ----
	const popularUsernames = [
		"alice",
		"bob",
		"charlie",
		"diana",
		"eve",
		"frank",
		"grace",
		"henry",
	];

	const simulateSearch = async (searchTerm) => {
		setIsSearching(true);
		await new Promise((r) => setTimeout(r, 800));
		const isPopular = popularUsernames.includes(searchTerm.toLowerCase());
		const listTime = Math.random() * 80 + 20;
		const bloomTime = Math.random() * 0.5 + 0.3;
		const shouldBeFalsePositive =
			!isPopular && Math.random() < bloomParams.errorRate;
		const bloomFound = isPopular || shouldBeFalsePositive;
		setResults({
			username: searchTerm,
			list: { found: isPopular, time_ms: listTime },
			bloom: {
				found: bloomFound,
				time_ms: bloomTime,
				false_positive_rate: bloomParams.errorRate,
				is_false_positive: shouldBeFalsePositive,
			},
		});
		setIsSearching(false);
	};

	const handleSearch = () => {
		if (username.trim()) {
			simulateSearch(username.trim());
		}
	};

	// ---- Styles ----
	const styles = {
		panel: {
			background: "#fff",
			borderRadius: 12,
			boxShadow: "0 6px 20px rgba(0,0,0,.08)",
			padding: 20,
			margin: "16px 0",
		},
		titleRow: {
			display: "flex",
			alignItems: "center",
			gap: 10,
			marginBottom: 10,
		},
		badge: {
			display: "inline-flex",
			alignItems: "center",
			gap: 8,
			background: "#f3f4f6",
			borderRadius: 10,
			padding: "10px 12px",
		},
		grid: {
			display: "grid",
			gridTemplateColumns: "repeat(8, 28px)",
			gap: 6,
			justifyContent: "center",
		},
		bit: {
			height: 28,
			width: 28,
			borderRadius: 6,
			border: "2px solid #d1d5db",
			fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
			fontSize: 12,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			color: "#9ca3af",
			background: "#f9fafb",
			transition: "all .25s ease",
		},
		bitOn: {
			border: "2px solid #7c3aed",
			background: "#8b5cf6",
			color: "#fff",
		},
		row: { display: "flex", gap: 10, alignItems: "center" },
		pill: {
			display: "inline-flex",
			padding: "4px 10px",
			borderRadius: 999,
			background: "#eef2ff",
			color: "#4338ca",
			fontSize: 12,
		},
		input: {
			width: "100%",
			padding: "10px 12px 10px 34px", // used where an icon sits inside (search)
			borderRadius: 10,
			border: "1px solid #d1d5db",
			outline: "none",
			boxSizing: "border-box",
		},
		inputPlain: {
			width: "100%",
			padding: "10px 12px",
			borderRadius: 10,
			border: "1px solid #d1d5db",
			outline: "none",
			boxSizing: "border-box",
		},
		btn: {
			padding: "10px 14px",
			borderRadius: 10,
			border: "1px solid #2563eb",
			background: "#2563eb",
			color: "#fff",
			cursor: "pointer",
		},
		btnGhost: {
			padding: "8px 12px",
			borderRadius: 10,
			border: "1px solid #d1d5db",
			background: "#fff",
			color: "#2563eb",
			cursor: "pointer",
		},
		label: { fontSize: 12, color: "#6b7280", marginBottom: 4 },
		field: { marginBottom: 10 },
		subtle: { fontSize: 12, color: "#6b7280" },
		stat: {
			background: "#fff",
			borderRadius: 10,
			boxShadow: "0 1px 6px #0001",
			padding: 12,
		},
	};

	return (
		<div>
			{/* Header */}
			<div style={{ textAlign: "center", marginBottom: 16 }}>
				<h2 style={{ margin: 0 }}>Python List vs Bloom Filter</h2>
				<div style={{ color: "#6b7280", marginTop: 6 }}>
					Compare performance and experiment with parameters
				</div>
			</div>

			{/* Settings toggle */}
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginBottom: 12,
				}}
			>
				<button
					onClick={() => setShowSettings((s) => !s)}
					style={showSettings ? styles.btn : styles.btnGhost}
				>
					<FontAwesomeIcon icon={faGear} style={{ marginRight: 8 }} />
					{showSettings ? "Hide settings" : "Configure Bloom Filter"}
				</button>
			</div>

			{showSettings && (
				<div style={styles.panel}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<div style={styles.titleRow}>
							<FontAwesomeIcon
								icon={faGear}
								style={{ color: "#2563eb" }}
							/>
							<strong>Bloom Filter Settings</strong>
						</div>
						<button
							onClick={optimizeBloomFilter}
							style={styles.btn}
						>
							<FontAwesomeIcon
								icon={faRotateRight}
								style={{ marginRight: 8 }}
							/>
							Optimize
						</button>
					</div>

					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(260px, 1fr))",
							gap: 16,
							marginTop: 8,
							minWidth: 0,
						}}
					>
						<div style={{ minWidth: 0 }}>
							<div style={styles.field}>
								<div
									style={styles.label}
								>{`Expected elements (\\(n\\))`}</div>
								<input
									type="number"
									value={bloomParams.capacity}
									onChange={(e) =>
										updateBloomParams(
											"capacity",
											parseInt(
												e.target.value || "0",
												10
											) || 1000000
										)
									}
									min={1000}
									max={10000000}
									step={100000}
									style={styles.input}
									title="n: expected elements"
								/>
							</div>
							<div style={styles.field}>
								<div
									style={styles.label}
								>{`Target false positive rate (%) (\\(p\\))`}</div>
								<input
									type="number"
									value={(
										bloomParams.errorRate * 100
									).toFixed(1)}
									onChange={(e) =>
										updateBloomParams(
											"errorRate",
											(parseFloat(
												e.target.value || "0"
											) || 8) / 100
										)
									}
									min={0.1}
									max={50}
									step={0.1}
									style={styles.input}
									title="p: target false positive rate"
								/>
							</div>
						</div>
						<div style={{ minWidth: 0 }}>
							<div style={styles.field}>
								<div
									style={styles.label}
								>{`Bit array size (\\(m\\))`}</div>
								<input
									type="number"
									value={bloomParams.bitArraySize}
									onChange={(e) =>
										updateBloomParams(
											"bitArraySize",
											parseInt(
												e.target.value || "0",
												10
											) || 9585059
										)
									}
									style={styles.input}
									title="m: bit array size (number of bits)"
								/>
								<div style={styles.subtle}>
									{(
										bloomParams.bitArraySize / 1000000
									).toFixed(1)}
									M bits
								</div>
							</div>
							<div style={styles.field}>
								<div
									style={styles.label}
								>{`Hash functions (\\(k\\))`}</div>
								<input
									type="number"
									value={bloomParams.hashFunctions}
									onChange={(e) =>
										updateBloomParams(
											"hashFunctions",
											parseInt(
												e.target.value || "0",
												10
											) || 3
										)
									}
									min={1}
									max={10}
									style={styles.input}
									title="k: number of hash functions"
								/>
							</div>
							<div style={styles.field}>
								<div
									style={styles.label}
								>{`Estimated memory (MB)`}</div>
								<div
									style={{
										...styles.input,
										display: "flex",
										alignItems: "center",
										background: "#f9fafb",
									}}
									title="memory (MB): m / (8 × 1024^2)"
								>
									{bloomParams.memoryMB.toFixed(2)} MB
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							marginTop: 10,
							background: "#eff6ff",
							borderRadius: 10,
							padding: 12,
							color: "#1e40af",
						}}
					>
						<b>Optimal formulas:</b>
						<div
							style={{
								marginTop: 6,
								overflowX: "auto",
								WebkitOverflowScrolling: "touch",
							}}
						>
							{`\\[ m = -\\frac{n\\,\\ln p}{(\\ln 2)^2} \\quad\\text{and}\\quad k = \\frac{m}{n}\\,\\ln 2 \\]\\[ \\text{memory (MB)} = \\frac{m}{8\\times 1024^2} \\]`}
						</div>
						<div style={{ marginTop: 6 }}>
							<span>{`\\(k\\)`}</span> is the number of hash
							functions.
						</div>
					</div>
				</div>
			)}

			{/* Search panel */}
			<div style={styles.panel}>
				<div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
					<div
						style={{ position: "relative", flex: 1, minWidth: 220 }}
					>
						<FontAwesomeIcon
							icon={faSearch}
							style={{
								position: "absolute",
								top: 12,
								left: 10,
								color: "#9ca3af",
							}}
						/>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							onKeyDown={(e) =>
								e.key === "Enter" && handleSearch()
							}
							placeholder="Try: alice, bob, charlie..."
							style={styles.input}
						/>
					</div>
					<button
						onClick={handleSearch}
						disabled={isSearching || !username.trim()}
						style={styles.btn}
					>
						<FontAwesomeIcon
							icon={faBolt}
							style={{ marginRight: 8 }}
						/>
						{isSearching ? "Searching..." : "Search"}
					</button>
				</div>
			</div>

			{/* Stats */}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
					gap: 10,
					margin: "0 0 12px 0",
				}}
			>
				<div style={styles.stat}>
					<div style={styles.row}>
						<FontAwesomeIcon
							icon={faUsers}
							style={{ color: "#2563eb" }}
						/>
						<span className="text-sm" style={{ color: "#6b7280" }}>
							Users
						</span>
					</div>
					<div style={{ fontWeight: 700, fontSize: 18 }}>
						{stats.totalUsers.toLocaleString()}
					</div>
				</div>
				<div style={styles.stat}>
					<div style={styles.row}>
						<FontAwesomeIcon
							icon={faDatabase}
							style={{ color: "#16a34a" }}
						/>
						<span style={{ color: "#6b7280" }}>Python List</span>
					</div>
					<div style={{ fontWeight: 700, fontSize: 18 }}>
						{stats.listMemory}
					</div>
				</div>
				<div style={styles.stat}>
					<div style={styles.row}>
						<FontAwesomeIcon
							icon={faDatabase}
							style={{ color: "#7c3aed" }}
						/>
						<span style={{ color: "#6b7280" }}>Bloom Filter</span>
					</div>
					<div style={{ fontWeight: 700, fontSize: 18 }}>
						{stats.bloomMemory}
					</div>
				</div>
				<div style={styles.stat}>
					<div style={styles.row}>
						<FontAwesomeIcon
							icon={faCircleExclamation}
							style={{ color: "#d97706" }}
						/>
						<span style={{ color: "#6b7280" }}>
							False positives
						</span>
					</div>
					<div style={{ fontWeight: 700, fontSize: 18 }}>
						{(stats.bloomFalsePositiveRate * 100).toFixed(1)}%
					</div>
				</div>
			</div>

			{/* Results cards */}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
					gap: 16,
				}}
			>
				<div style={styles.panel}>
					<div style={styles.titleRow}>
						<FontAwesomeIcon
							icon={faDatabase}
							style={{ color: "#16a34a" }}
						/>
						<strong>Python List</strong>
					</div>
					{isSearching ? (
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 8,
							}}
						>
							<div className="spinner" />
							<span style={{ color: "#6b7280", fontSize: 14 }}>
								Searching...
							</span>
						</div>
					) : results ? (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: 8,
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 8,
									color: results.list.found
										? "#16a34a"
										: "#dc2626",
								}}
							>
								<div
									style={{
										width: 10,
										height: 10,
										borderRadius: 9999,
										background: results.list.found
											? "#16a34a"
											: "#dc2626",
									}}
								/>
								<span style={{ fontWeight: 600 }}>
									{results.list.found ? "Found" : "Not found"}
								</span>
							</div>
							<div style={styles.row}>
								<FontAwesomeIcon icon={faClock} />
								<span
									style={{ color: "#6b7280", fontSize: 14 }}
								>
									{results.list.time_ms.toFixed(2)} ms
								</span>
							</div>
						</div>
					) : (
						<div style={{ color: "#6b7280", fontSize: 14 }}>
							Enter a username to start
						</div>
					)}
				</div>

				<div style={styles.panel}>
					<div style={styles.titleRow}>
						<FontAwesomeIcon
							icon={faBolt}
							style={{ color: "#7c3aed" }}
						/>
						<strong>Bloom Filter</strong>
					</div>
					{isSearching ? (
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 8,
							}}
						>
							<div className="spinner" />
							<span style={{ color: "#6b7280", fontSize: 14 }}>
								Searching...
							</span>
						</div>
					) : results ? (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: 8,
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 8,
									color: results.bloom.found
										? "#16a34a"
										: "#dc2626",
								}}
							>
								<div
									style={{
										width: 10,
										height: 10,
										borderRadius: 9999,
										background: results.bloom.found
											? "#16a34a"
											: "#dc2626",
									}}
								/>
								<span style={{ fontWeight: 600 }}>
									{results.bloom.found
										? "Found"
										: "Not found"}
								</span>
							</div>
							<div style={styles.row}>
								<FontAwesomeIcon icon={faClock} />
								<span
									style={{ color: "#6b7280", fontSize: 14 }}
								>
									{results.bloom.time_ms.toFixed(2)} ms
								</span>
							</div>
							<div>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: 8,
										color: "#b45309",
									}}
								>
									<FontAwesomeIcon
										icon={faCircleExclamation}
									/>
									<span style={{ fontSize: 14 }}>
										False positives:{" "}
										{(
											results.bloom.false_positive_rate *
											100
										).toFixed(1)}
										%
									</span>
								</div>
								{results.bloom.is_false_positive && (
									<div
										style={{
											fontSize: 12,
											color: "#dc2626",
											background: "#fef2f2",
											padding: 8,
											borderRadius: 8,
											marginTop: 6,
										}}
									>
										False positive: the user does not
										actually exist.
									</div>
								)}
							</div>
						</div>
					) : (
						<div style={{ color: "#6b7280", fontSize: 14 }}>
							Enter a username to start
						</div>
					)}
				</div>
			</div>

			{/* Summary */}
			{results && (
				<div style={styles.panel}>
					<h3 style={{ marginTop: 0, marginBottom: 10 }}>
						Comparison Summary
					</h3>
					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(240px, 1fr))",
							gap: 16,
						}}
					>
						<div>
							<h4 style={{ color: "#16a34a", margin: 0 }}>
								Python List
							</h4>
							<ul style={{ color: "#6b7280" }}>
								<li>
									Result:{" "}
									{results.list.found
										? "✓ Found"
										: "✗ Not found"}
								</li>
								<li>
									Time: {results.list.time_ms.toFixed(2)} ms
								</li>
								<li>Accuracy: 100% (no false positives)</li>
								<li>Memory: {stats.listMemory}</li>
							</ul>
						</div>
						<div>
							<h4 style={{ color: "#7c3aed", margin: 0 }}>
								Bloom Filter
							</h4>
							<ul style={{ color: "#6b7280" }}>
								<li>
									Result:{" "}
									{results.bloom.found
										? "✓ Found"
										: "✗ Not found"}
								</li>
								<li>
									Time: {results.bloom.time_ms.toFixed(2)} ms
								</li>
								<li>
									Accuracy: ~
									{(
										(1 -
											results.bloom.false_positive_rate) *
										100
									).toFixed(1)}
									%
								</li>
								<li>Memory: {stats.bloomMemory}</li>
							</ul>
						</div>
					</div>
					<div
						style={{
							marginTop: 10,
							background: "#eff6ff",
							borderRadius: 10,
							padding: 12,
							color: "#1e40af",
						}}
					>
						<b>Performance:</b> Bloom Filter is{" "}
						{(results.list.time_ms / results.bloom.time_ms).toFixed(
							0
						)}
						x faster with much lower memory ({stats.bloomMemory} vs{" "}
						{stats.listMemory}), but with ~
						{(results.bloom.false_positive_rate * 100).toFixed(1)}%
						false positives.
					</div>
				</div>
			)}

			{/* Quick actions */}
			<div style={styles.panel}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 8,
					}}
				>
					<strong>Try presets</strong>
					<span style={styles.subtle}>Popular usernames</span>
				</div>
				<div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
					{popularUsernames.map((n) => (
						<button
							key={n}
							onClick={() => setUsername(n)}
							style={styles.pill}
						>
							{n}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default BloomFilterDemo;
