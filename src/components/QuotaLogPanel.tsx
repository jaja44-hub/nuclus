'use client';
import { useEffect, useState } from 'react';

export default function QuotaLogPanel() {
  const [quota, setQuota] = useState<{
    model: string;
    used?: number;
    limit?: number;
    timestamp?: string;
  } | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    fetch('/api/gemini/quota')
      .then((res) => res.json())
      .then((data) => {
        setQuota(data);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  const used = quota?.used ?? 0;
  const badgeColor =
    used > 95 ? '#dc2626' :
    used > 80 ? '#facc15' :
    '#16a34a';

  return (
    <div style={{
      fontSize: '0.8rem',
      background: '#000',
      color: '#fff',
      padding: '0.5rem',
      borderRadius: '4px',
      marginBottom: '1rem'
    }}>
      {status === 'loading' && <div style={{ color: '#888' }}>Loading quota...</div>}
      {status === 'error' && <div style={{ color: '#dc2626' }}>⚠️ Quota fetch failed</div>}
      {status === 'ready' && quota && (
        <>
          <div style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: badgeColor,
            marginRight: '6px'
          }} />
          Model: {quota.model ?? '—'}<br />
          Usage: {used} / {quota.limit ?? '—'}<br />
          Last Sync: {quota.timestamp ?? '—'}
        </>
      )}
    </div>
  );
}
