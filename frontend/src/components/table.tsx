import React from 'react'

const Table = () => {
  // Sample data - replace with your actual data
  const tableData = [
    { number: 1, teamName: 'Team A', score: 25, result: 'W' },
    { number: 2, teamName: 'Team B', score: 18, result: 'L' },
    { number: 3, teamName: 'Team C', score: 22, result: 'D' },
  ]

  return (
    <div className="w-full bg-[#353030] p-2 rounded-2xl">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="p-2 first:rounded-tl-lg">No.</th>
            <th className="p-2">Team Name</th>
            <th className="p-2">Score</th>
            <th className="p-2 last:rounded-tr-lg">Result</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {tableData.map((row, index) => (
            <tr key={row.number} className={`bg-[#292525] ${index === tableData.length - 1 ? 'last:rounded-b-lg' : ''}`}>
              <td className="p-2 first:rounded-bl-lg">{row.number}</td>
              <td className="p-2">{row.teamName}</td>
              <td className="p-2">{row.score}</td>
              <td className="p-2 last:rounded-br-lg">{row.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table