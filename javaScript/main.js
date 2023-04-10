// ACtive List
const dashboardList = document.querySelectorAll(".sidebar ul li");
dashboardList.forEach((list)=> {
    list.addEventListener("click", () => {
        dashboardList.forEach((lists) => {
            lists.classList.remove("active")
        })
        list.classList.add("active")
    })
})