//Practice react.cloneElement and React.map.children

// import "./App.css";
// import { RadioGroup, RadioOption } from "./Radio";
// import { useState } from "react";

// function App() {
//   const [selected, setSelected] = useState("");
//   return (
//     <div className="App">
//       <h2>How did you hear about Little Lemon?</h2>
//       <RadioGroup onChange={setSelected} selected={selected}>
//         <RadioOption value="social_media">Social Media</RadioOption>
//         <RadioOption value="friends">Friends</RadioOption>
//         <RadioOption value="advertising">Advertising</RadioOption>
//         <RadioOption value="other">Other</RadioOption>
//       </RadioGroup>
//       <button disabled={!selected}>Submit</button>
//     </div>
//   );
// }

// export default App;

//Create Custom Hook

// import { useState, useEffect, useRef } from "react";
// export default function App() {
//   const [day, setDay] = useState("Monday");
//   const prevDay = usePrevious(day);
//   const getNextDay = () => {
//     if (day === "Monday") {
//       setDay("Tuesday")
//     } else if (day === "Tuesday") {
//       setDay("Wednesday")
//     } else if (day === "Wednesday") {
//       setDay("Thursday")
//     } else if (day === "Thursday") {
//       setDay("Friday")
//     } else if (day === "Friday") {
//       setDay("Monday")
//     }
//   }
//   return (
//     <div style={{padding: "40px"}}>
//       <h1>
//         Today is: {day}<br />
//         {
//           prevDay && (
//             <span>Previous work day was: {prevDay}</span>
//           )
//         }
//       </h1>
//       <button onClick={getNextDay}>
//         Get next day
//       </button>
//     </div>
//   );
// }
// function usePrevious(val) {
//   const ref = useRef();
//   useEffect(() => {
//   ref.current-val
// }, [val])

// return ref.current;





// Each object represents a dessert and has the following properties: `name`, `calories` and `createdAt`.

// The `App` component passes that information to the `DessertsList` component as a prop named `data`.


// import "./App.css";
// import DessertsList from "./DessertsList";

// const desserts = [
//   {
//     name: "Chocolate Cake",
//     calories: 400,
//     createdAt: "2022-09-01",
//   },
//   {
//     name: "Ice Cream",
//     calories: 200,
//     createdAt: "2022-01-02",
//   },
//   {
//     name: "Tiramisu",
//     calories: 300,
//     createdAt: "2021-10-03",
//   },
//   {
//     name: "Cheesecake",
//     calories: 600,
//     createdAt: "2022-01-04",
//   },
// ];

// function App() {
//   return (
//     <div className="App">
//       <h2>List of low calorie desserts:</h2>
//       <DessertsList data={desserts} />
//     </div>
//   );
// }

// export default App;



//Create Controlled Form Component

// import "./App.css";
// import { useState } from "react";
// import { validateEmail } from "./utils";

// const PasswordErrorMessage = () => {
//   return (
//     <p className="FieldError">Password should have at least 8 characters</p>
//   );
// };

// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState({
//     value: "",
//     isTouched: false,
//   });
//   const [role, setRole] = useState("role");

//   const getIsFormValid = () => { 
//     return ( 
//       firstName && 
//       validateEmail(email) && 
//       password.value.length >= 8 && 
//       role !== "role" 
//     ); 
//    }; 

//    //This below was my initial try and thought but turned out wrong 
  
// //   const getIsFormValid = () => {
// //     const { firstName, email, password, role } = this.state;
// //     return firstName !== '' && this.validateEmail(email) && password.length >= 8 && (role === 'individual' || role === 'business');

// //   };

// const clearForm = () => { 
//     setFirstName(""); 
//     setLastName(""); 
//     setEmail(""); 
//     setPassword({ 
//       value: "", 
//       isTouched: false, 
//     }); 
//     setRole("role"); 
//    }; 

//    //This below was my initial try and thought but turned out wrong 

// //   const clearForm = () => {
// //     this.setState({
// //       firstName: '',
// //       email: '',
// //       password: '',
// //       role: ''
// //     });
// //   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Account created!");
//     clearForm();
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <h2>Sign Up</h2>
//           <div className="Field">
//             <label>
//               First name <sup>*</sup>
//             </label>
//             <input placeholder="First name" value= {firstName} onChange={(e) => setFirstName(e.target.value)} />
//           </div>
//           <div className="Field">
//             <label>Last name</label>
//             <input placeholder="Last name"  value= {lastName} onChange= {(e) => { 
//              setLastName(e.target.value);}}  />
//           </div>
//           <div className="Field">
//             <label>
//               Email address <sup>*</sup>
//             </label>
//             <input placeholder="Email address"  value= {email} onChange={(e) => { 
//              setEmail(e.target.value); 
//             }}  />
//           </div>
//           <div className="Field">
//             <label>
//               Password <sup>*</sup>
//             </label>
//             <input type="password" placeholder="Password" value={password.value} onChange={(e) => { 
//             setPassword({ ...password, value: e.target.value }); 
//             }} />
//            {password.isTouched && password.value.length < 8 ? ( 
//            <PasswordErrorMessage /> 
//            ) : null} 
//           </div>
//           <div className="Field">
//             <label >
//               Role <sup>*</sup>
//             </label>
//             <select value= {role} onChange={(e) => setRole(e.target.value)} >
//               <option value="role">Role</option>
//               <option value="individual">Individual</option>
//               <option value="business">Business</option>
//             </select>
//           </div>
//           <button type="submit" disabled={!getIsFormValid()}>
//             Create account
//           </button>
//           </fieldset>
//       </form>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import { ThemeProvider, useTheme } from "./ThemeContext";
// import Switch from "./Switch";

// const Title = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <h2
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </h2>
//   );
// };

// const Paragraph = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <p
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </p>
//   );
//     }

//   const Content = () => {
//     return (
//       <div>
//         <Paragraph>
//           We are a pizza loving family. And for years, I searched and searched and
//           searched for the perfect pizza dough recipe. I tried dozens, or more.
//           And while some were good, none of them were that recipe that would
//           make me stop trying all of the others.
//         </Paragraph>
//       </div>
//     );
//   };
  
//   const Header = () => {
//     return (
//       <header>
//         <Title>Little Lemon 🍕</Title>
//         <Switch />
//       </header>
//     );
//   };
  
//   const Page = () => {
//     return (
//       <div className="Page">
//         <Title>When it comes to dough</Title>
//         <Content />
//       </div>
//     );
//   };

//   function App() {
//     const { theme } = useTheme();
//     return (
//       <div
//         className="App"
//         style={{
//           backgroundColor: theme === "light" ? "white" : "black",
//         }}
//       >
//         <Header />
//         <Page />
//       </div>
//     );
//   }
  
//   function Root() {
//     return (
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>
//     );
//   }
  
//   export default Root;
// import React from "react";
// import { useState } from "react";

// export default function App() {
//   const [giftCard, setGiftCard] = useState(
//     {
//         firstName: "Jennifer",
//         lastName: "Smith",
//         text: "Free dinner for 4 guests",
//         valid: true,
//         instructions: "To use your coupon, click the button below.",
//     }
//   );

//   function spendGiftCard() {
//     setGiftCard(prevState => {
//       return{...prevState, text: "Your coupon have been used up", valid: false, instructions: "Please visit our restaurant to renew your gift card."  }
//     })

//   }

//   return (
//     <div style={{padding: '40px'}}>
//       <h1>
//         Gift Card Page
//       </h1>
//       <h2>
//         Customer: {giftCard.firstName} {giftCard.lastName}
//       </h2>
//       <h3>
//         {giftCard.text}
//       </h3>
//       <p>
//         {giftCard.instructions}
//       </p>
//       {
//         giftCard.valid && (
//           <button onClick={spendGiftCard}>
//             Spend Gift Card
//           </button>
//                   )
//                 }
//               </div>
//             );
//           }


// Practice Fetching Data With UseEffect Hook

// import React from "react";

// function App() {
//   const [user, setUser] = React.useState([]);

//   const fetchData = () => {
//     fetch(`"https://randomuser.me/api/?results=1"`)
//         .then((response) => response.json())
//         .then((user) => setUser(user));

//   };

//   React.useEffect(() => {
//     fetchData();
//   }, []);

//   return Object.keys(user).length > 0 ? (
//     <div style={{padding: "40px"}}>
//       <h1>Customer data</h1>
//       <h2>`Name: {user.results[0].name.first}`</h2>
//       <img src={user.results[0].picture.large} alt=''/>

//     </div>
//   ) : (
//     <h1>Data pending...</h1>
//   );
// }

// export default App;