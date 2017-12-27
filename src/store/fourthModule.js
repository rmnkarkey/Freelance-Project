

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
		axios.get('http://localhost:3000/names').
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

const fourthModule={
	actions
}

export default fourthModule