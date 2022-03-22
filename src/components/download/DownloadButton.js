const DownloadButton = (props) => {

    const handleDownload = () => {

        const pdfUrl = props.url;
        const filename = props.name;

        fetch(pdfUrl, { method: 'GET' })
            .then(res => {
                return res.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                setTimeout(_ => {
                    window.URL.revokeObjectURL(url);
                }, 60000);
                a.remove();
            })
            .catch(err => {
                console.error('err: ', err);
            });
    };

    return (
        <>
            <a onClick={handleDownload} className="btn-get-started scrollto" href="#download">다운로드</a>
        </>
    );

}

export default DownloadButton;