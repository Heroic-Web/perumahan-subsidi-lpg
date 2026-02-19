'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export function LeadForm() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    noWa: '',
    tipuRumah: 'Type 36',
    kelurahan: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.nama.trim()) {
      setError('Nama harus diisi');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email harus diisi');
      return false;
    }
    if (!formData.noWa.trim()) {
      setError('Nomor WhatsApp harus diisi');
      return false;
    }
    if (!/^\d{10,13}$/.test(formData.noWa.replace(/\D/g, ''))) {
      setError('Nomor WhatsApp tidak valid (10-13 digit)');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const phoneNumber = formData.noWa.replace(/\D/g, '');
      const whatsappNumber = phoneNumber.startsWith('62') 
        ? phoneNumber 
        : phoneNumber.startsWith('0')
        ? '62' + phoneNumber.substring(1)
        : '62' + phoneNumber;

      const message = `Halo, saya ${formData.nama} dari ${formData.kelurahan || 'Jakarta'}. Saya tertarik dengan perumahan subsidi Samara Residence, terutama tipe ${formData.tipuRumah}. Saya ingin konsultasi lebih lanjut. Email saya: ${formData.email}`;

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

      setSuccess(true);
      setFormData({
        nama: '',
        email: '',
        noWa: '',
        tipuRumah: 'Type 36',
        kelurahan: '',
      });

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Terjadi kesalahan, silakan coba lagi');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Konsultasi <span className="text-blue-600 dark:text-blue-400">Gratis</span> Sekarang
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Tim kami siap membantu menjawab semua pertanyaan Anda tentang program subsidi dan proses pembelian
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-blue-100 dark:border-slate-700 p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nama */}
            <div>
              <label htmlFor="nama" className="block text-sm font-semibold text-foreground mb-2">
                Nama Lengkap *
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label htmlFor="noWa" className="block text-sm font-semibold text-foreground mb-2">
                Nomor WhatsApp *
              </label>
              <div className="flex items-center">
                <span className="px-4 py-3 bg-blue-100 dark:bg-slate-700 text-foreground font-semibold rounded-l-lg border-2 border-r-0 border-blue-200 dark:border-slate-600">
                  +62
                </span>
                <input
                  type="tel"
                  id="noWa"
                  name="noWa"
                  value={formData.noWa}
                  onChange={handleChange}
                  placeholder="812 3456 7890"
                  className="flex-1 px-4 py-3 rounded-r-lg border-2 border-blue-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            {/* Kelurahan */}
            <div>
              <label htmlFor="kelurahan" className="block text-sm font-semibold text-foreground mb-2">
                Kelurahan/Daerah Asal
              </label>
              <input
                type="text"
                id="kelurahan"
                name="kelurahan"
                value={formData.kelurahan}
                onChange={handleChange}
                placeholder="Contoh: Jakarta Timur, Bekasi"
                className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              />
            </div>

            {/* Tipe Rumah */}
            <div>
              <label htmlFor="tipuRumah" className="block text-sm font-semibold text-foreground mb-2">
                Tipe Rumah yang Diinginkan
              </label>
              <select
                id="tipuRumah"
                name="tipuRumah"
                value={formData.tipuRumah}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-foreground focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
              >
                <option value="Type 36">Type 36 (36 m²)</option>
                <option value="Belum Pasti">Belum Pasti</option>
              </select>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="text-sm font-semibold text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-800 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <p className="text-sm font-semibold text-green-600 dark:text-green-400">Terima kasih! Kami akan segera menghubungi Anda melalui WhatsApp.</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:-translate-y-1"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Mengirim...
                </>
              ) : (
                <>
                  Hubungi via WhatsApp
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-xs text-center text-muted-foreground">
              Dengan mengklik tombol di atas, Anda setuju menerima informasi dari Samara Residence melalui WhatsApp
            </p>
          </form>

          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t-2 border-blue-100 dark:border-slate-700 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</p>
              <p className="text-sm text-muted-foreground">Pembeli Puas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">Legal</p>
              <p className="text-sm text-muted-foreground">Dokumen Jelas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</p>
              <p className="text-sm text-muted-foreground">Customer Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
