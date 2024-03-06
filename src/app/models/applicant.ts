export interface Question{
    question: string;
    answer: string;
}

export interface Applicant{
    id: string;
    name: string;
    date: number;
    question: Question[];
    file: string;
}

export interface QuestionCreate{
    question: string;
}