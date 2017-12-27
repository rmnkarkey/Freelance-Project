<template>
<div>
	<div class="textalign">
		 <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Sign In</h2>
        <hr class="star-dark mb-5">
		</div>     
	</div>
	<div class="row">
	       <div class="col-lg-8 mx-auto" v-if="anotherDisplay">
            <form>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Name</label>

                  <input class="form-control" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." v-model="Firstname">
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Password</label>
                  <input class="form-control"  type="password" placeholder="Password" required="required" data-validation-required-message="Please enter your password." v-model="passWord" @keyup.enter="routerIn(Firstname,passWord)"> 
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <br>
              <div id="success"></div>             
            </form>
          	   <div class="buttons">
          	   <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton" @click="routerIn(Firstname,passWord)">Sign In</button>
               	<button class="btn btn-primary btn-xl" @click="RegisterMe">Register</button>
				</div>
          </div>
   
    <br>
    
          <div class="col-lg-8 mx-auto" v-if="display">
          	<form>
          		<div class="control-group">
          			<div class="form-group floating-label-form-group controls mb-0 pb-2">
	          			<label>Name</label>
	          			<input class="form-control" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." v-model="firstName">
	                  	<p class="help-block text-danger"></p>
                	</div>
          		</div>

          		<div class="control-group">
          			<div class="form-group floating-label-form-group controls mb-0 pb-2">
          				<label>Password</label>
          				<input class="form-control" type="password" placeholder="Password" reqiured="required" data-validation-required-message="please enter your password" v-model="pass">
          				<p class="help-block text-danger"></p>
          			</div>
          		</div>

          		<div class="control-group">
          			<div class="form-group floating-label-form-group controls mb-0 pb-2">
          				<label>Confirm Password</label>
          				<input class="form-control" type="password" placeholder="Password" required="required" data-validation-required-message="please match your password" v-model="anotherPass">
          				<p class="help-block text-danger" @keyup.enter="signIn"></p>
          			</div>
          		</div>
          		<div class="buttons">
          			<button type="submit" class="btn btn-primary btn-xl" @click.prevent="AddedSuccesfully(firstName,pass)">Sign Up</button>
          		</div>
          	</form>
          </div>
     </div>
    

</div>

</template>

<script>
import { mapState,mapActions } from 'vuex'
	export default{
		name:'log',
		data(){
			return {
				Firstname:'',
				passWord:'',
				display:false,
				anotherDisplay:true,
				firstName:'',
				pass:'',
				anotherPass:''
			}
		},
		methods:{
				AddedSuccesfully:function(names,passwords){
					this.$store.dispatch('AddedSuccesfully',{data:{name: names,password: passwords}})
					this.display=false;
					this.anotherDisplay=true				
				},
				RegisterMe:function(){
					this.display=true;
					this.anotherDisplay=false
				},
				routerIn:function(a,b){
				if(this.Firstname==this.$store.getters.getNames && this.passWord==this.$store.getters.getPasswords){
					this.$store.state.loggedIn = true
					this.$router.replace({path:'/main'})					
				}
				else{
					alert('not authorized')
				}
			}
	},
		mounted(){
			   this.$store.dispatch('callingNames')
			 $(function() {
			    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
			     $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
			    }).on("focus", ".floating-label-form-group", function() {
			      $(this).addClass("floating-label-form-group-with-focus");
			    }).on("blur", ".floating-label-form-group", function() {
			      $(this).removeClass("floating-label-form-group-with-focus");
			    });
			  });

		},
		computed:{
	      ...mapState({
	        names: state => state.names,
	        passwords: state => state.passwords
      })
   	  }
}


</script>

<style scoped>
	.textalign{
		text-align: center;
		padding-top:150px;
	}
	.input{
		background-color: transparent;
		border:solid 2px black;
	}
	.buttons{
		padding-bottom: 20px;
	}
</style>