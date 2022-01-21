import $ from 'jquery';

export const DataTableComponent = (orginData, columns) => {

    const lang_kor = {
        "decimal": "",
        "emptyTable": "데이터가 없습니다.",
        "info": "_START_ - _END_ (총 _TOTAL_ 개)",
        "infoEmpty": "0개",
        "infoFiltered": "(전체 _MAX_ 개 중 검색결과)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "_MENU_ 개씩 보기",
        "loadingRecords": "로딩중...",
        "processing": "처리중...",
        "search": "검색 : ",
        "zeroRecords": "검색된 데이터가 없습니다.",
        "paginate": {
            "first": "첫 페이지",
            "last": "마지막 페이지",
            "next": "다음",
            "previous": "이전"
        },
        "aria": {
            "sortAscending": " :  오름차순 정렬",
            "sortDescending": " :  내림차순 정렬"
        }
    };
     console.log('data: ' + JSON.stringify(orginData));
     console.log('columns: ' + JSON.stringify(columns));

    const syncTable = (orginData, columns) => {

        $('#dataTable').DataTable({
            data: orginData,
            columns: columns,
            createdRow: function (row, _data, _dataIndex) {
                row.addEventListener('click', function () {
                    //                    console.log(row, data, dataIndex);
                    alert('준비중입니다!🛠️');
                })
            },
            drawCallback: function () {
                document.getElementById('dataTable').firstElementChild.style.backgroundColor = '#f1f1f1b4';
            },
            language: lang_kor,
            responsive: true,
            // 표시 건수기능 숨기기
            lengthChange: false,
            // 검색 기능 숨기기
            searching: false,
            // 정렬 기능 숨기기
            ordering: false,
            // 정보 표시 숨기기
            info: false,
            // 페이징 기능 숨기기
            //paging: false,
            // 2번째 항목을 오름 차순 
            // order : [ [ 열 번호, 정렬 순서 ], ... ]
            pageLength : 5,
            order: [[0, "asc"]]
        });
    };

    return syncTable(orginData, columns);
    
  }