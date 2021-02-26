import { createContext } from 'react';
import { decorate, observable } from 'mobx';
import Bulb from './Bulb';

class Main {
  constructor() {
    this.bulbs = [];
    this.selectedBulb = null;
  }

  bulbs;

  selectedBulb;

  setSelectedBulb(bulb) {
    this.selectedBulb = bulb;
  }

  setBulbs(bulbs) {
    this.bulbs = bulbs;
  }

  getDevices() {
    const me = this;
    fetch(`${process.env.REACT_APP_LIGHTS_API_ENDPOINT}/api/v1/device`)
      .then(response => response.json()).then((json) => {
        me.setBulbs(json.data.map(bulb => new Bulb(bulb.id, bulb.name, bulb.brightness, bulb.active)));
      });
  }
}
decorate(Main, {
  bulbs: observable.ref,
  selectedBulb: observable
});
const MainContext = createContext(new Main());

export { Main };
export default MainContext;
