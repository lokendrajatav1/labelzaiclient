import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Mail, Briefcase, Users, RefreshCw,
  Trash2, Eye, ChevronDown, Plus, Edit3, X, Save,
  CheckCircle2, AlertCircle, Loader2, Clock, MapPin,
  DollarSign, FileText, ExternalLink, Filter, Search,
  Shield, ArrowUpRight, BarChart3, Inbox, UserCheck, Lock
} from 'lucide-react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// ─── Utility: Format date ────────────────────────────────────────────────────
const fmtDate = (d) => {
  if (!d) return '—';
  const dt = new Date(d);
  return dt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) +
    ' ' + dt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
};

// ─── Status Badge Component ─────────────────────────────────────────────────
const StatusBadge = ({ status, type = 'contact' }) => {
  const colorMap = {
    // contact statuses
    new: 'bg-blue-50 text-blue-700 border-blue-200',
    read: 'bg-amber-50 text-amber-700 border-amber-200',
    replied: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    closed: 'bg-slate-100 text-slate-500 border-slate-200',
    // application statuses
    pending: 'bg-amber-50 text-amber-700 border-amber-200',
    reviewed: 'bg-blue-50 text-blue-700 border-blue-200',
    shortlisted: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    rejected: 'bg-red-50 text-red-700 border-red-200',
    hired: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider border ${colorMap[status] || 'bg-slate-100 text-slate-500 border-slate-200'}`}>
      {status}
    </span>
  );
};

// ─── Service label map ──────────────────────────────────────────────────────
const serviceLabels = {
  image: 'Image Annotation',
  video: 'Video Annotation',
  text: 'Text & NLP',
  audio: 'Audio Annotation',
  medical: 'Medical AI',
  other: 'Other / Custom',
};

// ═══════════════════════════════════════════════════════════════════════════════
//  ADMIN DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════════
const Admin = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  const [toast, setToast] = useState(null);

  const navigate = useNavigate();
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    showToast('Logging out...');
    setTimeout(() => navigate('/admin/login'), 500);
  };

  const tabs = [
    { id: 'contacts', label: 'Enquiries', icon: <Inbox size={18} /> },
    { id: 'jobs', label: 'Job Listings', icon: <Briefcase size={18} /> },
    { id: 'applications', label: 'Applications', icon: <UserCheck size={18} /> },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex text-slate-900">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-6 right-6 z-[100] max-w-sm p-4 rounded-2xl shadow-2xl border flex items-center gap-3 animate-slide-in ${
          toast.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          {toast.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <p className="text-sm font-semibold">{toast.message}</p>
        </div>
      )}

      {/* Left Sidebar Navigation */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-slate-950 text-white flex flex-col z-50">
        <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-800/60">
          <div className="w-8 h-8 rounded-xl bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/20">
            <Shield size={16} strokeWidth={2.5} />
          </div>
          <span className="font-semibold text-lg tracking-tight">LabelzAI Admin</span>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Main Menu</p>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span className={`${activeTab === tab.id ? 'opacity-100' : 'opacity-70'}`}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800/60 space-y-2">
          <a href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-slate-900 transition-all">
            <ExternalLink size={16} />
            View Live Site
          </a>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
          >
            <Lock size={16} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Pane */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        
        {/* Dynamic Page Header */}
        <div className="bg-white border-b border-slate-200 px-8 py-5 shadow-sm">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shadow-inner border border-brand-100">
              {tabs.find(t => t.id === activeTab)?.icon}
            </div>
            <h1 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
              {tabs.find(t => t.id === activeTab)?.label}
            </h1>
          </div>
          <p className="text-sm text-slate-500 font-medium ml-12 max-w-2xl mt-1.5">
            {activeTab === 'contacts' && 'Manage and respond to incoming service enquiries from potential clients.'}
            {activeTab === 'jobs' && 'Create, edit, and manage your active job listings and career opportunities.'}
            {activeTab === 'applications' && 'Review candidate profiles and track applicants across your hiring pipeline.'}
          </p>
        </div>

        {/* Dynamic Tab Content Area */}
        <div className="flex-1 p-8">
          {activeTab === 'contacts' && <ContactsTab showToast={showToast} />}
          {activeTab === 'jobs' && <JobsTab showToast={showToast} />}
          {activeTab === 'applications' && <ApplicationsTab showToast={showToast} />}
        </div>
      </div>

      {/* Global Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-in {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};


// ═══════════════════════════════════════════════════════════════════════════════
//  CONTACTS TAB
// ═══════════════════════════════════════════════════════════════════════════════
function ContactsTab({ showToast }) {
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

  const newCount = enquiries.filter(e => e.status === 'new').length;

  return (
    <div>
      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total', val: enquiries.length, icon: <Mail size={18} />, color: 'text-slate-600' },
          { label: 'New', val: newCount, icon: <Inbox size={18} />, color: 'text-blue-600' },
          { label: 'Replied', val: enquiries.filter(e => e.status === 'replied').length, icon: <CheckCircle2 size={18} />, color: 'text-emerald-600' },
          { label: 'Closed', val: enquiries.filter(e => e.status === 'closed').length, icon: <Clock size={18} />, color: 'text-slate-400' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <div className={`${s.color} mb-2`}>{s.icon}</div>
            <div className="text-2xl font-semibold text-slate-900">{s.val}</div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters & Refresh */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
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
        <button onClick={fetchEnquiries} className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-all text-slate-500">
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-slate-400">
            <Loader2 size={24} className="animate-spin mr-3" /> Loading enquiries...
          </div>
        ) : enquiries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <Inbox size={40} className="mb-3 text-slate-300" />
            <p className="font-semibold">No enquiries found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Name</th>
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Email</th>
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Service</th>
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Status</th>
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Date</th>
                  <th className="text-right px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enq) => (
                  <tr key={enq._id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900 text-sm">{enq.firstName} {enq.lastName}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{enq.email}</td>
                    <td className="px-6 py-4 text-xs font-semibold text-slate-500">{serviceLabels[enq.service] || enq.service}</td>
                    <td className="px-6 py-4"><StatusBadge status={enq.status} /></td>
                    <td className="px-6 py-4 text-xs text-slate-400 font-medium">{fmtDate(enq.createdAt)}</td>
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
          <div className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">Enquiry Details</h3>
              <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200"><X size={16} /></button>
            </div>
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Name</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.firstName} {selected.lastName}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.email}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Service</p>
                  <p className="text-sm font-semibold text-slate-900">{serviceLabels[selected.service] || selected.service}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Submitted</p>
                  <p className="text-sm font-semibold text-slate-900">{fmtDate(selected.createdAt)}</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Message</p>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-700 leading-relaxed">
                  {selected.message}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Update Status</p>
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
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 text-center animate-slide-in">
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
};


// ═══════════════════════════════════════════════════════════════════════════════
//  JOBS TAB (CRUD)
// ═══════════════════════════════════════════════════════════════════════════════
const emptyJob = {
  jobId: '', title: '', category: '', vacancies: '01',
  workMode: 'Remote', engagement: 'Full-Time',
  commitment: '', compensation: '', description: '',
  responsibilities: [''], requirements: [''], isActive: true,
};

function JobsTab({ showToast }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null); // null = create, jobId = edit
  const [deleteId, setDeleteId] = useState(null);
  const [form, setForm] = useState({ ...emptyJob });
  const [saving, setSaving] = useState(false);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/careers?active=all`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await res.json();
      if (data.success) setJobs(data.data);
    } catch (e) {
      showToast('Failed to load jobs', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchJobs(); }, []);

  const openCreate = () => {
    setEditing(null);
    setForm({ ...emptyJob });
    setShowForm(true);
  };

  const openEdit = (job) => {
    setEditing(job.jobId);
    setForm({
      jobId: job.jobId,
      title: job.title,
      category: job.category,
      vacancies: job.vacancies || '01',
      workMode: job.workMode,
      engagement: job.engagement,
      commitment: job.commitment,
      compensation: job.compensation,
      description: job.description,
      responsibilities: job.responsibilities?.length ? [...job.responsibilities] : [''],
      requirements: job.requirements?.length ? [...job.requirements] : [''],
      isActive: job.isActive,
    });
    setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const url = editing ? `${API}/api/careers/${editing}` : `${API}/api/careers`;
      const method = editing ? 'PUT' : 'POST';

      // Clean empty items from arrays
      const payload = {
        ...form,
        responsibilities: form.responsibilities.filter(r => r.trim()),
        requirements: form.requirements.filter(r => r.trim()),
      };

      const res = await fetch(url, {
        method,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        showToast(editing ? 'Job updated successfully' : 'Job created successfully');
        setShowForm(false);
        fetchJobs();
      } else {
        showToast(data.message || 'Failed to save', 'error');
      }
    } catch (e) {
      showToast('Failed to save job', 'error');
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`${API}/api/careers/${deleteId}`, { 
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await res.json();
      if (data.success) {
        showToast('Job deleted');
        fetchJobs();
      } else {
        showToast(data.message, 'error');
      }
    } catch (e) {
      showToast('Failed to delete job', 'error');
    } finally {
      setDeleteId(null);
    }
  };

  const toggleActive = async (job) => {
    try {
      const res = await fetch(`${API}/api/careers/${job.jobId}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({ isActive: !job.isActive }),
      });
      const data = await res.json();
      if (data.success) {
        showToast(`Job ${!job.isActive ? 'activated' : 'deactivated'}`);
        fetchJobs();
      }
    } catch (e) {
      showToast('Failed to update', 'error');
    }
  };

  // Array field helpers
  const updateArrayField = (field, index, value) => {
    setForm(prev => {
      const arr = [...prev[field]];
      arr[index] = value;
      return { ...prev, [field]: arr };
    });
  };
  const addArrayField = (field) => {
    setForm(prev => ({ ...prev, [field]: [...prev[field], ''] }));
  };
  const removeArrayField = (field, index) => {
    setForm(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
            {jobs.length} Job{jobs.length !== 1 ? 's' : ''} Total
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={fetchJobs} className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-all text-slate-500">
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 active:scale-95"
          >
            <Plus size={16} /> Add Job
          </button>
        </div>
      </div>

      {/* Jobs Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-20 text-slate-400">
          <Loader2 size={24} className="animate-spin mr-3" /> Loading jobs...
        </div>
      ) : jobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-slate-400 bg-white rounded-2xl border border-slate-100">
          <Briefcase size={40} className="mb-3 text-slate-300" />
          <p className="font-semibold mb-4">No jobs found</p>
          <button onClick={openCreate} className="px-6 py-2.5 bg-brand-500 text-white rounded-xl font-semibold text-sm hover:bg-brand-600 transition-all">
            Create First Job
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <div key={job._id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 transition-all">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-500 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-100">
                    {job.category}
                  </span>
                  <button
                    onClick={() => toggleActive(job)}
                    className={`w-11 h-6 rounded-full transition-all relative ${
                      job.isActive ? 'bg-emerald-500' : 'bg-slate-300'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all shadow ${
                      job.isActive ? 'left-6' : 'left-1'
                    }`}></div>
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">{job.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">{job.description}</p>
                <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  <span className="flex items-center gap-1"><MapPin size={10} /> {job.workMode}</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {job.engagement}</span>
                  <span className="flex items-center gap-1"><DollarSign size={10} /> {job.compensation}</span>
                </div>
              </div>
              <div className="px-6 py-3 border-t border-slate-50 flex items-center justify-between bg-slate-50/50">
                <span className="text-[10px] text-slate-400 font-semibold">ID: {job.jobId}</span>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => openEdit(job)} className="p-2 rounded-lg hover:bg-brand-50 text-brand-500 transition-all" title="Edit">
                    <Edit3 size={14} />
                  </button>
                  <button onClick={() => setDeleteId(job.jobId)} className="p-2 rounded-lg hover:bg-red-50 text-red-400 transition-all" title="Delete">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Job Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-[2rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl no-scrollbar" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 rounded-t-[2rem] p-6 flex items-center justify-between z-10">
              <h3 className="text-xl font-semibold text-slate-900">{editing ? 'Edit Job' : 'Create New Job'}</h3>
              <button onClick={() => setShowForm(false)} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200"><X size={18} /></button>
            </div>

            <div className="p-6 space-y-5">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Job ID *</label>
                  <input
                    type="text" value={form.jobId}
                    onChange={(e) => setForm({ ...form, jobId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                    placeholder="e.g. data-annotator"
                    disabled={!!editing}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Title *</label>
                  <input
                    type="text" value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                    placeholder="e.g. Freelance Data Annotator"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Category *</label>
                  <input
                    type="text" value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                    placeholder="e.g. Data Operations"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Work Mode *</label>
                  <select
                    value={form.workMode}
                    onChange={(e) => setForm({ ...form, workMode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                  >
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On-site</option>
                    <option value="Remote / Hybrid">Remote / Hybrid</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Engagement *</label>
                  <select
                    value={form.engagement}
                    onChange={(e) => setForm({ ...form, engagement: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Vacancies</label>
                  <input
                    type="text" value={form.vacancies}
                    onChange={(e) => setForm({ ...form, vacancies: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                    placeholder="01"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Commitment *</label>
                  <input
                    type="text" value={form.commitment}
                    onChange={(e) => setForm({ ...form, commitment: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                    placeholder="e.g. 8-9 hours/day"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Compensation *</label>
                  <input
                    type="text" value={form.compensation}
                    onChange={(e) => setForm({ ...form, compensation: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                    placeholder="e.g. Monthly Salary"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Description *</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm resize-none"
                  placeholder="Brief job description..."
                />
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Responsibilities</label>
                  <button onClick={() => addArrayField('responsibilities')} className="text-xs text-brand-500 font-semibold hover:text-brand-600 flex items-center gap-1">
                    <Plus size={12} /> Add
                  </button>
                </div>
                {form.responsibilities.map((r, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="text" value={r}
                      onChange={(e) => updateArrayField('responsibilities', i, e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                      placeholder={`Responsibility ${i + 1}`}
                    />
                    {form.responsibilities.length > 1 && (
                      <button onClick={() => removeArrayField('responsibilities', i)} className="p-2 rounded-lg hover:bg-red-50 text-red-400"><X size={14} /></button>
                    )}
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Requirements</label>
                  <button onClick={() => addArrayField('requirements')} className="text-xs text-brand-500 font-semibold hover:text-brand-600 flex items-center gap-1">
                    <Plus size={12} /> Add
                  </button>
                </div>
                {form.requirements.map((r, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="text" value={r}
                      onChange={(e) => updateArrayField('requirements', i, e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                      placeholder={`Requirement ${i + 1}`}
                    />
                    {form.requirements.length > 1 && (
                      <button onClick={() => removeArrayField('requirements', i)} className="p-2 rounded-lg hover:bg-red-50 text-red-400"><X size={14} /></button>
                    )}
                  </div>
                ))}
              </div>

              {/* Save Button */}
              <button
                onClick={handleSave}
                disabled={saving}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-semibold text-base hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-slate-900/10 disabled:opacity-60 disabled:cursor-not-allowed mt-4"
              >
                {saving ? (
                  <><Loader2 size={18} className="animate-spin" /> Saving...</>
                ) : (
                  <><Save size={18} /> {editing ? 'Update Job' : 'Create Job'}</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 text-center animate-slide-in">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-500 mx-auto mb-4">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Delete Job?</h3>
            <p className="text-sm text-slate-500 mb-6">This action cannot be undone. Are you sure you want to permanently delete this job listing?</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all">Cancel</button>
              <button onClick={confirmDelete} className="flex-1 py-3 rounded-xl font-semibold text-white bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


// ═══════════════════════════════════════════════════════════════════════════════
//  APPLICATIONS TAB
// ═══════════════════════════════════════════════════════════════════════════════
function ApplicationsTab({ showToast }) {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter) params.append('status', statusFilter);
      params.append('limit', '100');
      const res = await fetch(`${API}/api/careers/applications/all?${params}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await res.json();
      if (data.success) setApplications(data.data);
    } catch (e) {
      showToast('Failed to load applications', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchApplications(); }, [statusFilter]);

  const filtered = applications.filter(a =>
    a.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.jobTitle?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`${API}/api/careers/applications/${id}/status`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        showToast(`Application status updated to "${status}"`);
        fetchApplications();
        if (selected?._id === id) setSelected({ ...selected, status });
      }
    } catch (e) {
      showToast('Failed to update', 'error');
    }
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`${API}/api/careers/applications/${deleteId}`, { 
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await res.json();
      if (data.success) {
        showToast('Application deleted');
        fetchApplications();
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
      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[
          { label: 'Total', val: applications.length, color: 'text-slate-600' },
          { label: 'Pending', val: applications.filter(a => a.status === 'pending').length, color: 'text-amber-600' },
          { label: 'Reviewed', val: applications.filter(a => a.status === 'reviewed').length, color: 'text-blue-600' },
          { label: 'Shortlisted', val: applications.filter(a => a.status === 'shortlisted').length, color: 'text-indigo-600' },
          { label: 'Hired', val: applications.filter(a => a.status === 'hired').length, color: 'text-emerald-600' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm text-center">
            <div className={`text-2xl font-semibold ${s.color}`}>{s.val}</div>
            <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
          <input
            type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/20 placeholder:text-slate-300"
            placeholder="Search name, email, job..."
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="reviewed">Reviewed</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="rejected">Rejected</option>
          <option value="hired">Hired</option>
        </select>
        <button onClick={fetchApplications} className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-all text-slate-500">
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-slate-400">
            <Loader2 size={24} className="animate-spin mr-3" /> Loading applications...
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <Users size={40} className="mb-3 text-slate-300" />
            <p className="font-semibold">No applications found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Applicant</th>
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Position</th>
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Status</th>
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Date</th>
                  <th className="text-right px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((app) => (
                  <tr key={app._id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900 text-sm">{app.fullName}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{app.email}</p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-700">{app.jobTitle}</td>
                    <td className="px-6 py-4"><StatusBadge status={app.status} type="application" /></td>
                    <td className="px-6 py-4 text-xs text-slate-400 font-medium">{fmtDate(app.createdAt)}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setSelected(app)} className="p-2 rounded-lg hover:bg-brand-50 text-brand-500 transition-all" title="View">
                          <Eye size={15} />
                        </button>
                        {app.resumeUrl && (
                          <a href={`${API}${app.resumeUrl}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-blue-50 text-blue-500 transition-all" title="Resume">
                            <FileText size={15} />
                          </a>
                        )}
                        <button onClick={() => setDeleteId(app._id)} className="p-2 rounded-lg hover:bg-red-50 text-red-400 transition-all" title="Delete">
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
          <div className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white/95 backdrop-blur-md flex items-center justify-between p-6 border-b border-slate-100 rounded-t-[2rem] z-10">
              <h3 className="text-lg font-semibold text-slate-900">Application Details</h3>
              <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200"><X size={16} /></button>
            </div>
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Name</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.fullName}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.email}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.phone}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Position</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.jobTitle}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Experience</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.experienceYears || '—'}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Submitted</p>
                  <p className="text-sm font-semibold text-slate-900">{fmtDate(selected.createdAt)}</p>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {selected.resumeUrl && (
                  <a href={`${API}${selected.resumeUrl}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-xs font-semibold border border-blue-100 hover:bg-blue-100 transition-all">
                    <FileText size={14} /> Resume
                  </a>
                )}
                {selected.linkedinUrl && (
                  <a href={selected.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-semibold border border-indigo-100 hover:bg-indigo-100 transition-all">
                    <ExternalLink size={14} /> LinkedIn
                  </a>
                )}
                {selected.portfolioUrl && (
                  <a href={selected.portfolioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-xl text-xs font-semibold border border-purple-100 hover:bg-purple-100 transition-all">
                    <ExternalLink size={14} /> Portfolio
                  </a>
                )}
              </div>

              {/* Cover Letter */}
              {selected.coverLetter && (
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Cover Letter</p>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-700 leading-relaxed">
                    {selected.coverLetter}
                  </div>
                </div>
              )}

              {/* Status Update */}
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'].map((s) => (
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
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 text-center animate-slide-in">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-500 mx-auto mb-4">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Delete Applicant?</h3>
            <p className="text-sm text-slate-500 mb-6">This action cannot be undone. Are you sure you want to permanently delete this applicant's data?</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all">Cancel</button>
              <button onClick={confirmDelete} className="flex-1 py-3 rounded-xl font-semibold text-white bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Admin;
