import * as axios from 'axios'


const instance = axios.create({
	withCredentials:true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers:{
			"API-KEY":"f0facf52-b00c-4f36-ae85-0736d98ee5ee"
           }
})


export const userAPI = {
	getUsers(currentPage=1, pageSize){
		 return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		 .then(response=>{
		 	return response.data
		 })
		},

	follow(userId){
		return instance.post(`follow/${userId}`)
	},

	unfollow(userId){
		return instance.delete(`follow/${userId}`)
	},

	userProfile (userId){
      return instance.get(`profile/${userId}`)  
	}
}

export const profileAPI = {
	getStatus (userId) {
		return instance.get(`profile/status/${userId}`)
	},

	updateStatus (status) {
		return instance.put(`profile/status`, {status:status})
	},

	savePhoto (photoFile) {
		const formData = new FormData();
		formData.append("file", photoFile);
		return instance.put(`profile/photo`, formData, {
				headers:{
					'Content-Type': 'multipart/form-data'
			}
		}
	)
	},

	saveProfile (data) {
		return instance.put(`profile`, data)
	},

}

export const authAPI = {
	me(){
		return instance.get(`auth/me`);
	},
	logIn(email, password, rememberMe=false, captcha=null){
		return instance.post(`auth/login`, {email, password, rememberMe, captcha});
	},
	logOut(){
		return instance.delete(`auth/login`);
	},
}

 export const musicAPI = {
	getMusic(currentPage=1, pageSize){
		 return axios.get(`https://freesound.org/apiv2/sound?page=${currentPage}&count=${pageSize}`)
		}
}

 export const securityAPI = {
	getCaptchaUrl(){
		 return instance.get(`security/get-captcha-url`)
		}
}

export const newsAPI = {
	getNews(currentPage=1, pageSize){
		 return axios.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=d4GtezqO8wCbWTlr3CRj4HX8KxHM0r0u`)
		},
}


