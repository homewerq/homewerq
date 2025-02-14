import { NextResponse } from 'next/server'

const works = [
  {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    subject: 'Math',
    title: 'book 1 page 2',
    createdAt: '2025-02-13',
    dueAt: '2025-02-18',
  },
  {
    id: '109156be-c4fb-41ea-b1b4-efe1671c5836',
    subject: 'Math',
    title: 'book 1 page 314',
    description: 'description',
    createdAt: '2025-02-14',
    dueAt: '2025-02-17',
  },
]

export async function GET() {
  return NextResponse.json(works)
}
