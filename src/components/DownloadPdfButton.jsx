export default function DownloadPdfButton() {
  const getPDF = () => {
		const resume = document.getElementById('resume');

		html2PDF(resume, {
			jsPDF: {
				format: 'a4',
			},
			output: './pdf/my_resume.pdf'
		});
	}

  return <button onClick={getPDF} className="download-pdf-btn">Download PDF</button>;
}