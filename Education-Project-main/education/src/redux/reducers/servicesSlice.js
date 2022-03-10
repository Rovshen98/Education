import { createSlice } from "@reduxjs/toolkit";

const state = {
    servicesData:[
        {
            id:1,
            title:"Equivalence Certificate",
            imgSrc:"/images/EQUIVALENCE CERTIFICATE_2.png",
            link:"equivalence-certificate"
        },
        {
            id:2,
            title:"Online Consultation",
            imgSrc:"/images/ONLINE FREE CONSULTATION_0.png",
            link:"online-free-consultation"
        },
        {
            id:3,
            title:"Examinations",
            imgSrc:"/images/EXAMINATIONS_0.png",
            link:"examinations"
        },
        {
            id:4,
            title:"Residence Permit",
            imgSrc:"/images/RESIDENCE PERMIT_0.png",
            link:"residence-permit"
        },
        {
            id:5,
            title:"Health Insurance",
            imgSrc:"/images/HEALTH INSURANCE_0.png",
            link:"health-insurance"
        }
    ]
}

export const servicesSlice = createSlice({
    name:"services",
    initialState:state,
    reducers:{

    }
})

export const selectServices = (state) => state.services.servicesData;

export default servicesSlice.reducer;