function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  /*****MÉTODO SE SENAO********
  if(html.classList.contains('dark')) {
    html.classList.remove('dark')
  } else {
    html.classList.add('dark')
  }  
  ****************************/

    // pegar a tag img //
    const img = document.querySelector("#profile img")
    //substituir a imagem //
    if(html.classList.contains("dark")) {
    //se tiver no dark mode, adicionar a imagem dark
    img.setAttribute('src', './assets/avatarDark.png')
    } else {
    // se tiver sem o dark mode, manter a imagem original
    img.setAttribute('src', './assets/avatarLight.png')
    }
  }