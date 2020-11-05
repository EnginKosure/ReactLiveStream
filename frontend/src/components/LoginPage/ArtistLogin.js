// import React, { useState } from 'react';
// import "./ArtistLogin.css";

// const ArtistLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="login-wrapper">
//       <div className="auth-inner">
//         <form className="container">
//           <h3>Sign Up</h3>
//           <div className="form-group">
//             <label htmlFor="email">Email address</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control email"
//               value={email}
//               placeholder="Enter email"
//               onChange={e => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password" >Password</label>
//             <input
//               type="password"
//               name="password"
//               className="form-control password"
//               value={password}
//               placeholder="Enter password"
//               onChange={e => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary btn-block" > Submit</button >
//           <p className="forgot-password text-right">
//             Forgot <a href="#">password?</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default ArtistLogin;