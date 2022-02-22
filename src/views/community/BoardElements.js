export const BoardMainElements =
    <section id="about" className="about">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2 style={{ textTransform: 'capitalize' }}>오픈이노베이션 레터</h2>
                <p>행사에 대한 고민은 많지만, 오늘도 바쁜 당신을 위해 오픈이노베이션 분야별 행사와 모임을 한 눈에 모아 봤습니다. 놓쳐선 안 될 행사와 함께 여러분의 메일함을 살며시 두드릴게요.
                    <br />우리, 한 주의 문을 활짝 여는 격주 금요일 아침에 만나요 🙋‍♀️
                </p>
            </div>
            <table id="dataTable" className="type04" width="100%">
                <thead>
                    <tr>
                        <th>내용</th>
                    </tr>
                </thead>
            </table>
            <div id="dataTable2" width="100%">

            </div>
        </div>
    </section>
    ;

export const BoardDetailElements = (props) => {
    console.log(JSON.stringify(props.data));
    const param = props.data;
    return (
        <>
            <div className="container">
                <div className="table-responsive-md" >
                    <table className="table table-bordered">
                        <thead style={{ backgroundColor: 'rgba(242, 242, 242, 0.706)' }}>
                            <tr align="center" >
                                <th width="10%">제목</th>
                                <th width="40%" colSpan="3" >{param.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr align="center">
                                <td>순번</td>
                                <td>{param.bno}</td>
                                <td>조회수</td>
                                <td>{param.viewCnt}</td>
                            </tr>
                            <tr align="center">
                                <td width="10%">작성일</td>
                                <td width="40%">{param.regDate}</td>
                                <td width="10%">작성자</td>
                                <td width="40%">{param.regUser}</td>
                            </tr>
                            <tr>
                                <td colSpan="4">
                                    <iframe
                                        src={param.content}
                                        style={{ height: '2830px', width: '100%' }} title="oi-newsletter"></iframe>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table table-condensed">
                        <thead>
                            <tr>
                                {/* <td style={{ float: 'right' }}> */}
                                    {/* <button type="button" id="delete" className="btn btn-primary disabled">이전</button> */}<a href='/board'>
                                    <button type="button" id="list" className="btn btn-primary" style={{ float: 'right' }}>목록</button>
                                    {/* <button type="button" id="write" className="btn btn-primary active">다음</button> */}</a>
                                {/* </td> */}
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>

    )
}
    ;
  
