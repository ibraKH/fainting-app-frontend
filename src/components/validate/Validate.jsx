import React, { useRef, useState } from 'react'
import axios from 'axios';

const Validate = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalid, setInvalid] = useState(false);
    let adminId = '';


    const Ref = useRef(null);
    const link = useRef(null);

    const validation = () => {
        axios.post('https://fainting-app-backend.onrender.com/admin/show', {
            username : username,
            password : password
        }).then((res) => {
            if(res.data === 'invalid'){
                setInvalid(true);
            }else{
                adminId = res.data;
                link.current.href = '/cases/' + adminId;
                Ref.current.click();  
            }
        }).catch((err) => {
            console.log(err);
        })
    }
  return (
    <div className="inputsContainer">
        <input type="text" name="username" id="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
		<input type="password" name="password" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
		<button type="submit" onClick={() => validation()}>الدخول</button>
        <p className={invalid ? "show alert" : "hide"}>أسم المستخدم أو كلمة المرور غير صحيحة</p>
        <a href={'/cases/' + adminId} className='hide' ref={link}><button ref={Ref}></button>To home</a>
    </div>
  )
}

export default Validate;