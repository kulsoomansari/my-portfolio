// import { Grid } from '@material-ui/core'
// import { useFormik } from 'formik'
// import React from 'react'

// export default function Contacts() {
//     const formik = useFormik({
//         initialValues:{
//             name: '',
//             email:'',
//             message: ''
//         },
//         onSubmit: values=>{
//             console.log(values)
//         }
//     })
//     return (
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                 <Grid container>
//                     <Grid item md={1}>
//                     <label htmlFor="name">Name:</label>
//                     </Grid>
//                     <Grid item md={11}>
//                         <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
//                     </Grid>
//                     <Grid item md={1}>
//                     <label htmlFor="email">Email:</label>
//                     </Grid>
//                     <Grid item md={11}>
//                         <input type="email" id="email" name="email"  onChange={formik.handleChange} value={formik.values.email}/>
//                     </Grid>
//                     <Grid item md={1}>
//                     <label htmlFor="message">message:</label>
//                     </Grid>
//                     <Grid item md={11}>
//                         <input type="text" id="message" name="message"  onChange={formik.handleChange} value={formik.values.message}/>
//                     </Grid>
//                     <Grid item md={5}>
//                     <button type="submit">submit</button>
//                     </Grid>
//                 </Grid>
//             </form>
//         </div>
//     )
// }
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function Contacts() {
  const formik = useFormik({
    initialValues: {
     name: '',
      email: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} style={{textAlign: "center"}}>
        <TextField
          id="name"
          name="name"
          label="name"
          type="name"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.name)}
          helperText={formik.touched.password && formik.errors.name}
        />
        <br/>
        <TextField
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br/>
        <TextField
          id="message"
          name="message"
          label="message"
          type="message"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.message)}
          helperText={formik.touched.password && formik.errors.message}
        />
        <br/> <br/>
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};



