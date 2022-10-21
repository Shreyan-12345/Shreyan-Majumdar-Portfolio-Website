document.querySelector(".sidebar").style.display="none";
document.querySelector(".cross").style.display="none";

if(document.querySelector(".sidebar").style.display=="none")
{
    document.querySelector(".ham").addEventListener("click",()=>{
        document.querySelector(".sidebar").style.display="inline";
        document.querySelector(".cross").style.display="inline";
        document.querySelector(".ham").src="ham_black.png";
    });
}

document.querySelector(".cross").addEventListener("click",()=>{
    document.querySelector(".sidebar").style.display="none";
    document.querySelector(".cross").style.display="none";
    document.querySelector(".ham").src="ham.png";
});
