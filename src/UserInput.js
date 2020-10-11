import React from 'react';
import styles from "./mystyle.module.css"


//add on key up listener 

class UserInput extends React.Component {

    render() {
      return (
          <div>
            <label for="myInput">Enter Your Input: </label>
            <input className ={styles.input-styles} type ="text" id="myInput"
                style={{margin: 40+"px"}} onKeyDown={this.props.onClick}></input>
          </div>
      );
    }
  };

  //e)=> {return e.target.value}

  export default UserInput;
