import {
    createSlice
} from "@reduxjs/toolkit";

const state = {
    actionData: [{
            id: 1,
            icon: "bi bi-globe2",
            title: "High Quality Universities",
            description: "Turkish Universities provides standard and quality education, competing with the international universities around the world, providing extraordinary facilities and services to the students, to enhance their skills and experience.",

        },
        {
            id:2,
            icon:"fa-solid fa-fire-flame-curved",
            title:"Free Consultation",
            description:"We offer free consultations to our students, before and during their study! Besides that, we provide affordable packages to guarantee smooth and good start for all international students in Turkey.",

        },
        {
            id:3,
            icon:"fa-solid fa-dollar-sign",
            title:"No Application Fee",
            description:"OK TAMAM helps you in choosing your Study program, preparing your documents for the admission, and apply for you in top universities for free.",
            question:"Ready to apply??",
        }   
    ]
}

export const actionSlice = createSlice({
    name:"action",
    initialState:state,
    reducers:{

    }
})

export const selectAction = (state) => state.action.actionData;

export default actionSlice.reducer;