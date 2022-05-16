import { useMutation, useQuery, gql } from '@apollo/client';
// *useQuery, useMutation Hook 이용
// apollo/react-hook에서 제공하는 custom hook인데, 
// 나는 이 프로젝트에서 hook을 적극적으로 활용할 것을 하나의 주안점으로 삼았기 때문에 
// 전체적인 통합성을 고려해 이 방식으로 api 요청을 하기로 결정했다.
import React, { useState, useEffect } from 'react';
import * as Table from './Table'

const Test = () => {
    const [firstResults, setFirstResults] = useState(false)
    const [secondResults, setSecondResults] = useState(false)

    const selectTodo = gql`
    query listInnohis {
        listInnohis(limit: 50) {
            items {
              id
              title
            }
        }

        listStartupData(limit: 50) {
            items {
                no
                id
                category_L
                category_S
                city
                country
                employeeNum
                estbYear
                investRound
                logoLink
                moneyRaised
                service
            }
          }
      }
    `;

    const createTodo = gql`
    mutation createInnohi($createinnohiinput: CreateInnohiInput!) {
        createInnohi(input: $createinnohiinput) {
          id
          title
        }
      }
    `;

    const createStartupData = gql`
    mutation createStartupData($createstartupDatainput: CreateStartupDataInput!) {
        createStartupData(input: $createstartupDatainput) {
            no
            id
            category_L
            category_S
            city
            country
            employeeNum
            estbYear
            investRound
            logoLink
            moneyRaised
            service
        }
      }
    `;

    const [createTodoMutation] = useMutation(createTodo);
    const [createStartupDataMutation] = useMutation(createStartupData);
    const { loading, error, data, refetch } = useQuery(selectTodo);
    console.log(error)
    //https://coder-question-ko.com/cq-ko-blog/64006

    const handleChange = (e) => {
        const { value } = e.target

        if (value === '1') {
            setFirstResults(true);
            setSecondResults(false);
        }

        else if (value === '2') {
            setFirstResults(false);
            setSecondResults(true);
        } else {

        }
    }


    // function DogPhoto({ breed }) {
    //   const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    //     variables: { breed },
    //     pollInterval: 500,
    //   });

    //   if (loading) return null;
    //   if (error) return `Error! ${error}`;

    //   return (
    //     <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
    //   );
    // }

    const FirstFunction = () => {

        const columns = [
            {
                Header: 'id',
                accessor: 'id',
            },
            {
                Header: 'title',
                accessor: 'title',
            },
        ];

        const handleCreateTodoClick = (e) => {

            console.log(e)
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();

            const input = {
                "createinnohiinput": {
                    "id": '12',
                    "title": hours + '시 ' + minutes + '분 ' + seconds + '초'
                }
            }
            createTodoMutation({
                variables: input,
            })
                .then((res) => {
                    alert('Todo created successfully');
                    console.log(res);
                    refetch();
                })
                .catch((err) => {
                    alert('Error occurred');
                    console.log(err);
                });
        };

        if (firstResults)
            return (
                <>
                    <span></span><h5>총 개수 : <span id='total'>{data.listInnohis.items.length}</span></h5>
                    <div id='test'>
                        <MakeSelectReactTable columns={columns} renders={data.listInnohis.items} />
                            <div style={{ marginTop: '50px' }}></div>
                        <MakeInsertReactTable columns={columns} renders={data.listStartupData.items} />
                        <button style={{ marginTop: '20px', marginBottom: '20px' }} onClick={handleCreateTodoClick}>handleCreateTodoClick</button>
                    </div>
                </>
            )
        else
            return (
                <></>
            )
    }

    const SecondFunction = () => {

        const columns = [
            {
                Header: '순번',
                accessor: 'no',
            },
            {
                Header: '고유키(pk)',
                accessor: 'id',
            },
            {
                Header: '카테고리(L)',
                accessor: 'category_L',
            },
            {
                Header: '카테고리(S)',
                accessor: 'category_S',
            },
            {
                Header: '도시',
                accessor: 'city',
            },
            {
                Header: '나라',
                accessor: 'country',
            },
            {
                Header: 'employeeNum',
                accessor: 'employeeNum',
            },
            {
                Header: 'estbYear',
                accessor: 'estbYear',
            },
            {
                Header: 'investRound',
                accessor: 'investRound',
            },
            {
                Header: 'logoLink',
                accessor: 'logoLink',
            },
            {
                Header: 'moneyRaised',
                accessor: 'moneyRaised',
            },
            {
                Header: 'service',
                accessor: 'service',
            },
        ];

        const handleCreateTodoClick = (e) => {

            console.log(e)
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();

            const input = {
                "createstartupDatainput": {
                    "no": hours + '시 ' + minutes + '분 ' + seconds + '초',
                    "category_L": hours + '시 ' + minutes + '분 ' + seconds + '초',
                    "category_S": hours + '시 ' + minutes + '분 ' + seconds + '초',
                    "city": hours + '시 ' + minutes + '분 ' + seconds + '초',
                    "country": hours + '시 ' + minutes + '분 ' + seconds + '초',
                    "employeeNum": hours + '시 ' + minutes + '분 ' + seconds + '초',
                    "estbYear": hours + '시 ' + minutes + '분 ' + seconds + '초',
                    "investRound": hours + '시 ' + minutes + '분 ' + seconds + '초',
                    "logoLink": hours + '시 ' + minutes + '분 ' + seconds + '초',
                    "moneyRaised": hours + '시 ' + minutes + '분 ' + seconds + '초',
                    "service": hours + '시 ' + minutes + '분 ' + seconds + '초'
                }
            }
            createStartupDataMutation({
                variables: input,
            })
                .then((res) => {
                    alert('Todo created successfully');
                    console.log(res);
                    refetch();
                })
                .catch((err) => {
                    alert('Error occurred');
                    console.log(err);
                });
        };

        if (secondResults)
            return (
                <>
                    <span></span><h5>총 개수 : <span id='total'>{data.listStartupData.items.length}</span></h5>
                    <div id='test'>
                        <MakeSelectReactTable columns={columns} renders={data.listStartupData.items} />
                            <div style={{ marginTop: '50px' }}></div>
                        <MakeInsertReactTable columns={columns} renders={data.listStartupData.items} />
                        <button style={{ marginTop: '20px', marginBottom: '20px' }} onClick={handleCreateTodoClick}>handleCreateStartupDataClick</button>
                    </div>
                </>
            )
        else
            return (
                <></>
            )
    }

    const MakeSelectReactTable = (param) => {

        const columns = param.columns
        const renders = param.renders

        if (loading === false) {
            return (
                <>
                    <Table.Table columns={columns} data={renders} />
                </>
            )
        } else {
            return (
                <>
                    <h5>로딩중....</h5>
                </>
            )
        }
    }

    const MakeInsertReactTable = (param) => {

        const columns = param.columns
        const renders = param.renders

        if (loading === false) {
            return (
                <>
                    <Table.InputTable columns={columns} data={renders} />
                </>
            )
        } else {
            return (
                <>
                    <h5>로딩중....</h5>
                </>
            )
        }
    }

    useEffect(() => {

    })


    return (
        <>
            <select style={{ marginTop: '20px', marginBottom: '20px' }} onChange={handleChange}>
                <option key='1' value='1'>테스트</option>
                <option key='2' value='2'>스타트업 아카이브</option>
                <option key='3' value='3'>3</option>
            </select>

            <FirstFunction />
            <SecondFunction />
        </>
    )
}

export default Test;