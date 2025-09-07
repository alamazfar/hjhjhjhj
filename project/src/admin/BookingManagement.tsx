import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle, XCircle, AlertCircle, Search, Filter, Download } from 'lucide-react';

const BookingManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedDate, setSelectedDate] = useState('');

  const bookings = [
    {
      id: 'BK001',
      customerName: 'Anita Sharma',
      phone: '+91 98765 43210',
      email: 'anita.sharma@email.com',
      service: 'Full Body Massage',
      date: '2024-03-20',
      time: '2:00 PM',
      duration: '90 mins',
      price: 2800,
      status: 'confirmed',
      paymentStatus: 'paid',
      notes: 'First time customer'
    },
    {
      id: 'BK002',
      customerName: 'Rajesh Kumar',
      phone: '+91 98765 43211',
      email: 'rajesh.kumar@email.com',
      service: 'Ayurvedic Massage',
      date: '2024-03-20',
      time: '3:30 PM',
      duration: '90 mins',
      price: 3200,
      status: 'confirmed',
      paymentStatus: 'pending',
      notes: 'Regular customer - prefers therapist Priya'
    },
    {
      id: 'BK003',
      customerName: 'Priya Das',
      phone: '+91 98765 43212',
      email: 'priya.das@email.com',
      service: 'Aromatherapy Massage',
      date: '2024-03-21',
      time: '11:00 AM',
      duration: '75 mins',
      price: 2400,
      status: 'pending',
      paymentStatus: 'pending',
      notes: 'Requested lavender oil'
    },
    {
      id: 'BK004',
      customerName: 'Sunil Roy',
      phone: '+91 98765 43213',
      email: 'sunil.roy@email.com',
      service: 'Foot Massage',
      date: '2024-03-21',
      time: '4:00 PM',
      duration: '45 mins',
      price: 1200,
      status: 'confirmed',
      paymentStatus: 'paid',
      notes: 'Has foot pain issues'
    },
    {
      id: 'BK005',
      customerName: 'Meera Ghosh',
      phone: '+91 98765 43214',
      email: 'meera.ghosh@email.com',
      service: 'Head & Shoulder Massage',
      date: '2024-03-22',
      time: '10:00 AM',
      duration: '60 mins',
      price: 1800,
      status: 'cancelled',
      paymentStatus: 'refunded',
      notes: 'Customer cancelled due to illness'
    },
    {
      id: 'BK006',
      customerName: 'Amit Banerjee',
      phone: '+91 98765 43215',
      email: 'amit.banerjee@email.com',
      service: 'Hot Stone Therapy',
      date: '2024-03-22',
      time: '2:30 PM',
      duration: '80 mins',
      price: 2600,
      status: 'confirmed',
      paymentStatus: 'paid',
      notes: 'Birthday special session'
    }
  ];

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.phone.includes(searchTerm) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    const matchesDate = !selectedDate || booking.date === selectedDate;
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending': return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'cancelled': return <XCircle className="w-5 h-5 text-red-500" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'refunded': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const updateBookingStatus = (bookingId: string, newStatus: string) => {
    // In a real app, this would update the booking in the database
    alert(`Booking ${bookingId} status updated to ${newStatus}`);
  };

  const exportBookings = () => {
    // In a real app, this would generate a CSV/PDF report
    alert('Booking report exported successfully!');
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Booking Management</h2>
          <button
            onClick={exportBookings}
            className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="all">All Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Filter className="w-4 h-4" />
            <span>{filteredBookings.length} of {bookings.length} bookings</span>
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Booking Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{booking.id}</div>
                    <div className="text-sm text-gray-500">{booking.duration}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{booking.customerName}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Phone className="w-3 h-3 mr-1" />
                      {booking.phone}
                    </div>
                    <div className="text-sm text-gray-500">{booking.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{booking.service}</div>
                  <div className="text-sm text-emerald-600">₹{booking.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {booking.date}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {booking.time}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
                    {booking.paymentStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(booking.status)}
                    <span className="text-sm font-medium capitalize">{booking.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center space-x-2">
                    {booking.status === 'pending' && (
                      <button
                        onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                        className="text-green-600 hover:text-green-900 font-medium"
                      >
                        Confirm
                      </button>
                    )}
                    {booking.status === 'confirmed' && (
                      <button
                        onClick={() => updateBookingStatus(booking.id, 'completed')}
                        className="text-blue-600 hover:text-blue-900 font-medium"
                      >
                        Complete
                      </button>
                    )}
                    {booking.status !== 'cancelled' && (
                      <button
                        onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                        className="text-red-600 hover:text-red-900 font-medium"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredBookings.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No bookings found matching your criteria</div>
        </div>
      )}
    </div>
  );
};

export default BookingManagement;