import React from 'react';
import classes from './Contact-data.css';
import {withFormik, Field, Form} from 'formik';
import Button from '../../Button/Button';
import * as Yup from 'yup';

const contactData = ({    
    handleSubmit,
    errors,
    touched
}) => {
    return (
        <div className={classes.ContactData}>
            <h1>Please enter your contact data below!</h1>
             <Form >
                 <div className={classes.Input}>
                    {touched.name && errors.name && <p className={classes.Invalid}>{errors.name}</p>}
                    <Field className={classes.InputElement} type="text" name="name" placeholder="Your Name"  />
                 </div>
                 <div className={classes.Input}>
                    {touched.street && errors.street && <p className={classes.Invalid}>{errors.street}</p>}
                    <Field className={classes.InputElement} type="text" name="street" placeholder="Your Street"  />
                 </div>
                 <div className={classes.Input}>
                    {touched.zipCode && errors.zipCode && <p className={classes.Invalid}>{errors.zipCode}</p>}
                    <Field className={classes.InputElement} type="text" name="zipCode" placeholder="ZIP Code"  />
                 </div>
                 <div className={classes.Input}>
                    {touched.country && errors.country && <p className={classes.Invalid}>{errors.country}</p>}
                    <Field className={classes.InputElement} type="text" name="country" placeholder="Country"  />
                 </div>
                 <div className={classes.Input}>
                    {touched.email && errors.email && <p className={classes.Invalid}>{errors.email}</p>}
                    <Field className={classes.InputElement} type="text" name="email" placeholder="E-mail"  />
                 </div>
                 <div className={classes.Input}>
                     <Field className={classes.InputElement} component="select" name="deliveryMethod" >
                         <option value="fastest">Fastest</option>
                         <option value="cheapest">Cheapest</option>
                     </Field>
                 </div>
             </Form>
            <Button btnType='Success' clicked={handleSubmit}>ORDER</Button>
        </div>
    );
}

export default withFormik({
    mapPropsToValues({ name, street, zipCode, country, email, deliveryMethod}){
        return {
            name: name || '',
            street: street  || '',
            zipCode: zipCode || '',
            country: country || '',
            email: email || '',
            deliveryMethod: deliveryMethod || 'fastest'
        }
    },
    validationSchema: Yup.object().shape({
       name: Yup.string().required(),
       street: Yup.string().required(),
       zipCode: Yup.number().min(5).required(),
       country: Yup.string().min(3).required(),
       email: Yup.string().email().required()
    }),
    handleSubmit(values){
        console.log("Values are ", values)
        //should have the same logic as in burger-builder proj, neeed axios & firebase new storage          
    }
})(contactData);