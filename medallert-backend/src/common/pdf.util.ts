import PDFDocument from "pdfkit";
import fs from "fs";

export async function generatePDF(reportData: any,outputPath: string){
    const doc = new PDFDocument;
    const stream = new fs.createWriteStream(outputPath);
    doc.pipe(stream);
    
    // Document format

    doc.end();
}