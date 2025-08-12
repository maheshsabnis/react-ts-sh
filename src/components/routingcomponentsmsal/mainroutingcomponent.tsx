import React from 'react';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { Routes, Route, Link } from 'react-router-dom';
import ListProductComponent from './listproductcomponent';
import CreateProductComponent from './createproductcomponent';
import EditProductComponent from './editproductcomponent';
import SignOutButton from './signputcomponent';
import SignInButton from './signincomponent';
const MainRoutingMSALComponent = () => {
    const { accounts } = useMsal();
    return (
        <div className="container alert alert-success">
            <AuthenticatedTemplate>
                <p>Welcome, {accounts[0]?.username}</p>
                <SignOutButton />
            <table className="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td>
                            <Link to="/">List Products</Link>
                        </td>
                       <td>
                            <Link to="/create">Create Product</Link>
                       </td>
                    </tr>
                </tbody>
            </table>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p>Please sign in.</p>
                <SignInButton />
            </UnauthenticatedTemplate>
            <Routes>
                <Route path="/" element={<ListProductComponent />} />
                <Route path="/create" element={<CreateProductComponent />} />
                <Route path="/edit/:id" element={<EditProductComponent />} />
            </Routes>
        </div>
    );
};

export default MainRoutingMSALComponent;