import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '../router'
Vue.use(Vuex)
Vue.use(VueAxios,axios)

/*import myModule from '@/store/myModule'
import getterModule from '@/store/getters'
import thirdModule from '@/store/thirdModule'
import fourthModule from '@/store/fourthModule'

export default new Vuex.Store({
	modules: {
		myModule,
		getterModule,
		thirdModule,
		fourthModule
	}
})		*/


const state={
	photos:[],
	loggedIn: false,
	names:[],
	passwords:[]

}
const getters={
	getThis:function(state,{data}){
		return state.photos		
	},
	getNames:function(state,{data}){
		return state.names
	},
	getPasswords:function(state,{data}){
		return state.passwords
	}
}

const mutations={
	changePhoto(state,{data}){
		state.photos=data
	},
	changeName(state,{data}){
		state.names.push(data.name)
		state.passwords.push(data.password)
	}


}

const actions={
		callingPhotos({commit}){
		axios.get('https://jsonplaceholder.typicode.com/photos/1').
		then(function(response){			
			console.log(response)

		commit('changePhoto',{data:response.data.thumbnailUrl})
		}).catch(
			(error)=>{
				console.log(error)
			}
		)	
	},
	callingNames({commit}){
		axios.get('https://localhost:3000/names').
		then(function(response){
			console.log(response)

			commit('changeName',{data:response.data})
		}).catch(
			(error)=>{
				console.log(error)
			}
		)
	},
	callingPassword({commit}){
		axios.get('http://localhost:3000/names').
		then(function(response){
			console.log(response)

			commit('changePassword',{data:response.data.password})
		}).catch(
			(error)=>{
				console.log(error)
			}
		)
	},
	AddedSuccesfully(context,{data}) {
 		axios.post('http://localhost:3000/names',{"name":data.name,"password":data.password}).then(function(response){
 			console.log(response)
 			context.commit('changeName',{data: data})
  		})
 	}


}
export default new Vuex.Store({
	state,getters,mutations,actions
})