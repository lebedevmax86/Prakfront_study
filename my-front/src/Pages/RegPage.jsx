import { Form, Button } from "react-bootstrap"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const RegPage = () => {

    const navigate = useNavigate();
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
            .then(result => {

                /*{"token":"4fcf3f78138f61fe6273dbd1d6c05f15e30496d7a085919bbcdcf11f271dcecfb564cd09ae8877ede8f0b29ede2a1cbf6e501978dfc4db75fbd52cffb994a999322ff27bdf32800ff84bbb621d92fd24c387227f9b5a2893e498cac417fe973dad279ffe311b523bf623fee65606c38be272a5ece3c55cec685118a366a6bd2f2314794544db1329aea6693014aee6c3325d7783a841e5cb3b3199b83d2b034562a32a05d675b9d7e7f24854a30cfb92b4d0e6a6702d62a3a1d90bd9ab54d9db","user":{"_id":"63dbd6f3fd3f7e308cb903fe","name":"123","email":"123@123.ru","role":"user","verified":false,"verification":"d2dab612-8a0d-4c9f-9f3d-79cf3466e635"}}*/

                result = JSON.parse(result)
                if ('token' in result){
                    let token = result.token;
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify({
                        "name": result.user.name,
                        "email": result.user.email,
                    }));

                    let verification = result.user.verification;
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                    var urlencoded = new URLSearchParams();
                    urlencoded.append("id", verification);
                    console.log(verification);

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: urlencoded,
                        redirect: 'follow'
                    };

                    fetch("http://localhost:8000/verify", requestOptions)
                        .then(response => response.text())
                        .then(result => {
                            console.log(result); 
                            navigate('/')

                        })
                        .catch(error => console.log('error', error));
                    }
                })
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