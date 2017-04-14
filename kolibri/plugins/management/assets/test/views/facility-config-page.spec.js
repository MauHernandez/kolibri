/* eslint-env mocha */
const Vue = require('vue-test');
const Vuex = require('vuex');
const sinon = require('sinon');
const simulant = require('simulant');
const ConfigPage = require('../../src/views/facilities-config-page');

function makeWrapper(propsData) {
  const store = new Vuex.Store({
    state: {
      pageState: {
        settings: {
          learner_can_edit_username: false,
        }
      }
    },
    // TODO bring in real mutations
    mutations: {
      CONFIG_PAGE_MODIFY_SETTING() {},
    }
  });
  const Ctor = Vue.extend(ConfigPage);
  return new Ctor({ propsData, store }).$mount();
}

function getElements(wrapper) {
  return {
    checkbox: wrapper.$el.querySelector('input[name="learner_can_edit_username"]'),
  };
}

describe.only('facility config page view', () => {
  it('clicking checkboxes dispatches a modify action', () => {
    const wrapper = makeWrapper({});
    const dispatchSpy = sinon.spy(wrapper.$store, 'dispatch');
    const els = getElements(wrapper);
    simulant.fire(els.checkbox, 'change');
    sinon.assert.calledWith(dispatchSpy, 'CONFIG_PAGE_MODIFY_SETTING', {
      name: 'learner_can_edit_username',
      value: true,
    });
    dispatchSpy.restore();
  });
});
