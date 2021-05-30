const about = document.querySelector('#about')
const blog  =  document.querySelector('#blog')
const projects  =  document.querySelector('#projects')
const browser  =  document.querySelector('#browser')

const aboutContent  =  document.querySelector('#about-content')
const blogContent  =  document.querySelector('#blog-content')
const projectsContent  =  document.querySelector('#projects-content')



let aboutBox = new WinBox({
    title: 'About Me 🧑',
    // modal: true,
    width: '400px',
    height: '400px',
    x: "center",
    y: "center",
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#000')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })

about.addEventListener('click', () => {
    let aboutBox = new WinBox({
      title: 'About Me 🧑',
      // modal: true,
      width: '400px',
      height: '400px',
      x: "center",
      y: "center",
      mount: aboutContent,
      onfocus: function () {
        this.setBackground('#000')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })
  
  blog.addEventListener('click', () => {
let blogBox = new WinBox({
      title: 'Blog 📝:',
      // modal: true,
      width: '400px',
      height: '200px',
      x: "50%",
      y: "25%",
      mount: blogContent,
      onfocus: function () {
        this.setBackground('#000')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })

  projects.addEventListener('click', () => {
  
    const projectsBox = new WinBox({
      title: 'projects.list',
      // modal: true,
      width: '462px',
      height: '500px',
      x: "25%",
      y: "15%",
      mount: projectsContent,
      onfocus: function () {
        this.setBackground('#000')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })

  browser.addEventListener('click', () => {

     browserBox = new WinBox({
      title: 'Web Browser',
      // modal: true,
      width: '400px',
      height: '400px',
      x: "25%",
      y: "25%",
      url: "./browser.html",
      onfocus: function () {
        this.setBackground('#000')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })


