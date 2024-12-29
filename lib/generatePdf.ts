import { jsPDF } from "jspdf";

const generatePDF = (
  data: Record<string, string>,
  summary?: { character: string; prediction: string }
) => {
  const doc = new jsPDF();
  const margin = 10;
  const pageWidth = doc.internal.pageSize.width - margin * 2;
  const lineHeight = 10;
  let yPosition = margin;

  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.addImage("/logo.png", "PNG", margin, margin, 60, 20);
  yPosition += (lineHeight * 2.25);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  yPosition += lineHeight;

  Object.entries(data).forEach(([question, answer]) => {
    const questionLines = doc.splitTextToSize(`${question}`, pageWidth);
    const answerLines = doc.splitTextToSize(`${answer}`, pageWidth);

    if (
      yPosition + lineHeight * (questionLines.length + answerLines.length + 1) >
      doc.internal.pageSize.height - margin
    ) {
      doc.addPage();
      yPosition = margin;
    }

    doc.setFont("times", "bold");
    questionLines.forEach((line: any) => {
      doc.text(line, margin, yPosition);
      yPosition += (lineHeight * 0.75);
    });

    doc.setFont("helvetica", "normal");
    answerLines.forEach((line: any) => {
      doc.text(line, margin, yPosition);
      yPosition += (lineHeight * 0.75);
    });

    yPosition += lineHeight / 2;
  });

  if (summary?.character !== null && summary?.prediction !== null) {
    const summaryLines = doc.splitTextToSize(
      `Character Summary: ${summary?.character}`,
      pageWidth
    );
    const predictionLines = doc.splitTextToSize(
      `Next Year Prediction: ${summary?.prediction}`,
      pageWidth
    );

    if (
      yPosition +
        lineHeight * (summaryLines.length + predictionLines.length + 2) >
      doc.internal.pageSize.height - margin
    ) {
      doc.addPage();
      yPosition = margin;
    }

    doc.setFont("times", "bold");
    doc.text("About You", margin, yPosition);
    doc.setFontSize(20);
    yPosition += lineHeight;

    doc.setFontSize(12);
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

  doc.save("reflect.pdf");
};

export default generatePDF;
