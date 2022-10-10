import React,{useState} from 'react';
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row,Col } from 'react-bootstrap';
import Admincourse from "./Admincourse";
import  { useNavigate } from 'react-router-dom'

const Adminacademy = () =>{
    const [viewCourse,setViewCourse] = useState(false);
    const navigate = useNavigate();
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">Abacus academy<a href="/"></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        {/* <Nav.Link onClick={()=>{setShowCustomerAddModal(true)}}>Add Customer</Nav.Link>
                        <Nav.Link onClick={()=>{setShowCustomerTable(!showCustomerTable)}}>View Customer</Nav.Link> 
                        <Nav.Link onClick={handleRefresh}>Refresh</Nav.Link>*/}
                        <Nav.Link id="userAcademy" style={{ paddingLeft: '250px' }}>Academy</Nav.Link> 
                        <Nav.Link id="userAcademy" style={{ paddingLeft: '150px' }} onClick={()=>{
                            setViewCourse(!viewCourse);
                        }}>Course</Nav.Link> 
                        <Nav.Link id="userEnrolledCourse" onClick={()=>{
                            
                            
                        }} style={{ paddingLeft: '150px' }}>Student</Nav.Link> 
                        <Nav.Link id = "logout" style={{ paddingLeft: '250px' }} onClick={()=>{
                                navigate('/login');
                            }}>Logout</Nav.Link> 
                    </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                viewCourse ?
                <>
                    <Admincourse />
                </>:
                null
            }
        </>
    )
}

export default Adminacademy;