function lenis(){
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
}


function jq(){

  $('.img-wrapper').tilt({
    speed:2000,
    maxTilt:5,
    scale:1,
    perspective: 700,
})


}

jq()












lenis()
