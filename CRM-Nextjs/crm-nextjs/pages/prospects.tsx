import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import CommandBar from '../components/Client';
import { authenticate, getProspects } from '../services/api';

const ProspectsPage = () => {
  const [prospects, setProspects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await authenticate('noah@demo.dev', 'Applecar2025');
        const prospectsData = await getProspects(token);
        setProspects(prospectsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <CommandBar />
        <h1 className="text-2xl mb-4">Prospects</h1>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Company</th>
              <th className="p-2">Email</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {prospects.map(prospect => (
              <tr key={prospect.id}>
                <td className="p-2">{prospect.name}</td>
                <td className="p-2">{prospect.company}</td>
                <td className="p-2">{prospect.email}</td>
                <td className="p-2">
                  {/* Add edit and delete functionality here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProspectsPage;

