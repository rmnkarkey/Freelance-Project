<template>
	<div>
		<div class="textalign">
			<div class="container">
		        <h2 class="text-center text-uppercase text-secondary mb-0">Authorized Page</h2>
		        <hr class="star-dark mb-5">
			</div>     
			<button @click="RouterBack">Sign Out</button>

			<div>
				
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store/store.js'
import router from '@/router'
	export default{
		beforeRouteEnter(to, from, next){
			//condition
			if(!store.state.loggedIn){
				router.push({name: 'index'})			
			}
			next()
			
		},
		name:'maiin',
		methods:{
			RouterBack:function(){
				router.replace({name:'index'})
			}
		}
	}
</script>

<style>
.textalign{
		text-align: center;
		padding-top:150px;
		padding-bottom: 100px;
}
button{
	background-color:#18bc9c;
	padding:20px 20px 20px 20px;
	color:white;
	border:solid 1px green;
}
</style>