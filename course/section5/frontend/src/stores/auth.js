import { defineStore } from 'pinia'
import authService from '../services/auth-service'
import { setToken } from '@/services/token-manager'

export const useAuthStore = defineStore('auth', {
	state: () => ({
    isAuthenticated: false,
    user: null
	}),
	getters: {
		getUserAttribute: state => attr => state.user ? state.user[attr] : ''
	},
	actions: {
		async login(email, password) {
			try {
				const data = await authService.login(email, password)
				setToken(data.token)
				this.isAuthenticated = true
				return 'ok'
			} catch (e) {
				return e.message
			}
 		},
		async logout(sendRequest = true) {},
		async getMe() {},
	},
})
