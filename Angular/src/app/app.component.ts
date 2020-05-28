import { Component, ChangeDetectionStrategy } from '@angular/core';


function LoggerD(target, name, descriptor) {
  const originalFunction = descriptor.value
  descriptor.value = function(...args) {
    console.log(args)
    console.log(...args)
    const result = originalFunction.apply(this, args)
    console.log('LoggerEvent: ' + result)
    return result
  }
}

// function ClassD(className) {
//   console.log(className)
//   return function(...args) {
//     return new className(...args)
//   }
// }

// class TestClass {
//   constructor(a, b) {
//     console.log("bruh" + a + " " + b)
//   }
// }

// const t = new TestClass(10, 5)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'AnGG-Site';

  @LoggerD
  calc(a: number, b: number) {
    return a*b
  }

  constructor() {
    //console.log(this.calc(3,4))
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    
  }
}
