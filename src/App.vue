<template>
  <div id="app">
    <newnav></newnav>
  <router-view></router-view> 
  </div>
</template>

<script>
import newnav from '@/components/newNav'
export default {
  components:{newnav},
  mounted:function(){
      $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

  }
} 
</script>