const images=document.querySelectorAll("img");
const content=document.getElementById("content");
const imageBox=document.getElementById("image-box");
const closeButton=document.getElementById("button");

closeButton.addEventListener("click",()=>{
	imageBox.style.display = "none";
});

images.forEach((image)=>{
	image.addEventListener("click",showImageBox);
});

function showImageBox() {
	imageBox.style.display = "block";
	// let imageSrc = this.src;
	// console.log(imageSrc);

	let image=document.createElement("img");
	image.src = this.src;
	// image.style.height = 400;
	// image.style.width = 400;
	image.style.objectFit = "cover";
	content.innerHTML="";
    content.append(image);

};