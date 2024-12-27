import { jsPDF } from "jspdf";

const generatePDF = (data: Record<string, string>, summary?: { character: string; prediction: string }) => {
  const doc = new jsPDF();
  const margin = 10;
  const pageWidth = doc.internal.pageSize.width - margin * 2;
  const lineHeight = 10;
  let yPosition = margin;

  // Add Title
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Your Reflections", margin, yPosition);
  yPosition += lineHeight;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  Object.entries(data).forEach(([question, answer], index) => {
    const questionLines = doc.splitTextToSize(`${index + 1}. ${question}`, pageWidth);
    const answerLines = doc.splitTextToSize(`Answer: ${answer}`, pageWidth);

    if (yPosition + lineHeight * (questionLines.length + answerLines.length + 1) > doc.internal.pageSize.height - margin) {
      doc.addPage();
      yPosition = margin;
    }

    doc.setFont("helvetica", "bold");
    questionLines.forEach((line: any) => {
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });

    doc.setFont("helvetica", "normal");
    answerLines.forEach((line: any) => {
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });

    yPosition += lineHeight / 2;
  });

  if (summary) {
    const summaryLines = doc.splitTextToSize(`Character Summary: ${summary.character}`, pageWidth);
    const predictionLines = doc.splitTextToSize(`Next Year Prediction: ${summary.prediction}`, pageWidth);

    if (yPosition + lineHeight * (summaryLines.length + predictionLines.length + 2) > doc.internal.pageSize.height - margin) {
      doc.addPage();
      yPosition = margin;
    }

    doc.setFont("helvetica", "bold");
    doc.text("About You (AI Summary)", margin, yPosition);
    yPosition += lineHeight;

    doc.setFont("helvetica", "normal");
    summaryLines.forEach((line: any) => {
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });

    predictionLines.forEach((line: any) => {
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });
  }

  doc.save("Reflections.pdf");
};


export default generatePDF;