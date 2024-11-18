import React from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Eye, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockPatients = [
  {
    id: 1,
    studyId: 'CVS-001',
    patientId: 'P001',
    enrollmentDate: '2024-02-15',
    status: 'Active',
    formsCompleted: 8,
    totalForms: 12,
  },
  {
    id: 2,
    studyId: 'CVS-001',
    patientId: 'P002',
    enrollmentDate: '2024-02-16',
    status: 'Active',
    formsCompleted: 6,
    totalForms: 12,
  },
  {
    id: 3,
    studyId: 'CVS-002',
    patientId: 'P001',
    enrollmentDate: '2024-02-20',
    status: 'Screening',
    formsCompleted: 2,
    totalForms: 12,
  },
];

export default function PatientList() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">{t('patients')}</h1>
          <Link
            to="/patients/new"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            {t('addPatient')}
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('patientId')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('studyId')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('enrollmentDate')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('status')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('progress')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('actions')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockPatients.map((patient) => (
                <tr key={patient.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {patient.patientId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {patient.studyId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {patient.enrollmentDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      patient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full mr-2">
                        <div 
                          className="h-2 bg-indigo-600 rounded-full" 
                          style={{ width: `${(patient.formsCompleted / patient.totalForms) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs">
                        {patient.formsCompleted}/{patient.totalForms}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-3">
                      <Link to={`/patients/${patient.id}/forms`} className="text-indigo-600 hover:text-indigo-900">
                        <Eye className="h-4 w-4" />
                      </Link>
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}