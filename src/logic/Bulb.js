import { computed, decorate, observable } from 'mobx';

class Bulb {
  constructor(key, name, brightness, state) {
    this.key = key;
    this.name = name;
    this.brightness = brightness;
    this.state = state;
    this.me = this;
  }

  name;

  brightness;

  state;

  forceUpdateBulbsTableTrigger=false; // used for rerendering the table manually

  get brightnessN() {
    return this.brightness / 100;
  }

  refreshOnTable() { // method to rerender the table manually
    this.forceUpdateBulbsTableTrigger = !this.forceUpdateBulbsTableTrigger;
  }

  changeName(value) {
    this.name = value;
  }

  changeBrightness(value) {
    this.brightness = value;
    if (value === 0) this.state = false;
    else this.state = true;
  }

  changeState(value) {
    this.state = value;
  }

  patchDevice() {
    const me = this; // to use "this" into async function
    fetch(`${process.env.REACT_APP_LIGHTS_API_ENDPOINTser}/api/v1/device/${this.key}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          brightness: this.brightness,
          name: this.name,
          active: this.state,
        },
      }),
    }).then(response => response.json()).then((json) => {
      if (json.data) me.refreshOnTable();
    }).catch(() => {
      alert('There was an error trying to edit the bulb settings');
    });
  }
}
decorate(Bulb, {
  name: observable,
  brightness: observable,
  state: observable,
  forceUpdateBulbsTableTrigger: observable,
  brightnessN: computed,
});
export default Bulb;
