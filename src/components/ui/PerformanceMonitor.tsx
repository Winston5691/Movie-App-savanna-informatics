'use client'

import { useEffect, useState } from 'react'

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<{
    fcp: number | null
    lcp: number | null
    fid: number | null
    cls: number | null
  }>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
        }
        
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as any
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }))
        }
        
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as any
          if (!clsEntry.hadRecentInput) {
            setMetrics(prev => ({ 
              ...prev, 
              cls: (prev.cls || 0) + clsEntry.value 
            }))
          }
        }
      }
    })

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (e) {
      // Some browsers don't support all entry types
    }

    return () => observer.disconnect()
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'Loading...'}</div>
      <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'Loading...'}</div>
      <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'Loading...'}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Loading...'}</div>
    </div>
  )
}
