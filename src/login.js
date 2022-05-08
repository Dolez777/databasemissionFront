import axios from "axios";
import { useEffect,useState } from "react";

const URL = 'http://localhost:3000/databasemissionback/login.php';

export default function Login () {

    const [login, setLogin] = useState('');

    useEffect(() => {
        axios.get(URL)
        .then((response) => {
            setLogin(response.data);
        }).catch(error => {
            alert(error);
        });
    }, [])

    return(
<div>
    <h3>jotain</h3>
    <p>{login}</p>
</div>
    );


}