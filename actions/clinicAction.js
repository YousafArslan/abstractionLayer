import { request, success, failure } from "./utilities";
// import {
//   addclinic,
//   getAllClinic,
//   getSingleClinic,
//   editclinic,
// } from "../api/clinicAPI";

// ########### START ADD CLINIC ACTION ################
// export function addclinicdata(data, auth) {
//   return (dispatch) => {
//     dispatch(request(Clinic.ADD_CLINIC_REQUEST));
//     addclinic(data, auth).then(
//       (response) => {
//         if (response.status === 200) {
//           dispatch(success(Clinic.ADD_CLINIC_SUCCESS, response.data.data));
//         } else {
//           dispatch(failure(Clinic.ADD_CLINIC_FAILURE, response.data.message));
//         }
//         // if (response.data.message === "Success") {
//         // }
//         // else {
//         // }
//       },
//       (error) => {
//         dispatch(
//           failure(
//             Clinic.ADD_CLINIC_FAILURE,
//             error &&
//               error.response &&
//               error.response.data &&
//               error.response.data.message
//               ? error.response.data.message
//               : error.message
//           )
//         );
//       }
//     );
//   };
// }

// ########### END ADD CLINIC ACTION ################
// ########### START GETALL CLINIC ACTION ################
// export function getallclinicdata(data) {
//   return (dispatch) => {
//     dispatch(request(Clinic.GETALL_CLINIC_REQUEST));
//     getAllClinic(data).then(
//       (response) => {
//         if (response.data.succeeded === true) {
//           dispatch(success(Clinic.GETALL_CLINIC_SUCCESS, response.data.data));
//         } else {
//           dispatch(
//             failure(Clinic.GETALL_CLINIC_FAILURE, response.data.message)
//           );
//         }
//       },
//       (error) => {
//         dispatch(
//           failure(
//             Clinic.GETALL_CLINIC_FAILURE,
//             error &&
//               error.response &&
//               error.response.data &&
//               error.response.data.message
//               ? error.response.data.message
//               : error.message
//           )
//         );
//       }
//     );
//   };
// }
// ########### END GETALL CLINIC ACTION ################
// ########### START GETSINGLE CLINIC ACTION ################
// export function getsingleclinicdata(id) {
//   return (dispatch) => {
//     dispatch(request(Clinic.GETSINGLE_CLINIC_REQUEST));
//     getSingleClinic(id).then(
//       (response) => {
//         if (response.data.succeeded === true) {
//           dispatch(
//             success(Clinic.GETSINGLE_CLINIC_SUCCESS, response.data.data)
//           );
//         } else {
//           dispatch(
//             failure(Clinic.GETSINGLE_CLINIC_FAILURE, response.data.message)
//           );
//         }
//       },
//       (error) => {
//         dispatch(
//           failure(
//             Clinic.GETSINGLE_CLINIC_FAILURE,
//             error &&
//               error.response &&
//               error.response.data &&
//               error.response.data.message
//               ? error.response.data.message
//               : error.message
//           )
//         );
//       }
//     );
//   };
// }

// ########### END GETSINGLE CLINIC ACTION ################
// ########### START EDIT CLINIC ACTION ################
// export function editclinicdata(data, auth) {
//   return (dispatch) => {
//     dispatch(request(Clinic.EDIT_CLINIC_REQUEST));
//     editclinic(data, auth).then(
//       (response) => {
//         if (response.data.message === "Success") {
//           dispatch(success(Clinic.EDIT_CLINIC_SUCCESS, response.data.data));
//         } else {
//           dispatch(failure(Clinic.EDIT_CLINIC_FAILURE, response.data.message));
//         }
//       },
//       (error) => {
//         dispatch(
//           failure(
//             Clinic.EDIT_CLINIC_FAILURE,
//             error &&
//               error.response &&
//               error.response.data &&
//               error.response.data.message
//               ? error.response.data.message
//               : error.message
//           )
//         );
//       }
//     );
//   };
// }

// ########### END EDIT CLINIC ACTION ################
