import {test,expect,chromium} from '@playwright/test';

test.beforeAll('before all test',async()=>{
   
   console.log("This is before all test"); 
});
test.beforeEach('before each test',async({page})=>{
    console.log("This is before each test")});

test('first test',async({page})=>{
    console.log("This is first test")
})

test ('second test',async({page,})=>{
    console.log("This is second test")
})

test.afterEach('after each test',async({page})=>{
    console.log("This is after each test")
})

    test.afterAll('after all test',async()=>{
        console.log("This is after all test")   
 })

