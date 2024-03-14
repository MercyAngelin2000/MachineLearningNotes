import React from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';
import '../App.css'
function Sidebar() {
    const navigate=useNavigate()
    const handleMenu = (e) => {
        e.preventDefault();
        if (e?.target?.id === "intro") {
          document.getElementById("intro").className = "active text-black";
          document.getElementById("process").className = "text-white";
          document.getElementById("types").className = "text-white";
          navigate("/")
        }
        if (e?.target?.id === "process") {
          document.getElementById("intro").className = "text-white";
          document.getElementById("process").className = "active text-black";
          document.getElementById("types").className = "text-white";
          navigate("/")
        }
        if (e?.target?.id === "types") {
            document.getElementById("intro").className = "text-white";
            document.getElementById("process").className = "text-white";
            document.getElementById("types").className = "active text-black";
            navigate("/")
          }
      }
    return (
        <div className="bg">
            <div className='container-fluid row'>
                <section className=''>
                    <nav className='sidebar'> 
                        <ul className='p-2 pointer'onClick={handleMenu}>
                            <li className='active text-black' id='intro'>Introduction</li>
                            <li className='text-white' id='process'>Process</li>
                            <li className='text-white' id='types'>Types</li>
                        </ul>
                    </nav>
                </section>
            </div>
        </div>
    )
}

export default Sidebar