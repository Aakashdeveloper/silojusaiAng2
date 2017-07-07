import { Component } from '@angular/core';


@Component({
	selector: 'pm-app',
	template:`<div>
	<h1> This is my Ang2 app </h1>
	<pm-product></pm-product>
	</div>`
})

export class AppComponent{
	pageTitle: string  ="Product App"
}