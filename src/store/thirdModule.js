
const mutations={
	changePhoto(state,{data}){
		state.photos=data
	},
	changeName(state,{data}){
		state.names.push(data.name)
		state.passwords.push(data.password)
	}

}

const thirdModule={
	mutations
}

export default thirdModule