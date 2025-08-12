import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ListProductComponent from './listproductcomponent';
import CreateProductComponent from './createproductcomponent';
import EditProductComponent from './editproductcomponent';

const MainRoutingComponent = () => {
    return (
        <div className="container alert alert-success">
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
            <Routes>
                <Route path="/" element={<ListProductComponent />} />
                <Route path="/create" element={<CreateProductComponent />} />
                <Route path="/edit/:id" element={<EditProductComponent />} />
            </Routes>
        </div>
    );
};

export default MainRoutingComponent;