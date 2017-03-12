import Vue from 'vue'
import Component from 'vue-class-component'
import Person from './components/person/person'

require('./AppTs.css');
console.log(Person);
// 装饰器
@Component({
  props: {
    propMessage: String
  },
  components:{
    Person
  },
  template: require('./AppTs.html')
})

export default class App extends Vue {
  name = 'app'
  propMessage: string
}

