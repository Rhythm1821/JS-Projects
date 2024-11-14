const rectangle = document.querySelector("#center");

rectangle.addEventListener("mousemove", function (e){
    let rectangleLocation = rectangle.getBoundingClientRect();
    const insideRectangleVal = e.clientX - rectangleLocation.left
    
    let midPoint = rectangleLocation.width/2
    if (insideRectangleVal < midPoint) {
        let colorRed = gsap.utils.mapRange(0, midPoint, 255, 0, insideRectangleVal)
        gsap.to(rectangle, {
            backgroundColor: `rgb(${colorRed}, 0, 0)`,
            ease: Power4
        })
    } else {
        let colorBlue = gsap.utils.mapRange(midPoint, rectangleLocation.width, 255, 0, insideRectangleVal)
        gsap.to(rectangle, {
            backgroundColor: `rgb(0, 0, ${colorBlue})`,
            ease: Power4
        })
    }
})

rectangle.addEventListener("mouseleave", function(){
    gsap.to(rectangle, {
        backgroundColor: "white",
    })
})
