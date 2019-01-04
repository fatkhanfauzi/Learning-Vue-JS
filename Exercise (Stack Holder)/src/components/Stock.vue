<template>
    <div class="row">
      <div v-for="item in items">
        <div class="col-md-6">
          <div class="panel panel-success">
            <div class="panel-heading">
              <b>{{ item.name }}</b> (Price: {{ item.price }})
            </div>
            <div class="panel-body">
              <form class="form-inline" v-on:submit.prevent="buy(item)">
                <div class="form-group">
                  <input type="number" class="form-control" v-model="item.quantity" placeholder="Quantity">
                </div>
                <button type="submit" class="btn btn-success pull-right">Buy</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data: function() {
          return {
            items: [
              { name: 'BMW', price: 110 },
              { name: 'Google', price: 220 },
              { name: 'Apple', price: 250 },
              { name: 'Twitter', price: 10 },
            ]
          }
        },
        methods: {
           buy: function(item) {
            this.$store.commit('buyItem', item)
            item.quantity = '';
           }
        }
    }
</script>
