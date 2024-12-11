
export interface CustomUser {
    _id: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    role: string;
  }
  export interface QuizCardProps {
    _id: string;
    name: string;
    icon : string;
  }
 
export interface DiplomaCardProps {
  _id:string;
  title:string;
  duration:number;
  subject?:string;
  numberOfQuestions:number;
  active?:boolean;
  
} 
  