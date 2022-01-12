import React from 'react';
import DataTable from 'react-data-table-component';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const DataTableComponent = (props) => {

    console.log('data: ' + JSON.stringify(props.data));
    console.log('columns: ' + JSON.stringify(props.columns));

    // const conditionalRowStyles = [
    //     {
    //       when: columns => columns,
    //       style: {
    //         backgroundColor: 'green',
    //         color: 'white',
    //         '&:hover': {
    //           cursor: 'pointer',
    //         },
    //       },
    //     },

    //     // You can also pass a callback to style for additional customization
    //     {
    //       when: row => row.calories < 400,
    //       style: row => ({ backgroundColor: row.isSpecial ? 'pink' : 'inerit' }),
    //     },
    //   ];

    return (
        <>
            <DataTable
                 columns={props.columns}
                 data={props.data}
                defaultSortFieldID={1}
                striped
    //             pagination
    //             paginationPerPage={5}
    //             paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
    // //            conditionalRowStyles={conditionalRowStyles}
    //         //   paginationComponent={BootyPagination}
    //         paginationComponentOptions={{
    //             rowsPerPageText: 'Records per page:',
    //             rangeSeparatorText: 'out of',
    //           }}
              highlightOnHover

            //   selectableRows
             //  selectableRowsComponent={ExpandedComponent}
            />
        </>
    );
    
  }

  export default DataTableComponent;