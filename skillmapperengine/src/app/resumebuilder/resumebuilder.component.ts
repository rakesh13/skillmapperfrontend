import { Component, OnInit } from '@angular/core';
import {Resume} from '../resume';
import { UserService } from '../user.service';
import { Router, Routes } from '@angular/router';
//import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-resumebuilder',
  templateUrl: './resumebuilder.component.html',
  styleUrls: ['./resumebuilder.component.css']
})
export class ResumebuilderComponent implements OnInit {
resume:any={};
  options = {
  pagesplit: true,
  background: '#FFFFFF'
};
constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <link rel="stylesheet" type="text/css" media="print" href="resumebuilder.component.css" />
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}


save(){
  let printContents;
  
    printContents = document.getElementById('print-section').innerHTML;
    
//const doc=new jsPDF();
//doc.addHTML(document.getElementById("resumepreview"),function() {
  //doc.save('resume.pdf');
//});
//doc.text(printContents,5,10);
//doc.save('resume.pdf');
}




}
