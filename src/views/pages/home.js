import { h } from 'preact';
import { Link } from 'preact-router';
import Card from '../tags/card';

export default function (props) {
	return (
		<div className="page page__home">
			<Card>
				<h1>Home</h1>
				<p>An example <a href="https://developers.google.com/web/progressive-web-apps/">progressive web app (PWA)</a> using the <a href="https://developers.arcgis.com/javascript/">ArcGIS API for JavaScript</a> built with <a href="https://github.com/developit/preact">Preact</a>.</p>
				<p>Check out the <Link href="/map">map</Link>.</p>
			</Card>

			<Card>
				<h2>Features:</h2>
				<ul>
					<li>Lazy load the ArcGIS API using <a href="https://github.com/Esri/esri-loader/">esri-loader</a></li>
					<li>Offline Caching (via `serviceWorker`)</li>
					<li>SASS & Autoprefixer</li>
					<li>Asset Versioning (aka "cache-busting")</li>
					<li>ES2015 (ES6) and ES2016 (ES7) support</li>
					<li>Hot Module Replacement (HMR) for all files</li>
					<li>Preact Developer Tools</li>
					<li><a href="https://github.com/GoogleChrome/lighthouse" target="_blank" rel="noopener">Lighthouse</a> approved (100/100)</li>
				</ul>
			</Card>

			<Card>
				<h2>How it works</h2>
				<p>By lazy-loading the ArcGIS API only on routes where it is needed, such as the <Link href="/map">map route</Link>, other pages of this app are able to yield initial load time that are within the targets of a progressive web app.</p>
				<p>View the <a href="https://github.com/tomwayson/esri-preact-pwa" target="_blank">source code on GitHub</a>.</p>
			</Card>
		</div>
	);
}
