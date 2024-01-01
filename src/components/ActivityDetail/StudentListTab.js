import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../style/systemPage.css';
import '../../style/studentlisttab.css';

function StudentListTab() {
    let { id } = useParams();
    const [studentsData, setStudentsData] = useState({
        id: '',
        students: []
    });

    useEffect(() => {
        fetch('/stu.json')
            .then((response) => response.json())
            .then((data) => {
                const selectedStudents = data.find((record) => record.id === parseInt(id));
                if (selectedStudents) {
                    setStudentsData(selectedStudents);
                } else {
                    console.error(`Record with ID ${id} not found.`);
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);

    return (
        <div className="row actcontent">
            <div className="containtable"> 
                <table className="table studentlist">
                    <thead>
                        <tr className="titlerow">
                            <th scope="col-1" className="sticky-header">STT</th>
                            <th scope="col-3" className="sticky-header">Họ và tên</th>
                            <th scope="col-2" className="sticky-header">MSSV</th>
                            <th scope="col-3" className="sticky-header">Vai trò</th>
                            <th scope="col-3" className="sticky-header">Hoạt động</th>
                        </tr>
                    </thead>  
                    <tbody>
                        {studentsData.students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.stuID}</td>
                                <td>{student.name}</td>
                                <td>{student.mssv}</td>
                                <td>{student.vaitro}</td>
                                <td>{student.hoatdong}</td>
                            </tr>
                        ))}
                    </tbody> 
                </table>  
            </div>     
        </div>
    );
}

export default StudentListTab;
