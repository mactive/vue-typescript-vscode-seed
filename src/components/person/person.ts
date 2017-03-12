import { Component, Vue } from 'av-ts'

@Component({ 
	template: require('./person.html')
})


export class HomeComponent extends Vue {

	name = 'Rem'
  cnt = 0
  
	get count() {
		return this.cnt > 0 ? this.cnt : 0
	}
  
  add() {
    this.cnt += 1
  }
  
  sub() {
    this.cnt -= 1
  }
}
