import { h, Component } from 'preact';
import { isLoaded, bootstrap, dojoRequire } from 'esri-loader';

export default class Map extends Component {
    constructor() {
        super();
        // set initial state
        this.state = { mapLoaded: false }
    }
    componentDidMount() {
      if (!isLoaded()) {
        // no, lazy load it the ArcGIS API before using its classes
        bootstrap((err) => {
          if (err) {
            console.error(err);
          } else {
            // once it's loaded, create the map
            this.createMap();
          }
        }, {
          // use a specific version instead of latest 4.x
          url: 'https://js.arcgis.com/3.20/'
        });
      } else {
        // ArcGIS API is already loaded, just create the map
        this.createMap();
      }
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
      const item = state.item
      const title = item && item.title
      const link = item ? `https://www.arcgis.com/home/item.html?id=${item.id}` : 'javascript:void(0)'
      // show a loading indicator until the map is loaded
      const loadingStyle = {
        display: state.mapLoaded ? 'none' : 'block'
      }
      // show the map title
      const titleStyle = {
        display: title ? 'block' : 'none'
      }
      // set up the DOM to attach the map to
      return <div class='map-page'>
        <div className='map-title' style={titleStyle}><a href={link}>{title}</a></div>
        <div id='map' style={{height: 'calc(100vh - 56px)'}} />
        <div className='loading' style={loadingStyle}>Loading...</div>
      </div>
    }

     createMap () {
       // get item id from route params or use default
       const itemId = /*props.params.itemId ||*/ '8e42e164d4174da09f61fe0d3f206641'
       // require the map class
       dojoRequire(['esri/arcgis/utils'], (arcgisUtils) => {
         // create a map at a DOM node in this component
         arcgisUtils.createMap(itemId, 'map')
         .then((response) => {
           // hide the loading indicator
           // and show the map title
           // NOTE: this will trigger a rerender
           this.setState({
             mapLoaded: true,
             item: response.itemInfo.item
           })
         }, (err) => {
           this.setState({
             mapLoaded: true,
             error: err.message || err
           })
         })
       })
    }
}
