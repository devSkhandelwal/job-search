import React,{useState,useEffect}  from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { userApplyFormAction } from '../../actions/userActions'
import Message from '../Message'
import Button from './Button'
import FormContainer from './FormContainer'

import Input from './Input'

const ApplyForm = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [file,setFile] = useState()
    const [message,setMessage] = useState('')
    const [previewUrl,setPreviewUrl] = useState();
    const history = useHistory()
    const dispatch = useDispatch();



    useEffect(() => {
        if (!file) {
          return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);
      }, [file]);


    const pickedHandler = event => {
        let pickedFile;
        if (event.target.files && event.target.files.length === 1) {
          pickedFile = event.target.files[0];
          setFile(pickedFile);
        } 
      }

    const submitHandler = (e) => {
        e.preventDefault();
        if(name === '' || email ==='' || previewUrl === '' ){
            setMessage('Required all fields');
            return;
        }
        
        dispatch(userApplyFormAction(name,email,previewUrl));
        history.push('/preview')
    }

    
      
    
    return (
        <FormContainer>
            {message ? <Message varient="danger">{message}</Message>:''}
            <form onSubmit={submitHandler} className="form">
                <Input
                    element="input"
                    type="text"
                    name="Name"
                    id="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <Input
                    element="input"
                    type="email"
                    name="Email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Input
                    element="input"
                    type="file"
                    name="Resume"
                    id="resume"
                    onChange={pickedHandler}
                />
                <Button type="submit" varient="full">Submit</Button>
            </form>
        </FormContainer>
    )
}

export default ApplyForm
