import Vue from 'vue'
import Component from 'vue-class-component'

interface Person{
  name: string;
  time?: string;
}

@Component({
  props: {
    propMessage: String
  },
  template: `<h1>TTTT</h1>`
})

export default class App extends Vue {
  name = 'person';
  propMessage: string

  // inital data
  msg: number = 123
  pakName: Person = {
    name: "2323",
    time: "21232"
  }

  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted () {
    this.greet()
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