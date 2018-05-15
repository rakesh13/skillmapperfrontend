import { Component, OnInit } from '@angular/core';
import {Resume} from '../resume';
import { WorkExperience } from '../workexperience';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume:Resume=new Resume();
  workexperience:WorkExperience=new WorkExperience();
  constructor() {
  }

  ngOnInit() {
  }
  add(organization:string,jobdescription:string,designation:string,startDate:string,endDate:string) {
    this.workexperience=new WorkExperience();
    this.workexperience.organization=organization;
    this.workexperience.designation=designation;
    this.workexperience.jobdescription=jobdescription;
    this.workexperience.startDate=startDate;
    this.workexperience.endDate=endDate;
    this.resume.workexperience.push(this.workexperience);
    console.log(this.resume.workexperience.length)
    
  }

  remove(exp: WorkExperience): void {
    this.resume.workexperience = this.resume.workexperience.filter(e => e !== exp);
  }
    
  clear() {
    alert("Removed work experience for "+this.resume.workexperience.pop().organization);
  }

}
