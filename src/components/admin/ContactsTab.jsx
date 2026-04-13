import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { RefreshCw, Search, Eye, Trash2, Loader2, AlertCircle, Inbox } from 'lucide-react';
import { API, fmtDate, StatusBadge, serviceLabels } from './AdminShared';

function ContactsTab() {
  const { showToast } = useOutletContext();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [statusFilter, setStatusFilter] = useState('');

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter) params.append('status', statusFilter);
      const res = await fetch(`${API}/api/contact?${params}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await res.json();
      if (data.success) setEnquiries(data.data);
    } catch (e) {
      showToast('Failed to load enquiries', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchEnquiries(); }, [statusFilter]);

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`${API}/api/contact/${id}/status`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        showToast(`Status updated to "${status}"`);
        fetchEnquiries();
        if (selected?._id === id) setSelected({ ...selected, status });
      }
    } catch (e) {
      showToast('Failed to update status', 'error');
    }
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`${API}/api/contact/${deleteId}`, { 
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await res.json();
      if (data.success) {
        showToast('Enquiry deleted');
        fetchEnquiries();
        if (selected?._id === deleteId) setSelected(null);
      }
    } catch (e) {
      showToast('Failed to delete', 'error');
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div>
      {/* Filters Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          >
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
            <option value="closed">Closed</option>
          </select>
          <div className="text-xs text-slate-600 font-semibold uppercase tracking-widest hidden md:block">
            {enquiries.length} Enquir{enquiries.length !== 1 ? 'ies' : 'y'}
          </div>
        </div>
        <button onClick={fetchEnquiries} className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-all text-slate-500">
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      {/* Table Area */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-slate-600">
            <Loader2 size={24} className="animate-spin mr-3" /> Loading enquiries...
          </div>
        ) : enquiries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-600">
            <Inbox size={40} className="mb-3 text-slate-300" />
            <p className="font-semibold">No enquiries found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 text-left">
                  <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Contact</th>
                  <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Service</th>
                  <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Status</th>
                  <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Date</th>
                  <th className="px-6 py-4 text-right text-[10px] font-semibold uppercase tracking-widest text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {enquiries.map((enq) => (
                  <tr key={enq._id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900 text-sm">{enq.firstName} {enq.lastName}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{enq.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium text-slate-700">{serviceLabels[enq.service] || enq.service}</span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={enq.status} />
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600 font-medium">
                      {fmtDate(enq.createdAt)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setSelected(enq)} className="p-2 rounded-lg hover:bg-brand-50 text-brand-500 transition-all" title="View">
                          <Eye size={15} />
                        </button>
                        <button onClick={() => setDeleteId(enq._id)} className="p-2 rounded-lg hover:bg-red-50 text-red-400 transition-all" title="Delete">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar animate-slide-in" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white/95 backdrop-blur-md flex items-center justify-between p-6 border-b border-slate-100 rounded-t-[2rem] z-10">
              <h3 className="text-lg font-semibold text-slate-900">Enquiry Details</h3>
              <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
                <Search size={16} className="rotate-45" /> {/* Close icon workaround if X not imported */}
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Name</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.firstName} {selected.lastName}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.email}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Service</p>
                  <p className="text-sm font-semibold text-slate-900">{serviceLabels[selected.service] || selected.service}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Submitted</p>
                  <p className="text-sm font-semibold text-slate-900">{fmtDate(selected.createdAt)}</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">Message</p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-700 leading-relaxed">
                  {selected.message}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {['new', 'read', 'replied', 'closed'].map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selected._id, s)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all ${
                        selected.status === s
                          ? 'bg-brand-500 text-white border-brand-500 shadow-lg shadow-brand-500/20'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-sm:max-w-xs max-w-sm shadow-2xl p-6 text-center animate-slide-in">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-500 mx-auto mb-4">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Delete Enquiry?</h3>
            <p className="text-sm text-slate-500 mb-6">This action cannot be undone. You will permanently lose this contact's information.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all">Cancel</button>
              <button onClick={confirmDelete} className="flex-1 py-3 rounded-xl font-semibold text-white bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactsTab;
