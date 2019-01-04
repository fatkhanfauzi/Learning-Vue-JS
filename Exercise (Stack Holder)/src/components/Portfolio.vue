<template>
    <div class="row">
      <div v-for="item in $store.getters.boughtItems">
        <div class="col-md-6">
          <div class="panel panel-info">
            <div class="panel-heading">
              <b>{{ item.name }}</b> (Price: {{ item.price }} | Quantity: {{ item.quantity }})
            </div>
            <div class="panel-body">
              <form class="form-inline" v-on:submit.prevent="buy(item)">
                <div class="form-group">
                  <input type="number" class="form-control" v-model="item.sellQuantity" placeholder="Quantity">
                </div>
                <button type="submit" class="btn btn-danger pull-right">Sell</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        methods: {
           buy: function(item) {
            this.$store.commit('sellItem', item)
            item.sellQuantity = '';
           }
        }
    }
</script>
