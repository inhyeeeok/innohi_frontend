import React from 'react';
import { useTable } from 'react-table';

// useTable에다가 작성한 columns와 data를 전달한 후 아래 2개의 props를 받아온다
export const Table = (param) => {

    const columns = param.columns
    const data = param.data

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return (
        <table style={{ width: '100%', border: '1px solid #444444', borderCollapse: 'collapse' }} {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr style={{ border: '1px solid #444444' }} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th style={{ border: '1px solid #444444' }} {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr style={{ border: '1px solid #444444' }} {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td style={{ border: '1px solid #444444' }} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};


export const InputTable = (param) => {

    const columns = param.columns
    const data = param.data

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return (
        <table style={{ width: '100%', border: '1px solid #444444', borderCollapse: 'collapse' }} {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr style={{ border: '1px solid #444444' }} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th style={{ border: '1px solid #444444' }} {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    if (i == 0)
                        return (
                            <tr style={{ border: '1px solid #444444' }} {...row.getRowProps()}>
                                {row.cells.map((cell, i) => {
                                    return <td  {...cell.getCellProps()} id={i}>
                                        <input style={{ width: '100%' }}></input>
                                    </td>
                                })}
                            </tr>
                        )
                })}
            </tbody>
        </table>
    );
};


