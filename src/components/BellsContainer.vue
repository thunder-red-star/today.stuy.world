<template>
  <h1>Bells</h1>
  <div class="bells-container">
    <!-- The bells container will hold a div containing a current period name on top, the time since and time left under it, and next period name on the bottom. -->
    <div class="bells-current-period">
      <div class="bells-current-period-name">
        <span>{{ currentClass.name }}</span>
      </div>
      <div class="bells-current-period-times">
        <!-- Float one div to the left, and one to the right. -->
        <div class="bells-current-period-time-left">
          <span>{{ currentClass.start }}</span>
        </div>
        <div class="bells-current-period-time-since">
          <span>{{ currentClass.end }}</span>
        </div>
      </div>
      <div class="bells-next-period-name">
        <span>{{ nextClass.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import * as StuyUtils from 'stuyutils.js';
  export default {
    name: 'BellsContainer',
    data () {
      return {
        currentClass: StuyUtils.getCurrentClass(new Date()),
        nextClass: StuyUtils.getNextClass(new Date())
      }
    },
    methods: {
      fetchBells () {
        this.currentClass = StuyUtils.getCurrentClass(new Date());
        this.nextClass = StuyUtils.getNextClass(new Date());
      }
    }
  }
</script>