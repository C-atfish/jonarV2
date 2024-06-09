const imageContainer = document.getElementById("imagesWrapper")

const imageNames = [ 'C_Logo.png', 'CSharpLogo.png','PythonLogo.png', 'DjangoLogo.png',
    'JavaLogo.png','KotlinLogo.png', 'springLogo.png', 'nginxLogo.png', 'RabbitMQ_logo.png',
    'Mysql_logo.png', 'postgresqlLogo.png', 'MongoDBLogo.png','TSLogo.png', 'nodeLogo.png',
    'ReactLogo.png', 'SvelteLogo.png', 'VueLogo.png', 'socketIoLogo.png', 'TailwindLogo.png',
    'AWS_logo.png', 'terraformLogo.png', 'linuxLogo.png', 'githubLogo.png'];



function addImagesToCarousel(){
    imageNames.forEach((imgName) => {
        const imageTag = document.createElement("img");
        imageTag.src = `images/${imgName}`;
        imageTag.alt = imgName
        imageTag.className = "logoImage"
        imageContainer.appendChild(imageTag)
    })
}


addImagesToCarousel()
addImagesToCarousel()
addImagesToCarousel()
