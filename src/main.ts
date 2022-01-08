import {jsPDF} from 'jspdf'
import Bg from './demo.jpg'

// get form element by id and add event listener
const form = document.getElementById('form')
form!.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('form submitted');
    
    // get the title and description elements
    const title = document.getElementById('title') as HTMLInputElement
    const description = document.getElementById('description') as HTMLInputElement
    const link = document.getElementById('link') as HTMLInputElement

    var bg = new Image()
    bg.src = Bg
    const pdfobject = document.getElementById('pdfobject') as HTMLObjectElement
    const doc = new jsPDF()
    // put a filled rectangle on top left corner
    doc.addImage(bg, 'JPEG', 0, 0, 210, 297)
    // put the title
    doc.setFontSize(30)
    doc.setTextColor("#000")
    doc.text(title.value, 10, 100)
    // put the description
    doc.setFontSize(12)
    doc.setTextColor("#000")
    doc.text(description.value, 10, 120)
    // put the link and add a link to it
    doc.setFontSize(12)
    doc.setTextColor("#blue")
    doc.textWithLink("Click Here: " + link.value, 10, 200, {url: link.value})
    // save the pdf


    const showData = () => {
        pdfobject.data = doc.output('datauristring')
    }
    showData()  


})


