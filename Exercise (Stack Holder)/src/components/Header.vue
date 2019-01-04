<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand/logo -->
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    </div>
    <!-- Collapsible Navbar -->
    <div class="collapse navbar-collapse" id="example-1">
      <ul class="nav navbar-nav">
        <router-link to="/portfolio" tag="li" active-class="active" exact><a>Portfolio</a></router-link>
        <router-link to="/stocks" tag="li" active-class="active" exact><a>Stocks</a></router-link>
      </ul>
      <!-- Link (right) -->
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" @click="endDay()">End Day</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
          <ul class="dropdown-menu" aria-labelledby="Save & Load">
            <li><a href="#">Save Data</a></li>
            <li><a href="#">Load Data</a></li>
          </ul>
        </li>
        <div class="navbar-text">
          <b>Funds: ${{ $store.getters.currentFunds }}</b>
        </div>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        methods: {
           endDay: function() {
            this.$store.commit('endDay')
           }
        }
    }
</script>
