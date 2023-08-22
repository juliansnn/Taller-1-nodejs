import { Tab } from "bootstrap";
import { useState } from "react";

const Employees = () => {
    const [employees, setEmployees] = useState ([
        
    {
        id: 1,
        imagen: <img src="https://i.pinimg.com/736x/b3/b8/57/b3b85713a822ad3e2c5e1eb74af91554.jpg" class="card-img-top"/>,
        fullName: "Juan",
        designation: "Maestro",
        gender: "Masculino",
        teamName: "Team A" 
    },
    {
        id: 2,
        imagen: <img src="https://img.freepik.com/vector-premium/dibujos-animados-cara-mujer-joven_18591-44461.jpg?w=2000" class="card-img-top"/>,
        fullName: "Danna",
        designation: "Aprendiz",
        gender: "Fememnino",
        teamName: "Team B" 
    },
    {
        id: 3,
        imagen: <img src="https://i.pinimg.com/736x/b3/b8/57/b3b85713a822ad3e2c5e1eb74af91554.jpg" class="card-img-top"/>,
        fullName: "Jhosep",
        designation: "aprendiz",
        gender: "Masculino",
        teamName: "Team C" 
    },
    {
        id: 4,
        imagen: <img src="https://i.pinimg.com/736x/b3/b8/57/b3b85713a822ad3e2c5e1eb74af91554.jpg" class="card-img-top"/>,
        fullName: "Dilan",
        designation: "Aprendiz",
        gender: "Masculino",
        teamName: "Team D" 
    },
    {
        id: 5,
        imagen: <img src="https://img.freepik.com/vector-premium/dibujos-animados-cara-mujer-joven_18591-44461.jpg?w=2000" class="card-img-top"/>,
        fullName: "Lina",
        designation: "Aprendiz",
        gender: "Femenino",
        teamName: "Team A" 
    },
    {
        id: 6,
        imagen: <img src="https://i.pinimg.com/736x/b3/b8/57/b3b85713a822ad3e2c5e1eb74af91554.jpg" class="card-img-top"/>,
        fullName: "Novoa",
        designation: "Aprendiz",
        gender: "Masculino",
        teamName: "Team B" 
    },
    {
        id: 7,
        imagen: <img src="https://img.freepik.com/vector-premium/dibujos-animados-cara-mujer-joven_18591-44461.jpg?w=2000" class="card-img-top"/>,
        fullName: "Ana",
        designation: "Aprendiz",
        gender: "Femenino",
        teamName: "Team C"
    },
    {
        id: 8,
        imagen: <img src="https://i.pinimg.com/736x/b3/b8/57/b3b85713a822ad3e2c5e1eb74af91554.jpg" class="card-img-top"/>,
        fullName: "Marco",
        designation: "Aprendiz",
        gender: "Masculino",
        teamName: "Team D"
    },
    {
        id: 9,
        imagen: <img src="https://img.freepik.com/vector-premium/dibujos-animados-cara-mujer-joven_18591-44461.jpg?w=2000" class="card-img-top"/>,
        fullName: "Moly",
        designation: "Aprendiz",
        gender: "Femenino",
        teamName: "Team A"
    },
    {
        id: 10,
        imagen: <img src="https://i.pinimg.com/736x/b3/b8/57/b3b85713a822ad3e2c5e1eb74af91554.jpg" class="card-img-top"/>,
        fullName: "Choconta",
        designation:"Aprendiz",
        gender: "Masculino",
        teamName: "Team B"
        
    },
    {
        id: 11,
        imagen: <img src="https://i.pinimg.com/736x/b3/b8/57/b3b85713a822ad3e2c5e1eb74af91554.jpg" class="card-img-top"/>,
        fullName: "Pepe",
        designation: "Aprendiz",
        gender: "masculino",
        teamName: "Team C"
    },
    {
        id: 12,
        imagen:<img src="https://img.freepik.com/vector-premium/dibujos-animados-cara-mujer-joven_18591-44461.jpg?w=2000" class="card-img-top"/>,
        fullName: "juliana",
        designation: "Aprendiz",
        gender: "Femenino",
        teamName: "Team D"
    },
    {
        id: 13,
        imagen:<img src="https://img.freepik.com/vector-premium/dibujos-animados-cara-mujer-joven_18591-44461.jpg?w=2000" class="card-img-top"/>,
        fullName: "Maria",
        designation: "Aprendiz",
        gender: "Femenino",
        teamName: "Team A"
    },
    {
        id: 14,
        imagen:<img src="https://img.freepik.com/vector-premium/dibujos-animados-cara-mujer-joven_18591-44461.jpg?w=2000" class="card-img-top"/>,
        fullName: "mariana",
        designation: "Aprendiz",
        gender: "Femenino",
        teamName: "Team B"
    },{
        id: 15,
        imagen:<img src="https://img.freepik.com/vector-premium/dibujos-animados-cara-mujer-joven_18591-44461.jpg?w=2000" class="card-img-top"/>,
        fullName: "liz",
        designation: "Aprendiz",
        gender: "Femenino",
        teamName: "Team C"
    }
]);

    return (
    <main className="main">
            {
                employees.map((employee) => (
            <div className="margen">
                <div class="card carta" >
                        <div class="card-body">
                        <p className="card-img-top">{employee.imagen}</p>
                        <h5 class="card-title">{employee.fullName}</h5>
                        <p className="card-text">{employee.designation}</p>
                        <p className="card-text">{employee.gender}</p>
                        <p className="card-text">{employee.teamName}</p>
                        </div>
                </div>
            </div>
            
                ))
            }
     </main>
    )
        
}
export default Employees ;