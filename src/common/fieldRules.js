export default {
  required: (value) => !!value || "This is Required.",
    
    email: (v) => {
        /* eslint-disable-next-line no-useless-escape*/
        const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if (re.test(String(v).toLowerCase().trim())) {
          return true;
        }
        return "Invalid Email";
      },
}