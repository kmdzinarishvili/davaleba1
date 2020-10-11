import React from 'react';

class UserOutput extends React.Component{
    render(){
        return(
                <>
                    <div style={{marginTop: 20+"px"}}> {this.props.username} </div>
                    <div style={{scrollSnapMarginBottom: 20+"px"}}> {this.props.additionalText}</div>
                </>
        );

    };

}

UserOutput.defaultProps = {
    username: "Username",
    additionalText: "Welcome to this page"
};



export default UserOutput;