// import { test  as basetest} from '@playwright/test';
// //alias name 

// type fixture1 = { fixture1 : any} //we are creating a type for our custom fixture which will have the fixture1 and we can use this type in our test to use the fixture1

// //we are creating a custom test which will have the fixture1 and we can use this test in our test file to use the fixture1
//  const test = basetest.extend<fixture1>(
// {
// fixture1 : async ({}, use)=>
// {
//     //before use
//     const fixture1 = "This is fixture 1"
//     //LOGIN STEP OR ANY OTHER STEP WHICH WE WANT TO RUN BEFORE THE TEST STARTS
//     console.log("Before use of fixture1") //before use
//     //use - special function like - pause here, run the test and then come back to this line after the test is done
    
//     await use(fixture1) //it will run where we are using this fixture1 in our test
//     //after use
//     //logout step or any other step which we want to run after the test is done
    
//     console.log("After use of fixture1")
// }




//})