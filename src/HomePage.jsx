import React, { useEffect } from 'react'
export default function HomePage() {
	useEffect(() => {
		document.title = 'Home'
	}, [])

	return (
		<div>
			<h2 className="page-title">Home</h2>
			<p>
				<strong>Conditional Rendering</strong>: Render UI elements based on
				conditions (for example, show billing only after calculation).
			</p>
			<p>
				<strong>useEffect</strong>: Run side-effects after render (setting
				document.title, fetching data, subscriptions).
			</p>
			<p>
				<strong>Routing components</strong>: Use <em>BrowserRouter</em>,
				<em>Routes</em>, <em>Route</em>, and <em>Link</em> to navigate between
				pages.
			</p>
		</div>
	)
}

