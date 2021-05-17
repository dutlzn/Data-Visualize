<template>
  <div class="home">
    main view
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />

  </div>
</template>

<script>
// @ is an alias to /src
import TopView from '../components/TopView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'
import SalesView from '../components/SalesView'

export default {
  name: 'Home',
  components: {
    TopView,
    BottomView,
    MapView,
    SalesView
  }
}
</script>

<style>
.home{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 20px;
  background:#eee;
  box-sizing: border-box;
}
</style>
