import React,{ useState } from 'react'


function PageOne(props){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [country,setCountry] = useState('');
    const [state,setState] = useState('');
    const [city,setCity] = useState('');

    const [pageStatus,setPageStatus] = useState('')
    
    // const [isDisplay1,setIsDisplay1] = useState('');
    // const [isDisplay3,setIsDisplay3] = useState();
    // const [isDisplay2,setIsDisplay2] = useState();
    

    const [error,setError] = useState('');
    // const [countryError,setCountryError] = useState('');
    // const [stateError,setStateError] = useState('');
    // const [cityError,setCityError] = useState('');
    // const [emailError,setEmailError] = useState('');
    // const [phoneError,setPhoneError] = useState('');
    // const [firstNameError,setFirstNameError] = useState('');
    // const [lastNameError,setLastNameError] = useState('');
    

    // function change(event){
    //     // const name = event.target.name;
    //     // const value = event.target.value;
    //     // switch (name){
    //     //     case "firstname":
    //     //         setFirstName(value);
    //     //         break;
    //     //     case "lastname":
    //     //         setLastName(value);
    //     //         break;
    //     //     default:
    //     //         return;
    //     // }
    // }

    function validate(){
        
        if (firstName.trim() === ''){
            setFirstNameError('*First Name cant be blank');
        }
        else{
            setFirstNameError(''); 
        }

        if (lastName.trim() === ''){
            setLastNameError('*Last Name cant be blank');
            return false;
        }
        else{
            setLastNameError(''); 
            return true;
        }
    }

    function validate2(){
        
        if (email.trim() === '' || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            setEmailError('*Check and enter proper Email ID');
        }
        else{
             setEmailError(''); 
        }

        if (phone.trim() === '' || phone.length !== 10){
            setPhoneError('*Enter 10 Digit number!');
            return false;
        }
        else{
            setPhoneError('');
            if(emailError === ''){ 
            return true;
            }
        }
    }

    function validate3(){
        
        if (country.trim() === ''){
            setCountryError('*Select Country');
        }
        else{
            setCountryError(''); 
        }

        if (state.trim() === ''){
            setStateError('*Select state');
        }
        else{
            setStateError(''); 
        }

        if (city.trim() === ''){
            setCityError('*City cant be blank');
            return false;
        }
        else{
            setCityError(''); 
            return true;
        }
    }

    function submitThree(event){
        
        event.preventDefault();
        const isValidate = validate3();
        if(isValidate){
            setIsDisplay3(true)
            props.getLocation(country,state,city,isDisplay3)
        }        
    }

    function submitTwo(event){
        
        event.preventDefault();
        const isValidate = validate2();
        if(isValidate){
            props.getContact(email,phone,isDisplay2)
            setIsDisplay2(true)
            
        }
    }
    function submitOne(){

        const isValidate = validate();
        if(isValidate){
            props.getName(firstName,lastName,isDisplay1)
            setIsDisplay1(false)
        }        
    }

    function goBack2(){
        setIsDisplay2(false)
        props.back2(true)
    }

    function goBack3(){
        setIsDisplay3(false)
        props.back3(true)
    }

    return(
        <div className="pageone">
            <div className={}>
    
            <h2 id ="middle">Step - 1</h2>

            <label className="form-label">First Name :</label>
            <input type ="text" className="form-control width"
            name="firstname" placeholder="First Name" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>                
            <p style = {{color : 'red'}}>{firstNameError}</p>

            <label className="form-label">Last Name :</label>
            <input type ="text" className="form-control width"
            name="lastname" placeholder="Last Name" value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>                
            <p style = {{color : 'red'}}>{lastNameError}</p>
            {/* <HandleChanges handleClick={submitOne}/> */}
            <button className="btn btn-primary rightcorner2" type ="submit" value = "NEXT" onClick={submitOne}>NEXT</button>
            </div>


            <div className={}>
            <h2 id ="middle">Step - 2</h2>
        
            <label className="form-label">Email :</label>
            <input type ="text" className="form-control width"
            name="email" placeholder="Email" value={email} onChange = {(e)=>setEmail(e.target.value)}/>  

            <p className="red">{emailError}</p>

            <label className="form-label">Phone :</label>
            <input type ="number" className="form-control width"
            name="phone" value={phone} onChange = {(e)=>setPhone(e.target.value)}/>                
            <p className="red">{phoneError}</p>
            <div className="inline">
            <button className="btn btn-primary leftcorner" type ="submit" value = "PREVIOUS" pattern="\d+" onClick ={goBack2}>PREVIOUS</button>
            <button className="btn btn-primary rightcorner" type ="submit" value = "NEXT" onClick={submitTwo}>NEXT</button>
            </div>


            </div>

            <div className={}>
                <h2 id ="middle">Step - 3</h2>
                
                <label>Country : </label>
                <select className="form-select width" name="country" value={country} onChange = {(e)=>setCountry(e.target.value)}>
                    <option value = "">SELECT</option>
                    <option value = "INDIA">INDIA</option>
                    <option value = "AUSTRALIA">AUSTRALIA</option>
                    <option value = "RUSSIA">RUSSIA</option>
                    <option value = "USA">USA</option>
                </select>
                <p className="red">{countryError}</p><br/>

                <label>State : </label>
                <select className="form-select width" name="state" value={state} onChange = {(e)=>setState(e.target.value)}>
                    <option value = "">SELECT</option>
                    <option value = "Tamilnadu">Tamilnadu</option>
                    <option value = "Delhi">Delhi</option>
                    <option value = "Mumbai">Mumbai</option>
                    <option value = "Kerala">Kerala</option>
                </select>
                <p className="red">{stateError}</p><br/>

                <label className="form-label">City :</label>
                <input type ="text" className="form-control width"
                name="city" placeholder="City" value={city} onChange = {(e)=>setCity(e.target.value)}/>  
                <p className="red">{cityError}</p>

                <div className="inline">
                <button className="btn btn-primary leftcorner" type ="submit" value = "PREVIOUS" onClick ={goBack3}>PREVIOUS</button>
                <button className="btn btn-primary rightcorner" type ="submit" value = "NEXT" onClick={submitThree}>NEXT</button>
                </div>

            </div>

        </div>
    )
}


export default PageOne