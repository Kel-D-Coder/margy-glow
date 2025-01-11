import React from "react";

export const GctPage = () => {
  const freeCourses = [
    { title: "Body oil making", code: "GCT 224" },
    { title: "Costing and marketing", code: "GCT 225" },
  ];

  const paidCourses = [
    { title: "Expose on exfoliation", code: "GCT 201" },
    { title: "Introduction to body scrub making", code: "GCT 202" },
    { title: "Formula creation and conversion", code: "GCT 203" },
    { title: "Emulsified body scrubs", code: "GCT 204" },
    { title: "Foaming body scrubs", code: "GCT 205" },
    { title: "Body polish/creamy scrubs", code: "GCT 206" },
    { title: "Introduction to black soap making", code: "GCT 210" },
    { title: "Whitening/Lightening black soap maaking", code: "GCT 211" },
    { title: "Brightening black soap making", code: "GCT 212" },
    { title: "Acne/Pimple herbal black soap", code: "GCT 213" },
    { title: "Liquid black soap making", code: "GCT 214" },
    { title: "Introducton to body butter making", code: "GCT 220" },
    { title: "All about PH", code: "GCT 221" },
    { title: "An-hydrous body butter making", code: "GCT 222" },
    { title: "Hydrous body butter making", code: "GCT 223" }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
          GENERAL COURSE TRAINING - GCT
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-pink-200 text-pink-700">
                <th className="px-4 py-2 text-lg font-semibold">Course Title</th>
                <th className="px-4 py-2 text-lg font-semibold">Course Code</th>
              </tr>
            </thead>
            <tbody>
              {/* Free Courses Section */}
              <tr className="bg-pink-300 text-pink-800">
                <td colSpan="2" className="px-4 py-2 font-bold text-center">
                  Paid Courses
                </td>
              </tr>
              {paidCourses.map((course, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-pink-50" : "bg-white"
                  } hover:bg-pink-100`}
                >
                  <td className="px-4 py-2 text-pink-600">{course.title}</td>
                  <td className="px-4 py-2 text-pink-600">{course.code}</td>
                </tr>
              ))}

              {/* Paid Courses Section */}
              <tr className="bg-pink-300 text-pink-800">
                <td colSpan="2" className="px-4 py-2 font-bold text-center">
                  Free Courses
                </td>
              </tr>
              {freeCourses.map((course, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-pink-50" : "bg-white"
                  } hover:bg-pink-100`}
                >
                  <td className="px-4 py-2 text-pink-600">{course.title}</td>
                  <td className="px-4 py-2 text-pink-600">{course.code}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
