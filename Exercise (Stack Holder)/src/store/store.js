import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        initialFunds : 10000,
        boughtItems: []
    },
    getters: {
        currentFunds: state => {
            let funds = 0;
             _.map(state.boughtItems, function(boughtItem) {
                funds += (boughtItem.price * (parseInt(boughtItem.quantity) || 0));
            });

            return state.initialFunds - funds;
        },
        boughtItems: state => {
            return state.boughtItems;
        }
    },
    mutations: {
        buyItem: (state, payload) => {
            let boughtItem =  _.find(state.boughtItems, { 'name': payload.name });
            if (boughtItem) {
                const buyQuantity = (parseInt(payload.quantity) || 0);
                const boughtItemQuantity = (parseInt(boughtItem.quantity) || 0);
                boughtItem.quantity = boughtItemQuantity + buyQuantity;
            } else {
                state.boughtItems.push(Vue.util.extend({}, payload));
            }
        },
        sellItem: (state, payload) => {
            let boughtItem =  _.find(state.boughtItems, { 'name': payload.name });
            let sellQuantity = (parseInt(payload.sellQuantity) || 0);
            const boughtItemQuantity = (parseInt(boughtItem.quantity) || 0);

            if (sellQuantity > boughtItemQuantity) {
                sellQuantity = boughtItemQuantity;
            }

            boughtItem.quantity = boughtItemQuantity - sellQuantity;

            // remove when quantity is 0
            if (boughtItem.quantity === 0) {
                state.boughtItems.splice(_.findIndex(state.boughtItems, function(item) {
                    return item.name === payload.name;
                }), 1);
            }
        },
        endDay: state => {
            _.each(state.boughtItems, function(item) {
                item.price = Math.floor(Math.random() * 1000 + 1)
            });
        }
    }
})
