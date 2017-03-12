import Component from 'vue-class-component'
import Vue from 'vue'


@Component({
  props: {
    propMessage: String
  },
  template: require('./person.html')
})
export default class App extends Vue {
  // initial data
  msg = 123
 
  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage
 
  // lifecycle hook
  mounted () {
    this.greet()
  }
 
  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }
 
  // method
  greet () {
    console.log('greeting: ' + this.msg)
  }
}