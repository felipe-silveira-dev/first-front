import { useEffect, useState } from "react";
import { get } from "../../services/api"

interface Student {
    id: number;
    name: string;
    email: string;
}

export const Home = () => {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        get<Student[]>('/students').then((response) => {
            setStudents(response.data);
        });
    }, []);

    return (
        <div>
            <h1 className="text-red-500">Hello world from index home!</h1>

            {students.map((student) => (
                <div key={student.id}>
                    <h1>{student.name}</h1>
                    <p>{student.email}</p>
                </div>
            )
            )}

            {/* <button
            onClick={() => {
                get('/students');
            }}
            >
                get data
            </button> */}
        </div>
    )
}