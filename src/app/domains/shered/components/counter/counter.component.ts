import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { ProductComponent } from '../../../products/components/product/product.component'; 

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration : number = 0
  @Input({required: true}) messege : string = ''
  counter = signal(0)
  counterRef :  number | undefined

  constructor() {
    // order 1
    // antes del render del compponente
    console.log('contructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    // order 2
    // antes y durate el render del componente
    console.log("ng on changes")
    console.log(changes)

    if (changes.hasOwnProperty("duration")) {
      const duration = changes["duration"]
      console.log(duration)
      this.doSomething()
    }
  }

  ngOnInit() {
    // after render una vez
    console.log("ng on init")
    // this.counterRef = window.setInterval(()=> {
    //   console.log("interval")
    //   this.counter.update(prevState => prevState + 1)
    // }, 1000)
  }

  ngAfterVewInit() {
    // cuando los hijos del componente ya fueron renderizados
    console.log("ng After View Init")
  }

  ngOnDestroy() {
    // cuando el componente de desmonta
    // console.log("ng On Destroy")
    // window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log("changes duration")
  }
}
