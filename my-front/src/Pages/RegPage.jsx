import { Form, Button } from "react-bootstrap"
import { useState } from 'react'


export const RegPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const validate = () => {
        if (!name || !email || !password || !passwordConfirm) {
            alert("Запоните все поля!");
            return false;
        }
        if (password != passwordConfirm) {
            alert("Пароли должны быть одиннаковыми!");
            return false;
        }

        return true;
    }
    const handleSubmit = () => {
        if (!validate()) return;
/*
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Accept-language", "en");

        var urlencoded = new URLSearchParams();
        urlencoded.append("name", name);
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/register", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

*/

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Accept-Language", "en");

var urlencoded = new URLSearchParams();
urlencoded.append("name", name);
urlencoded.append("email", email);
urlencoded.append("password", password);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("http://localhost:8000/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    }

    return (
        <>
            <h1>Регистрация </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Имя арендатора"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                    <Form.Label>Подтверждение пароля</Form.Label>
                    <Form.Control
                        type="password"
                        name="passwordConfirm"
                        placeholder="Пароль"
                        value={passwordConfirm}
                        onChange={(ev) => setPasswordConfirm(ev.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                    Зарегистрироваться
                </Button>
            </Form>
        </>
    )
}