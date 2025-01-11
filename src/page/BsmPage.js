

export const BsmPage = () => {
  const courses = [
    { title: "Expose on Exfoliation", code: "BSM 111" },
    { title: "Introduction to body scrub making", code: "BSM 112" },
    { title: "Formula creation and conversion", code: "BSM 113" },
    { title: "Emulsified body scrubs", code: "BSM 114" },
    { title: "Foaming body scrubs", code: "BSM 115" },
    { title: "Body polish/Creamy scrubs", code: "BSM 116" },
    { title: "Importance of research as a formulator", code: "BSM 117" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
          BODY SCRUB MAKING - BSM
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
              {courses.map((course, index) => (
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

