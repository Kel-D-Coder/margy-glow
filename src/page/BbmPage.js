import React, { useState } from "react";
import { bbmCourses } from "../courses";

export const BbmPage = () => {
  
  const [selectedCourse, setSelectedCourse] = useState(null); // To track the selected course
  const [isModalOpen, setIsModalOpen] = useState(false); // To toggle the modal

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
         BODY BUTTER MAKING - BBM
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-pink-200 text-pink-700">
                <th className="px-4 py-2 text-lg font-semibold">Course Title</th>
                <th className="px-4 py-2 text-lg font-semibold">Course Code</th>
                <th className="px-4 py-2 text-lg font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bbmCourses.map((course, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-pink-50" : "bg-white"
                  } hover:bg-pink-100`}
                >
                  <td className="px-4 py-2 text-pink-600">{course.title}</td>
                  <td className="px-4 py-2 text-pink-600">{course.code}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => openModal(course)}
                      className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                    >
                      View Outline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-pink-600 mb-4">
              {selectedCourse.title}
            </h3>
            <p className="text-gray-700 whitespace-pre-line">
              {selectedCourse.outline}
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
