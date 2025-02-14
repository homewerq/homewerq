'use client'

import { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

interface Homework {
  id: string
  subject: string
  title: string
  description?: string
  createdAt: string
  dueAt: string
}

export default function Home() {
  const [homework, setHomework] = useState<Homework[] | null>(null)

  useEffect(() => {
    async function fetchHomework() {
      const res = await fetch('/api/homework')
      const data = await res.json()
      setHomework(data)
    }
    fetchHomework()
  }, [])

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {homework &&
        homework.map((hw) => (
          <Card key={hw.id}>
            <CardHeader>
              <CardTitle className="text-2xl leading-none">
                {hw.subject}
              </CardTitle>
              <CardTitle>{hw.title}</CardTitle>
              <CardDescription>
                Due: {new Date(hw.dueAt).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            {hw.description && (
              <CardContent>
                <p>{hw.description}</p>
              </CardContent>
            )}
          </Card>
        ))}
    </div>
  )
}
