// import { useState } from "react";
// import PropTypes from "prop-types";
// import s from "./SearchBar.module.css";

// function Searchbar({ onSubmit }) {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (searchQuery.trim() === "") {
//       alert("Please add search query");
//       return;
//     }

//     onSubmit(searchQuery);
//   };
//   return (
//     <header className={s.Searchbar}>
//       <form className={s.SearchForm} onSubmit={handleSubmit}>
//         <label>
//           <input
//             className={s.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search movie"
//             value={searchQuery}
//             onChange={handleInputChange}
//           ></input>
//         </label>
//         <button type="submit" className={s.SearchFormButton}>
//           <span className={s.SearchFormButtonLabel}></span>
//         </button>
//       </form>
//     </header>
//   );
// }

// Searchbar.propTypes = {
//   value: PropTypes.string,
//   handleSubmit: PropTypes.func,
//   handleInputChange: PropTypes.func,
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Searchbar;
