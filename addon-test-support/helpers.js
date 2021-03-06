import { run } from '@ember/runloop';

/**
 * Wrap the Google Maps trigger method in an Ember runloop.
 */
export function trigger(component, eventName, ...options) {
  run(() => {
    google.maps.event.trigger(component, eventName, ...options);
  });
}

export function getDirectionsQuery(directions) {
  let { origin, destination } = directions.request;
  return { origin: origin.query, destination: destination.query };
}
