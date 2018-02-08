import { h, Component } from 'preact';
import { loadModules } from 'esri-loader';

export default class Map extends Component {
    constructor() {
        super();
        // set initial state
        this.state = { mapLoaded: false }
    }
    componentDidMount() {
        // get item id from route params or use default
        const itemId = /*props.params.itemId ||*/ '8e42e164d4174da09f61fe0d3f206641'
        // load the arcgisUtils module
        loadModules(['esri/arcgis/utils'], {
            // use a specific version instead of latest 4.x
            url: 'https://js.arcgis.com/3.23/',
            // also lazy load the CSS for this version
            css: 'https://js.arcgis.com/3.23/esri/css/esri.css'
        }).then(([arcgisUtils]) => {
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
      return <div class='page__map'>
        <div className='map-title' style={titleStyle}><a href={link}>{title}</a></div>
        <div id='map' style={{height: 'calc(100vh - 56px)'}} />
        <div className='loading' style={loadingStyle}>Loading...</div>
      </div>
    }
}
