import React, { useState } from "react";
import { useAtom } from "jotai";
import { userDataAtom } from "../userDataAtom";
import { useNavigate } from "react-router-dom";
import { useGlobalFilter, useSortBy, useTable } from "react-table";

const Home = () => {
  const [userData, setUserData] = useAtom(userDataAtom);
  const navigate = useNavigate();

  const GlobalFilter = ({ filter, setFilter }) => {
    return (
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search...'
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
          className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
        />
      </div>
    )
  }

  const UsersTable = ({ columns, data }) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      setGlobalFilter,
    } = useTable(
      {
        columns,
        data,
      },
      useGlobalFilter,
      useSortBy
    )

    const { globalFilter } = state

    const [showConfirmation, setShowConfirmation] = useState(false)
    const [userIdToDelete, setUserIdToDelete] = useState(null)

    const updateUser = (userId, newData) => {
      setUserData((prevUserData) =>
        prevUserData.map((user) =>
          user.id === userId ? { ...user, ...newData } : user
        )
      )
      navigate(`/edit/${userId}`)
    }

    const handleDelete = (userId) => {
      setShowConfirmation(true)
      setUserIdToDelete(userId)
    }

    const confirmDelete = () => {
      console.log("Deleting user with ID:", userIdToDelete)
      setShowConfirmation(false)
    }

    const cancelDelete = () => {
      setShowConfirmation(false)
      setUserIdToDelete(null)
    }

    return (
      <div>
        {showConfirmation && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white p-4 rounded-md shadow-md text-center'>
              <p>Are you sure you want to delete this user?</p>
              <div className='flex justify-center mt-4'>
                <button
                  className='px-4 py-2 mr-2 bg-red-600 text-white rounded-md hover:bg-red-700'
                  onClick={confirmDelete}
                >
                  Yes
                </button>
                <button
                  className='px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500'
                  onClick={cancelDelete}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()} className='w-full'>
          <thead className='bg-gray-50'>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
                <th className='px-6 py-3'></th> {/* Empty column for actions */}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} className='hover:bg-gray-100'>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className='px-6 py-4 whitespace-nowrap '
                      >
                        {cell.render("Cell")}
                      </td>
                    )
                  })}
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <button className='text-indigo-600 hover:text-indigo-900 mr-2' onClick={()=>{updateUser(row.original.id, row.original.name)}}>
                      Edit
                    </button>
                    <button
                      className='text-red-600 hover:text-red-900'
                      onClick={() => handleDelete(row.original.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Password",
      accessor: "password",
    },
    {
      Header: "Role",
      accessor: "role",
    },
  ]

  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold mb-4'>User List</h1>
      <UsersTable columns={columns} data={userData} />
    </div>
  )
}

export default Home
