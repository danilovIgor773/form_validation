import React from 'react';
import './Contact-data.css';
import {withFormik} from 'formik';
import Button from '../../Button/Button';
import Yup from 'yup';

const contactData = ({
    values,
    handleSubmit, //should have the same logic as in burger-builder proj, neeed axios & firebase new storage
    handleChange
}) => {
    return (
        <div className="ContactData">
            <h1>Please enter your contact data below!</h1>
             <form onSubmit={handleSubmit}>
                 <div className="Input">
                    <input className="InputElement" type="text" name="name" placeholder="Your Name" value={values.name} onChange={handleChange} />
                 </div>
                 <div className="Input">
                    <input className="InputElement" type="text" name="street" placeholder="Your Street" value={values.street} onChange={handleChange} />
                 </div>
                 <div className="Input">
                    <input className="InputElement" type="text" name="zipCode" placeholder="ZIP Code" value={values.zipCode} onChange={handleChange} />
                 </div>
                 <div className="Input">
                    <input className="InputElement" type="text" name="country" placeholder="Country" value={values.country} onChange={handleChange} />
                 </div>
                 <div className="Input">
                    <input className="InputElement" type="text" name="email" placeholder="E-mail" value={values.email} onChange={handleChange} />
                 </div>                 
             </form>
            <Button btnType='Success'>ORDER</Button>
        </div>
    );
}

export default withFormik({
    mapPropsToValues({ name, street, zipCode, country, email}){
        return {
            name: name || '',
            street: street  || '',
            zipCode: zipCode || '',
            country: country || '',
            email: email || ''
        }
    }
})(contactData);