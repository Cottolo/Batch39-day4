let dataBlog=[]


function addBlog(event){
    event.preventDefault()

    let projectName = document.getElementById("in-project").value
    let startDate = document.getElementById("in-startdate").value
    let endDate = document.getElementById("in-enddate").value
    let description = document.getElementById("in-Description").value
    let iconNodeJs = document.getElementById("node-js").value
    let iconNextJs = document.getElementById("next-js").value
    let iconReactJs = document.getElementById("react-js").value
    let iconTypeScript = document.getElementById("type-script").value
    let image = document.getElementById("in-image").files

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