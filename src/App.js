import React, { useState } from 'react';

const XTable = () => {
    const [data, setData] = useState([
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" }
    ]);

    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (key) => {
        if (sortBy === key) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(key);
            setSortOrder('asc');
        }
    };

    const sortedData = [...data].sort((a, b) => {
        if (sortBy) {
            if (sortOrder === 'asc') {
                return a[sortBy] > b[sortBy] ? 1 : -1;
            } else {
                return a[sortBy] < b[sortBy] ? 1 : -1;
            }
        } else {
            return 0;
        }
    });

    return (
        <div>
            <div>
                <button onClick={() => handleSort('date')}>Sort by Date</button>
                <button onClick={() => handleSort('views')}>Sort by Views</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.date}</td>
                            <td>{row.views}</td>
                            <td>{row.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default XTable;
