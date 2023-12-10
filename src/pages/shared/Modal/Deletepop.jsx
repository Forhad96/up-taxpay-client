import Swal from "sweetalert2";


const Deletepop = () => {
      return (
            Swal.fire({
                  icon: 'warning',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                  footer: '<a href="">Why do I have this issue?</a>'
                })
      );
};

export default Deletepop;