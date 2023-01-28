// import * as React from "react";
// import usePagination from "@mui/material/usePagination";
// import { styled } from "@mui/material/styles";
// import "./Pagination.scss";
// import { Typography } from "@mui/material";

// const List = styled("ul")({
//   listStyle: "none",
//   padding: 0,
//   margin: 0,
//   display: "flex",
//   gap: "5px",
//   border: "2px solid #585858",
//   width: "25%",
//   justifyContent: "space-evenly",
//   alignItems: "center",
//   borderRadius: "3px",
//   height: "50px",
//   backgroundColor: "#f3f3f3",
// });

// export default function UsePagination() {
//   const { items } = usePagination({
//     count: 10,
//   });

//   return (
//     <nav>
//       <Typography>
//         <List>
//           {items.map(({ page, type, selected, ...item }, index) => {
//             let children = null;

//             if (type === "start-ellipsis" || type === "end-ellipsis") {
//               children = "…";
//             } else if (type === "page") {
//               children = (
//                 <button
//                   className="btn-ea-pagination"
//                   type="button"
//                   style={{
//                     fontWeight: selected ? "bold" : undefined,
//                   }}
//                   {...item}
//                 >
//                   {page}
//                 </button>
//               );
//             } else {
//               children = (
//                 <button type="button">
//                   <p>Precedente</p>
//                 </button>
//               );
//             }

//             return <li key={index}>{children}</li>;
//           })}
//         </List>
//       </Typography>
//     </nav>
//   );
// }
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import "./Pagination.scss";

export default function BasicPagination() {
  return (
    <div>
      <Pagination count={10} />
    </div>
  );
}
