import {User} from './user';
import {Skill} from './skill';
import {Placement} from './placement';
import { Certifications } from './certifications';
export class Profile
{
    profileID:number;
    ratings:number;
    user:User;
    skills:Skill;
	views:number;	
    hoursOfTraining:number;
	studentsTrained:number;
	DateOfJoining:Date;
    approved:boolean;
    designation:string;
    centre:string;
    experience:number;
    placement:Placement;
    qualification:string;
   certifications:Certifications;
}