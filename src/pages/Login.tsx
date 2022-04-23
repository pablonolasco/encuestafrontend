import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import React,{ useState } from "react";
import { loginUsuario } from '../services/UserService';
import Alert from "react-bootstrap/Alert";
import { useAuthState, useAuthDispatch } from '../context/authContext';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<any>("");
    const [enviandoPeticion,setEnviandoPeticion]= useState(false);

    const authDispatch= useAuthDispatch();
    const usuario=useAuthState();

    console.log(usuario)
    /**
     * Metodo para iniciar sesion 
     * Se comunica con @link UserService.ts
     * @param e 
     */
    const login = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
              setEnviandoPeticion(true);
              setError("");
              const res=await loginUsuario(email,password);
              const {token}=res.data
              authDispatch({
                  type: 'login',
                  token
              });
        } catch (error: any) {
            if (error.response) {
                error.response.status === 403 && setError("No se puede iniciar sesión con esas credenciales");
            }
            setEnviandoPeticion(false);
        }
      
    }

    /**
     * Componente
     */
    return (
        <Container>
            <Row>
                <Col lg="5" md="10" sm="10" className="mx-auto">
                    <Card className="mt-5">
                        <Card.Body>
                            <h4>Iniciar sesión</h4>
                            <Form onSubmit={login}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Correo electronico</Form.Label>
                                    <Form.Control type="email" placeholder="example@example.com"
                                    value={email}
                                    onChange={e=> setEmail(e.target.value)}
                                    ></Form.Control>                       
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="********"
                                    value={password}
                                    onChange={e=> setPassword(e.target.value)}
                                    ></Form.Control>                     
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
                                                <span>Enviando credenciales...</span>
                                           
                                    </>:<>Acceder</>}
                                </Button>
                            </Form>

                            <Alert className="mt-4" show={!!error} variant ="danger">
                                {error}
                            </Alert>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;