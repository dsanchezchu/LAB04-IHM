
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Aside() {
  return (
    <Form style={{width: '350px', height: '350px'}}><h2 className='text-light'>Inicia Sesión Aqui</h2>
      <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="correo123@gmail.com" />
        <Form.Text className="text-light">
          Llenar todos los campos ;)
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-light'>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="contraseña123" />
      </Form.Group>
      <Form.Group className="mb-3 text-light" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Verificar" />
      </Form.Group>
      <Button variant="primary" type="submit" className='bg-warning text-light'>
        Enviar
      </Button>
    </Form>
  );
}

export default Aside;