import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
//Code to import Remaining.js
import RemainingBudget from './components/Remaining';
//Code to import ExpenseTotal.js
import ExpenseTotal from './components/ExpenseTotal';
//Code to import ExpenseList.js
import ExpenseList from './components/ExpenseList';
//Code to import ExpenseItem.js
import ExpenseItem from './components/ExpenseItem';
//Code to import AllocationForm.js
import AllocationForm from './components/AllocationForm';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            /* Add Remaining component here*/
                            //Remaining component
                            <div className='col-sm'>
                                <RemainingBudget />
                            </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                            //ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }        
                       
                        {
                            /* Add ExpenseList component here */
                            //ExpenseList component
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                        }         

                        {
                            /* Add ExpenseItem component here */
                            //ExpenseItem component
                            <div className='col-sm'>
                                <ExpenseItem />
                            </div>
                        }        

                        {
                            /* Add AllocationForm component here under */
                            //AllocationForm component
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
