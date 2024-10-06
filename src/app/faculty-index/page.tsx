"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface EvaluationParameter {
  parameter: string;
  rating0: string;
  rating2: string;
  rating4: string;
}

const evaluationData: EvaluationParameter[] = [
  {
    parameter: "Content expertise",
    rating0: "The faculty member lacks confidence in the course content and struggles to address student queries effectively, failing to enhance the overall educational experience.",
    rating2: "The faculty member shows moderate confidence, addressing some student queries but often lacking clarity on advanced topics, impacting student comprehension.",
    rating4: "The faculty member demonstrates strong expertise, clearly articulating concepts, answering queries with confidence, and integrating current trends to enrich the curriculum.",
  },
  {
    parameter: "Instructional design",
    rating0: "The faculty member does not share any course plans or outcomes, leaving students uninformed about course importance and objectives.",
    rating2: "The faculty member provides a basic teaching plan but does not thoroughly explain the course outcomes or their significance to student learning.",
    rating4: "The faculty member offers a comprehensive teaching plan, effectively articulates course relevance, and actively incorporates contemporary content into the curriculum.",
  },
  {
    parameter: "Instructional delivery",
    rating0: "The faculty member delivers content in a monotonous manner without engaging students, lacks interaction, and does not utilize effective teaching strategies.",
    rating2: "The faculty member attempts to engage students but falls short in employing diverse teaching methods, leading to limited student participation.",
    rating4: "The faculty member actively engages students, employs a variety of teaching methods, and fosters a participatory learning environment, enhancing overall engagement.",
  },
  {
    parameter: "Instructional assessment",
    rating0: "The faculty member fails to communicate the evaluation plan, resulting in student confusion, lack of preparation, and unclear expectations for assessments.",
    rating2: "The faculty member shares the evaluation plan but does not comprehensively address all assessment criteria, leaving students partially prepared.",
    rating4: "The faculty member provides a detailed evaluation plan, ensures transparency regarding assessment criteria, and offers ample preparation time for students, promoting success.",
  },
];

const FacultyEvaluation: React.FC = () => {
  const router = useRouter(); 

  return (
    <div className="p-4 mt-24">
      {/* Back Button */}
      <div className="mb-4">
        <button 
          className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md transition duration-300 hover:bg-purple-700 hover:shadow-lg" 
          onClick={() => router.back()} 
        >
          Back
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">
          Faculty Evaluation - 
          <span className="inline-block gradient-text text-transparent animate-gradient">
            EduTrack Pro Secure
          </span>
        </h1>
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-purple-100 text-gray-700">
            <tr>
              <th className="p-4 text-left border-b border-gray-300 border-r border-gray-300">Parameter</th>
              <th className="p-4 text-left border-b border-gray-300 border-r border-gray-300">Rating 0</th>
              <th className="p-4 text-left border-b border-gray-300 border-r border-gray-300">Rating 2</th>
              <th className="p-4 text-left border-b border-gray-300">Rating 4</th>
            </tr>
          </thead>
          <tbody>
            {evaluationData.map((data, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-200">
                <td className="p-4 border-b border-gray-300 border-r border-gray-300 font-semibold">{data.parameter}</td>
                <td className="p-4 border-b border-gray-300 border-r border-gray-300">{data.rating0}</td>
                <td className="p-4 border-b border-gray-300 border-r border-gray-300">{data.rating2}</td>
                <td className="p-4 border-b border-gray-300">{data.rating4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Button */}
      <div className="flex justify-end mt-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md transition duration-300 hover:bg-purple-700 hover:shadow-lg">Next</button>
      </div>
    </div>
  );
};

export default FacultyEvaluation;
