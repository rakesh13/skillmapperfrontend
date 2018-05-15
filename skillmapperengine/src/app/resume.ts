import { WorkExperience } from "./workexperience";

export class Resume
{
    username:string;
    jobprofile:string;
    emailID:string;
    keyskill:string;
    designation:string;
    street:string;
    city:string;
    state:string;
    projects:string;
    languages:string;
    workexperience:WorkExperience[]=[new WorkExperience()];
}