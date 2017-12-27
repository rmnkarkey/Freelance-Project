<template>
<div>
  <navigation>
  </navigation>   
  <headd>
  </headd>  
  <portfolio>
  </portfolio>
  <about>
  </about>
  <contact>
  </contact>
	
</div>
</template>

<script>
import navigation from '@/components/navigation'
import headd from '@/components/header'
import about from '@/components/about'
import portfolio from '@/components/portfolio'
import contact from '@/components/contact'
  export default{
  name: 'index',
  components:{navigation,headd,about,portfolio,contact},
}
</script>