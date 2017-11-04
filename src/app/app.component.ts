import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors = ['Black', 'Aqua', 'Blue', 'CadetBlue', 'Chartreuse', 'DarkBlue', 'DarkCyan', 'DarkGreen', 'DarkSlateGrey', 'DarkTurquoise', 'DeepSkyBlue', 'DodgerBlue', 'ForestGreen', 'Grey', 'Green', 'LawnGreen', 'LightBlue', 'LightGreen', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGrey', 'Lime', 'LimeGreen', 'Navy', 'SteelBlue', 'Teal'];
  barcode = [];

  genBarcode() {
  	for (let i =0; i < 10; i++){
  		this.barcode.push(this.colors[Math.floor(Math.random() * this.colors.length)]);
  	}
  	console.log(this.barcode);
  }

  ngOnInit() {
  	this.genBarcode();
  }
}