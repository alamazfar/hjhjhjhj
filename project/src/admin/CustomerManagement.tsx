import React, { useState } from 'react';
import { User, Phone, Mail, Calendar, Star, Search, Filter, Download, Eye } from 'lucide-react';

const CustomerManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  const customers = [
    {
      id: 'CU001',
      name: 'Anita Sharma',
      phone: '+91 98765 43210',
      email: 'anita.sharma@email.com',
      joinDate: '2024-01-15',
      totalBookings: 8,
      totalSpent: 22400,
      favoriteService: 'Full Body Massage',
      lastVisit: '2024-03-15',
      rating: 4.9,
      notes: 'VIP customer, prefers weekend slots'
    },
    {
      id: 'CU002',
      name: 'Rajesh Kumar',
      phone: '+91 98765 43211',
      email: 'rajesh.kumar@email.com',
      joinDate: '2023-11-20',
      totalBookings: 12,
      totalSpent: 35200,
      favoriteService: 'Ayurvedic Massage',
      lastVisit: '2024-03-18',
      rating: 5.0,
      notes: 'Regular customer, monthly membership'
    },
    {
      id: 'CU003',
      name: 'Priya Das',
      phone: '+91 98765 43212',
      email: 'priya.das@email.com',
      joinDate: '2024-02-10',
      totalBookings: 5,
      totalSpent: 12000,
      favoriteService: 'Aromatherapy Massage',
      lastVisit: '2024-03-10',
      rating: 4.7,
      notes: 'Allergic to certain oils'
    },
    {
      id: 'CU004',
      name: 'Sunil Roy',
      phone: '+91 98765 43213',
      email: 'sunil.roy@email.com',
      joinDate: '2023-12-05',
      totalBookings: 15,
      totalSpent: 18000,
      favoriteService: 'Foot Massage',
      lastVisit: '2024-03-12',
      rating: 4.8,
      notes: 'Has foot pain issues, requires gentle treatment'
    },
    {
      id: 'CU005',
      name: 'Meera Ghosh',
      phone: '+91 98765 43214',
      email: 'meera.ghosh@email.com',
      joinDate: '2024-01-08',
      totalBookings: 6,
      totalSpent: 10800,
      favoriteService: 'Head & Shoulder Massage',
      lastVisit: '2024-03-08',
      rating: 4.6,
      notes: 'Works in IT, stressed shoulders'
    },
    {
      id: 'CU006',
      name: 'Amit Banerjee',
      phone: '+91 98765 43215',
      email: 'amit.banerjee@email.com',
      joinDate: '2023-10-15',
      totalBookings: 10,
      totalSpent: 26000,
      favoriteService: 'Hot Stone Therapy',
      lastVisit: '2024-03-16',
      rating: 4.9,
      notes: 'Business owner, prefers premium services'
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportCustomers = () => {
    alert('Customer data exported successfully!');
  };

  const viewCustomerDetails = (customer: any) => {
    setSelectedCustomer(customer);
  };

  const closeCustomerModal = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Customer Management</h2>
          <button
            onClick={exportCustomers}
            className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Customer Stats */}
      <div className="p-6 bg-gray-50 border-b">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-emerald-600">{customers.length}</h3>
            <p className="text-sm text-gray-600">Total Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600">{customers.filter(c => c.totalBookings >= 10).length}</h3>
            <p className="text-sm text-gray-600">Regular Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-purple-600">
              ₹{customers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}
            </h3>
            <p className="text-sm text-gray-600">Total Revenue</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-amber-600">
              {(customers.reduce((sum, c) => sum + c.rating, 0) / customers.length).toFixed(1)}
            </h3>
            <p className="text-sm text-gray-600">Avg Rating</p>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bookings
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Spending
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Visit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                      <div className="text-sm text-gray-500">{customer.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 flex items-center mb-1">
                    <Phone className="w-3 h-3 mr-1" />
                    {customer.phone}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Mail className="w-3 h-3 mr-1" />
                    {customer.email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{customer.totalBookings} bookings</div>
                  <div className="text-sm text-gray-500">{customer.favoriteService}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-emerald-600">₹{customer.totalSpent.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">
                    ₹{Math.round(customer.totalSpent / customer.totalBookings)} avg
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">{customer.rating}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {customer.lastVisit}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => viewCustomerDetails(customer)}
                    className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-900 font-medium"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredCustomers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No customers found matching your search</div>
        </div>
      )}

      {/* Customer Detail Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Customer Details</h3>
                <button
                  onClick={closeCustomerModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="sr-only">Close</span>
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Name:</strong> {selectedCustomer.name}</p>
                    <p><strong>Phone:</strong> {selectedCustomer.phone}</p>
                    <p><strong>Email:</strong> {selectedCustomer.email}</p>
                    <p><strong>Join Date:</strong> {selectedCustomer.joinDate}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service History</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Total Bookings:</strong> {selectedCustomer.totalBookings}</p>
                    <p><strong>Total Spent:</strong> ₹{selectedCustomer.totalSpent.toLocaleString()}</p>
                    <p><strong>Favorite Service:</strong> {selectedCustomer.favoriteService}</p>
                    <p><strong>Last Visit:</strong> {selectedCustomer.lastVisit}</p>
                    <p><strong>Rating:</strong> {selectedCustomer.rating}/5</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Notes</h4>
                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{selectedCustomer.notes}</p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={closeCustomerModal}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerManagement;