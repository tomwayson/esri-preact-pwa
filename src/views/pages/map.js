import { h, Component } from 'preact';
import { loadModules } from 'esri-loader';

export default class Map extends Component {
    constructor() {
        super();
        // set initial state
        this.state = { mapLoaded: false }
    }
    componentDidMount() {
        // NOTE: since this is a simple, read-only application
        // we've included a few non-standard performance optimizations
        loadModules(['esri/config'], {
            // use a specific version instead of latest 4.x
            url: 'https://js.arcgis.com/4.6/',
            // also lazy load the CSS for this version
            // NOTE: using view.css instead of main.css to save a few bytes
            css: 'https://js.arcgis.com/4.6/esri/css/view.css'
        }).then(([esriConfig]) => {
            // we're not using secure services
            // so save some bytes by not loading/using the identity manager
            // NOTE: this has to be done before even _loading_ other modules
            esriConfig.request.useIdentity = false;
            // now we can load the Map and MapView modules
            loadModules(['esri/Map', 'esri/views/MapView'])
            .then(([Map, MapView]) => {
                // create a map at a DOM node in this component
                var map = new Map({
                    basemap: 'streets'
                })
                var view = new MapView({
                    container: 'map',
                    map: map,
                    zoom: 4,
                    center: [15, 65] // longitude, latitude
                }).when(() => {
                    // once the map is loaded
                    // hide the loading indicator
                    // NOTE: this will trigger a rerender
                    this.setState({
                        mapLoaded: true
                    })
                })
            })
        }).catch(err => {
            this.setState({
                mapLoaded: true,
                error: err.message || err
            })
        })
    }

    render(props, state) {
      // show any map errors
      const error = state.error
      if (error) {
        return <div className='container'>
          <div className='alert alert-danger alert-map'>{error}</div>
          <button className='btn btn-default' onClick={hashHistory.goBack}>Go back</button>
        </div>
      }
      // otherwise, show map
      const title = 'Simple 2D MapView'
      const link = 'https://developers.arcgis.com/javascript/latest/sample-code/intro-mapview/index.html'
      // show a loading indicator until the map is loaded
      const loadingStyle = {
        display: state.mapLoaded ? 'none' : 'block'
      }
      // show the map title
      const titleStyle = {
        display: title ? 'block' : 'none'
      }
      // set up the DOM to attach the map to
      return <div class='page__map'>
        <div className='map-title' style={titleStyle}><a href={link}>{title}</a></div>
        <div id='map' style={{height: 'calc(100vh - 56px)'}} />
        <div className='loading' style={loadingStyle}>Loading...</div>
      </div>
    }
}
