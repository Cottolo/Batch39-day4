let dataBlog=[]


function addBlog(event){
    event.preventDefault()

    let projectName = document.getElementById("in-project").value
    let startDate = document.getElementById("in-startdate").value
    let endDate = document.getElementById("in-enddate").value
    let description = document.getElementById("in-Description").value
    let iconNodeJs = document.getElementById("node-js").checked
    let iconNextJs = document.getElementById("next-js").checked
    let iconReactJs = document.getElementById("react-js").checked
    let iconTypeScript = document.getElementById("type-script").checked
    let image = document.getElementById("in-image").files

    if(iconNodeJs){
        iconNodeJs = document.getElementById("node-js").value
    } else {iconNodeJs = ``}
    if(iconNextJs){
        iconNextJs = document.getElementById("next-js").value
    } else {iconNextJs = ``}
    if(iconReactJs){
        iconReactJs = document.getElementById("react-js").value
    } else {iconReactJs = ``}
    if(iconTypeScript){
        iconTypeScript = document.getElementById("type-script").value
    } else {iconTypeScript = ``}

    image = URL.createObjectURL(image[0])
    
    let blog ={
        projectName,
        startDate,
        endDate,
        description,
        iconNodeJs,
        iconNextJs,
        iconReactJs,
        iconTypeScript,
        image
    }
   
    dataBlog.push(blog)

    renderBlog ()


}

function renderBlog(){

    document.getElementById("container").innerHTML = ``

    for (let index = 0; index < dataBlog.length ; index ++) { 
        // console.log(dataBlog[index]) 
        document.getElementById("container").innerHTML += `
        
       
        <a href="detail-blog.html" class="container-post">

            <div >
                <div class="container-image">
                    <img src="${dataBlog[index].image}" alt="Nokia">
                </div>
                <div class="container-title">
                    <h2>${dataBlog[index].projectName}</h2>
                </div>
                <div class="container-description">
                    <p class="container-duration">Durasi: 3 bulan</p>
                </div>
                ${dataBlog[index].description}
                </div>
            <div class="container-icon">
                <i class="fa-brands fa-${dataBlog[index].iconNodeJs}"></i>
                <i class="fa-brands fa-${dataBlog[index].iconNextJs}"></i>
                <i class="fa-brands fa-${dataBlog[index].iconReactJs}"></i>
                <i class="fa-brands fa-${dataBlog[index].iconTypeScript}"></i>

            </div>
            <div class="container-option">
                <button class="container-option-left">edit</button>
                <button class="container-option-right">delete</button>
            </div>


            <div >

            </div>

        </a>


        `
    }
    
}