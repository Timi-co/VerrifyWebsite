import Swal from "sweetalert2";


export const successAlert = (title = "Success!", message = "Operation completed successfully.") => {
  return Swal.fire({
    icon: "success",
    title,
    text: message,
    confirmButtonColor: "#ec4899", 
  });
};


export const errorAlert = (title = "Oops!", message = "Something went wrong.") => {
  return Swal.fire({
    icon: "error",
    title,
    text: message,
    confirmButtonColor: "#ec4899",
  });
};

export const warningAlert = (title = "Are you sure?", message = "You can’t undo this action.") => {
  return Swal.fire({
    icon: "warning",
    title,
    text: message,
    showCancelButton: true,
    confirmButtonColor: "#ec4899",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes, proceed",
  });
};
