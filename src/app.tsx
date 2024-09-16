import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./app.css";
import { hc } from "hono/client";
import type { AppType } from "../api";
import reactLogo from "./assets/react.svg";

const client = hc<AppType>("/api");

function App() {
	const [msg, setMsg] = useState("");
	const [count, setCount] = useState(0);

	useEffect(() => {
		client.index
			.$get()
			.then((res) => res.text())
			.then((msg) => setMsg(msg));
	}, []);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>{msg}</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/app.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
