import NavBar from "../components/NavBar";



export const MenuResponsive = (men) => {
    const menu = document.getElementById("hide");
    $("menu").on("click", function() {
        $("nav ul").toggle("slow");
    })

}