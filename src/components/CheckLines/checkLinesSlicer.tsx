import { createSlice } from "@reduxjs/toolkit";


let initialState :any = {
  passwordArray: [],
  strength:0,
  password:[]
};

let UpperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
let LowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let arrOfSymbols = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~",];
let arrOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let checkLinesSlicer = createSlice({
  name: "password_ingredients",
  initialState,
  reducers: {
    addUpperCaseLetters:(state)=>{
        state.passwordArray=[...state.passwordArray,...UpperCaseLetters]
        ++state.strength
    },
    removeUpperCaseLetters:(state)=>{
        for (let i of UpperCaseLetters) {
              state.passwordArray.splice(state.passwordArray.indexOf(i), 1);
         }
         --state.strength
    },
    addLowerCaseLetters:(state)=>{
      state.passwordArray=[...state.passwordArray,...LowerCaseLetters]
      ++state.strength
    },
    removeLowerCaseLetters:(state)=>{
      for (let i of LowerCaseLetters) {
        state.passwordArray.splice(state.passwordArray.indexOf(i), 1);
   }
      --state.strength
      // 
    },addNumbers:(state)=>{
      state.passwordArray=[...state.passwordArray,...arrOfNumbers]
      ++state.strength
    },
    // 
    removeNumbers:(state)=>{
      for (let i of arrOfNumbers) {
        state.passwordArray.splice(state.passwordArray.indexOf(i), 1);
   }
      --state.strength
    //  
    },addSymbols:(state)=>{
      state.passwordArray=[...state.passwordArray,...arrOfSymbols]
      ++state.strength
    // 
    },removeSymbols:(state)=>{
      for (let i of arrOfSymbols) {
        state.passwordArray.splice(state.passwordArray.indexOf(i), 1);
   }  
      --state.strength
    },
    generatePassword: (state,action) => {
      state.password=[]
      for (let i = 1; i <= action.payload; i++) {
        let random = Math.floor(Math.random() * +state.passwordArray.length - 1 + 1);
        
        state.password.push(state.passwordArray[random]);
      }
    },
    
  },
});
export const {addUpperCaseLetters,
              removeUpperCaseLetters,
              addLowerCaseLetters,
              removeLowerCaseLetters,
              addNumbers,
              removeNumbers,
              addSymbols,
              removeSymbols,generatePassword}=checkLinesSlicer.actions

export default checkLinesSlicer.reducer;
