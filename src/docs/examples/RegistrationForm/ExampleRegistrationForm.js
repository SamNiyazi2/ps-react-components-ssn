
// 06/29/2020 01:47 am - SSN - [20200629-0124] - [002] - M08 - Organisms

import React from 'react';
import RegistrationForm from 'ps-react2/RegistrationForm';




export default class ExampleRegistrationForm extends React.Component {

    componentDidMount() {

        let userList = [];
        userList.push({ email: "SomeUser@mail.com", password: "123123123" })
        userList.push({ email: "mary@mail.com", password: "123123123" })
        userList.push({ email: "john@mail.com", password: "123123123" })

        this.setState({ userList: userList });

    }


    onSubmit = (user) => {

        console.log(this.state.userList);

        console.log(user);

        user.email = user.email.trim();
        user.password = user.password.trim();
        user.confirmPassword = user.confirmPassword.trim();

        let foundRecord = this.state.userList.find(r => r.email.toLowerCase() === user.email.toLowerCase());

        console.log(user);

        console.log('10001-01');

        if (foundRecord) {

            console.log('10001-02');
            console.log(foundRecord);

            if (user.password === foundRecord.password) {
                return 1;
            }
            return -1;
        }

        if (!foundRecord) {
            console.log('10001-03');

            if (user.password === user.confirmPassword) {

                console.log('10001-04');

                console.log("Add user")
                let tempList = this.state.userList.concat({ email: user.email, password: user.password })
                this.setState({ userList: tempList });

                return 2;
            }
            else {
                return -2;
            }

        }

        return -3;

    }

    render() {


        let userListDL;

        if (this.state) {


            userListDL = this.state.userList.map((r, x) => {

                return <tr key={x}><td> {r.email}</td><td>{r.password}</td></tr>
            });

            if (userListDL) {

                userListDL = <table ><tbody>{userListDL}</tbody></table>;
            }

        }


        return (
            <div  >
                <div style={{ fontSize: '8pt', backgroundColor: 'white', margin: '10px 0px 20px 0px', padding: '5' }}>
                    List of Valid accounts'  email and password:

                {userListDL}
                </div>
                <RegistrationForm onSubmit={this.onSubmit} />
            </div>
        )
    }

}

