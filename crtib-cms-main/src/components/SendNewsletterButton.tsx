'use client'

import { useState } from 'react'
import { useDocumentInfo } from '@payloadcms/ui'
import { useAuth } from '@payloadcms/ui'

type SendStatus = 'idle' | 'loading' | 'success' | 'error'

export const SendNewsletterButton: React.FC = () => {
  const { id, savedDocumentData } = useDocumentInfo()
  const { token } = useAuth()
  const [status, setStatus] = useState<SendStatus>('idle')
  const [message, setMessage] = useState<string>('')

  const newsletterSentAt = (savedDocumentData as Record<string, unknown>)?.newsletterSentAt as
    | string
    | null
    | undefined

  const handleSend = async () => {
    if (!id) return

    const confirmed = window.confirm(
      newsletterSentAt
        ? `Cette actualité a déjà été envoyée le ${new Date(newsletterSentAt).toLocaleString('fr-FR')}. Voulez-vous renvoyer la newsletter ?`
        : 'Voulez-vous envoyer la newsletter à tous les abonnés actifs ?',
    )
    if (!confirmed) return

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch(`/api/news/${id}/send-newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${token}`,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus('error')
        setMessage(data?.error ?? 'Une erreur est survenue.')
        return
      }

      setStatus('success')
      setMessage(`Newsletter envoyée avec succès à ${data.sent} abonné(s).`)
    } catch {
      setStatus('error')
      setMessage('Impossible de contacter le serveur.')
    }
  }

  return (
    <div style={{ marginTop: '16px' }}>
      {newsletterSentAt && status === 'idle' && (
        <p style={{ fontSize: '12px', color: '#718096', marginBottom: '8px' }}>
          Dernier envoi : {new Date(newsletterSentAt).toLocaleString('fr-FR')}
        </p>
      )}
      <button
        type="button"
        onClick={handleSend}
        disabled={status === 'loading'}
        style={{
          backgroundColor: status === 'loading' ? '#a0aec0' : '#1a365d',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 16px',
          fontSize: '13px',
          fontWeight: 600,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          width: '100%',
        }}
      >
        {status === 'loading' ? 'Envoi en cours…' : 'Envoyer la newsletter'}
      </button>
      {message && (
        <p
          style={{
            marginTop: '8px',
            fontSize: '13px',
            color: status === 'success' ? '#276749' : '#c53030',
          }}
        >
          {message}
        </p>
      )}
    </div>
  )
}

export default SendNewsletterButton
