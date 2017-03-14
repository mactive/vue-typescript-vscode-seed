import Vue from 'vue'
import Component from 'vue-class-component'
require('./person.scss')

/**
 * types & interface
 * 
 * @interface Person
 */
interface Person{
  name: string;
  time?: string;
}

// 装饰器
@Component({
  props: {
    propMessage: String
  },
  template: require('./person.html'),
  mixins:[],
  data: {
    personGroup: String
  }
})


export default class App extends Vue {
  name = 'person'
  propMessage: string = "ddd"
  

  // inital data
  msg: number = 123
  pakName: Person = {
    name: "2323",
    time: "2323"
  }

  

  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted () {
    this.greet()
    this.propMessage
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  get computedName () {
    return 'computed ' + this.pakName.name
  }

  // method
  greet () {
    console.log('greeting: ' + this.msg)
  }
}