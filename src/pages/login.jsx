import axios from "axios";
import { useEffect,useState } from "react";

const URL = 'http://localhost/databasemissionBack/';

export default function Login ( url ) {

    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const [admin, setAdmin] = useState("")

    useEffect(() => {
        axios.get(URL + 'src/modules/session.php')
        .then((response) => {
            setAdmin(response.data);
            console.log(admin);
        }).catch(error => {
			alert(error.response === undefined ? error : error.response.data.error);
		})
    }, [url])

    function login(e){
        e.preventDefault();
        const json = JSON.stringify({username:uname, password:pass});
        axios.post(URL + "games/Login.php", json, {
          headers: {
            "Content-Type" : "application/json"
          }
        })
        .then((response) => {
            setAdmin(1);
            console.log(response.data);
            console.log(admin);
        }).catch(error => {
          alert(error.response ? error.response.data.error : error);
        })
      }

    return(
        <form onSubmit={login}>
            <input value={uname} placeholder="Username" onChange={e => setUname(e.target.value)}></input>
            <input value={pass} placeholder="Password" onChange={e => setPass(e.target.value)}></input>
            <button>Login</button>
        </form>
    );


}