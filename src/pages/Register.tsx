import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import React,{ useState } from "react";
import { registrarUsuario } from '../services/UserService';


const Register = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});
    const [enviandoPeticion,setEnviandoPeticion]= useState(false);

    const crearCuenta = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
              setEnviandoPeticion(true);
              await registrarUsuario(nombre,email,password);
              // ==redireccionar a dashboard
        } catch (error: any) {
            setErrors(error.response.data.errors);
            setEnviandoPeticion(false);
        }
      
    }

    return (
        <Container>
            <Row>
                <Col lg="5" md="10" sm="10" className="mx-auto">
                    <Card className="mt-5">
                        <Card.Body>
                            <h4>Crear Cuenta</h4>
                            <Form onSubmit={crearCuenta}>
                                <Form.Group className="mb-3" controlId="nombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Example" 
                                        value={nombre} 
                                        onChange={e=> setNombre(e.target.value)}
                                        isInvalid={!!errors?.nombre}
                                        >
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors?.nombre}
                                    </Form.Control.Feedback>                           
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Correo electronico</Form.Label>
                                    <Form.Control type="email" placeholder="example@example.com"
                                    value={email}
                                    onChange={e=> setEmail(e.target.value)}
                                    isInvalid={!!errors?.email}
                                    ></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors?.email}
                                    </Form.Control.Feedback>                           
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="********"
                                    value={password}
                                    onChange={e=> setPassword(e.target.value)}
                                    isInvalid={!!errors?.password}
                                    ></Form.Control> 
                                    <Form.Control.Feedback type="invalid">
                                        {errors?.password}
                                    </Form.Control.Feedback>                          
                                </Form.Group>
                                <Button type="submit">
                                    {enviandoPeticion?
                                        <>
                                          
                                                <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                />&nbsp;
                                                <span>Creando cuenta...</span>
                                           
                                    </>:<>Crear Cuenta</>}
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;