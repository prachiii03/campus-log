export interface Notes {

    subject_id: string;
    faculty_id: string;
    title: string;
    doc_url: string
}

export interface Syllabus {
    id: number;
    subject_id: string;
    faculty_id: string;
    title: string;
    doc_link: string
    reference_book_link: string;
    practical_link: string
}

export interface Test {
    id: number;
    subject_id: string;
    faculty_id: string;
    title: string;
    test_link: string;
    start_ts: string;
    duration: number

}