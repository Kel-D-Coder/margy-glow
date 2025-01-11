

export const BsmPage1 = () => {
    const courses = [
        { title: "Introduction to black soap making", code: "BSM 101" },
        { title: "Whitening/Lightening black soap making", code: "BSM 102" },
        { title: "Brightening black soap making", code: "BSM 103" },
        { title: "Acne/pimple herbal black soap", code: "BSM 104" },
        { title: "Liquid black soap making", code: "BSM 105" },
        { title: "Importance of research", code: "BSM 106" },
    ];

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
                BLACK SOAP MAKING - BSM
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
    