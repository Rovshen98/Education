import {
    createSlice
} from "@reduxjs/toolkit";

const state = {
    navData: [{
            id: 1,
            title: "Home",
            icon: "fa-solid fa-house-chimney",
            href: "/"
        },
        {
            id: 2,
            title: "Education Services",
            icon: "fa-solid fa-building-columns",
            href: "/education-services/",
            subData: [{
                    title: "Study in Turkey",
                    link: "https://oktamam.com/en/study-in-turkey/"
                },
                {
                    title: "Reasons to Study in Turkey",
                    link: "https://oktamam.com/en/reasons-to-study-in-turkey/"
                },
                {
                    title: "Best Turkish Universities",
                    link: "https://oktamam.com/en/best-turkish-universities/"
                },
                {
                    title: "Public Universities in Turkey",
                    link: "https://oktamam.com/en/best-state-universities-turkey/"
                },
                {
                    title: "Study in English",
                    link: "https://oktamam.com/en/turkish-university-study-english/"
                },
                {
                    title: "Turkish Scholarship",
                    link: "https://oktamam.com/en/turkish-scholarships/"
                }
            ]
        },
        {
            id: 3,
            title: "Business Services",
            icon: "fa-solid fa-briefcase",
            href: "/business-services/"
        },
        {
            id: 4,
            title: "News & Announcements",
            icon: "fa-solid fa-bullhorn",
            href: "/category/news-2"
        },
        {
            id: 5,
            title: "Apply Now",
            icon: "fa-solid fa-pen-to-square",
            href: "/apply/"
        },
        {
            id: 6,
            title: "Contact Us",
            icon: "fa-solid fa-envelope",
            href: "/contact/"
        },
        
    ]
}

export const navbarSlice = createSlice({
    name: "navbar",
    initialState: state,
    reducers: {

    }
})

export const selectNavbar = (state) => state.navbar.navData;

export default navbarSlice.reducer;