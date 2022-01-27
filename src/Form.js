import React from "react";
 export default class Form extends React.Component{
     constructor(props){
         super(props);
         this.state ={ 
             values: {},
            errors:{}   }
             this.handleChange = this.handleChange.bind(this);  
       this.handleSubmit= this.handleSubmit.bind(this)

     }
     handleChange(e){
         let field= this.state.values;
         field[e.target.name]= e.target.value
         this.setState({field});
     }
    
     handleSubmit(e){ 
          e.preventDefault();
        if (this.validateForm()){ 
           
         var  data=[];
    //    if(this.ValidateEmail){
        const dd = document.getElementById("data");
         const name = document.getElementById("sname");
         const mail = document.getElementById("email");
         const address = document.getElementById("address");

        //  let error=email;

         data.push( {name: name.value,
        mail: mail.value,
    address:address.value})
         console.log("enetrs" ,data);
         dd.innerHTML+= ` 
         <ul><li>${name.value}</li>
         <li>${mail.value}</li>
         <li>${address.value}</li></ul>`
         }
     }

     validateForm(){
let values= this.state.values;
let errors={};
let formIsValid= true;
if(!values["sname"]){
    formIsValid= false;
    errors["sname"]= "*please enter your name";
}
if (typeof values["sname"] !== "undefined") {
    if (!values["sname"].match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors["sname"] = "*Please enter alphabet characters only.";
    }
  }

  if (!values["semail"]) {
    formIsValid = false;
    errors["semail"] = "*Please enter your email.";
  }
  if (typeof values["semail"] !== "undefined") {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if(!pattern.test(values["semail"])) {
        formIsValid = false;
        errors["semail"] = "*Please enter valid email-ID.";
      }
    }
    if (!values["address"]) {
        formIsValid = false;
        errors["address"] = "*Please enter your address.";
      }

      this.setState({
        errors: errors
      });
      return formIsValid;

}

//      ValidateEmail(inputText)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form1.text1.focus();
// return false;
// }
// }

     render(){
         return(
             <div>
 <div id="form">
             <form onSubmit= {this.handleSubmit}>
                 <label> Name: 
                     <input type= "text" id= "sname"name= "sname" value = {this.state.values.sname} onChange={this.handleChange}/>
                 </label>
                 <div id= "errormessage">{this.state.errors.sname}</div><br/>
                 <label> Email: 
                     <input type= "text" id="email" name="semail" value={this.state.values.semail} onChange={this.handleChange}/>
                 </label>
                 <div id= "errormessage">{this.state.errors.semail}</div><br/>
                 <label> Address: 
                     <input type= "text" id="address"name="address" value={this.state.values.address} onChange={this.handleChange}/>
                 </label>
                 <div id= "errormessage">{this.state.errors.address}</div><br/>
                <button type="submit" id="button">Submit</button>
             </form>
             <div id="data"> </div>
             </div>
             </div>
         )
     }
 }

