
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

const getterModule = {
	getters
}

export default getterModule