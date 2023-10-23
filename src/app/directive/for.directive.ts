import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input("myForEm") numbers: number[]

  constructor(private container: ViewContaineRef,
    private template: TemplateRef<any>) { }

  ngOnInit(): void {
    for(let number of this.numbers){
      this.container.createEmbeddeView(this.template)
    }
    console.log(this.numbers)

  }

}
