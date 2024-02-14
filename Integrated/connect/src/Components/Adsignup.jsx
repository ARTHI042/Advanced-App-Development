// import { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const data = new FormData(document.getElementById('signup-form'));

//     const email = data.get('email');
//     const password = data.get('password');
//     const confirmPassword = data.get('confirmPassword');
//     const firstName = data.get('firstName');

//     const newErrors = {};

//     if (!firstName.trim()) {
//       newErrors.firstName = 'First Name is required';
//     }

//     if (!email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Invalid email address';
//     }

//     if (!password.trim()) {
//       newErrors.password = 'Password is required';
//     }

//     if (!confirmPassword.trim()) {
//       newErrors.confirmPassword = 'Confirm Password is required';
//     } else if (confirmPassword !== password) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0; // Return true if there are no errors
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (validateForm()) {
//       const data = new FormData(event.currentTarget);
//       console.log({
//         firstName: data.get('firstName'),
//         email: data.get('email'),
//         password: data.get('password'),
//         confirmPassword: data.get('confirmPassword'),
//       });
//     }
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5" style={{ color: 'black' }}  sx={{ mt: -6 }}>
//             Admin Sign up
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             id="signup-form"
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                 sx={{ mt: -5 }}
//                   error={!!errors.firstName}
//                   helperText={errors.firstName}
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   error={!!errors.email}
//                   helperText={errors.email}
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   error={!!errors.password}
//                   helperText={errors.password}
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   error={!!errors.confirmPassword}
//                   helperText={errors.confirmPassword}
//                   required
//                   fullWidth
//                   name="confirmPassword"
//                   label="Confirm Password"
//                   type="password"
//                   id="confirmPassword"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               component={RouterLink} // Use RouterLink instead of a regular button
//               to="/Adlogin" // Specify the target path
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link component={RouterLink} to="/login" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }
