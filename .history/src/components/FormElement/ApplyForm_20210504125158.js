import React,{useState}  from 'react'
import Button from './Button'
import FormContainer from './FormContainer'

import Input from './Input'

const ApplyForm = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [file,setFile] = useState()
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(name)
    }

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
        let fileIsValid = isValid;
        if (event.target.files && event.target.files.length === 1) {
          pickedFile = event.target.files[0];
          setFile(pickedFile);
          setIsValid(true);
          fileIsValid = true;
        } else {
          setIsValid(false);
          fileIsValid = false;
        }
        props.onInput(props.id, pickedFile, fileIsValid);
      };

    return (
        <FormContainer>
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
                    onChange={upload}
                />
                <Button type="submit" varient="full">Submit</Button>
            </form>
        </FormContainer>
    )
}

export default ApplyForm
