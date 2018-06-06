import { Component } from '@angular/core';
import html2pdf from'html2pdf.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  public generatePdf() {

   var element = document.getElementById("GenPDF");
   html2pdf(element);
    
  }
}
