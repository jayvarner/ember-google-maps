import MapComponent from './map-component';
import layout from '../../templates/components/g-map/route';
import { get, set } from '@ember/object';
import { reject } from 'rsvp';
import { assert } from '@ember/debug';

/**
 * A wrapper for the google.maps.DirectionsRenderer class.
 *
 * @class Route
 * @namespace GMap
 * @module ember-google-maps/components/g-map/route
 * @extends GMap.MapComponent
 */
export default MapComponent.extend({
  layout,
  tagName: '',

  _type: 'route',
  _requiredOptions: ['directions'],
  _ignoredAttrs: ['panel'],

  _addComponent() {
    let options = get(this, '_options');

    if (!options.directions) {
      return reject();
    }

    let directionsDisplay = new google.maps.DirectionsRenderer(options);
    let panelElement = document.getElementById(this.panel);
    console.log(panelElement);
    if (this.panel && panelElement) {
      directionsDisplay.setPanel(panelElement);
    } else if (this.panel && !panelElement) {
      assert(`An element with an id of ${this.panel} does not exist.`)
    }


    set(this, 'mapComponent', directionsDisplay);
  }
});
