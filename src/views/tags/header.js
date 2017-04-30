import { h } from 'preact';
import { Link } from 'preact-router';

export default function () {
	return (
		<header className="header">
			<h1>Esri Preact PWA</h1>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/map">Map</Link>
				<Link href="/credit">Credit</Link>
			</nav>
		</header>
	)
}
