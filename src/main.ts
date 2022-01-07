import {jsPDF} from 'jspdf'

// get element pdfobject by id
const pdfobject = document.getElementById('pdfobject') as HTMLObjectElement
const doc = new jsPDF()

doc.text("Hello World", 10, 10)
doc.circle(100, 100, 30)
pdfobject.data = doc.output('datauristring')